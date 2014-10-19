ig.module(

'game.entities.local-player')

.requires(

'game.entities.player')

.defines(function() {

    EntityLocalPlayer = EntityPlayer.extend({

        _wmIgnore: true,
        zPriority: 3, // Layering priority relative to other entities.
        controlledByLocalKeyboard: true, // Does the local keyboard move the player?
        lastState: '', // Used to send network move update when move state changes.
        lastFacing: '', // Used to send network move update when faced direction changes.
        waitingToMove: false, // Waiting for a door to open.
        moveWhen: 0, // System time (in miliseconds) to wait before moving.
        moveDoor: false, // Exit entity to trigger after waiting and then moving.
        moveCommitPending: false, // Used to decide if a move or just a direction change occurs.
        moveCommitDirection: '', // Used to reset time before committing if direction changes.
        commitTimer: null, // Used for delay a new move.
        commitDelay: 0.08, // Delay in seconds before committing to a move.
		BattleServer: {}, // Define the battle server

        init: function(x, y, settings) {
            this.parent(x, y, settings);
			// Connect to the battle server
			this.battleInit();
            player = this;
            // Set player details received from server.
            ig.socket.on('playerStart-' + this.name, function(x, y, facing, state, skin) {
                player.pos.x = x;
                player.pos.y = y;
                player.facing = facing;
                player.moveState = state;
                player.skin = skin;
                player.reskin();
            });
            // Ask server for player details.
            this.netInit();
            // Create timer for delaying new moves.
            this.commitTimer = new ig.Timer();
			// Ask server for server-sided events
			this.eventWalk();
        },


        update: function() {
			
            // Finish movement attempts.
            if (this.moveCommitPending) this.tryCommit();
            // Check for bike toggle.
            else if (ig.input.pressed('bike') && !this.swimming) {
                // Toggle bike.
                this.onBike = !this.onBike;
                // Update state.
                this.setIdle();
                // Tell the world.
                this.emitUpdateMoveState(this.pos.x, this.pos.y, this.facing, this.moveState);
            }
            // Player just entered a door but has not yet changed zones.
            else if (this.moveDoor && !this.waitingToMove && !this.moving) {
                // Change zones.
                this.moveDoor.trigger();
            }
            // Check for actions, like reading signs, or talking to NPC's.
            else if (ig.input.pressed('action') && !this.moving) {
                // Action key was pressed.
                this.action(this);
            }
            if (!this.moving) {
                // Check if waiting to walk through a door.
                if (this.waitingToMove) {
                    // Debug message.
                    console.debug("Waiting to move...");
                    // Waiting to move.
                    this.moveWait();
                }
                // Check if trying to start a new move.
                else if (this.moveKeyDown('up')) {
                    this.facing = 'up';
                    this.tryCommit();
                } else if (this.moveKeyDown('down')) {
                    this.facing = 'down';
                    this.tryCommit();
                } else if (this.moveKeyDown('left')) {
                    this.facing = 'left';
                    this.tryCommit();
                } else if (this.moveKeyDown('right')) {
                    this.facing = 'right';
                    this.tryCommit();
                }
                // Player is not trying to move.
                else {
                    // Set animation.
                    this.moveAnimStop();
                    // Keep slow-walk animations rewound.
                    this.anims.slowLeft.rewind();
                    this.anims.slowRight.rewind();
                    this.anims.slowUp.rewind();
                    this.anims.slowDown.rewind();
                }
            }
            this.parent();
        },
		
		battleInit: function () {
			
			// Battle Server port
			Port = 9005;

			// Try a new connection
			BattleServer = new WebSocket('ws://' + window.location.host + ':' + Port + '/');
			BattleServer.connected = false;

			// Send a clean message to the battle server
			BattleServer.relay = function(data) {
				BattleServer.send(JSON.stringify(data).slice(1, -1));
			};

			// The client connects to the battle server
			BattleServer.addEventListener('open', function() {
				BattleServer.connected = true;
			});

			// When the connection closes
			BattleServer.addEventListener('close', function() {
				BattleServer.connected = false;
			});

			
			
		},


        // Ask server for details about the player.
        netInit: function() {
            ig.socket.emit('playerStart');
        },

        // Tell server that the player just changes his movement state.
        emitUpdateMoveState: function(x, y, direction, state) {
            // Debug message.
            //console.debug('Sending move-update... x: ' + x + ', y: ' + y + ', direction: ' + direction + ', state: ' + state);
            ig.socket.emit('receiveUpdateMoveState', x, y, direction, state);
        },

        // Determine if player should continue moving or stop.
        continueOrStop: function() {

            // Assume we will keep moving unless told otherwise.
            var keepMoving = true;

            // Check if player is pressing down the movement key.
            if (this.moveKeyDown('up')) this.facing = 'up';
            else if (this.moveKeyDown('down')) this.facing = 'down';
            else if (this.moveKeyDown('left')) this.facing = 'left';
            else if (this.moveKeyDown('right')) this.facing = 'right';
            else keepMoving = false; // Player is no longer trying to move.

            // Try to keep moving.
            if (keepMoving) {
                if (this.canJump()) this.startJump();
                else if (this.canMove()) this.preStartMove();
                else {
                    // Stop player.
                    this.doneMove();
                    // Tell other players we've stopped.
                    this.emitUpdateMoveState(this.pos.x, this.pos.y, this.facing, this.moveState);
                }

            } else {
                // Stop player.
                this.doneMove();
                // Tell other players we've stopped.
                this.emitUpdateMoveState(this.pos.x, this.pos.y, this.facing, this.moveState);
            }
        },

        // Tries interacting with the faced tile.
        action: function() {
            // Get faced tile position.
            var position = this.getTilePos(this.pos.x, this.pos.y, this.facing, 1);
            // Get all signs.
            var signs = ig.game.getEntitiesByType(EntitySign);
            // Check that at least one sign exists.
            if (signs) {
                for (var i = 0; i < signs.length; i++) {
                    // Check if the tile is located at the faced tile.
                    if ((signs[i].pos.x == position.x) && (signs[i].pos.y == position.y)) {
                        // Spawn a chat-bubble at the sign.
                        ig.game.spawnEntity(EntityChatBubble, signs[i].pos.x, signs[i].pos.y, {
                            // Pass in sign message to chat-bubble.
                            msg: signs[i].msg,
                            // Entity to follow.
                            follow: signs[i]
                        });
                        // Shouldn't be more than one interactable object per tile.
                        return;
                    }
                }
            }
            // Get all NPC's.
            var npcs = ig.game.getEntitiesByType(EntityNpc);
            // Check that at least one NPC exists.
            if (npcs) {
                for (var i = 0; i < npcs.length; i++) {
                    // Check if the NPC is located at the faced tile.
                    if ((npcs[i].pos.x == position.x) && (npcs[i].pos.y == position.y)) {
						// Npc turns to you
						npcs[i].facing = this.faceToPlayer();
                        // Spawn a chat-bubble at the NPC.
                        var chatBubble = ig.game.spawnEntity(EntityChatBubble, npcs[i].pos.x, npcs[i].pos.y, {
                            // Pass in NPC message to chat-bubble.
                            msg: npcs[i].msg,
                            // Entity to follow.
                            follow: npcs[i],
                        });
                        // Delay NPC's movement.
                        npcs[i].moveTimer.set(chatBubble.lifespan + 1);
                        // Get NPC's name entity.
                        var nameEntity = ig.game.getEntityByName(npcs[i].name + "NameEntity");
                        // Check if name entity was found.
                        if (nameEntity !== undefined) {
                            // Hide name for duration of chat-bubble.
                            nameEntity.hideTimer.set(chatBubble.lifespan);
                        }
                        // Shouldn't be more than one interactable object per tile.
                        return;
                    }
                }
            }
        },


        // Returns the exit entity if found at the faced tile, else returns false.
    facingExit: function() {
            // Get position of faced tile.
            var position = this.getTilePos(this.pos.x, this.pos.y, this.facing, 1);
            // Get all door entities.
            var doors = ig.game.getEntitiesByType(EntityExit);
            // Check that at least one door was found.
            if (doors) {
                for (var i = 0; i < doors.length; i++) {
                    // Check that door location is the same as the faced tile.
                    if (doors[i].pos.x == position.x && doors[i].pos.y == position.y) {
                        // Found an exit entity at the faced tile.
                        return doors[i];
                    }
                }
            }
            // Found no exit at the faced tile.
            return false;
    },

        // Returns the exit entity if found at players location, else returns false.
    overExit: function() {
            // Get all exit entities.
            var exits = ig.game.getEntitiesByType(EntityExit);
            // Check that at least one was returned.
            if (exits) {
                for (var i = 0; i < exits.length; i++) {
                    // Check that exit shares the same position as the player.
                    if (exits[i].pos.x == this.pos.x && exits[i].pos.y == this.pos.y && exits[i].type != 'door') {
                        // Found a matching exit entity.
                        return exits[i];
                    }
                }
            }
            // Found no matching entity.
            return false;
    },

    // Checks for faced and stood-on exits before each more and calls startMove if none are found.
	preStartMove: function() {
	
    // Check if player is over a "floor" style exit.
    var exit = this.overExit();
    // Check if players faced direction will trigger a zone change.
    if (exit && this.facing == exit.direction) {
        // Trigger a zone change.
        exit.trigger();
        // Do not trigger a regular move.
        return;
    }
    // Check if player is facing a "door" style exit.
    var exit = this.facingExit();
    if (exit) {
        // Make sure that faced exit is a door type.
        if (exit.type == 'door') {
            // Play the door opening animation.
            exit.startAnim();
            // 22 frame wait @ 60 frames per second = 22/60 = 0.36666..sec
            this.moveWhen = 336.7 + new Date().getTime();
            // Tell player to wait before moving through door.
            this.waitingToMove = true;
            // Tell player what exit to trigger after he moves.
            this.moveDoor = exit;
            // Do not trigger a regular move.
            return;
        } else // The exit must be a "floor" style exit.
        {
            // Check if floor exit arrow should be turned on.
            if (this.facing == exit.direction) {
                // Turn on blinking arrow animation.
                exit.startAnim();
            }
        }
    }
    // Start moving player.
    this.startMove();
	},


        // Adds initial delay before player movement so he can change direction without
        // moving. Then starts move if possible, otherwise starts a slow-walk effect.
        tryCommit: function() {
            // Reset the commit process if new direction is detected.
            if (this.moveCommitDirection != this.facing) {
                this.moveCommitPending = false;
            }
            // Start new commit process if one does not exist.
            if (!this.moveCommitPending) {
                this.moveCommitPending = true;
                this.moveCommitDirection = this.facing;
                // Set the time when the move will be committed.
                this.commitTimer.set(this.commitDelay);
            }
            // Check if player has committed to trying to move.
            if (this.commitTimer.delta() >= 0) {
                // Reset commitment process for next time.
                this.moveCommitPending = false;
                // Commit to move.
                if (this.moveKeyDown(this.moveCommitDirection)) {
                    // Check if play can jump.
                    if (this.canJump()) {
                        // Jump.
                        this.startJump();
                    }
                    // Check if player can move normal.
                    else if (this.canMove()) {
                        // Being move.
                        this.preStartMove();
                    } else {
                        // Debug message.
                        console.debug("Trying to set slow walk...");
                        // Cannot move, but trying, so slow-walk instead.
                        if(this.facing === 'left') this.currentAnim = this.anims.slowLeft;
                        else if(this.facing === 'right') this.currentAnim = this.anims.slowRight;
                        else if(this.facing === 'up') this.currentAnim = this.anims.slowUp;
                        else if(this.facing === 'down') this.currentAnim = this.anims.slowDown;
                    }
                }
                // Not committed to move.
                else {
                    // Check if player has changed faced directions.
                    if (this.facing != this.lastFacing) {
                        // If the player is going to still animate a step when changing directions
                        // but not moving, this would be the place to start the animation.

                        // Tell other players that we changed our faced direction.
                        this.emitUpdateMoveState(this.pos.x, this.pos.y, this.facing, this.moveState);
                        // So we don't send the same update twice.
                        this.lastFacing = this.facing;
                        // Check if we're standing on an exit.
                        var exit = this.overExit(this);
                        // Check that an exit was found.
                        if (exit) {
                            // Check if arrow animation needs to be turned on.
                            if (this.facing == exit.direction) {
                                // Turn on arrows.
                                exit.startAnim();
                            } else {
                                // Turn off arrows if facing wrong direction.
                                exit.stopAnim();
                            }
                        }
                    }
                }
            }
        },


        // Does nothing until wait is over, then starts move.
        moveWait: function() {
            if (this.waitingToMove) {
                // Check if waiting is over.
                if (new Date().getTime() - this.moveWhen >= 0) {
                    // Start move.
                    this.startMove();
                    // Allow move to cycle.
                    this.waitingToMove = false;
                }
            }
        },


        // Stops all exit entity animations.
        turnOffExitAnimations: function() {
            // Get all exit entities.
            var exits = ig.game.getEntitiesByType(EntityExit);
            // Make sure at least one exists.
            if (exits) {
                // Loop through all entities.
                for (var i = 0; i < exits.length; i++) {
                    // Stop animation.
                    exits[i].stopAnim();
                }
            }
        },


        // Returns true if move key for direction is down, else returns false.
        moveKeyDown: function(facing) {
            if(facing === 'left') return (ig.input.state('left') && !ig.input.state('right'));
            else if(facing === 'right') return (ig.input.state('right') && !ig.input.state('left'));
            else if(facing === 'up') return (ig.input.state('up') && !ig.input.state('down'));
            else if(facing === 'down') return (ig.input.state('down') && !ig.input.state('up'));
            return false; // Key is not down.
        },
		
		eventWalk: function() {
			// Check for walked game events
			var walkedEvent = this.walkedOverEvent();
			// Player walked over an event
			if (walkedEvent) {
				// Let the server know we have triggered a game event
				ig.socket.emit('gameEvent', walkedEvent.id, walkedEvent.type, walkedEvent.action, walkedEvent.values);
				// Receive details from server.
				ig.socket.on('receiveGameEvent-' + this.name, function(action, bool) {
					walkedEvent.walkable = bool;
				});
				
				return walkedEvent;
			}
		},

        // Handles exactly how a move takes place (speed, effects, etc.)
        startMove: function() {
			
			// Check for walked game events
			var walkedEvent = this.eventWalk();
			
			/* If player wants to walk over event
			*  @object get walkedEvent object data from map event entities 
			*/
			if ( walkedEvent && walkedEvent.walkable === false || walkedEvent && walkedEvent.walkable == false ) {
				// Stop player
				this.doneMove();
				// Tell other players we've stopped.
                this.emitUpdateMoveState(this.pos.x, this.pos.y, this.facing, this.moveState);
				console.log("You shall not pass gandalf..");
				// Player didnt walked over event, continue by default
			} else {
            // Water
            if (this.canSwim()) {
                // Set movement speed on water.
                this.setMoveState('swim');
            }
            // Land
            else {
                // Determine movement speed on land.
                if (this.jumping) this.setMoveState('jump');
                else if (this.onBike) this.setMoveState('bike');
                else if (ig.input.state('run')) this.setMoveState('run');
                else this.setMoveState('walk');
            }
            // Call parent.
            this.parent();
            // Check if the players state is different than it was.
            if (this.lastFacing != this.facing || this.lastState != this.moveState) {
                // Tell other players about this move.
                this.emitUpdateMoveState(this.pos.x, this.pos.y, this.facing, this.moveState);
                // To prevent sending the same update twice.
                this.lastState = this.moveState;
            }
            // Update last faced direction.
            this.lastFacing = this.facing;
			
			// Check for grass and wild pokemon
			var encounterPokemon = this.encounterWildPokemon();
			
			if (encounterPokemon) {
				BattleServer.relay([1, "getUserPokemon"]);
			
				// Deal with data received from the battle server
				BattleServer.addEventListener('message', function(event) {
					
					var data = JSON.parse('[' + event.data + ']');
					
					// Receive wild battle pokemon
					if ( data[0] == "wildBattlePokemon" ) {
						
						console.log(data);
						
						// Array of players pokemon moves
						var moves = [];
						
						// Prevent player moving
						ig.input.unbindAll();
						
						for ( var ii = 0; ii < data[2].length; ii++ ) {
							if (data[2][ii] !== '') {
								moves.push({
									move : data[2][ii],
									PP : 30,
									PPups : 0,
									number : 0
								});
							} 
						}
						// Define Players pokemon party
						Interface.buildParty = function () {
							var pokes = new party();
							pokes.add(new pokemon({
								species : data[1],
								level : data[3],
								moves : moves
							}));
							//console.log(pokes);
							return pokes.store();
						};
						// Make battle window visible
						document.querySelector("#battle-window").style.display = "block";

						// Start the battle
						Interface.popup(document.querySelector("#battle-window"), function (event) {
								Game.takePossessionOf(new trainer({
									name : this.user,
									party : Interface.buildParty()
								}));
							Game.canvas.element.focus();
							//console.log(this.wildBattlePokemon);
							Battle.beginWildBattle(Game.player, [new pokemon({
								species : data[1],
								level : 100
							})], Interface.buildSettings());
							}, true);
					
						$("#game-battle").focus();
				
					}
			
				});	
				
			}
		
		}
		
		}

    });
});