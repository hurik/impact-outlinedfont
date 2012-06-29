# THIS PLUGIN IS OBSOLETE!
Since [Impact 1.20](http://impactjs.com/blog/2012/05/impact-1-20) letterSpacing and lineSpacing properties were added for fonts. This two properties are making the same thing like my plugin and they make it better.

So I deleted the `outlinedfont.js` and this repo is here only to get the outlined font and for information.

## Example
![Screen shot 1](/hurik/impact-outlinedfont/raw/master/example.png)

## How to use it
1. Put the `outlinedfont.png` in your`media/` directory.
1. In your game class:
	
```
...

MyGame = ig.Game.extend({
	
	// Load a font
	font2: new ig.Font( 'media/outlinedfont.png' ),

	init: function() {
		// Here we set the properties of the font, so that it behaves like a normal one
		this.font.letterSpacing = -1;
		this.font.lineSpacing = -2;
	},
		
	...
		
	draw: function() {
		this.parent();
			
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
			
		this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});

...
```