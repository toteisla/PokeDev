ig.module('game.levels.rs-mt-pyre-4th-floor')
.requires('impact.image')
.defines(function(){
LevelRsMtPyre4thFloor=/*JSON[*/{"entities": [],"layer": [ {"name": "border", "width": 2, "height": 2, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": true, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0 ], [ 0, 0 ]] }, {"name": "lowest", "width": 13, "height": 13, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "lower", "width": 13, "height": 13, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 1286, 2030, 6523, 6512, 3741, 3558 ], [ 0, 0, 0, 0, 0, 0, 0, 4090, 6184, 3717, 2563, 6249, 2060 ], [ 2030, 2030, 2030, 2030, 2030, 2030, 6104, 6466, 6466, 943, 6517, 1255, 6466 ], [ 6184, 6184, 6184, 6184, 6184, 6184, 4298, 6466, 717, 2046, 2046, 2046, 717 ], [ 2030, 6523, 6512, 3741, 2030, 2030, 2030, 2030, 3558, 4738, 3078, 3078, 1286 ], [ 6184, 2369, 1415, 1252, 6184, 6184, 6184, 6184, 2060, 4738, 3078, 3078, 4090 ], [ 6466, 943, 6517, 1255, 6466, 6466, 6466, 6466, 6466, 6517, 6517, 6517, 6466 ], [ 6466, 2046, 2046, 2046, 717, 717, 717, 717, 717, 2046, 2046, 2046, 2046 ], [ 6517, 2046, 2046, 2046, 2046, 2046, 2046, 2046, 2046, 2046, 2046, 2046, 717 ], [ 717, 717, 717, 717, 717, 717, 717, 717, 717, 2046, 2046, 2046, 717 ], [ 6466, 2046, 2046, 44, 2046, 2046, 717, 717, 717, 1783, 2046, 2046, 2046 ], [ 6466, 2046, 2046, 2046, 2046, 2046, 717, 717, 717, 717, 717, 717, 717 ], [ 6466, 2046, 1783, 2046, 2046, 2046, 2046, 2046, 2046, 2046, 2046, 2046, 2046 ] ] }, {"name": "upper", "width": 13, "height": 13, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "collision", "width": 13, "height": 13, "linkWithCollision": false, "visible": 0, "tilesetName": "", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0 ], [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }] } /*]JSON*/;
LevelRsMtPyre4thFloorResources=[new ig.Image('media/master.png')];
});