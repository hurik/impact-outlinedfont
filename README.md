Impact OutlinedFont
==========

#### OutlinedFont Class ####

This plugin for the [Impact Game Engine](http://impactjs.com/) adds fonts with outlines, which behave like normal fonts.


### Example ###

![Screen shot 1](/hurik/impact-outlinedfont/raw/master/example.png)


### Usage ###

Put the `outlinedfont.js` into your `lib/plugins/` directory and the `outlinedfont.png` in your`media/` directory and require it with `plugins.outlinedfont`. 
Load you font in your game class:

	// new OutlinedFont(path, outlineWith);
	// path       : Path to the font (Like in the normal font class)
	// outlineWith: Width of the outline in pixel
	font: new OutlinedFont('media/outlinedfont.png', 1),

Now you can write text the same way you would do it with the normal font class.

### Make own fonts ###

When you make your font, you have to add the width raise to the whitespace.


### Important information at the end ###

I was to lazy to make a second font with a outline, which is thicker than 1 pixel, so I don't know if the outlineWidth argument is working correctly with something bigger than 1.