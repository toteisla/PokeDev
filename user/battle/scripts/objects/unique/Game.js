Game = {
	control : {
		schemes : {
			mouse : q = 0,
			keyboard : ++ q
		},
		current : null
	},
	key : {
		primary : "space",
		secondary : "z",
		up : "up",
		right : "right",
		down : "down",
		left : "left"
	},
	keys : {
		held : {},
		heldKeys : function () {
			var held = [];
			forevery(Game.keys.held, function (duration, key) {
				held.push(key);
			});
			return held;
		},
		pressedKeys : function () {
			var pressed = [];
			forevery(Game.keys.held, function (duration, key) {
				if (duration === 1)
					pressed.push(key);
			});
			return pressed;
		},
		press : function (key, hasFocus) {
			if (!Game.keys.held.hasOwnProperty(key))
				Game.keys.held[key] = 1;
			if (key !== "unknown") {
				if (Game.control.current === Game.control.schemes.keyboard) {
					if (Textbox.active) {
						switch (key) {
							case Game.key.primary:
								Textbox.progress();
								return true;
							case Game.key.up:
								Textbox.selectAdjacent(Directions.up);
								return true;
							case Game.key.right:
								Textbox.selectAdjacent(Directions.right);
								return true;
							case Game.key.down:
								Textbox.selectAdjacent(Directions.down);
								return true;
							case Game.key.left:
								Textbox.selectAdjacent(Directions.left);
								return true;
							default:
								if (key !== "unknown") {
									Game.control.current = Game.control.schemes.keyboard;
									Textbox.key(Game.keys.combination(Game.keys.heldKeys()));
								}
								break;
						}
					}
				}
				Game.control.current = Game.control.schemes.keyboard;
			}
		},
		release : function (key) {
			delete Game.keys.held[key];
		},
		combination : function (keys) {
			var combo = [];
			if (arguments.length > 0 && Array.isArray(keys))
				combo = keys;
			else {
				for (var i = 0; i < arguments.length; ++ i)
					combo.push(arguments[i]);
			}
			return combo.sort().join(", ");
		}
	},
	zoom : 1,
	cursor : {
		x : null,
		y : null,
		inArea : function (x, y, width, height) {
			return (Game.cursor.x >= x && Game.cursor.x < x + width && Game.cursor.y >= y && Game.cursor.y < y + height);
		}
	},
	click : function () {
		if (Textbox.active) {
			Game.control.current = Game.control.schemes.mouse;
			Textbox.progress();
		}
	},
	initialise : function () {
		Game.control.current = Game.control.schemes.keyboard;
		window.addEventListener("keydown", function (event) {
			var hasFocus = document.activeElement === Game.canvas.element;
			if (Game.keys.press(keyname(event.keyCode), hasFocus) && hasFocus)
				event.preventDefault();
		});
		window.addEventListener("keyup", function (event) {
			var hasFocus = document.activeElement === Game.canvas.element;
			if (Game.keys.release(keyname(event.keyCode), hasFocus) || hasFocus)
				event.preventDefault();
		});
		/*window.addEventListener("mousedown", function (event) {
			if (event.button !== 0)
				return;
			Game.click();
		});*/
		window.addEventListener("mousemove", function (event) {
			if (Game.canvas.element) {
				Game.cursor.x = event.clientX - Game.canvas.element.offsetLeft + Game.canvas.element.width / 2 + window.scrollX;
				Game.cursor.y = event.clientY - Game.canvas.element.offsetTop + Game.canvas.element.height / 2 + window.scrollY;
			}
		});
	},
	increment : 0,
	unique : function () {
		// Returns a unique id that can be used to identify different objects
		return Game.increment ++;
	},
	canvas : {
		element : null,
		context : null,
		temporary : [],
		initialise : function () {
			var self = Game.canvas.element = document.querySelector("#game-battle");
			Game.canvas.context = self.getContext("2d");
			self.width = Settings._("screen dimensions").width;
			self.height = Settings._("screen dimensions").height;
			Game.canvas.context.imageSmoothingEnabled = false;
			for (var i = 0; i < 3; ++ i) {
				Game.canvas.temporary[i] = document.createElement("canvas");
				Game.canvas.temporary[i].context = Game.canvas.temporary[i].getContext("2d");
				Game.canvas.temporary[i].context.imageSmoothingEnabled = false;
			}
	
			Textbox.initialise();
			Game.update();
			Game.redraw();
		}
	},
	previousFrame : Time.now(),
	
	update : function () {
		forevery(Game.keys.held, function (duration, key) {
			Game.keys.held[key] = duration + 1;
		});
		if (Battle.active)
			Battle.update();
		if (Textbox.active)
			Textbox.update();
		setTimeout(Game.update, Time.refresh);
		var thisFrame = Time.now();
		Game.previousFrame = thisFrame;
	},
	redraw : function () {
		if (Battle.active)
			Battle.redraw();
		Textbox.redraw();
	 	window.requestAnimationFrame(Game.redraw);
	 },
	player : null,
	takePossessionOf : function (entity) {
		Game.player = entity;
		entity.type = Trainers.type.local;
	}
};

Game.initialise();