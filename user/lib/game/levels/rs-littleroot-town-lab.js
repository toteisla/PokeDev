ig.module( 'game.levels.rs-littleroot-town-lab' )
.requires( 'impact.image','game.entities.sign','game.entities.exit','game.entities.npc' )
.defines(function(){
LevelRsLittlerootTownLab=/*JSON[*/{
	"entities": [
		{
			"type": "EntitySign",
			"x": 80,
			"y": 32,
			"settings": {
				"msg": "It's a PC used for research. Better not mess around with it."
			}
		},
		{
			"type": "EntityExit",
			"x": 112,
			"y": 208,
			"settings": {
				"map": "RsWorld",
				"me": 0,
				"goTo": 0,
				"goToX": 2032,
				"goToY": 4752,
				"direction": "down",
				"type": "floor"
			}
		},
		{
			"type": "EntitySign",
			"x": 48,
			"y": 128,
			"settings": {
				"msg": "It's crammed with books on POKEMON."
			}
		},
		{
			"type": "EntitySign",
			"x": 32,
			"y": 128,
			"settings": {
				"msg": "It's crammed with books on POKEMON."
			}
		},
		{
			"type": "EntitySign",
			"x": 16,
			"y": 128,
			"settings": {
				"msg": "It's crammed with books on POKEMON."
			}
		},
		{
			"type": "EntitySign",
			"x": 64,
			"y": 32,
			"settings": {
				"msg": "It's a PC used for research. Better not mess around with it."
			}
		},
		{
			"type": "EntityExit",
			"x": 128,
			"y": 208,
			"settings": {
				"map": "RsWorld",
				"me": 0,
				"goTo": 0,
				"goToX": 2032,
				"goToY": 4752,
				"direction": "down",
				"type": "floor"
			}
		},
		{
			"type": "EntitySign",
			"x": 128,
			"y": 32,
			"settings": {
				"msg": "It's a book that's too hard to read."
			}
		},
		{
			"type": "EntitySign",
			"x": 64,
			"y": 128,
			"settings": {
				"msg": "It's crammed with books on POKEMON."
			}
		},
		{
			"type": "EntitySign",
			"x": 32,
			"y": 32,
			"settings": {
				"msg": "It's crammed with books on POKEMON."
			}
		},
		{
			"type": "EntitySign",
			"x": 144,
			"y": 32,
			"settings": {
				"msg": "It's a book that's too hard to read."
			}
		},
		{
			"type": "EntitySign",
			"x": 176,
			"y": 128,
			"settings": {
				"msg": "It's a serious-looking machine. The PROF must use this for research."
			}
		},
		{
			"type": "EntitySign",
			"x": 192,
			"y": 128,
			"settings": {
				"msg": "It's a serious-looking machine. The PROF must use this for research."
			}
		},
		{
			"type": "EntitySign",
			"x": 192,
			"y": 160,
			"settings": {
				"msg": "It's a PC used for research. Better not mess around with it."
			}
		},
		{
			"type": "EntitySign",
			"x": 32,
			"y": 160,
			"settings": {
				"msg": "It's a PC used for research. Better not mess around with it."
			}
		},
		{
			"type": "EntitySign",
			"x": 32,
			"y": 176,
			"settings": {
				"msg": "It's a PC used for research. Better not mess around with it."
			}
		},
		{
			"type": "EntitySign",
			"x": 192,
			"y": 176,
			"settings": {
				"msg": "It's a PC used for research. Better not mess around with it."
			}
		},
		{
			"type": "EntityNpc",
			"x": 160,
			"y": 144,
			"settings": {
				"skin": "labgeek",
				"walking": true,
				"msg": "Hunh? PROF. BIRCH? The PROF's away on fieldwork.",
				"name": "Scientist",
				"facing": "left",
				"behaviour": "b"
			}
		},
		{
			"type": "EntityNpc",
			"x": 128,
			"y": 80,
			"settings": {
				"skin": "birk",
				"walking": false,
				"msg": "Hello!",
				"name": "Prof.Birk",
				"facing": "down",
				"behaviour": "b"
			}
		}
	],
	"layer": [
		{
			"name": "border",
			"width": 2,
			"height": 2,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/master.png",
			"repeat": true,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[0,0],
				[0,0]
			]
		},
		{
			"name": "lowest",
			"width": 15,
			"height": 15,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/master.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "lower",
			"width": 15,
			"height": 15,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/master.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,4659,3835,5514,1960,6432,5514,5514,1707,1707,5514,5514,5514,5514,0],
				[0,3868,640,5286,3109,203,3100,2032,5345,310,5809,3100,3100,3384,0],
				[0,5741,3632,6519,3426,200,4441,3426,200,3426,200,4441,4441,1753,0],
				[0,558,5517,5517,5517,3611,5517,5517,5517,5517,4084,349,5517,3921,0],
				[0,1849,5517,5517,5517,5517,5517,5517,5517,5517,558,3965,5517,3566,0],
				[0,1140,3693,3242,3693,5517,5517,5517,5517,5517,3243,3243,5517,1088,0],
				[0,5789,3633,5789,3633,5517,5517,5517,5517,5517,5517,5046,2269,3169,0],
				[0,5446,2490,5446,2490,5517,5517,5517,5517,5517,5517,299,4493,1182,0],
				[0,2579,4441,4441,4441,5517,5517,5517,5517,5517,5517,3679,3243,990,0],
				[0,1849,602,5517,5517,5517,5517,5517,5517,5517,5517,5517,3539,927,0],
				[0,6081,6393,365,5517,5517,5517,5517,5517,5517,5517,3677,1742,349,0],
				[0,6081,2846,5517,5047,5517,5517,5517,5517,5517,5517,5517,2053,3965,0],
				[0,238,3243,5517,927,5517,5517,2297,6041,5517,5517,5517,3243,3243,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "upper",
			"width": 15,
			"height": 15,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/master.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": true,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 15,
			"height": 15,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": true,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,0,1,0,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,1,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,1,1,0,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,0,0,0,0,0,0,1,1,0,1],
				[1,1,1,1,1,0,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,1,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,0,0,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelRsLittlerootTownLabResources=[new ig.Image('media/master.png'), new ig.Image('media/master.png'), new ig.Image('media/master.png'), new ig.Image('media/master.png')];
});