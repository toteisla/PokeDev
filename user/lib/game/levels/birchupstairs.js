ig.module('game.levels.birchupstairs')
    .requires('impact.image', 'game.entities.exit', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign')
    .defines(function() {
        LevelBirchupstairs = /*JSON[*/ {
            "entities": [{
                "type": "EntityExit",
                "x": 128,
                "y": 32,
                "settings": {
                    "me": 0,
                    "goTo": 2,
					"goToX": 144,
					"goToY": 64,
                    "map": "Birchdownstairs",
                    "direction": "down",
                    "type": "door",
                    "animation": "off"
                }
            }, {
                "type": "EntitySign",
                "x": 64,
                "y": 32,
                "settings": {
                    "msg": "It's a Nintendo gamecube."
                }
            }, {
                "type": "EntitySign",
                "x": 80,
                "y": 32,
                "settings": {
                    "msg": "Maybe later..."
                }
            }, {
                "type": "EntitySign",
                "x": 16,
                "y": 32,
                "settings": {
                    "msg": "The computer is running DOS."
                }
            }, {
                "type": "EntitySign",
                "x": 96,
                "y": 32,
                "settings": {
                    "msg": "The clock has stopped."
                }
            }],
            "layer": [{
                "name": "below",
                "width": 11,
                "height": 10,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/inside-house.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 179, 181, 177, 181, 183, 88, 28, 29, 30, 0],
                    [0, 187, 188, 182, 214, 3, 96, 52, 53, 54, 0],
                    [0, 211, 212, 249, 215, 190, 249, 23, 22, 24, 0],
                    [0, 252, 253, 254, 18, 313, 314, 314, 315, 18, 0],
                    [0, 276, 277, 278, 18, 337, 338, 338, 339, 18, 0],
                    [0, 284, 285, 286, 18, 337, 338, 338, 339, 18, 0],
                    [0, 21, 18, 18, 18, 345, 346, 346, 347, 18, 0],
                    [0, 21, 18, 18, 18, 18, 18, 18, 18, 18, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, {
                "name": "collision",
                "width": 11,
                "height": 10,
                "linkWithCollision": false,
                "visible": 0,
                "tilesetName": "",
                "repeat": false,
                "preRender": false,
                "distance": 1,
                "tilesize": 16,
                "foreground": true,
                "data": [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                ]
            }]
        } /*]JSON*/ ;
        LevelBirchupstairsResources = [new ig.Image('media/inside-house.png')];
    });