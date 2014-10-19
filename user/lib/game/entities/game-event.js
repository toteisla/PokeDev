ig.module('game.entities.game-event')
.requires('impact.entity')
.defines(function() {

    EntityGameEvent = ig.Entity.extend({

        size: { x: 16, y: 16 },
        action: null, // Event action
		values: null, // Event passed values
        type: null, // Type of the event
        animSheet: new ig.AnimationSheet('media/entity-icons.png', 16, 16), // Load Weltmeister icon resource.


        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('weltmeister', 0.1, [2]); // Specify which icon to use.
        },


        ready: function() {

            // Make sign entity invisible in-game.
            delete this.currentAnim;
        },

        update: function() {
            // Call parent.
            this.parent();
        },

    });
});