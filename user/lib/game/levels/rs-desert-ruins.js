ig.module('game.levels.rs-desert-ruins')
.requires('impact.image')
.defines(function(){
LevelRsDesertRuins=/*JSON[*/{"entities": [],"layer": [ {"name": "border", "width": 2, "height": 2, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": true, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0 ], [ 0, 0 ]] }, {"name": "lowest", "width": 17, "height": 33, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "lower", "width": 17, "height": 33, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 4385, 6043, 745, 745, 745, 745, 745, 745, 745, 745, 745, 745, 745, 745, 745, 1733, 4385 ], [ 4385, 2000, 6043, 745, 745, 745, 745, 745, 745, 745, 745, 745, 745, 745, 1733, 808, 4385 ], [ 6043, 3584, 1948, 6423, 338, 338, 338, 338, 338, 338, 338, 338, 338, 3291, 808, 4518, 1733 ], [ 2000, 6043, 1392, 125, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 647, 4518, 1733, 808 ], [ 2000, 1948, 6423, 1612, 1478, 1466, 250, 1466, 1466, 1466, 250, 1466, 1466, 3171, 3291, 808, 808 ], [ 2000, 1948, 125, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 647, 808, 808 ], [ 2000, 1948, 125, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 647, 808, 808 ], [ 2000, 1948, 125, 1466, 250, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 250, 1466, 647, 808, 808 ], [ 2000, 1948, 125, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 647, 808, 808 ], [ 2000, 1948, 125, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 647, 808, 808 ], [ 2000, 1948, 4705, 4866, 1466, 1466, 250, 1466, 1466, 1466, 250, 1466, 1466, 2814, 270, 808, 808 ], [ 2000, 1602, 3763, 125, 1466, 1466, 1466, 1466, 2931, 1466, 1466, 1466, 1466, 647, 4897, 569, 808 ], [ 1602, 3368, 1948, 4705, 4399, 4399, 4399, 6557, 3391, 1149, 4399, 4399, 4399, 270, 4563, 5654, 569 ], [ 4385, 1948, 1602, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 569, 4563, 4385 ], [ 4385, 1602, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 569, 4385 ], [ 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385 ], [ 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385 ], [ 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385, 4385 ], [ 4385, 6043, 745, 745, 745, 745, 1904, 1940, 1940, 1940, 2466, 745, 745, 745, 745, 1733, 4385 ], [ 4385, 2000, 6043, 745, 745, 1904, 799, 791, 3896, 4373, 799, 2466, 745, 745, 1733, 808, 4385 ], [ 6043, 3584, 1948, 6423, 338, 799, 799, 5590, 6565, 5287, 799, 799, 338, 3291, 808, 4518, 1733 ], [ 2000, 6043, 1392, 125, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 647, 4518, 1733, 808 ], [ 2000, 1948, 6423, 1612, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 3171, 3291, 808, 808 ], [ 2000, 1948, 125, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 647, 808, 808 ], [ 2000, 1948, 125, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 647, 808, 808 ], [ 2000, 1948, 125, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 647, 808, 808 ], [ 2000, 1948, 125, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 647, 808, 808 ], [ 2000, 1948, 125, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 647, 808, 808 ], [ 2000, 1948, 4705, 4866, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 1466, 2814, 270, 808, 808 ], [ 2000, 1602, 3763, 125, 1466, 1466, 1466, 1466, 2931, 1466, 1466, 1466, 1466, 647, 4897, 569, 808 ], [ 1602, 3368, 1948, 4705, 4399, 4399, 4399, 6557, 3391, 1149, 4399, 4399, 4399, 270, 4563, 5654, 569 ], [ 4385, 1948, 1602, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 569, 4563, 4385 ], [ 4385, 1602, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 1326, 569, 4385 ] ] }, {"name": "upper", "width": 17, "height": 33, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "collision", "width": 17, "height": 33, "linkWithCollision": false, "visible": 0, "tilesetName": "", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }] } /*]JSON*/;
LevelRsDesertRuinsResources=[new ig.Image('media/master.png')];
});