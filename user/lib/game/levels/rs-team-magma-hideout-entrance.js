ig.module('game.levels.rs-team-magma-hideout-entrance')
.requires('impact.image')
.defines(function(){
LevelRsTeamMagmaHideoutEntrance=/*JSON[*/{"entities": [],"layer": [ {"name": "border", "width": 2, "height": 2, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": true, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0 ], [ 0, 0 ]] }, {"name": "lowest", "width": 28, "height": 30, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "lower", "width": 28, "height": 30, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 2707, 4821, 2302, 5101, 5101, 2561, 3487, 5101, 5101, 5101, 5101, 6523, 6512, 3741, 5101, 5101, 5101, 5101, 5101, 5101, 5101, 2561, 3487, 5101, 5101, 2707, 0 ], [ 0, 2893, 328, 2170, 4485, 6441, 777, 3904, 507, 507, 507, 507, 3717, 2563, 6249, 507, 507, 507, 507, 507, 4485, 6441, 777, 3904, 3899, 3899, 2893, 0 ], [ 0, 2893, 449, 2267, 105, 4890, 6290, 6290, 6290, 6290, 6290, 6290, 4266, 6290, 2759, 6290, 6290, 6290, 6290, 6290, 105, 4890, 6290, 6290, 5835, 5835, 2893, 0 ], [ 0, 2893, 2715, 6370, 271, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 5835, 5835, 2893, 0 ], [ 0, 2893, 3899, 3899, 3899, 271, 1328, 1328, 1531, 5323, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 2191, 4042, 1328, 1328, 1328, 1328, 1328, 4781, 4781, 2893, 0 ], [ 0, 2893, 5835, 4781, 4781, 271, 1328, 1531, 7, 2454, 4244, 4244, 4244, 4244, 4244, 4244, 4244, 6344, 2995, 4042, 1328, 1328, 1328, 1328, 4781, 5835, 2893, 0 ], [ 0, 2893, 4781, 5835, 4781, 271, 1328, 4147, 7, 3072, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 2583, 2995, 1026, 6290, 1328, 1328, 1328, 4244, 4781, 2893, 0 ], [ 0, 2893, 5835, 4781, 166, 926, 1328, 4147, 6382, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 2353, 1026, 6290, 1328, 1328, 1328, 1328, 4244, 2893, 0 ], [ 0, 2893, 4781, 166, 926, 1328, 1328, 2942, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 2361, 6290, 1328, 1328, 1328, 1328, 1328, 2893, 0 ], [ 0, 2893, 6290, 926, 1328, 1328, 1328, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 1328, 1328, 1328, 1328, 1328, 2893, 0 ], [ 0, 2893, 6290, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 2893, 0 ], [ 0, 2893, 4989, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 576, 1328, 1328, 4545, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 2893, 0 ], [ 0, 2893, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1257, 4738, 3078, 3283, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 2893, 0 ], [ 0, 2893, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 2893, 0 ], [ 0, 2893, 6290, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 2893, 0 ], [ 0, 2893, 4989, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 576, 1328, 1328, 4545, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 4344, 2893, 0 ], [ 0, 2893, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1257, 4738, 3078, 3283, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 1444, 2893, 0 ], [ 0, 2893, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 6290, 2893, 0 ], [ 0, 2893, 6290, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 1328, 2893, 0 ], [ 0, 2893, 1682, 2822, 1328, 5323, 4344, 4344, 4344, 4344, 4344, 4344, 576, 1328, 1328, 4545, 4344, 4344, 4344, 4344, 4344, 4344, 2191, 4480, 5672, 2822, 2893, 0 ], [ 0, 2893, 1968, 1560, 1328, 2454, 642, 3088, 3088, 3088, 3088, 3088, 3088, 4738, 3078, 3088, 3088, 3088, 3088, 3088, 3088, 6142, 767, 271, 1968, 1560, 2893, 0 ], [ 0, 2893, 3711, 5045, 1328, 2454, 2995, 24, 3383, 3383, 3383, 6384, 5132, 5132, 5132, 5132, 24, 3383, 3383, 3383, 6384, 7, 767, 271, 3711, 5045, 2893, 0 ], [ 0, 2893, 6290, 4244, 1328, 2454, 2995, 7, 642, 3088, 3088, 1644, 5132, 5132, 5132, 5132, 2054, 3088, 3088, 6142, 2995, 7, 767, 271, 4244, 4244, 2893, 0 ], [ 0, 2893, 1682, 2822, 1328, 2454, 2995, 7, 2995, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 7, 2995, 7, 767, 271, 5672, 2822, 2893, 0 ], [ 0, 2893, 1968, 1560, 271, 2454, 2995, 7, 2995, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 7, 2995, 7, 767, 271, 1968, 1560, 2893, 0 ], [ 0, 2893, 3711, 5045, 271, 2454, 2995, 2054, 1644, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 2054, 1644, 7, 767, 271, 3711, 5045, 2893, 0 ], [ 0, 2893, 6290, 4244, 926, 3072, 4344, 4344, 4344, 4344, 576, 6384, 2493, 5194, 5413, 24, 4545, 4344, 4344, 4344, 4344, 4344, 2583, 271, 4244, 4244, 2893, 0 ], [ 0, 2893, 5298, 5298, 5298, 5737, 5737, 5737, 5737, 5737, 4042, 2995, 5647, 2413, 1384, 7, 1531, 5737, 5737, 5737, 5737, 5737, 5737, 5737, 5298, 5298, 2893, 0 ], [ 0, 2893, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 2995, 4769, 3950, 6263, 3302, 5737, 7, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 2893, 0 ], [ 0, 4769, 3383, 3383, 3383, 3383, 3383, 3383, 3383, 3383, 4769, 3383, 3383, 3383, 3383, 3383, 5737, 3383, 3383, 3383, 3383, 3383, 3383, 3383, 3383, 3383, 5737, 0 ] ] }, {"name": "upper", "width": 28, "height": 30, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "collision", "width": 28, "height": 30, "linkWithCollision": false, "visible": 0, "tilesetName": "", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1 ], [ 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1 ], [ 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1 ], [ 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1 ], [ 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ] ] }] } /*]JSON*/;
LevelRsTeamMagmaHideoutEntranceResources=[new ig.Image('media/master.png')];
});