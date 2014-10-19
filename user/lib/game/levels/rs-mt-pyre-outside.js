ig.module('game.levels.rs-mt-pyre-outside')
.requires('impact.image')
.defines(function(){
LevelRsMtPyreOutside=/*JSON[*/{"entities": [],"layer": [ {"name": "border", "width": 2, "height": 2, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": true, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0 ], [ 0, 0 ]] }, {"name": "lowest", "width": 38, "height": 51, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "lower", "width": 38, "height": 51, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": false, "data": [ [ 24, 24, 5737, 7, 7, 5132, 5132, 5132, 5132, 24, 5042, 5959, 4467, 5959, 4467, 5042, 5042, 2678, 4476, 3661, 3661, 4556, 1551, 5042, 5042, 5042, 5042, 2995, 2995, 5042, 2995, 6384, 5132, 5132, 2995, 5132, 4769, 6384 ], [ 7, 7, 24, 5737, 7, 5132, 5132, 5132, 24, 4467, 5959, 7, 5042, 2678, 5042, 5042, 5042, 2678, 4476, 3661, 3661, 4556, 1551, 5042, 5042, 5042, 5042, 2995, 2995, 5042, 2995, 3634, 6384, 5132, 4769, 6384, 5132, 2995 ], [ 5737, 7, 7, 5132, 7, 5132, 5132, 24, 7, 5042, 2678, 7, 5042, 2678, 5042, 5042, 5042, 2678, 4476, 3661, 3661, 4556, 1551, 5042, 5042, 5042, 5042, 2995, 2995, 5042, 2995, 5042, 1551, 6384, 5132, 4769, 6384, 4769 ], [ 24, 5737, 7, 5132, 7, 5132, 5132, 7, 7, 5042, 2678, 7, 5042, 2678, 5042, 5959, 1334, 2678, 4476, 3661, 3661, 4556, 1551, 5959, 1334, 5042, 5042, 2995, 2995, 5042, 2995, 5042, 1551, 4769, 6384, 5132, 4769, 6384 ], [ 7, 5132, 7, 24, 5737, 5132, 24, 4467, 347, 5042, 2678, 7, 5042, 2678, 5042, 429, 2216, 2678, 4476, 3661, 3661, 4556, 1551, 429, 2216, 5042, 5042, 2995, 2995, 5042, 2995, 5042, 1551, 5132, 4769, 6384, 5132, 2995 ], [ 5737, 5132, 7, 7, 5132, 24, 7, 5042, 5042, 5042, 2678, 7, 5042, 2678, 5042, 4401, 5042, 2678, 4476, 3661, 3661, 4556, 1551, 5042, 4401, 5042, 5042, 2995, 1551, 5042, 1551, 5042, 3634, 6384, 5132, 4769, 6384, 2995 ], [ 5132, 24, 5737, 7, 5132, 7, 7, 5959, 6524, 1334, 2678, 7, 5042, 2678, 5042, 5959, 1334, 2678, 4476, 3661, 3661, 4556, 1551, 5959, 1334, 5042, 5042, 2995, 1551, 5042, 1551, 5042, 5042, 1551, 5132, 5132, 2995, 2995 ], [ 24, 7, 5132, 7, 5132, 7, 7, 2678, 642, 2216, 2678, 7, 5042, 2678, 5042, 429, 2216, 2678, 4476, 3661, 3661, 4556, 1551, 429, 2216, 5042, 642, 2353, 1551, 5042, 1551, 5959, 1334, 1551, 24, 6384, 2995, 2995 ], [ 7, 7, 5132, 7, 5132, 7, 7, 2678, 1551, 4186, 2678, 7, 5042, 429, 6142, 5042, 4401, 2678, 4476, 6256, 6256, 1004, 1551, 4401, 5042, 5042, 2995, 642, 2216, 5042, 1551, 2678, 1551, 1551, 7, 2995, 2995, 2995 ], [ 7, 7, 5132, 7, 5132, 7, 7, 2678, 1551, 5042, 2678, 7, 5959, 1334, 2678, 4401, 5042, 429, 2216, 5502, 5502, 3825, 2216, 5042, 4401, 5042, 2995, 1551, 5959, 1334, 1551, 2678, 1551, 1551, 7, 2995, 2995, 2995 ], [ 7, 7, 5132, 7, 5132, 7, 7, 2678, 1551, 5042, 2678, 7, 7, 1551, 429, 412, 412, 412, 412, 1503, 2563, 412, 412, 412, 412, 412, 2353, 1551, 2678, 1551, 1551, 2678, 1551, 1551, 7, 2995, 2995, 2995 ], [ 7, 7, 5132, 7, 5132, 7, 7, 429, 2216, 5042, 2678, 7, 7, 1551, 4401, 5042, 4401, 5042, 4401, 5227, 670, 4401, 5042, 4401, 5042, 4401, 5042, 1551, 2678, 1551, 1551, 2678, 1551, 1551, 7, 2995, 2995, 2995 ], [ 7, 7, 5132, 7, 5132, 7, 7, 5042, 5042, 5042, 2678, 7, 7, 1551, 5042, 5042, 5042, 5042, 5042, 5227, 670, 5042, 5042, 5042, 5042, 5042, 642, 2216, 429, 2216, 1551, 2678, 1551, 1551, 6382, 2353, 2995, 2995 ], [ 7, 7, 5132, 7, 5132, 7, 7, 5042, 5959, 1334, 2678, 7, 2678, 1551, 4186, 5042, 4186, 5042, 5042, 5227, 670, 5042, 5042, 4186, 5042, 4186, 2995, 4186, 4186, 642, 2216, 2678, 1551, 1551, 5132, 5132, 2995, 2995 ], [ 7, 7, 5132, 7, 5132, 7, 7, 5042, 2678, 1551, 2678, 7, 429, 2216, 5042, 5042, 5042, 5042, 5042, 1013, 2712, 5042, 5042, 5042, 5042, 5042, 2995, 5042, 5042, 1551, 5042, 2678, 1551, 1551, 5132, 5132, 2995, 2995 ], [ 7, 7, 5132, 7, 5132, 7, 7, 5042, 2678, 1551, 2678, 6382, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 4738, 3078, 3088, 412, 412, 412, 3088, 2216, 5042, 5042, 1551, 4186, 2678, 1551, 1551, 5132, 5132, 2995, 2995 ], [ 7, 6382, 6142, 6382, 6142, 7, 7, 5042, 429, 2216, 429, 3088, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 4738, 3078, 6142, 5959, 6524, 6524, 1334, 5042, 5042, 5042, 1551, 5042, 2678, 1551, 1551, 5132, 5132, 2995, 2995 ], [ 7, 5132, 7, 5132, 7, 7, 7, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 1013, 2712, 2678, 429, 412, 412, 2216, 5042, 5042, 5042, 1551, 4186, 429, 2216, 1551, 5132, 5132, 2995, 2995 ], [ 7, 5132, 7, 5132, 7, 7, 6382, 6142, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 429, 412, 412, 412, 412, 4738, 3078, 412, 2216, 5042, 4186, 642, 2353, 5132, 5132, 2995, 2995 ], [ 7, 5132, 7, 5132, 7, 6382, 6142, 7, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 642, 2353, 5132, 5132, 642, 2353, 2995 ], [ 7, 5132, 7, 5132, 7, 5132, 7, 6382, 6142, 5042, 6152, 6152, 5959, 6524, 6524, 6524, 6524, 6524, 1334, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 642, 3088, 3088, 2353, 642, 3088, 3088, 2353, 642, 2353 ], [ 7, 5132, 7, 5132, 7, 5132, 6382, 6142, 7, 6152, 6152, 6152, 429, 412, 412, 412, 412, 6142, 1551, 5042, 642, 3088, 3088, 3088, 4738, 3078, 3078, 3088, 2353, 642, 2180, 2180, 2353, 642, 3088, 3088, 2353, 5132 ], [ 6382, 6142, 6382, 6142, 6382, 6142, 5132, 7, 6382, 2180, 6142, 6152, 6152, 6152, 6152, 5042, 4186, 2678, 1551, 642, 2353, 642, 2180, 2180, 4738, 3078, 3078, 2180, 2180, 2353, 642, 6550, 2180, 2353, 642, 2180, 2180, 2180 ], [ 6142, 6382, 6142, 6382, 6142, 7, 5132, 6382, 2180, 6142, 6382, 3088, 3088, 3088, 6142, 5042, 5042, 429, 2216, 2995, 5132, 2995, 642, 6550, 4738, 3078, 3078, 6550, 6550, 6550, 2353, 5042, 642, 6550, 2353, 5132, 5132, 5132 ], [ 7, 5132, 7, 5132, 7, 6382, 3088, 412, 6142, 6382, 2180, 2180, 2180, 6142, 6382, 3088, 3088, 3088, 3088, 2353, 642, 2353, 1551, 1013, 2314, 2314, 2314, 2712, 5042, 5042, 5042, 642, 2353, 5132, 5132, 5132, 5132, 5132 ], [ 7, 5132, 7, 5132, 6382, 2180, 6142, 6504, 429, 6550, 6550, 6550, 6142, 6382, 2180, 2180, 2180, 2180, 2180, 2180, 2353, 642, 2216, 5042, 1013, 6463, 2712, 5042, 5959, 1334, 642, 2353, 5132, 5132, 5132, 5132, 5132, 5132 ], [ 7, 5132, 7, 5132, 5132, 5132, 7, 5042, 6504, 5042, 5042, 6504, 429, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 2216, 5042, 5042, 5042, 5042, 5042, 5042, 429, 2216, 2995, 5132, 5132, 5132, 5132, 5132, 5132, 5132 ], [ 7, 5132, 7, 5132, 5132, 5132, 7, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 6504, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 642, 3088, 2353, 5132, 5132, 5132, 5132, 5132, 5132, 5132 ], [ 7, 5132, 7, 5132, 5132, 5132, 6382, 6142, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 642, 3088, 3088, 2353, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 642 ], [ 7, 5132, 6382, 6142, 5132, 5132, 5132, 6382, 3088, 4738, 3078, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 6142, 5042, 5042, 5042, 642, 2353, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 2995 ], [ 6382, 6142, 5132, 6382, 3088, 3088, 3088, 2180, 2180, 4738, 3078, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 6142, 6382, 3088, 3088, 3088, 2353, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 642, 3088, 3088, 2353 ], [ 6142, 6382, 3088, 2180, 2180, 2180, 2180, 2180, 2180, 4738, 3078, 2180, 2180, 2180, 2180, 2180, 2180, 6142, 5132, 6382, 2180, 2180, 2180, 2180, 2180, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 2353, 642, 3088, 2180 ], [ 6382, 3088, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 4738, 3078, 2180, 2180, 2180, 2180, 6142, 5132, 6382, 3088, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2353, 5132, 5132 ], [ 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 4738, 3078, 6550, 6142, 5132, 5132, 6382, 3088, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 6142, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132 ], [ 2180, 2180, 2180, 2180, 2180, 2180, 2180, 6142, 1013, 2314, 2314, 2712, 429, 3088, 3088, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6142, 5132, 5132, 6382, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088 ], [ 2180, 2180, 2180, 2180, 2180, 2180, 6142, 7, 5042, 1013, 2712, 5042, 5042, 5042, 5042, 6152, 6152, 6152, 6152, 6152, 5042, 5042, 429, 3088, 3088, 6550, 6550, 6550, 6550, 6550, 6550, 2180, 2180, 2180, 2180, 2180, 2180, 2180 ], [ 2180, 2180, 2180, 2180, 2180, 6142, 7, 6382, 3088, 6142, 5042, 5042, 5042, 5042, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 642, 2180, 2180, 2180, 2180, 2180, 2180 ], [ 2180, 2180, 2180, 2180, 6142, 7, 6382, 2180, 6142, 6382, 3088, 3088, 3088, 6142, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 2995, 642, 2180, 2180, 2180, 2180, 2180 ], [ 2180, 2180, 2180, 6142, 7, 6382, 6142, 5132, 6382, 6142, 5132, 5132, 5132, 6382, 4738, 3078, 6142, 6152, 6152, 6152, 6152, 642, 3088, 3088, 3088, 3088, 3088, 4738, 3078, 3078, 2180, 2353, 2995, 5132, 642, 2180, 2180, 2180 ], [ 2180, 6142, 5132, 7, 7, 5132, 7, 5132, 5132, 7, 5132, 5132, 5132, 5132, 5132, 5132, 6382, 3088, 3088, 3088, 3088, 2353, 5132, 642, 3088, 2180, 2180, 4738, 3078, 3078, 2180, 2180, 2353, 642, 2353, 642, 2180, 2180 ], [ 6142, 6382, 6142, 7, 7, 5132, 6382, 6142, 5132, 6382, 3088, 3088, 3088, 3088, 6142, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 642, 2353, 642, 3088, 2180, 4738, 3078, 3078, 2180, 2180, 2180, 2353, 642, 2353, 642, 2180 ], [ 7, 5132, 7, 7, 7, 5132, 5132, 6382, 3088, 2180, 1358, 2180, 2180, 6142, 6382, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 2353, 642, 2353, 642, 6550, 4738, 3078, 3078, 6550, 2180, 2180, 2180, 2353, 642, 2353, 5132 ], [ 7, 5132, 7, 7, 7, 5132, 5132, 642, 2180, 6550, 3772, 6550, 6142, 6382, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2353, 642, 2216, 1013, 2314, 2314, 2712, 5042, 642, 3088, 3088, 3088, 2353, 5132, 5132 ], [ 7, 5132, 7, 7, 6382, 3088, 3088, 2216, 5042, 5227, 2314, 2712, 429, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 6550, 2216, 6152, 5042, 1013, 2712, 5042, 5042, 2995, 5132, 5132, 5132, 5132, 5132, 5132 ], [ 7, 5132, 7, 6382, 3088, 3088, 6142, 5042, 5042, 1013, 2712, 5042, 5042, 6504, 5042, 5042, 6504, 6504, 5042, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 5042, 5042, 5042, 642, 2353, 5132, 5132, 5132, 5132, 5132, 5132 ], [ 7, 5132, 7, 5132, 5132, 5132, 6382, 6142, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 5042, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 6152, 5042, 642, 2353, 5132, 5132, 5132, 5132, 642, 3088, 3088 ], [ 7, 5132, 6382, 6142, 5132, 5132, 5132, 6382, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 2353, 5132, 5132, 5132, 5132, 5132, 2995, 5132, 5132 ], [ 6382, 6142, 5132, 6382, 3088, 3088, 3088, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 6142, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 5132, 642, 3088, 2353, 5132, 5132 ], [ 5132, 6382, 3088, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 6142, 5132, 5132, 5132, 6382, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 3088, 2353, 5132, 642, 3088, 3088 ], [ 3088, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 6142, 5132, 6382, 3088, 3088, 3088, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 3088, 2353, 642, 2180 ], [ 2180, 2180, 2180, 2180, 2180, 2180, 2180, 6142, 6382, 3088, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2180, 2353, 642 ] ] }, {"name": "upper", "width": 38, "height": 51, "linkWithCollision": false, "visible": 1, "tilesetName": "media/master.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] }, {"name": "collision", "width": 38, "height": 51, "linkWithCollision": false, "visible": 0, "tilesetName": "", "repeat": false, "preRender": false, "distance": "1", "tilesize": 16, "foreground": true, "data": [ [ 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1 ], [ 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1 ], [ 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0 ], [ 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1 ], [ 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1 ], [ 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1 ], [ 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1 ], [ 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1 ], [ 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1 ], [ 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1 ], [ 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1 ], [ 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1 ], [ 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1 ], [ 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ], [ 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0 ], [ 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ], [ 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1 ], [ 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0 ], [ 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0 ], [ 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ], [ 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ], [ 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1 ], [ 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0 ], [ 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ], [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ] }] } /*]JSON*/;
LevelRsMtPyreOutsideResources=[new ig.Image('media/master.png')];
});