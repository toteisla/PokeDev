ig.module('game.entities.tile-cursor')

.requires('impact.entity')

.defines(function() {

    EntityTileCursor = ig.Entity.extend({

        _wmIgnore: true,

        lineWidth: 2,

        lineColor: '#fff',

        init: function(x, y, settings) {
            this.parent(x, y, settings);

            // Get game tilesize.
            this.tilesize = ig.game.collisionMap.tilesize;

            // Set cursor size.
            this.size.x = this.size.y = this.tilesize;
        },

        update: function() {

            // Match position to tile mouse is over.
            this.pos.x = Math.floor((ig.input.mouse.x + ig.game.screen.x ) / this.tilesize) * this.tilesize;
            this.pos.y = Math.floor((ig.input.mouse.y + ig.game.screen.y ) / this.tilesize) * this.tilesize;

            var factory = ig.game.getEntitiesByType(EntityCameraDodgeFactory)[0];

            // Handle input.
            if( ig.input.pressed('mouse1') ) factory.click(this.pos.x, this.pos.y);
            else if (ig.input.pressed('mouse2') ) factory.remove(this.pos.x, this.pos.y);
        },



        draw: function() {

            ig.system.context.strokeStyle = this.lineColor;
            ig.system.context.lineWidth = this.lineWidth;

            // Draw box around tile.
            ig.system.context.strokeRect(
                ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - (this.lineWidth/2),
                ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - (this.lineWidth/2),
                (this.size.x + (this.lineWidth/2)) * ig.system.scale,
                (this.size.y + (this.lineWidth/2)) * ig.system.scale
            );
        }


    });
});