ig.module('game.entities.player')
.requires('impact.entity')
.defines(function() {

    EntityPlayer = ig.Entity.extend({

        // Load Weltmeister icon resource.
        animSheet: new ig.AnimationSheet('media/entity-icons.png', 16, 16),

        _wmIgnore: true,
        size: { x: 16, y: 16 }, // Size of collision box.
        zPriority: 0, // Layering priority relative to other entities.
        controlledByLocalKeyboard: false, // Does the local keyboard move the player?
        swimming: false, // True when over water; False on land.
        speed: null, // Current speed of player.
        walkSpeed: 69, // Speed when walking.
        jumpSpeed: 69, // Speed when jumping.
        runSpeed: 138, // Speed when running.
        swimSpeed: 138, // Speed when swimming.
        bikeSpeed: 160, // Speed when biking.
        facing: 'down', // Direction player is currently facing.
        moveState: 'idle', // Current movement state.
        moving: false, // Is the player moving or not.
        jumping: false, // Used to know when to move extra distance.
        onBike: false, // Player is on bike.
        leftFoot: true, // Used to alternate between step animations.
        destination: 0, // Movement destination (either on x or y axis).
        chatBubble: undefined, // Chat-bubble entity; used to prevent overlapping bubbles.
        followers: {}, // Object containing other entities.


        init: function(x, y, settings) {
            this.parent(x, y, settings);
            // Set the players appearance.
            this.reskin(this.skin);
            // Set max velocity equal to run speed.
            this.maxVel.x = this.maxVel.y = this.runSpeed;
        },


        update: function() {
            // Set zIndex dynamically using Y position and priority.
            this.zIndex = this.pos.y + this.zPriority;
            // Call parent before finishMove so that stepping past
            // the destination can be corrected before drawing.
            this.parent();
            if (this.moving) this.finishMove();
            else this.moveAnimStop();
        },


        /*
         * Calculate and returns an object containing the x and y position of a tile
         * relative to a given X and Y position.
         *
         * @param  x         integer X origin in pixels.
         * @param  y         integer Y origin in pixels.
         * @param  direction string  One of the following: up, right, down, left.
         * @param  distance  integer Number of tiles from source position.
         * @return           object  with two properties, x and y, pixel coordinates.
         */
        getTilePos: function(x, y, direction, distance) {
            // Start offset off at zero.
            var offsetX = 0;
            var offsetY = 0;
            // Get the map tilesize.
            var tilesize = ig.game.collisionMap.tilesize;
            // Update offset based on direction.
            if(direction === 'left') offsetX--;
            else if(direction === 'right') offsetX++;
            else if(direction === 'up') offsetY--;
            else if(direction === 'down') offsetY++;
            // Create JavaScript object.
            var position = {};
            // Set X coordinate.
            position.x = x + (offsetX * tilesize * distance);
            // Set Y coordinate.
            position.y = y + (offsetY * tilesize * distance);
            // Return new position.
            return position;
        },


        /*
         * Returns the game tilesize.
         *
         * @return integer pixel size of game tiles.
         */
        getTilesize: function() {
            var tilesize = ig.game.collisionMap.tilesize;
            return tilesize;
        },


        /*
         * Update player speed and move state.
         *
         * @param  state     string The current movement state of player.
         * @return undefined
         */
        setMoveState: function(state) {
            // Set player speed if a value exists to use.
            if (typeof this[state + 'Speed'] != 'undefined') this.speed = this[state + 'Speed'];
            else this.speed = 0; // Idle.
            // Update player movement state.
            this.moveState = state;
        },


        // Spawns a surf entity on the tile currently faced.
        spawnSurf: function() {
            // Get position of faced tile.
            var position = this.getTilePos(this.pos.x, this.pos.y, this.facing, 1);
            // Player entity reference to pass into surf entity.
            var player = this;
            // Spawn a surf entity.
            ig.game.spawnEntityBelow(EntitySurf, position.x, position.y, {
                // Use players faced direction.
                facing: this.facing,
                // Pass a reference of the player.
                follow: player
            });
        },


        /*
         * Return an existing entity or return a new one.
         *
         * @param  entityType <EntityName>  Name of entity sub-class.
         * @param  position   object  Expects two properties, x and y, with pixel values.
         * @return            <EntityName>  if entity exists/is spawned, else return undefined.
         */
        trySpawningEntity: function(entityType, position) {
            // Return existing entity if one exists.
            var entities = ig.game.getEntitiesByType(entityType);
            if (entities) {
                for (var i = 0; i < entities.length; i++) {
                    if (entities[i].pos.x == position.x && entities[i].pos.y == position.y && !entities[i]._killed) {
                        // Save from being killed if marked for death.
                        if (entities[i].markedForDeath) entities[i].revive(this);
                        // Return entity.
                        return entities[i];
                    }
                }
            }
            // Debug message.
            console.debug("Spawning entity at: " + position.x + "," + position.y);
            // Spawn new entity and return it.
            return ig.game.spawnEntityBelow(entityType, position.x, position.y, {});
        },


        /*
         * Return the grass entity located at the tile where the player is.
         *
         * @return an array of entities.
         */
        inGrass: function() {
            var result = [];
            // Search all grass entities for one that shares the players position.
            var allGrass = ig.game.getEntitiesByType(EntityGrass);
            if (allGrass) {
                for (var i = 0; i < allGrass.length; i++) {
                    // Compare grass entity position to the player's.
                    if (allGrass[i].pos.x == this.pos.x && allGrass[i].pos.y == this.pos.y) {
                        result.push(allGrass[i]);
                    }
                }
            }
            return result;
        },


        /*
         * Spawn a jump entity (shadow) at the players position.
         *
         * @return EntityJumpShadow
         */
        spawnShadow: function() {
            // Create and return a jump entity.
            return ig.game.spawnEntity(EntityJumpShadow, this.pos.x, this.pos.y, {
                // Face same direction as player.
                direction: this.facing
            });
        },
		
		/*
         * Check players facing and return the opposit
         *
         * @return the opposit of current facing
         */
		faceToPlayer: function() {
			switch (this.facing) {
			
				case 'up':
					return 'down';
				case 'down':
					return 'up';
				case "left":
					return 'right';
				case "right":
					return 'left';
			
			}
		},
		
		/*
         * Check if player wants to walk over a game event
         *
         * @return boolean data, else false.
         */
		walkedOverEvent: function() {
			var tilesize = this.getTilesize();
			var facedTile = this.getTilePos(this.pos.x, this.pos.y, this.facing, 1);
			//console.log(facedTile);
			// Check if player walks over event
            var gameEvents = ig.game.getEntitiesByType(EntityGameEvent);
            if (gameEvents) {
                for (var ii = 0; ii < gameEvents.length; ii++) {
                    if ((gameEvents[ii].pos.x == facedTile.x) && (gameEvents[ii].pos.y == facedTile.y) || (gameEvents[ii].pos.x == this.pos.x) && (gameEvents[ii].pos.y == this.pos.y)) {
						return gameEvents[ii];
                    }
                }
            }
		},

        /*
         * Check if the player is allowed to move in the faced direction.
         *
         * @return boolean true if no collision, else false.
         */
        canMove: function() {
            var tilesize = this.getTilesize();
            // Get position of faced tile.
            var position = this.getTilePos(this.pos.x, this.pos.y, this.facing, 1);
            var velocityX = 0;
            var velocityY = 0;
            switch (this.facing) {
            case 'left':
                velocityX = -1;
                break;
            case 'right':
                velocityX = 1;
                break;
            case 'up':
                velocityY = -1;
                break;
            case 'down':
                velocityY = 1;
                break;
            }
            // Check map for collision.
            var res = ig.game.collisionMap.trace(this.pos.x, this.pos.y, velocityX, velocityY, this.size.x, this.size.y);
            // Did a collision occur?
            if (res.collision.x || res.collision.y) {
                // Collision occured.
                return false;
            }
            // Check for collision against ledge.
            var directions = ['left', 'right', 'up', 'down'];
            for(var i=0; i<directions.length; i++) {
                if(this.facing===directions[i]) continue;
                if (ig.game.isSpecialTile((position.x / tilesize), (position.y / tilesize), specialTiles['ledge' + ig.game.capitaliseFirstLetter(directions[i])], ig.game.primaryMapLayer)) {
                    return false;
                }
            }
            // Check for collision against an NPC.
            var npcs = ig.game.getEntitiesByType(EntityNpc);
            if (npcs) {
                for (var n = 0; n < npcs.length; n++) {
                    if ((npcs[n].pos.x == position.x) && (npcs[n].pos.y == position.y)) {
                        // Collision occured.
                        return false;
                    }
                }
            }
            // No collisions.
            return true;
        },


        /*
         * Check if the players faced tile is swimmable.
         *
         * @return boolean true if swimmable, else false.
         */
        canSwim: function() {
            // Get position of faced tile.
            var position = this.getTilePos(this.pos.x, this.pos.y, this.facing, 1);
            // Get game tilesize.
            var tilesize = this.getTilesize();
            // Check if faced tile is of water type.
            if (ig.game.isSpecialTile((position.x / tilesize), (position.y / tilesize), specialTiles['water'], 'lower')) {
                // Faced tile is water.
                return true;
            }
            // Faced tile is not water.
            return false;
        },


        /*
         * Check if the players faced tile is jumpable.
         *
         * @return boolean true if jumpable, else false.
         */
        canJump: function() {
            var tilesize = this.getTilesize();
            var facedTile = this.getTilePos(this.pos.x, this.pos.y, this.facing, 1);
            if (ig.game.isSpecialTile((facedTile.x / tilesize), (facedTile.y / tilesize), specialTiles['ledge' + ig.game.capitaliseFirstLetter(this.facing)], ig.game.primaryMapLayer)) {
                return true;
            }
            // Tile is not jumpable.
            return false;
        },
		
		/*
         * Check if player walks over grass and encounters something.
         *
         * @return boolean true if a wild pokemon encountered, else false.
         */
		encounterWildPokemon: function() {
			var tilesize = this.getTilesize();
			var facedTile = this.getTilePos(this.pos.x, this.pos.y, this.facing, 1);
			// Check if player walks on grass
            if (ig.game.isSpecialTile( facedTile.x / tilesize, facedTile.y / tilesize, specialTiles['grass'], ig.game.primaryMapLayer)) {
				var encounterPokemon = Math.floor(Math.random()*22);
				if (encounterPokemon <= 1) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		},
		
		/*
		* Ask server if player can move there
		*
		* @return boolean data, else false.
		*/
		serverCanMove: function () {
		
			// Ask server if we can walk here
			ig.socket.emit('playerMovement', this.mapName, this.pos.x, this.pos.y);
		
			// Receive details from server.
			ig.socket.on('receiveMovement-' + this.name, function( bool ) {
				ig.game.canWalk = bool;
			});
			return;
		},


        /*
         * Sets the player in motion with the appropriate speed, animation, and spawned entities.
         *
         * @return undefined
         */
        startMove: function()
        {
			this.serverCanMove();
	
			if ( ig.game.canWalk === false ) {
				// Stop player
				this.doneMove();
				// Update move state on server
				this.emitUpdateMoveState(this.pos.x, this.pos.y, this.facing, this.moveState);
				return;
			}
            // Get game tilesize.
            var tilesize = this.getTilesize();
            var facedTile = this.getTilePos(this.pos.x, this.pos.y, this.facing, 1);
            // Kill any splash entity that is following player if not in shallow water.
            if (typeof this.followers.splash != 'undefined') {
                if (!ig.game.isSpecialTile((facedTile.x / tilesize), (facedTile.y / tilesize), specialTiles['splash'], ig.game.primaryMapLayer)) {
                    this.followers.splash.kill();
                    this.followers.splash = undefined;
                }
            }
            // Kill any deep-sand entity that is following player if not in deep sand.
            else if (typeof this.followers.deepsand != 'undefined') {
                if (!ig.game.isSpecialTile((facedTile.x / tilesize), (facedTile.y / tilesize), specialTiles['deepsand'], ig.game.primaryMapLayer)) {
                    this.followers.deepsand.kill();
                    this.followers.deepsand = undefined;
                }
                // Replay the animation
                else {
                    this.followers.deepsand.currentAnim.gotoFrame(0);
                }
            }
            // Water
            if (this.canSwim()) {
                if (!this.swimming) {
                    // Reset hop-on-to-surf-entity animation.
                    this.anims['swim' + ig.game.capitaliseFirstLetter(this.facing)].rewind();
                    // Spawn a surf entity.
                    this.spawnSurf();
                    // Play is no longer on land.
                    this.swimming = true;
                }
            }
            // Land
            else {
                // It's difficult to swim on land.
                this.swimming = false;
                // Spawn normal grass entity if needed.
                if (ig.game.isSpecialTile( facedTile.x / tilesize, facedTile.y / tilesize, specialTiles['grass'], ig.game.primaryMapLayer)) {
                    var newGrass = this.trySpawningEntity(EntityGrass, facedTile);
                    if(newGrass) newGrass.play();
                }
                // Spawn ash grass entities if needed.
                else if (ig.game.isSpecialTile( facedTile.x / tilesize, facedTile.y / tilesize, specialTiles['ashgrass'], ig.game.primaryMapLayer)) {
                    this.trySpawningEntity(EntityGrass, facedTile);
                    var pGrass = this.trySpawningEntity(EntityPersistentGrass, facedTile);
                    // Is persistent entity brand new?
                    if(pGrass.timer.delta()<0.5) {
                        ig.game.spawnEntity(EntityAshPuff, facedTile.x, facedTile.y, {} );
                    }
                }
                // Spawn tall grass entity if needed.
                else if (ig.game.isSpecialTile( facedTile.x / tilesize, facedTile.y / tilesize, specialTiles['tallgrass'], ig.game.primaryMapLayer)) {
                    var tallGrass = this.trySpawningEntity(EntityTallGrass, facedTile);
                    tallGrass.play();
                }
                // Remove old grass entity if leaving one.
                var oldGrass = this.inGrass();
                for(var i=0; i<oldGrass.length; i++) oldGrass[i].markForDeath();
                // Spawn sand-track if needed.
                if (ig.game.isSpecialTile((this.pos.x / tilesize), (this.pos.y / tilesize), specialTiles['sandtrack'], ig.game.primaryMapLayer)) {
                    var sandtrack = this.trySpawningEntity(EntitySandTrack, this.pos);
                    if (sandtrack)
                    {
                        sandtrack.facing = this.facing;
                        sandtrack.isFootprint = !this.onBike;
                        sandtrack.setAnimation();
                    }
                }
                // Which tiles to check for reflectivity?
                checkTiles = new Array();
                checkTiles.push(this.getTilePos(this.pos.x, this.pos.y + tilesize, this.facing, 1));
                checkTiles.push(this.getTilePos(this.pos.x, this.pos.y + (2 * tilesize), this.facing, 1));
                // Spawn reflection if needed.
                for (var i = 0; i < checkTiles.length; i++) {
                    if (ig.game.isSpecialTile((checkTiles[i].x / tilesize), (checkTiles[i].y / tilesize), specialTiles['reflection'], ig.game.primaryMapLayer)) {
                        if (this.followers.reflection === undefined) {
                            // Save reference to reflection entity.
                            this.followers.reflection = ig.game.spawnEntityBelow(EntityReflection, this.pos.x, this.pos.y, {
                                follow: this
                            });
                        }
                        break;
                    }
                }
            }
			
            // Not idle.
            this.moving = true;
            // Calculate where player is going.
            this.setMoveDestination();
            // Beging animating.
            this.moveAnimStart();
			
        },


        /*
         * Initiates a jump and calls startMove().
         *
         * @return undefined
         */
        startJump: function()
        {
            // Player is jumping.
            this.jumping = true;
            // Used for animating player entity.
            this.jumpStart = new ig.Timer();
            // Spawn shadow under the player.
            this.spawnShadow();
            // Move player.
            this.startMove();
        },


        /*
         * Stops player if he has reached his destination or move him if he has not.
         *
         * @return undefined
         */
        finishMove: function() {
            // Animate the players vertical offset to simulate jumping.
            if (this.jumping) {
                // Get how much time into the jump has elapsed.
                var jumpTime = this.jumpStart.delta();
                // This is a mess! Consider replacing this whole thing with tweens.
                // The number 16 is used irresponsibly and should be the players
                // 'resting' y-offset.
                if (jumpTime >= 0 && jumpTime < (2 / 60)) this.offset.y = 16 + 4;
                else if (jumpTime >= (2 / 60) && jumpTime < (4 / 60)) this.offset.y = 16 + 6;
                else if (jumpTime >= (4 / 60) && jumpTime < (6 / 60)) this.offset.y = 16 + 8;
                else if (jumpTime >= (6 / 60) && jumpTime < (8 / 60)) this.offset.y = 16 + 10;
                else if (jumpTime >= (8 / 60) && jumpTime < (10 / 60)) this.offset.y = 16 + 12;
                else if (jumpTime >= (10 / 60) && jumpTime < (16 / 60)) this.offset.y = 16 + 14;
                else if (jumpTime >= (16 / 60) && jumpTime < (18 / 60)) this.offset.y = 16 + 12;
                else if (jumpTime >= (18 / 60) && jumpTime < (20 / 60)) this.offset.y = 16 + 10;
                else if (jumpTime >= (20 / 60) && jumpTime < (22 / 60)) this.offset.y = 16 + 8;
                else if (jumpTime >= (22 / 60) && jumpTime < (24 / 60)) this.offset.y = 16 + 6;
                else if (jumpTime >= (24 / 60) && jumpTime < (26 / 60)) this.offset.y = 16 + 4;
                else this.offset.y = 16 + 0;
            }
            // Check if player has reached his destination.
            if (this.destinationReached()) {
                // Player is not jumping.
                this.jumping = false;
                // Snap player to legal destination coordinates.
                this.alignToGrid();
                // Prevent Impact from moving the player further.
                this.vel.x = this.vel.y = 0;
                var tilesize = this.getTilesize();
                // Standing in shallow water?
                if (ig.game.isSpecialTile((this.pos.x / tilesize), (this.pos.y / tilesize), specialTiles['splash'], ig.game.primaryMapLayer)) {
                    if (typeof this.followers.splash == 'undefined') {
                        var player = this;
                        this.followers.splash = ig.game.spawnEntity(EntitySplash, this.pos.x, this.pos.y, {player: player} );
                    }
                }
                // Standing in deep sand?
                else if (ig.game.isSpecialTile((this.pos.x / tilesize), (this.pos.y / tilesize), specialTiles['deepsand'], ig.game.primaryMapLayer)) {
                    if (typeof this.followers.deepsand == 'undefined') {
                        var player = this;
                        this.followers.deepsand = ig.game.spawnEntity(EntityDeepSand, this.pos.x, this.pos.y, {player: player} );
                    }
                }
                // Which tiles to check for reflectivity?
                checkTiles = new Array();
                checkTiles.push(this.getTilePos(this.pos.x, this.pos.y + tilesize, this.facing, 0));
                checkTiles.push(this.getTilePos(this.pos.x, this.pos.y + (2 * tilesize), this.facing, 0));

                var reflectionNeeded = false;
                for (var i = 0; i < checkTiles.length; i++) {
                    if (ig.game.isSpecialTile((checkTiles[i].x / tilesize), (checkTiles[i].y / tilesize), specialTiles['reflection'], ig.game.primaryMapLayer)) {
                        reflectionNeeded = true;
                        break;
                    }
                }
                // Clean up unused reflection entity.
                if (!reflectionNeeded && this.followers.reflection !== undefined) {
                    this.followers.reflection.kill();
                    // Break tie so garbage collector will collect entity.
                    this.followers.reflection = undefined;
                }
                // Assess whether to try moving again or rest.
                this.continueOrStop();
                // Update repeating border by region if local player.
                if (this.controlledByLocalKeyboard) BorderCheck(this.pos.x, this.pos.y);
            } else {
                // Have not reached destination, keep moving.
                this.setVelocity(this.speed);
            }
        },


        /*
         * Snap player to legal destination coordinates.
         *
         * @return undefined
         */
        alignToGrid: function() {
            if(this.facing === 'left' || this.facing === 'right') this.pos.x = this.destination;
            else if(this.facing === 'up' || this.facing === 'down') this.pos.y = this.destination;
        },


        /*
         * Set the players destination.
         *
         * @return undefined
         */
        setMoveDestination: function() {
            var distance = 0;
            // Specify distance based on move type.
            if (this.jumping) distance = 2;
            else distance = 1;
            // Get destination position.
            var position = this.getTilePos(this.pos.x, this.pos.y, this.facing, distance);
            // Dertermine which axis move is over.
            if(this.facing === 'left' || this.facing === 'right') this.destination = position.x;
            else if(this.facing === 'up' || this.facing === 'down') this.destination = position.y;
        },


        /*
         * Set players velocity to equal his current set speed.
         *
         * @param  speed integer Pixels per second to move.
         * @return       undefined
         */
        setVelocity: function(speed) {
            if(this.facing === 'left') this.vel.x = -speed;
            else if(this.facing === 'right') this.vel.x = +speed;
            else if(this.facing === 'up') this.vel.y = -speed;
            else if(this.facing === 'down') this.vel.y = +speed;
        },


        /*
         * Checks if player has arrive at or passed his destination.
         *
         * @return boolean true if destination has been reached, else false.
         */
        destinationReached: function() {
            // Check which axis destination is on.
            if(this.facing === 'left') return this.pos.x <= this.destination;
            else if(this.facing === 'right') return this.pos.x >= this.destination;
            else if(this.facing === 'up') return this.pos.y <= this.destination;
            else if(this.facing === 'down') return this.pos.y >= this.destination;
            return false; // Player has not yet arrived.
        },


        /*
         * Plays the players movement animation.
         *
         * @return undefined
         */
        moveAnimStart: function(alternateFeet) {
            alternateFeet = typeof alternateFeet === 'boolean' ? alternateFeet : true;
            // State to use for animation.
            var state = this.moveState;
            // Water
            if (this.swimming)
            {
                // Set current animation.
                this.currentAnim = this.anims['swim' + ig.game.capitaliseFirstLetter(this.facing)];
                // Debug animation.
                // console.debug('Current animation: ' + 'swim' + ig.game.capitaliseFirstLetter(this.facing));
            }
            // Land
            else {
                // Foot is A or B when state is not idle or swim.
                var foot = ( (state.substring(0,4) != 'idle' && state!='swim') ? (this.leftFoot ? 'A':'B') : '' );
                // Which jump animation to use?
                if (state == 'jump') state = (this.onBike ? 'bike' : 'walk');
                var animationName = state + ig.game.capitaliseFirstLetter(this.facing) + foot;
                // Set current animation.
                this.currentAnim = this.anims[animationName];
                // Debug animation.
                // console.debug('Current animation: ' + state + ig.game.capitaliseFirstLetter(this.facing) + foot);
                if (typeof this.currentAnim != 'undefined') {
                    // Play from first frame.
                    this.currentAnim.rewind();
                } else {
                    // Error.
                    throw new Error('Tried to rewind player non-existant animation: ' + animationName);
                }
                // Switch foot for next time.
                if (alternateFeet) this.leftFoot = !this.leftFoot;
            }
        },


        /*
         * Plays the players idle (non-movement) animation.
         *
         * @return undefined
         */
        moveAnimStop: function() {
            // Swimming idle.
            if (this.swimming) this.currentAnim = this.anims['swim' + ig.game.capitaliseFirstLetter(this.facing)];
            // Land idle.
            else this.currentAnim = this.anims[this.moveState + ig.game.capitaliseFirstLetter(this.facing)];
        },


        /*
         * Sets player in his non-moving state.
         *
         * @return undefined
         */
        doneMove: function() {
            // Player is not moving.
            this.moving = false;
            // Player is not jumping.
            this.jumping = false;
            // Update move state.
            this.setIdle();
        },


        /*
         * Sets player to idle state.
         *
         * @return undefined
         */
        setIdle: function() {
            var newState = 'idle';
            if(this.onBike) newState = newState + 'Bike';
            else if(this.swimming) newState = newState + 'Swim';
            // Set move state.
            this.moveState = this.lastState = newState;
        },


        /*
         * Loads and sets players current skin.
         *
         * @return undefined
         */
        reskin: function() {
            var allowedSkin = false;
            // Check if current skin is allowed.
            if(this.skin === 'boy' || this.skin === 'girl' || this.skin === 'fat' || this.skin === 'kid' || this.skin === 'labgeek' || this.skin === 'birk') allowedSkin = true;

            // Position image to world.
            this.offset = {
                x: 8,
                y: 16
            };
            // Set the default skin.
            if (!allowedSkin) this.skin = 'boy';
            // Load skin image resource.
            this.animSheet = new ig.AnimationSheet('media/people/rs.' + this.skin + '.png', 32, 32);
            // Duration of each frame.
            walkFrameTime = 0.13333;
            runFrameTime = 0.08333;
            bikeFrameTime = 0.03333;
            slowFrameTime = 0.26667;
            swimFrameTime = 0.53333;
            idleFrameTime = 1;
            // Add movement animations.
            this.addAnim('walkUpA', walkFrameTime, [3, 0], true);
            this.addAnim('walkUpB', walkFrameTime, [6, 0], true);
            this.addAnim('walkDownA', walkFrameTime, [5, 2], true);
            this.addAnim('walkDownB', walkFrameTime, [8, 2], true);
            this.addAnim('walkLeftA', walkFrameTime, [4, 1], true);
            this.addAnim('walkLeftB', walkFrameTime, [7, 1], true);
            this.addAnim('walkRightA', walkFrameTime, [4, 1], true);
            this.addAnim('walkRightB', walkFrameTime, [7, 1], true);
            this.addAnim('runUpA', runFrameTime, [12, 9], true);
            this.addAnim('runUpB', runFrameTime, [15, 9], true);
            this.addAnim('runDownA', runFrameTime, [14, 11], true);
            this.addAnim('runDownB', runFrameTime, [17, 11], true);
            this.addAnim('runLeftA', runFrameTime, [13, 10], true);
            this.addAnim('runLeftB', runFrameTime, [16, 10], true);
            this.addAnim('runRightA', runFrameTime, [16, 10], true);
            this.addAnim('runRightB', runFrameTime, [13, 10], true);
            this.addAnim('bikeUpA', bikeFrameTime, [27, 27, 24], true);
            this.addAnim('bikeUpB', bikeFrameTime, [30, 30, 24], true);
            this.addAnim('bikeDownA', bikeFrameTime, [29, 29, 26], true);
            this.addAnim('bikeDownB', bikeFrameTime, [32, 32, 26], true);
            this.addAnim('bikeLeftA', bikeFrameTime, [28, 28, 25], true);
            this.addAnim('bikeLeftB', bikeFrameTime, [31, 31, 25], true);
            this.addAnim('bikeRightA', bikeFrameTime, [31, 31, 25], true);
            this.addAnim('bikeRightB', bikeFrameTime, [28, 28, 25], true);
            this.addAnim('slowUp', slowFrameTime, [3, 0, 6, 0]);
            this.addAnim('slowDown', slowFrameTime, [5, 2, 8, 2]);
            this.addAnim('slowLeft', slowFrameTime, [4, 1, 7, 1]);
            this.addAnim('slowRight', slowFrameTime, [7, 1, 4, 1]);
            this.addAnim('swimUp', swimFrameTime, [18, 21], true);
            this.addAnim('swimDown', swimFrameTime, [20, 23], true);
            this.addAnim('swimLeft', swimFrameTime, [19, 22], true);
            this.addAnim('swimRight', swimFrameTime, [19, 22], true);
            this.addAnim('idleSwimUp', swimFrameTime, [21], true);
            this.addAnim('idleSwimDown', swimFrameTime, [23], true);
            this.addAnim('idleSwimLeft', swimFrameTime, [22], true);
            this.addAnim('idleSwimRight', swimFrameTime, [22], true);
            this.addAnim('idleUp', idleFrameTime, [0], true);
            this.addAnim('idleDown', idleFrameTime, [2], true);
            this.addAnim('idleLeft', idleFrameTime, [1], true);
            this.addAnim('idleRight', idleFrameTime, [1], true);
            this.addAnim('idleBikeUp', idleFrameTime, [24], true);
            this.addAnim('idleBikeDown', idleFrameTime, [26], true);
            this.addAnim('idleBikeLeft', idleFrameTime, [25], true);
            this.addAnim('idleBikeRight', idleFrameTime, [25], true);
            // Right-side animations are simply a mirror of the left.
            this.anims.walkRightA.flip.x = true;
            this.anims.walkRightB.flip.x = true;
            this.anims.runRightA.flip.x = true;
            this.anims.runRightB.flip.x = true;
            this.anims.bikeRightA.flip.x = true;
            this.anims.bikeRightB.flip.x = true;
            this.anims.slowRight.flip.x = true;
            this.anims.swimRight.flip.x = true;
            this.anims.idleSwimRight.flip.x = true;
            this.anims.idleRight.flip.x = true;
            this.anims.idleBikeRight.flip.x = true;
            // Set current animation.
            this.moveAnimStop();
        }


    });
});