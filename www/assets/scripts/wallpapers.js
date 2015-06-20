/*jshint unused:false */
function hoverInWp() {
	var _this = $(this),
		hover = _this.find('figcaption'),
		el = hover.find('h3, > div > div');
	TweenMax.to(hover, 0.5, {opacity:1,ease:Expo.easeInOut});
	TweenMax.staggerTo(el, 0.7, {css:{y:0,opacity:1},ease:Expo.easeOut,delay:0.5}, 0.1);
}
function hoverOutWp() {
	var _this = $(this),
		hover = _this.find('figcaption'),
		el = hover.find('h3, > div > div');
	TweenMax.to(el, 0.3, {css:{y:20,opacity:0},ease:Expo.easeOut});
	TweenMax.to(hover, 0.7, {opacity:0,ease:Expo.easeOut,delay:0.3});
}

$(document).ready(function(){

	"use strict";
	// set hover elements for animation:
	TweenMax.set('figcaption h3, figcaption > div > div', {css:{y:20}});
	// bind hover intent on image:
	$('#gallery figure').hoverIntent(hoverInWp, hoverOutWp);
	// trick to maintain hover state when download link is hovered:
	$('ficaption a').hover(function(){
		var _this = $(this),
		hover = _this.find('figcaption'),
		el = hover.find('h3, > div > div');
		TweenMax.set(hover, {opacity:1});
	});
});