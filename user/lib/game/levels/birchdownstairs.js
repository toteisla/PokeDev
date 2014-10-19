ig.module('game.levels.birchdownstairs')
    .requires('impact.image', 'game.entities.exit', 'game.entities.exit', 'game.entities.exit', 'game.entities.sign', 'game.entities.sign')
    .defines(function() {
        LevelBirchdownstairs = /*JSON[*/ {
            "entities": [{
                "type": "EntityExit",
                "x": 144,
                "y": 144,
                "settings": {
                    "me": 0,
                    "goTo": 1,
					"goToX": 192,
					"goToY": 144,
                    "map": "Town",
                    "direction": "down",
                    "type": "floor"
                }
            }, {
                "type": "EntityExit",
                "x": 160,
                "y": 144,
                "settings": {
                    "me": 1,
                    "goTo": 1,
					"goToX": 192,
					"goToY": 144,
                    "map": "Town",
                    "direction": "down",
                    "type": "floor"
                }
            }, {
                "type": "EntityExit",
                "x": 144,
                "y": 48,
                "settings": {
                    "me": 2,
                    "goTo": 0,
					"goToX": 128,
					"goToY": 48,
                    "type": "door",
                    "direction": "down",
                    "map": "Birchupstairs",
                    "animation": "off"
                }
            }, {
                "type": "EntitySign",
                "x": 80,
                "y": 80,
                "settings": {
                    "msg": "There's nothing on..."
                }
            }, {
                "type": "EntitySign",
                "x": 16,
                "y": 48,
                "settings": {
                    "msg": "You're not hungry."
                }
            }],
            "layer": [{
                "name": "below",
                "width": 13,
                "height": 11,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/inside-house.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 181, 181, 63, 181, 181, 63, 63, 32, 0, 0, 0, 0],
                    [0, 113, 114, 115, 116, 117, 87, 87, 25, 29, 30, 31, 0],
                    [0, 121, 122, 123, 124, 125, 22, 22, 49, 50, 51, 55, 0],
                    [0, 21, 22, 22, 22, 22, 18, 18, 213, 22, 24, 22, 0],
                    [0, 21, 18, 145, 146, 3, 18, 18, 18, 18, 18, 18, 0],
                    [0, 21, 118, 153, 154, 155, 95, 119, 18, 18, 18, 18, 0],
                    [0, 21, 337, 58, 59, 60, 61, 339, 18, 18, 18, 18, 0],
                    [0, 21, 337, 82, 83, 84, 85, 339, 18, 18, 18, 18, 0],
                    [0, 21, 345, 346, 346, 346, 346, 347, 18, 19, 20, 18, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, {
                "name": "collision",
                "width": 13,
                "height": 11,
                "linkWithCollision": false,
                "visible": 0,
                "tilesetName": "",
                "repeat": false,
                "preRender": false,
                "distance": 1,
                "tilesize": 16,
                "foreground": true,
                "data": [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]
                ]
            }]
        } /*]JSON*/ ;
        LevelBirchdownstairsResources = [new ig.Image('media/inside-house.png')];
    });