ig.module('game.entities.sand-track')

.requires('impact.entity')

.defines(function() {

    EntitySandTrack = ig.Entity.extend({

        _wmIgnore: true,

        size: {
            x: 16,
            y: 16
        },

        // Entity will not persist without intervention.
        markedForDeath: true,

        // Load image resource.
        animSheet: new ig.AnimationSheet('media/rs.sand-track.png', 16, 16),

        init: function(x, y, settings) {
            this.parent(x, y, settings);
        },

        setAnimation: function() {

            var animSpeedMultiplier = 1.5;

            // Footsteps
            if (this.isFootprint) {

                // Create left animation.
                this.addAnim('left', 0.01667 * animSpeedMultiplier, [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 777, 1, 777, 1, 777, 1, 777, 1, 777, 1, 777, 1, 777, 1, 777], true);

                // Create Right animation.
                this.addAnim('right', 0.01667 * animSpeedMultiplier, [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 777, 1, 777, 1, 777, 1, 777, 1, 777, 1, 777, 1, 777, 1, 777], true);

                // Create up animation.
                this.addAnim('up', 0.01667 * animSpeedMultiplier, [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 777, 0, 777, 0, 777, 0, 777, 0, 777, 0, 777, 0, 777, 0, 777], true);

                // Create down animation.
                this.addAnim('down', 0.01667 * animSpeedMultiplier, [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 777, 0, 777, 0, 777, 0, 777, 0, 777, 0, 777, 0, 777, 0, 777], true);
            }

            // Tiretracks
            else {

                // Create left animation.
                this.addAnim('left', 0.01667 * animSpeedMultiplier, [
                3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 777, 3, 777, 3, 777, 3, 777, 3, 777, 3, 777, 3, 777, 3, 777], true);

                // Create Right animation.
                this.addAnim('right', 0.01667 * animSpeedMultiplier, [
                3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 777, 3, 777, 3, 777, 3, 777, 3, 777, 3, 777, 3, 777, 3, 777], true);

                // Create up animation.
                this.addAnim('up', 0.01667 * animSpeedMultiplier, [
                4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 777, 4, 777, 4, 777, 4, 777, 4, 777, 4, 777, 4, 777, 4, 777], true);

                // Create down animation.
                this.addAnim('down', 0.01667 * animSpeedMultiplier, [
                4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 777, 4, 777, 4, 777, 4, 777, 4, 777, 4, 777, 4, 777, 4, 777], true);
            }

            switch (this.facing) {
            case 'left':
            case 'right':
            case 'up':
            case 'down':

                // Set current animation.
                this.currentAnim = this.anims[this.facing];
                break;

            default:

                // Error if no direction supplied.
                throw new Error("SandTrack entity was spawned without the 'facing' property.");
            }
        },

        revive: function(player) {

            // Set animation in case of change.
            this.currentAnim = this.anims[player.facing];

            // Rewind animation.
            this.currentAnim.rewind();
        },

        update: function() {

            // Update animations.
            if (this.currentAnim != null) this.currentAnim.update();

            // Check if animation has finished.
            if (this.currentAnim.loopCount >= 1) {
                // Free up resources.
                this.kill();
            }
        }

    });
});