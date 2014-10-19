ig.module('game.levels.rs-safari-zone-south-west')
.requires('impact.image')
.defines(function(){
LevelRsSafariZoneSouthWest=/*JSON[*/{"entities": [],"layer": [ {"name": "border", "width": 2, "height": 2, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": true, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0 ], [ 0, 0 ]] }, {"name": "lowest", "width": 40, "height": 40, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4058, 4798, 4798, 4798, 4798, 4798, 4798, 4798, 4798, 4798, 731, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4951, 5443, 5443, 5443, 5443, 5443, 5443, 5443, 5443, 5443, 4779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 2562, 6355, 0, 0, 0, 0, 0, 4951, 5443, 5443, 5443, 5443, 0, 5443, 5443, 5443, 5443, 4779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 402, 3549, 0, 0, 0, 0, 0, 4951, 5443, 5443, 5443, 5443, 0, 5443, 5443, 5443, 5443, 4779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 6007, 2648, 0, 0, 0, 0, 0, 4951, 5443, 5443, 5443, 5443, 5443, 5443, 5443, 5443, 5443, 4779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3348, 5443, 5443, 5443, 5443, 5443, 5443, 5443, 4779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 2562, 26, 26, 26, 6355, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 402, 5443, 5443, 5443, 2648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 402, 5443, 4034, 2648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 6007, 2648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 4058, 4798, 4798, 4798, 4798, 4798, 4798, 731, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 4951, 5443, 5443, 5443, 5443, 5443, 5443, 4779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 4951, 5443, 5443, 5443, 5443, 5443, 5443, 4779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 4951, 5443, 5443, 5443, 5443, 5443, 5443, 4779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2562, 26, 26, 6355, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 4951, 5443, 5443, 5443, 5443, 5443, 5443, 4779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6007, 5443, 5443, 3549, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 4951, 5443, 5443, 5443, 5443, 5443, 5443, 4779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6007, 4034, 2648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "lower", "width": 40, "height": 40, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 5042, 5976, 6131, 5976, 6131, 5976, 6131, 5042, 5042, 5042, 5042, 2995, 1551, 5976, 6131, 5976, 6131, 5976, 6131, 5042, 5042, 5042, 5042, 5042, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 5042, 732, 4828, 758, 4828, 758, 3396, 5042, 5042, 5042, 5042, 2995, 1551, 4994, 2848, 4994, 2848, 4994, 2848, 5042, 5042, 5042, 5042, 5042, 732, 4828, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848 ], [ 3088, 3088, 3088, 3088, 3088, 3088, 3088, 6183, 827, 682, 3088, 2353, 1551, 5976, 6131, 5976, 6131, 5976, 6131, 5580, 1159, 1159, 1159, 1159, 1159, 6235, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 642, 3104, 5190, 3104, 5190, 3104, 5190, 3827, 827, 4637, 3104, 5190, 2216, 4994, 2848, 4994, 2848, 4994, 2848, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 732, 4828, 758, 4828, 758, 4828, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848 ], [ 2216, 3984, 6131, 5976, 6131, 5976, 2471, 5042, 5042, 5042, 3984, 2471, 5042, 5976, 6131, 5976, 6131, 5976, 6131, 5042, 5042, 5042, 4135, 931, 5042, 5042, 5042, 5619, 1973, 4413, 4413, 977, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 5042, 4994, 2848, 4994, 2848, 4994, 2848, 5042, 5042, 5042, 4994, 2848, 3721, 5148, 56, 5148, 56, 5148, 3396, 5042, 5042, 4135, 2314, 2314, 931, 5042, 5042, 5042, 6326, 1871, 1871, 4175, 758, 4828, 758, 4828, 758, 4828, 758, 4828 ], [ 5042, 5976, 6131, 5976, 6131, 5976, 6131, 5042, 5042, 5042, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5042, 5042, 5042, 1013, 6463, 2314, 2314, 2308, 931, 5042, 4173, 4075, 1817, 6452, 4135, 931, 5619, 5042, 5042, 5042, 5042, 5042 ], [ 3721, 5148, 4828, 4994, 2848, 4994, 2848, 5042, 5042, 5042, 732, 56, 5148, 56, 5148, 56, 5148, 56, 5276, 5619, 5042, 5042, 5042, 1013, 6463, 2314, 2314, 931, 6624, 5086, 6110, 5022, 6003, 2314, 931, 5042, 5042, 5042, 3721, 5276 ], [ 5976, 6131, 5042, 5976, 6131, 5976, 6131, 5042, 5042, 5042, 5042, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 2471, 5042, 5042, 5042, 5042, 5042, 5042, 1013, 6463, 2314, 2314, 2314, 2314, 2314, 2314, 6463, 2712, 5042, 5042, 5042, 3984, 6131 ], [ 4994, 2848, 3721, 5148, 3396, 758, 3396, 5042, 5042, 5042, 5042, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 3721, 5276, 3721, 5276, 3721, 5276, 3721, 5276, 5227, 2314, 2314, 2314, 2314, 670, 5042, 3721, 5276, 3721, 5276, 4994, 2848 ], [ 5976, 6131, 5976, 6131, 6152, 6152, 6152, 5042, 5042, 5042, 5042, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 2471, 5976, 6131, 5976, 2471, 1013, 2314, 2314, 2314, 2314, 2712, 5042, 3984, 6131, 5976, 6131, 5976, 6131 ], [ 4994, 2848, 4994, 2848, 6152, 6152, 6152, 5042, 5042, 5042, 5042, 732, 4828, 758, 4828, 758, 4828, 758, 4828, 758, 4828, 758, 3396, 758, 4828, 758, 3396, 5042, 1013, 2314, 2314, 670, 3721, 5276, 4994, 2848, 4994, 2848, 4994, 2848 ], [ 5976, 6131, 5976, 6131, 6152, 6152, 6152, 5042, 5042, 5042, 5959, 4467, 347, 347, 347, 347, 347, 347, 347, 347, 347, 347, 347, 347, 347, 347, 3634, 1334, 5042, 5227, 2314, 670, 3984, 6131, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 4994, 2848, 758, 3396, 6152, 6152, 6152, 5042, 5042, 5959, 7, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 2995, 1334, 5227, 2314, 670, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848 ], [ 5976, 6131, 6152, 6152, 6152, 6152, 5042, 5042, 5042, 2678, 7, 5042, 5042, 6697, 6699, 6699, 6699, 6699, 6699, 6699, 6699, 6699, 6699, 6702, 5042, 5042, 5042, 2995, 1551, 1013, 2314, 670, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 4994, 2848, 6152, 6152, 6152, 6152, 5042, 5042, 5042, 2678, 7, 5042, 5042, 6698, 6999, 6999, 6999, 6999, 6999, 6999, 6999, 6999, 6999, 6703, 5042, 5042, 5042, 2995, 1551, 5042, 5227, 670, 732, 4828, 4994, 2848, 4994, 2848, 4994, 2848 ], [ 5976, 6131, 6152, 6152, 6152, 5042, 6984, 6986, 5042, 2678, 7, 5042, 5042, 6698, 6999, 6999, 6999, 6999, 4338, 6999, 6999, 6999, 6999, 6703, 5042, 5042, 5042, 2995, 1551, 5042, 5227, 670, 5042, 5042, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 4994, 2848, 6152, 6152, 5042, 5042, 7001, 7004, 5042, 2678, 7, 5042, 5042, 6698, 6999, 6999, 6999, 6999, 489, 6999, 6999, 6999, 6999, 6703, 5042, 5042, 5042, 2995, 1551, 5042, 5227, 670, 5042, 5619, 4994, 2848, 4994, 2848, 4994, 2848 ], [ 5976, 6131, 5042, 5042, 5042, 5042, 6985, 6987, 5042, 2678, 7, 5042, 5042, 6698, 6999, 6999, 6999, 6999, 6999, 6999, 6999, 6999, 6999, 6703, 5042, 5042, 5042, 2995, 1551, 5042, 1013, 2712, 5042, 5042, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 4994, 2848, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 2678, 7, 5042, 5042, 347, 3634, 7000, 6999, 6999, 6999, 6999, 6999, 6999, 6999, 6703, 5042, 5042, 5042, 2995, 1551, 5042, 5042, 5042, 5042, 5042, 732, 4828, 758, 4828, 758, 4828 ], [ 5976, 6131, 3721, 5276, 5042, 5042, 5042, 5042, 5042, 2678, 7, 5042, 5042, 5042, 5042, 347, 347, 347, 347, 347, 347, 347, 347, 347, 5042, 5042, 642, 2353, 1551, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042 ], [ 4994, 2848, 5976, 2471, 5042, 5042, 5042, 5042, 6152, 2678, 7, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 2995, 642, 2216, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 3721, 5276 ], [ 5976, 6131, 4994, 2848, 5042, 5042, 5042, 6152, 6152, 2678, 6382, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 4738, 3078, 3088, 3088, 3088, 3088, 3088, 2353, 1551, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5619, 3984, 6131 ], [ 4994, 2848, 5976, 6131, 5042, 5042, 5042, 6152, 6152, 429, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 4738, 3078, 6550, 6550, 6550, 6550, 6550, 6550, 2216, 5042, 5042, 5042, 5042, 3721, 5276, 3721, 5276, 3721, 5276, 4994, 2848 ], [ 5976, 6131, 4994, 2848, 5042, 5042, 5042, 6152, 6152, 6152, 6152, 6152, 5580, 1159, 5033, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 3984, 6131, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 4994, 2848, 5976, 6131, 5042, 5042, 5042, 5042, 6152, 6152, 6152, 6152, 6152, 6152, 666, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 3721, 5276, 3721, 5276, 3721, 5276, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848 ], [ 5976, 6131, 758, 3396, 5042, 6984, 7002, 7002, 7002, 6986, 6152, 6152, 6152, 6152, 666, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 3984, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 4994, 2848, 5042, 5042, 5042, 7001, 6999, 6999, 6999, 6987, 6152, 6152, 6152, 6152, 666, 5042, 5042, 5042, 5042, 5042, 3721, 5276, 3721, 5276, 3721, 5276, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848 ], [ 5976, 6131, 5042, 5042, 5042, 7001, 6999, 7003, 6987, 5042, 5042, 6152, 6152, 6152, 88, 1159, 1159, 1159, 1159, 6235, 3984, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 758, 3396, 5042, 5042, 5042, 6985, 6987, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 4994, 2848, 4994, 2848, 4994, 2848, 758, 4828, 758, 4828, 758, 4828, 758, 4828, 4994, 2848, 4994, 2848, 4994, 2848 ], [ 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5976, 6131, 5976, 6131, 5976, 6131, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 6697, 6699, 6699, 6699, 6699, 6699, 6699, 6702, 3721, 5276, 3721, 5276, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 732, 4828, 758, 4828, 758, 3396, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 4994, 2848, 4994, 2848, 4994, 2848 ], [ 6698, 6999, 6999, 6999, 6999, 6999, 6999, 6703, 3984, 6131, 5976, 2471, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 6698, 6999, 6999, 6999, 6999, 6999, 6999, 6703, 4994, 2848, 4994, 2848, 3721, 5276, 3721, 5276, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 732, 4828, 4994, 2848, 4994, 2848 ], [ 6698, 6999, 6999, 6999, 6999, 6999, 6999, 6703, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 2471, 5042, 5042, 5042, 5042, 5042, 6984, 7002, 7002, 6986, 5042, 5042, 5042, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 5976, 6131, 5976, 6131 ], [ 6698, 6999, 6999, 6999, 6999, 6999, 6999, 6703, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 3721, 5276, 3721, 5276, 5042, 6985, 6999, 6999, 7004, 5042, 5042, 5042, 5042, 5042, 6152, 6152, 6152, 6152, 5042, 5042, 732, 4828, 758, 4828 ], [ 6698, 6999, 6999, 6999, 6999, 6999, 6999, 6703, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 2471, 5042, 5042, 6985, 7003, 6987, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042 ], [ 4124, 116, 4124, 116, 4124, 116, 4124, 116, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 3721, 5276, 3721, 5276, 3721, 5276, 5042, 5042, 5042, 5042, 5042, 5042, 3721, 5276, 3721, 5276, 3721, 5276, 3721, 5276 ], [ 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 6131, 5976, 2471, 5042, 5042, 5042, 5042, 5042, 5042, 3984, 6131, 5976, 6131, 5976, 6131, 5976, 6131 ], [ 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848, 3721, 5276, 3721, 5276, 3721, 5276, 4994, 2848, 4994, 2848, 4994, 2848, 4994, 2848 ] ] }, {"name": "upper", "width": 40, "height": 40, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6700, 6701, 6701, 6705, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6820, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6821, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 6820, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821, 6820, 6821, 6820, 6821, 6820, 6821, 0, 0, 0, 0, 0, 0, 0, 6820, 6821, 6820, 6821, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 6820, 6821, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821, 6820, 6821, 6820, 6821, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821, 6820, 6821, 6820, 6821, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821, 6820, 6821, 6820, 6821, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821, 6820, 6821, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821, 6820, 6821, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821, 6820, 6821, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6831, 6832, 6831, 6832, 6831, 6832, 6831, 6832, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821, 6820, 6821, 6820, 6821, 0, 0, 0, 0, 0, 0, 6820, 6821, 6820, 6821, 6820, 6821, 6820, 6821 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6820, 6821, 6820, 6821, 6820, 6821, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "collision", "width": 40, "height": 40, "linkWithCollision": false, "visible": 0, "tilesetName": "", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1 ], [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ] ] }] } /*]JSON*/;
LevelRsSafariZoneSouthWestResources=[new ig.Image('media/master.png')];
});