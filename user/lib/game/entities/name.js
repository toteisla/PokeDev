ig.module('game.entities.name')
.requires('impact.entity', 'impact.font')
.defines(function() {

    EntityName = ig.Entity.extend({

        _wmIgnore: true,
        size: { x: 16, y: 16 },
        color: 'white', // What color of font to use.
        follow: null, // Reference of entity of which to follow.
        hideTimer: null, // Used to temporarily stop drawing.
        fonts: {
            white: new ig.BorderFont('media/font.04b03.png'),
            blue: new ig.BorderFont('media/font.04b03.png', { borderColor: '#284CA2' }),
            green: new ig.BorderFont('media/font.04b03.png', { borderColor: '#54AA01' })
        },

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.hideTimer = new ig.Timer();
            if(!this.follow) throw "EntityName spawned without an entity to follow.";
            if(typeof this.fonts[this.color] === 'undefined') throw "EntityName spawned with invalid color.";
        },


        update: function() {
            // Kill entity if player no longer exists.
            if (this.follow._killed) this.kill();
        },


        draw: function(reallyDraw) {
            // Only draw when the 'reallyDraw' param is true,
            // so it ignores the "normal" draw call.
            // Additionally, draw only if we shouldn't hide instead
            if (reallyDraw && this.hideTimer.delta() >= 0) {
                // Use position of entity being we are following.
                this.pos = this.follow.pos;
                // Draw font to screen.
                this.fonts[this.color].draw(this.follow.name, this.pos.x - ig.game.screen.x + this.size.x / 2, this.pos.y - ig.game.screen.y - this.size.y, ig.Font.ALIGN.CENTER);
            }
            this.parent();
        }


    });
});