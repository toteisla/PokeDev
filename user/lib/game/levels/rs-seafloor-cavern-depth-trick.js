ig.module('game.levels.rs-seafloor-cavern-depth-trick')
.requires('impact.image')
.defines(function(){
LevelRsSeafloorCavernDepthTrick=/*JSON[*/{"entities": [],"layer": [ {"name": "border", "width": 2, "height": 2, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": true, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0 ], [ 0, 0 ]] }, {"name": "lowest", "width": 20, "height": 20, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "lower", "width": 20, "height": 20, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 5352, 3863, 4259, 510, 6222, 2885, 4259, 4259, 4259, 4259, 4259, 2404, 5352, 5352, 5352, 5352, 5352, 5352, 5352, 5352 ], [ 5352, 2882, 3863, 1365, 2470, 5802, 4259, 4259, 4259, 4259, 2404, 3928, 5352, 5352, 816, 1941, 1941, 1941, 1606, 5352 ], [ 5352, 2882, 2882, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 3928, 3928, 5352, 5352, 3312, 2059, 2059, 2059, 904, 5352 ], [ 5352, 2882, 2882, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 3928, 3928, 5352, 5352, 3312, 2059, 2059, 2059, 904, 5352 ], [ 5352, 5213, 5213, 545, 545, 545, 6508, 1466, 1466, 1466, 3928, 3928, 5352, 5352, 5213, 5213, 3985, 2059, 904, 5352 ], [ 816, 1941, 1606, 5352, 5352, 5352, 2882, 6508, 1466, 1466, 3928, 1396, 4259, 4259, 4259, 2404, 3312, 2059, 904, 5352 ], [ 3312, 2059, 904, 5352, 3863, 4259, 2398, 2882, 1466, 1466, 1396, 4259, 4259, 4259, 2404, 3928, 5213, 5213, 5213, 5352 ], [ 5213, 5213, 5213, 5352, 2882, 3863, 4259, 2398, 1466, 1466, 1466, 1466, 1466, 1466, 3928, 3928, 5352, 5352, 5352, 5352 ], [ 5352, 3863, 4259, 4259, 2398, 2882, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 3928, 1396, 4259, 4259, 4259, 2404 ], [ 5352, 2882, 3863, 4259, 4259, 2398, 1466, 1466, 1466, 3803, 545, 6508, 1466, 1466, 1396, 4259, 4259, 4259, 2404, 3928 ], [ 5352, 2882, 2882, 1466, 1466, 1466, 1466, 1466, 3803, 3928, 5352, 2882, 6508, 1466, 1466, 1466, 1466, 1466, 3928, 3928 ], [ 5352, 2882, 2882, 1466, 1466, 1466, 1466, 1466, 3928, 3928, 5352, 2882, 2882, 1466, 1466, 1466, 1466, 1466, 3928, 3928 ], [ 5352, 2882, 2882, 1466, 1466, 3803, 545, 6508, 3928, 3928, 5352, 2882, 2882, 1466, 1466, 2931, 1466, 1466, 3928, 3928 ], [ 5352, 2882, 2882, 1466, 1466, 3928, 842, 2882, 3928, 3928, 5352, 5213, 5213, 545, 1099, 1254, 4809, 545, 5213, 5213 ], [ 5352, 2882, 2882, 1466, 3803, 5213, 842, 2882, 3928, 1396, 4259, 2404, 5352, 5352, 5352, 5352, 816, 1941, 1941, 1606 ], [ 5352, 2882, 2882, 1466, 1396, 4259, 4259, 2398, 1396, 4259, 2404, 3928, 5352, 5352, 5352, 816, 836, 2059, 2059, 904 ], [ 5352, 2882, 2882, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 3928, 3928, 5352, 816, 1941, 836, 2059, 2059, 2059, 904 ], [ 5352, 2882, 2882, 1466, 1466, 1466, 1466, 2931, 1466, 1466, 3928, 3928, 5352, 3312, 2059, 2059, 2059, 2059, 5815, 5213 ], [ 5352, 5213, 5213, 545, 545, 545, 1099, 1254, 4809, 545, 5213, 5213, 5352, 5213, 3985, 2059, 5815, 5213, 5213, 5352 ], [ 5352, 5352, 5352, 5352, 5352, 5352, 5352, 5352, 5352, 5352, 5352, 5352, 5352, 5352, 5213, 5213, 5213, 5352, 5352, 5352 ] ] }, {"name": "upper", "width": 20, "height": 20, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "collision", "width": 20, "height": 20, "linkWithCollision": false, "visible": 0, "tilesetName": "", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }] } /*]JSON*/;
LevelRsSeafloorCavernDepthTrickResources=[new ig.Image('media/master.png')];
});