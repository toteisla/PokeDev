ig.module('game.levels.lab')
    .requires('impact.image', 'game.entities.exit', 'game.entities.exit', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.sign', 'game.entities.npc')
    .defines(function() {
        LevelLab = /*JSON[*/ {
            "entities": [{
                "type": "EntityExit",
                "x": 112,
                "y": 208,
                "settings": {
                    "map": "Town",
                    "me": 1,
                    "goTo": 0,
                    "direction": "down",
                    "type": "floor"
                }
            }, {
                "type": "EntityExit",
                "x": 128,
                "y": 208,
                "settings": {
                    "map": "Town",
                    "me": 0,
                    "goTo": 0,
                    "direction": "down",
                    "type": "floor"
                }
            }, {
                "type": "EntitySign",
                "x": 48,
                "y": 128,
                "settings": {
                    "msg": "It's crammed with books on POKEMON."
                }
            }, {
                "type": "EntitySign",
                "x": 32,
                "y": 128,
                "settings": {
                    "msg": "It's crammed with books on POKEMON."
                }
            }, {
                "type": "EntitySign",
                "x": 16,
                "y": 128,
                "settings": {
                    "msg": "It's crammed with books on POKEMON."
                }
            }, {
                "type": "EntitySign",
                "x": 64,
                "y": 128,
                "settings": {
                    "msg": "It's crammed with books on POKEMON."
                }
            }, {
                "type": "EntitySign",
                "x": 32,
                "y": 32,
                "settings": {
                    "msg": "It's crammed with books on POKEMON."
                }
            }, {
                "type": "EntitySign",
                "x": 64,
                "y": 32,
                "settings": {
                    "msg": "It's a PC used for research. Better not mess around with it."
                }
            }, {
                "type": "EntitySign",
                "x": 80,
                "y": 32,
                "settings": {
                    "msg": "It's a PC used for research. Better not mess around with it."
                }
            }, {
                "type": "EntitySign",
                "x": 128,
                "y": 32,
                "settings": {
                    "msg": "It's a book that's too hard to read."
                }
            }, {
                "type": "EntitySign",
                "x": 144,
                "y": 32,
                "settings": {
                    "msg": "It's a book that's too hard to read."
                }
            }, {
                "type": "EntitySign",
                "x": 176,
                "y": 128,
                "settings": {
                    "msg": "It's a serious-looking machine. The PROF must use this for research."
                }
            }, {
                "type": "EntitySign",
                "x": 192,
                "y": 128,
                "settings": {
                    "msg": "It's a serious-looking machine. The PROF must use this for research."
                }
            }, {
                "type": "EntitySign",
                "x": 192,
                "y": 160,
                "settings": {
                    "msg": "It's a PC used for research. Better not mess around with it."
                }
            }, {
                "type": "EntitySign",
                "x": 32,
                "y": 160,
                "settings": {
                    "msg": "It's a PC used for research. Better not mess around with it."
                }
            }, {
                "type": "EntitySign",
                "x": 32,
                "y": 176,
                "settings": {
                    "msg": "It's a PC used for research. Better not mess around with it."
                }
            }, {
                "type": "EntitySign",
                "x": 192,
                "y": 176,
                "settings": {
                    "msg": "It's a PC used for research. Better not mess around with it."
                }
            }, {
                "type": "EntityNpc",
                "x": 160,
                "y": 144,
                "settings": {
                    "skin": "labgeek",
                    "msg": "Hunh? PROF. BIRCH? The PROF's away on fieldwork.",
                    "name": "Scientist",
                    "facing": "left",
                    "behaviour": "b"
                }
            }],
            "layer": [{
                "name": "below",
                "width": 15,
                "height": 15,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/laboratoryb.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 17, 18, 9, 19, 20, 9, 9, 10, 10, 9, 9, 9, 9, 0],
                    [0, 25, 26, 11, 145, 146, 11, 12, 13, 14, 15, 11, 11, 16, 0],
                    [0, 33, 34, 69, 35, 36, 63, 35, 36, 35, 36, 63, 63, 24, 0],
                    [0, 41, 3, 3, 3, 66, 3, 3, 3, 3, 3, 3, 3, 32, 0],
                    [0, 5, 3, 3, 3, 3, 3, 3, 3, 3, 41, 67, 3, 40, 0],
                    [0, 5, 3, 3, 3, 3, 3, 3, 3, 3, 64, 64, 3, 48, 0],
                    [0, 45, 46, 45, 46, 3, 3, 3, 3, 3, 3, 21, 22, 3, 0],
                    [0, 53, 54, 53, 54, 3, 3, 3, 3, 3, 3, 29, 30, 31, 0],
                    [0, 62, 63, 63, 63, 3, 3, 3, 3, 3, 3, 3, 64, 64, 0],
                    [0, 5, 49, 3, 3, 3, 3, 3, 3, 3, 3, 3, 60, 47, 0],
                    [0, 73, 57, 58, 3, 3, 3, 3, 3, 3, 3, 74, 68, 3, 0],
                    [0, 73, 65, 3, 3, 3, 3, 3, 3, 3, 3, 3, 76, 67, 0],
                    [0, 80, 64, 3, 47, 3, 3, 7, 8, 3, 3, 3, 3, 3, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, {
                "name": "above",
                "width": 15,
                "height": 15,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/laboratoryb.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": true,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 59, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 37, 38, 37, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, {
                "name": "collision",
                "width": 15,
                "height": 15,
                "linkWithCollision": false,
                "visible": 0,
                "tilesetName": "",
                "repeat": false,
                "preRender": false,
                "distance": 1,
                "tilesize": 16,
                "foreground": true,
                "data": [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
                    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]
                ]
            }]
        } /*]JSON*/ ;
        LevelLabResources = [new ig.Image('media/laboratoryb.png'), new ig.Image('media/laboratoryb.png')];
    });