ig.module('game.entities.ash-puff')

.requires('impact.entity')

.defines(function() {

    EntityAshPuff = ig.Entity.extend({

        _wmIgnore: true,
        size: { x: 16, y: 16 },
        zPriority: 7, // Should be higher than players and grass entities.
        animSheet: new ig.AnimationSheet('media/rs.ash-puff.png', 16, 16),

        init: function(x, y, settings) {
            this.parent(x, y, settings);

            // Tile 5 does not exist, used to add blank frames.
            this.addAnim('puff', (1 / 60), [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], true);

            this.currentAnim = this.anims.puff; // Set current animation.
            this.zIndex = this.zPriority + this.pos.y;
        },

        update: function() {

            // Update animation frames.
            if (this.currentAnim) this.currentAnim.update();

            // Remove entity after animation finishes.
            if (this.currentAnim.loopCount >= 1) this.kill();
        }

    });
});