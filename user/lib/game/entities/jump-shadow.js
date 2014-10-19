ig.module('game.entities.jump-shadow')
.requires('impact.entity')
.defines(function() {

    EntityJumpShadow = ig.Entity.extend({

        _wmIgnore: true,
        speed: 69, // Should be the same as player walk speed.
        size: { x: 16, y: 16 },
        offset: { x: 0, y: -8 },
        animSheet: new ig.AnimationSheet('media/rs.jump.png', 16, 8),
        direction: null, // Direction to move, supplied when spawned.
        arrived: false, // will be true when no longer moving and aligned

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            // Define and set animation sequence.
            this.addAnim('jump', (8 / 60), [0, 0, 0, 0, 1, 2, 3, 3], true);
            // Get map tilesize.
            var tilesize = ig.game.collisionMap.tilesize;
            // Set movement speed.
            if (this.direction === 'left' || this.direction === 'right') this.vel.x = (this.direction === 'left' ? -1 : 1) * this.speed;
            else if (this.direction === 'up' || this.direction === 'down') this.vel.y = (this.direction === 'up' ? -1 : 1) * this.speed;
            // Set destination.
            if (this.direction === 'left' || this.direction === 'right') this.destinationX = this.pos.x + (this.direction === 'left' ? -1 : 1) * tilesize * 2;
            else if (this.direction === 'up' || this.direction === 'down') this.destinationY = this.pos.y + (this.direction === 'left' ? -1 : 1) * tilesize * 2;
        },

        // Stop the entity and align to grid.
        stopMoving: function(axis) {
            // Stop moving.
            this.vel[axis] = 0;
            // Align to grid.
            this.pos[axis] = this['destination' + axis.toUpperCase()];
            // No need to stop again.
            this.arrived = true;
        },

        update: function() {

            // Stop moving if reached destination.
            if (!this.arrived && this.direction === 'left' && this.pos.x <= this.destinationX) this.stopMoving('x');
            else if (!this.arrived && this.direction === 'right' && this.pos.x >= this.destinationX) this.stopMoving('x');
            else if (!this.arrived && this.direction === 'up' && this.pos.y <= this.destinationY) this.stopMoving('y');
            else if (!this.arrived && this.direction === 'down' && this.pos.y >= this.destinationY) this.stopMoving('y');

            // TODO: When (this.currentAnim.frame === 4), this entity should be drawn
            // above the player. After that it should be drawn below the player again.

            // Kill the entity on the last frame.
            if (this.currentAnim.frame == this.currentAnim.sequence.length - 1) this.kill();

            // Call parent.
            this.parent();
        }

    });

});
