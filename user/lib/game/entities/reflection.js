ig.module('game.entities.reflection')
.requires(
    'impact.entity',
    'plugins.joncom.image' // Adds flipX and flipY arguments to ig.Image.draw()
)
.defines(function() {

    EntityReflection = ig.Entity.extend({

        _wmIgnore: true,
        size: { x: 16, y: 16 },
        offset: { x: 8, y: -15 },
        state: 0, // The current drawn method that will be used.
        sequence: [0,0,0,1,1,1,1,1,0,0,0,2,2,2,2,2], // Sequence of states.
        frame: 0, // Current position in sequence.
        frameTime: 0.05, // How long each frame lasts.
        timer: null, // Used to calculate frames.
        follow: null, // Entity to follow.

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.timer = new ig.Timer(); // Create timer for calculating frames.
            if(!this.follow) throw "Reflection entity spawned without a target entity.";

            // TODO: Make a deep copy of target entity's animation sheet,
            // and apply a filter to it which increases the brightness.
            // http://impactjs.com/forums/private/opinions-on-image-manipulation
        },

        draw: function(reallyDraw) {

            // Only draw when the 'reallyDraw' param is true,
            // so it ignores the "normal" draw call.
            // Additionally, draw only if we shouldn't hide instead
            if (reallyDraw) {

                this.pos = this.follow.pos; // Copy coordinates of player.
                this.currentAnim = this.follow.currentAnim; // Copy animation of player.
                this.currentAnim.flip.y = true; // Flip vertically.

                // Draw entity.
                if (this.currentAnim) {

                    var tile = this.currentAnim.tile;
                    var tileWidth = this.currentAnim.sheet.width;
                    var tileHeight = this.currentAnim.sheet.height;
                    var sheetWidth = this.currentAnim.sheet.image.width;
                    var sheetHeight = this.currentAnim.sheet.image.height;
                    var targetX = this.pos.x - this.offset.x - ig.game._rscreen.x;
                    var targetY = this.pos.y - this.offset.y - ig.game._rscreen.y;
                    var sourceX = (tile * tileWidth) % sheetWidth;
                    var sourceY = Math.floor((tile * tileWidth) / sheetWidth) * tileHeight;
                    var flipX = this.currentAnim.flip.x;
                    var flipY = this.currentAnim.flip.y;

                    if(this.state === 0) {
                        // Draw normally.
                        this.currentAnim.draw(targetX, targetY);
                    } else if(this.state === 1) {
                        // Draw with right-half shifted to the right.
                        this.currentAnim.sheet.image.draw((flipX ? targetX + (tileWidth / 2) : targetX), targetY, sourceX, sourceY, (tileWidth / 2) + 1, tileHeight, flipX, flipY);
                        this.currentAnim.sheet.image.draw((flipX ? targetX : targetX + (tileWidth / 2) + 1), targetY, sourceX + (tileWidth / 2), sourceY, tileWidth / 2, tileHeight, flipX, flipY);
                    } else if(this.state === 2) {
                        // Draw with left-half shifted to the right.
                        this.currentAnim.sheet.image.draw((flipX ? targetX + (tileWidth / 2) : targetX + 1), targetY, sourceX, sourceY, tileWidth / 2, tileHeight, flipX, flipY);
                        this.currentAnim.sheet.image.draw((flipX ? targetX + 1 : targetX + (tileWidth / 2)), targetY, sourceX + (tileWidth / 2), sourceY, tileWidth / 2, tileHeight, flipX, flipY);
                    }

                }

                // Restore vertical flip.
                this.currentAnim.flip.y = false;
            }
        },

        update: function() {
            if (this.follow._killed) this.kill(); // Kill entity if target was killed.
            var frameTotal = Math.floor(this.timer.delta() / this.frameTime); // Get total frames elapsed.
            this.frame = frameTotal % this.sequence.length; // Where in the sequence are we?
            this.state = this.sequence[ this.frame ]; // Get distortion state from sequence.
            this.parent(); // Call parent class.
        },


        kill: function() {
            this.follow = null; // Break pointer for garbage-collection.
            this.parent(); // Call parent class.
        }


    });
});