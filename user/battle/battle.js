document.addEventListener("DOMContentLoaded", function () {
			Interface = {};

			Game.canvas.initialise();

			document.querySelector("#connect").addEventListener("mousedown", function (event) {
				if (event.button !== 0)
					return;
				event.stopPropagation();
				document.querySelector("#connect").innerHTML = "Connecting...";
				document.querySelector("#connect").disabled = true;
				document.querySelector("#name").disabled = true;
				document.querySelector("#randomise").disabled = true;
				Client.connect(document.querySelector("#name").value || "anonymous");
			});

			

			Interface.popup = function (element, fn, below) {
				var settings = element.getBoundingClientRect();
					fn(event);
				};

			Interface.issue = function (element, message) {
				var issue = document.createElement("div");
				issue.classList.add("issue");
				issue.innerHTML = message;
				document.body.appendChild(issue);
				var buttonRect = element.getBoundingClientRect();
				issue.style.left = "calc(" + Math.round(buttonRect.right + window.scrollX) + "px + 4pt/* - 2pt*/)";
				issue.style.top = (buttonRect.top + buttonRect.height / 2 - issue.getBoundingClientRect().height / 2 + window.scrollY) + "px";
			};

			Interface.connectionStatusChange = function () {
				if (Client.connected) {
					document.querySelector("#connect").innerHTML = "Connected";
					document.querySelector("#connect").className = "active";
				} else {
					document.querySelector("#connect").innerHTML = "Connect";
					document.querySelector("#connect").className = "";
					document.querySelector("#connect").disabled = false;
				}
			};

			document.querySelector("#name").addEventListener("mousedown", function (event) {
				if (event.button !== 0)
					return;
				event.stopPropagation();
			});

			if (localStorage["name"])
				document.querySelector("#name").value = localStorage["name"];

			document.querySelector("#name").addEventListener("input", function (event) {
				localStorage["name"] = document.querySelector("#name").value;
			});

			var team = document.querySelector("#team"), addMove = function (li, first) {
				if (!first)
					li.appendChild(document.createTextNode(", "));
				var select = document.createElement("select"), option, moves = [];
				forevery(Moves, function (move, name) {
					if (["_Confused", "Struggle"].contains(name))
						return;
					moves.push(name);
				});
				moves.sort();
				foreach(moves, function (name) {
					option = document.createElement("option");
					option.innerHTML = name;
					option.value = name;
					select.appendChild(option);
				});
				li.appendChild(select);
				return select;
			}, disableMoves = function (group) {
				var exclude = [];
				foreach(group, function (select) {
					exclude.push(select.selectedIndex);
				});
				foreach(group, function (select) {
					foreach(select.options, function (option, i) {
						select.options[i].disabled = (select.selectedIndex !== i && exclude.contains(i));
					});
				});
			}, addPokemon = function () {
				var li = document.createElement("li"), select = document.createElement("select"), option;
				forevery(Pokemon, function (poke, name) {
					if (name === "Missingno.")
						return;
					option = document.createElement("option");
					option.innerHTML = name;
					option.value = name;
					select.appendChild(option);
				});
				select.selectedIndex = randomInt(0, select.childNodes.length - 1);
				li.appendChild(select);
				li.appendChild(document.createTextNode(", level "));
				var level = document.createElement("input");
				level.type = "text";
				level.value = 50;
				level.addEventListener("mousedown", function (event) {
					event.stopPropagation();
					event.preventDefault();
					level.setSelectionRange(0, level.value.length);
				});
				level.addEventListener("input", function (event) {
					level.value = level.value.replace(/[^0-9]/g, "");
					if (level.value === "") {
						level.value = 1;
						level.setSelectionRange(0, 1);
					} else
						level.value = Math.clamp(1, parseInt(level.value), 100);
				});
				li.appendChild(level);
				li.appendChild(document.createTextNode(", with moves:"));
				li.appendChild(document.createElement("br"));
				var group = [];
				for (var i = 0; i < 3; ++ i)
					group.push(addMove(li, i === 0));
				foreach(group, function (moveSelect) {
					moveSelect.addEventListener("change", function (event) {
						disableMoves(group);
					});
					moveSelect.selectedIndex = range(0, moveSelect.options.length - 1).filter(function (index) { return !moveSelect.options[index].disabled; }).choose();
					disableMoves(group);
				});
				team.appendChild(li);
			};
			for (var i = 0; i < 3; ++ i)
				addPokemon();

			Interface.buildSettings = function () {
				var settings = {
					style : ( 0 ),
					weather : ( 0 ),
					scene : ( "Walls at Night" ),
					rules : {
						levels : "flatten: 50",
						party : "up to: 3",
						items : "allowed"
					}
				};
				return settings;
			}
			Game.click();
		});