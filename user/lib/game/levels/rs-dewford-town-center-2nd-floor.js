ig.module('game.levels.rs-dewford-town-center-2nd-floor')
.requires('impact.image')
.defines(function(){
LevelRsDewfordTownCenter2ndFloor=/*JSON[*/{"entities": [],"layer": [ {"name": "border", "width": 2, "height": 2, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": true, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0 ], [ 0, 0 ]] }, {"name": "lowest", "width": 14, "height": 9, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "lower", "width": 14, "height": 9, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 3793, 4076, 6386, 85, 5445, 948, 85, 1342, 948, 85, 2259, 948, 85, 316 ], [ 2312, 5262, 1398, 6580, 3010, 4267, 6580, 3900, 4267, 6580, 1684, 4267, 6580, 1672 ], [ 464, 681, 3317, 5900, 6136, 2540, 5900, 6136, 2540, 5900, 6136, 2540, 5900, 1978 ], [ 6585, 1324, 1324, 1037, 2969, 6047, 1037, 2969, 6047, 1037, 2969, 6047, 1037, 4403 ], [ 918, 6509, 1324, 6320, 4269, 1324, 4726, 4269, 1324, 4726, 4269, 1324, 4726, 4403 ], [ 2873, 4577, 1324, 952, 2736, 1324, 952, 2736, 1324, 952, 2736, 1324, 952, 2912 ], [ 6275, 4455, 1324, 4915, 1324, 1324, 1324, 1324, 4915, 1324, 1324, 1324, 1324, 2576 ], [ 6585, 1324, 1324, 3569, 1854, 2857, 1854, 2857, 3569, 1854, 2857, 1854, 2857, 2576 ], [ 5205, 1324, 1324, 1324, 1324, 1324, 1324, 1324, 1324, 1324, 1324, 1324, 1324, 5701 ] ] }, {"name": "upper", "width": 14, "height": 9, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "collision", "width": 14, "height": 9, "linkWithCollision": false, "visible": 0, "tilesetName": "", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }] } /*]JSON*/;
LevelRsDewfordTownCenter2ndFloorResources=[new ig.Image('media/master.png')];
});