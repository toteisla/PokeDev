ig.module('game.border-check')

.requires()

.defines(function() {

    BorderCheck = function(x, y) {

        if( x >= 960 && x <  1280 && y <  6080 && y >= 5760 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 3972; 
            ig.game.backgroundMaps[0]['data'][0][1] = 3972; 
            ig.game.backgroundMaps[0]['data'][1][0] = 3972; 
            ig.game.backgroundMaps[0]['data'][1][1] = 3972; 
            return true; 
        }

        else if( x >= 12160 && x <  12800 && y <  4160 && y >= 2880 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 1280 && x <  1600 && y <  320 && y >= 0 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 858; 
            ig.game.backgroundMaps[0]['data'][0][1] = 4620; 
            ig.game.backgroundMaps[0]['data'][1][0] = 1798; 
            ig.game.backgroundMaps[0]['data'][1][1] = 329; 
            return true; 
        }

        else if( x >= 5120 && x <  5760 && y <  320 && y >= 0 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][0][1] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][1] = 3560; 
            return true; 
        }

        else if( x >= 2240 && x <  2560 && y <  1280 && y >= 960 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 3214; 
            ig.game.backgroundMaps[0]['data'][0][1] = 3214; 
            ig.game.backgroundMaps[0]['data'][1][0] = 3214; 
            ig.game.backgroundMaps[0]['data'][1][1] = 3214; 
            return true; 
        }

        else if( x >= 7680 && x <  8960 && y <  1760 && y >= 1120 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 1920 && x <  2240 && y <  4800 && y >= 4480 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5976; 
            ig.game.backgroundMaps[0]['data'][0][1] = 6131; 
            ig.game.backgroundMaps[0]['data'][1][0] = 4994; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2848; 
            return true; 
        }

        else if( x >= 3200 && x <  3840 && y <  2560 && y >= 2240 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 10240 && x <  11520 && y <  2240 && y >= 1600 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 1920 && x <  2240 && y <  4160 && y >= 3840 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5976; 
            ig.game.backgroundMaps[0]['data'][0][1] = 6131; 
            ig.game.backgroundMaps[0]['data'][1][0] = 4994; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2848; 
            return true; 
        }

        else if( x >= 7680 && x <  8000 && y <  4800 && y >= 4160 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 640 && x <  1120 && y <  4160 && y >= 3680 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5976; 
            ig.game.backgroundMaps[0]['data'][0][1] = 6131; 
            ig.game.backgroundMaps[0]['data'][1][0] = 4994; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2848; 
            return true; 
        }

        else if( x >= 1920 && x <  2240 && y <  4480 && y >= 4160 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5976; 
            ig.game.backgroundMaps[0]['data'][0][1] = 6131; 
            ig.game.backgroundMaps[0]['data'][1][0] = 4994; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2848; 
            return true; 
        }

        else if( x >= 1120 && x <  1920 && y <  4160 && y >= 3840 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5976; 
            ig.game.backgroundMaps[0]['data'][0][1] = 6131; 
            ig.game.backgroundMaps[0]['data'][1][0] = 4994; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2848; 
            return true; 
        }

        else if( x >= 1920 && x <  3200 && y <  3840 && y >= 3520 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5976; 
            ig.game.backgroundMaps[0]['data'][0][1] = 6131; 
            ig.game.backgroundMaps[0]['data'][1][0] = 4994; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2848; 
            return true; 
        }

        else if( x >= 0 && x <  640 && y <  4160 && y >= 2880 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5976; 
            ig.game.backgroundMaps[0]['data'][0][1] = 6131; 
            ig.game.backgroundMaps[0]['data'][1][0] = 4994; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2848; 
            return true; 
        }

        else if( x >= 0 && x <  640 && y <  5440 && y >= 4160 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 0 && x <  1280 && y <  5760 && y >= 5440 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 3972; 
            ig.game.backgroundMaps[0]['data'][0][1] = 3972; 
            ig.game.backgroundMaps[0]['data'][1][0] = 3972; 
            ig.game.backgroundMaps[0]['data'][1][1] = 3972; 
            return true; 
        }

        else if( x >= 1280 && x <  2240 && y <  6080 && y >= 5760 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 2240 && x <  3200 && y <  6080 && y >= 5760 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 3200 && x <  3840 && y <  6080 && y >= 5120 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 3200 && x <  3840 && y <  4160 && y >= 2560 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 3200 && x <  3840 && y <  2240 && y >= 0 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5132; 
            ig.game.backgroundMaps[0]['data'][0][1] = 5132; 
            ig.game.backgroundMaps[0]['data'][1][0] = 5132; 
            ig.game.backgroundMaps[0]['data'][1][1] = 5132; 
            return true; 
        }

        else if( x >= 2560 && x <  3200 && y <  1280 && y >= 320 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5132; 
            ig.game.backgroundMaps[0]['data'][0][1] = 5132; 
            ig.game.backgroundMaps[0]['data'][1][0] = 5132; 
            ig.game.backgroundMaps[0]['data'][1][1] = 5132; 
            return true; 
        }

        else if( x >= 1600 && x <  3200 && y <  320 && y >= 0 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 858; 
            ig.game.backgroundMaps[0]['data'][0][1] = 4620; 
            ig.game.backgroundMaps[0]['data'][1][0] = 1798; 
            ig.game.backgroundMaps[0]['data'][1][1] = 329; 
            return true; 
        }

        else if( x >= 640 && x <  1280 && y <  1280 && y >= 0 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 858; 
            ig.game.backgroundMaps[0]['data'][0][1] = 4620; 
            ig.game.backgroundMaps[0]['data'][1][0] = 1798; 
            ig.game.backgroundMaps[0]['data'][1][1] = 329; 
            return true; 
        }

        else if( x >= 0 && x <  640 && y <  1920 && y >= 640 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 640 && x <  2240 && y <  2240 && y >= 1920 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5976; 
            ig.game.backgroundMaps[0]['data'][0][1] = 6131; 
            ig.game.backgroundMaps[0]['data'][1][0] = 4994; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2848; 
            return true; 
        }

        else if( x >= 2240 && x <  3200 && y <  2560 && y >= 2240 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][0][1] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][1] = 3560; 
            return true; 
        }

        else if( x >= 3840 && x <  5120 && y <  2560 && y >= 2240 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 4480 && x <  5120 && y <  2240 && y >= 0 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][0][1] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][1] = 3560; 
            return true; 
        }

        else if( x >= 5760 && x <  6400 && y <  1600 && y >= 0 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][0][1] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][1] = 3560; 
            return true; 
        }

        else if( x >= 6400 && x <  7680 && y <  1600 && y >= 1280 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5976; 
            ig.game.backgroundMaps[0]['data'][0][1] = 6131; 
            ig.game.backgroundMaps[0]['data'][1][0] = 4994; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2848; 
            return true; 
        }

        else if( x >= 6720 && x <  7360 && y <  2240 && y >= 1600 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 5120 && x <  7360 && y <  2560 && y >= 2240 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][0][1] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][1] = 3560; 
            return true; 
        }

        else if( x >= 8960 && x <  10240 && y <  2240 && y >= 960 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 10240 && x <  11520 && y <  1600 && y >= 960 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 8960 && x <  10240 && y <  3520 && y >= 2240 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 10240 && x <  11520 && y <  3520 && y >= 2240 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 10240 && x <  12160 && y <  4160 && y >= 3520 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 10240 && x <  11520 && y <  4800 && y >= 4160 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 8960 && x <  10240 && y <  4800 && y >= 4160 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 8000 && x <  8960 && y <  4800 && y >= 4160 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 6400 && x <  7680 && y <  4800 && y >= 4160 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 5120 && x <  6400 && y <  4800 && y >= 4160 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 3840 && x <  5120 && y <  4800 && y >= 4160 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 0 && x <  640 && y <  2880 && y >= 1920 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 5976; 
            ig.game.backgroundMaps[0]['data'][0][1] = 6131; 
            ig.game.backgroundMaps[0]['data'][1][0] = 4994; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2848; 
            return true; 
        }

        else if( x >= 3200 && x <  3840 && y <  5120 && y >= 4160 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][0][1] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][0] = 2413; 
            ig.game.backgroundMaps[0]['data'][1][1] = 2413; 
            return true; 
        }

        else if( x >= 1920 && x <  2240 && y <  2560 && y >= 2240 ) { 
            ig.game.backgroundMaps[0]['data'][0][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][0][1] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][0] = 3560; 
            ig.game.backgroundMaps[0]['data'][1][1] = 3560; 
            return true; 
        }

        return false; 

    }

})