ig.module( 
    'plugins.outlinedfont' 
)
.requires(
	'impact.font'
)
.defines(function() {

OutlinedFont = ig.Font.extend({

    outlineWidth: 1,

    init: function(path, outlineWidth) {
        this.outlineWidth = outlineWidth;

        this.parent(path);
    },

    draw: function(text, x, y, align) {
        if (typeof(text) != 'string') {
            text = text.toString();
        }

        // Multiline?
        if (text.indexOf('\n') !== -1) {
            var lines = text.split('\n');
            for (i = 0; i < lines.length; i++) {
                // this.draw(lines[i], x, y + i * this.height, align);
                this.draw(lines[i], x, y + i * (this.height - this.outlineWidth), align);
            }
            return;
        }

        if (align == ig.Font.ALIGN.RIGHT || align == ig.Font.ALIGN.CENTER) {
            if (align == ig.Font.ALIGN.RIGHT) {
                x += this.outlineWidth;
            }

            // var width = 0;
            var width = (2 * this.outlineWidth);
            for (var i = 0; i < text.length; i++) {
                var c = text.charCodeAt(i);
                // width += this.widthMap[c - this.firstChar] + 1;
                width += this.widthMap[c - this.firstChar] + 1 - (2 * this.outlineWidth);
            }
            x -= align == ig.Font.ALIGN.CENTER ? width / 2 : width;
        }

        if (align == ig.Font.ALIGN.LEFT) {
            x -= this.outlineWidth;
        }


        for (var i = 0; i < text.length; i++) {
            var c = text.charCodeAt(i);
            x += this._drawChar(c - this.firstChar, x, y);
        }
        ig.Image.drawCount += text.length;
    },

    _drawChar: function(c, targetX, targetY) {
        if (!this.loaded || c < 0 || c >= this.indices.length) {
            return 0;
        }

        var scale = ig.system.scale;


        var charX = this.indices[c] * scale;
        var charY = 0;
        var charWidth = this.widthMap[c] * scale;
        var charHeight = (this.height - 2) * scale;

        ig.system.context.drawImage(
        this.data, charX, charY, charWidth, charHeight, ig.system.getDrawPos(targetX), ig.system.getDrawPos(targetY), charWidth, charHeight);

        // return this.widthMap[c] + 1;
        return this.widthMap[c] + 1 - (2 * this.outlineWidth);
    }
});

});