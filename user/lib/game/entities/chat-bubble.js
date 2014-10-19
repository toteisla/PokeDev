ig.module('game.entities.chat-bubble')
.requires('impact.entity', 'impact.font')
.defines(function() {

    EntityChatBubble = ig.Entity.extend({

        _wmIgnore: true,
        size: { x: 16, y: 16 },
        msg: '', // Raw, unprocessed message.
        padding: 2, // Space between text and outside of bubble.
        follow: null, // Reference of entity of which to follow.
        toPrint: '', // Processed version of msg.
        msgMaxWidth: 100, // Maximum width in pixels for text.
        timer: null, // Used to kill() old chat-bubbles.
        lifespan: 3, // Time in seconds before entity is killed.
        wordDuration: 1, // This number of seconds per character.
        lifeMinimum: 1.5, // Min lifespan.
        lifeMaximum: 5, // Max allowable lifespan.
        heightOfMessage: 0, // This value is calculated later.
        longestLine: 0, // This value is calculated later.
        spaceBetweenLines: 2, // How much space does Impact put between lines?
        topLeft: new ig.Image('media/chat-bubble-tleft.png'),
        topRight: new ig.Image('media/chat-bubble-tright.png'),
        bottomLeft: new ig.Image('media/chat-bubble-bleft.png'),
        bottomRight: new ig.Image('media/chat-bubble-bright.png'),
        pointer: new ig.Image('media/chat-bubble-point.png'),
        fill: new ig.Image('media/chat-bubble-fill.png'),
        font: new ig.BorderFont('media/font.04b03.png', { borderColor: '#444444' }),


        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.timer = new ig.Timer(); // Create timer for death count-down.
            this.process(); // Prepare the message before it can be drawn.

            // Calculate lifespan.
            this.lifespan = this.wordCount * this.wordDuration;
            if(this.lifespan<this.lifeMinimum) this.lifespan = this.lifeMinimum;
            else if(this.lifespan>this.lifeMaximum) this.lifespan = this.lifeMaximum;

            this.timer.set(this.lifespan); // Start count-down to this entity's death.
        },


        draw: function(reallyDraw) {
            // Only draw when the 'reallyDraw' param is true,
            // so it ignores the "normal" draw call
            if (reallyDraw) {
                // Use the position of the entity which we are following.
                if (this.follow) this.pos = this.follow.pos;
                // Position the chat bubble above the target's head.
                var x = this.pos.x - ig.game.screen.x + this.size.x / 2;
                var y = this.pos.y - ig.game.screen.y - this.size.y - this.heightOfMessage + 2;
                // Assume all corner images share the same dimensions.
                var cornerWidth = this.topLeft.width;
                var cornerHeight = this.topLeft.height;
                // Fill in rectangles.
                this.fill.draw(x - this.longestLine / 2 - this.padding - cornerWidth, y - this.padding, 0, 0, this.longestLine + this.padding * 2 + cornerWidth * 2, this.heightOfMessage + this.padding * 2);
                this.fill.draw(x - this.longestLine / 2 - this.padding, y - this.padding - cornerHeight, 0, 0, this.longestLine + this.padding * 2, this.topLeft.height);
                this.fill.draw(x - this.longestLine / 2 - this.padding, y + this.heightOfMessage + this.padding, 0, 0, this.longestLine + this.padding * 2, this.topLeft.height);
                // Draw corners.
                this.topLeft.draw(x - this.longestLine / 2 - this.padding - cornerWidth, y - this.padding - cornerHeight);
                this.topRight.draw(x + this.longestLine / 2 + this.padding, y - this.padding - cornerHeight);
                this.bottomLeft.draw(x - this.longestLine / 2 - this.padding - cornerWidth, y + this.heightOfMessage + this.padding);
                this.bottomRight.draw(x + this.longestLine / 2 + this.padding, y + this.heightOfMessage + this.padding);
                this.pointer.draw(x - this.pointer.width / 2, y + this.heightOfMessage + this.padding + cornerHeight);
                // Draw message.
                this.font.draw(this.toPrint, x, y, ig.Font.ALIGN.CENTER);
            }
        },


        update: function() {
            // Kill this entity after it's lifespan.
            if (this.timer.delta() >= 0) this.kill();
        },


        // Breaks up msg into an array of small messages which don't exceed msgMaxWidth.
        process: function() {

            var words = this.msg.split(' '); // Break into individual words.
            this.wordCount = words.length; // Record word count.
            var lines = []; // An array where we'll store our <=msgMaxWidth lines.
            var currentLine = ''; // Initialize our first line.

            // Try adding words to the current line.
            for (var i = 0; i < words.length; i++) {
                var space = (i === 0) ? '' : ' '; // Only add a space if it's not the first word.
                var tryStr = currentLine + space + words[i]; // Add a word to the current line.

                // Commit word to current line if it fits.
                if (this.font.widthForString(tryStr) <= this.msgMaxWidth) currentLine = tryStr;
                else {
                    this.recordLongestLine(currentLine); // Record potential longest line.
                    lines.push(currentLine); // Add current line to the rest.
                    currentLine = words[i]; // Start a new line off with one word.
                }
            }

            // Add the final line.
            if (currentLine !== '') {
                this.recordLongestLine(currentLine); // Record potential longest line.
                lines.push(currentLine); // Add current line to the rest.
            }

            // Combine lines back together into a single string.
            for (var j = 0; j < lines.length; j++) {
                if (j !== 0) this.toPrint += "\n"; // Set new line character if not the first line.
                this.toPrint += lines[j]; // Add current line.
                this.heightOfMessage += this.font.height; // Add to message height.
            }

            this.heightOfMessage -= 3; // Shave the few pixels Impact adds below text.
            this.longestLine -= 1; // Removes extra pixel added by Impact - DO NOT CHANGE!
        },


        // Compares line width to longest recorded width and keeps highest value.
        recordLongestLine: function(line) {
            var lineWidth = this.font.widthForString(line); // Get width of current line.
            if (lineWidth > this.longestLine) this.longestLine = lineWidth; // Record this line as the new "longest" if it is.
        }


    });

});
