ig.module('game.entities.screen-fader')

.requires('impact.entity', 'plugins.screen-fader')

.defines(function() {

    EntityScreenFade = ig.Entity.extend({

        _wmIgnore: true,

        init: function() {
            this.parent();
			
			this.screenFader = new ig.ScreenFader({ fade: 'out', speed: 0.5 });
			this.screenFadeIn = new ig.ScreenFader({ fade: 'out', speed: 0.4 });
			this.screenFadeOut = new ig.ScreenFader( {  fade: 'in', speed: 0.8 } );

        },

        draw: function() {
			
			this.screenFader.draw();
			
			// Call parent.
            this.parent();
	
        }


    });
});