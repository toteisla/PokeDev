ig.module('game.entities.grass')
.requires('impact.entity')
.defines(function() {

    EntityGrass = ig.Entity.extend({

        size: { x: 16, y: 16 },
        zPriority: 4, // Should be above player entities zPriority.
        timer: undefined, // Used simply to tell how long entity has existed.
        animSheet: new ig.AnimationSheet('media/rs.grass.png', 16, 16), // Load image resource.
        killTimer: null, // Used to keep entity alive briefly before killing.
        markedForDeath: false, // Is set to true when markForDeath() is called.


        // Start count-down until this entity will be killed.
        markForDeath: function() {
            this.killTimer.set(3); // Set the timer.
            this.markedForDeath = true; // Allow removal of entity.
        },


        // Save this entity from being killed.
        revive: function() {
            this.markedForDeath = false;
        },


        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.timer = new ig.Timer();
            this.killTimer = new ig.Timer(); // Create timer to count-down to entity's death.
            this.zIndex = this.zPriority + this.pos.y, // Set zIndex.
            // The number 6 does not exist in the sprite sheet and is used as a 'blank'.
            this.addAnim('static', (4 / 60), [6, 4], true);
            this.addAnim('rustle', (2 / 60), [6, 6, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4], true);
        },


        play: function() {
            this.anims.rustle.rewind(); // Rewind to first frame.
            this.currentAnim = this.anims.rustle; // Set animation.
        },


        // Override all update function.
        update: function() {
            // Update animations.
            if (this.currentAnim !== null) this.currentAnim.update();
            // Free up resources by killing entity if no longer needed.
            if (this.markedForDeath && this.killTimer.delta() >= 0) this.kill();
        }


    });
});