ig.module('game.entities.rain-drop')

.requires('impact.entity')

.defines(function() {

    EntityRainDrop = ig.Entity.extend({

        _wmIgnore: true,

        size: {
            x: 16,
            y: 32
        },

        vel: {

            // Move 6.5 pixels 60 times per second.
            x: (-13 * 30),

            // Move 13 pixels 60 times per second.
            y: (13 * 60)
        },

        // Load image resource.
        animSheet: new ig.AnimationSheet('media/rs.rain-drop.png', 16, 32),

        init: function(x, y, settings) {
            this.parent(x, y, settings);

            // Set up animation.
            this.addAnim('fall', 1, [0], true);
            this.addAnim('hit', (1 / 60), [1, 1, 1, 2, 2, 3, 3, 3], true);

            // Set current animation.
            this.currentAnim = this.anims.fall;

            // Prevent speed capping.
            this.maxVel.x = Math.abs(this.vel.x);
            this.maxVel.y = Math.abs(this.vel.y);

            // Moment that entity goes off-screen.
            this.maxTimeX = (ig.game.screen.x - this.pos.x) / this.vel.x
            this.maxTimeY = (ig.system.height - this.pos.y + ig.game.screen.y - this.size.y) / this.vel.y;

            // Which happens sooner?
            this.maxTime = (this.maxTimeX > this.maxTimeY ? this.maxTimeY : this.maxTimeX);

            // For knowing when rain hits the ground.
            this.hitTimer = new ig.Timer();

            // Random time between start and max allowable time.
            this.hitTimer.set(Math.random() * this.maxTime);

            // Set zIndex above all player.
            this.zIndex = this.pos.y + ig.system.height;

        },

        handleMovementTrace: function(res) {

            // This completely ignores the trace result (res) and always
            // moves the entity according to its velocity
            this.pos.x += this.vel.x * ig.system.tick;
            this.pos.y += this.vel.y * ig.system.tick;
        },

        update: function() {

            if (this.hitTimer.delta() >= 0 && this.currentAnim == this.anims.fall) {

                // Stop moving.
                this.vel.x = this.vel.y = 0;

                // New animation.
                this.currentAnim = this.anims.hit;

                // First frame.
                this.currentAnim.rewind();

            } else if (this.currentAnim == this.anims.hit) {

                // Check if animation has finished.
                if (this.currentAnim.loopCount >= 1) {

                    // Free up resources.
                    this.kill();
                }
            }

            // Call parent.
            this.parent();
        }


    });
});