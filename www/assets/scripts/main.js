var myScroll;

function loaded() {
    myScroll = new IScroll('.scrollContainer', {
    	scrollX: true, 
    	scrollY: false,
    	scrollbars: false,
    	mouseWheel: true,
    	keyBindings: true,
    	fadeScrollbars: true
    	// bindToWrapper: true
    });
}

function setCorrectSize() {
	var totalWidths = 300,
		boxHeight = $('#gallery').height();

	// Set image Height and calculate width
	$('#gallery > figure').each(function(){
		var figure = $(this),
			aphoto = $(this).find('img');
			TweenMax.set(figure, {height:boxHeight,onComplete:function(){
				totalWidths += aphoto.width();
			}});
	});

	// Set gallery size
	TweenMax.set('#gallery', {width:totalWidths,height:boxHeight,onComplete:function(){
		loaded();
	}});
}

$( document ).ready(function(){

	'use strict';

	setCorrectSize();


	// setTimeout(function(){
	// 	TweenMax.to('#gallery', 2, {left:'-100%',ease:Power4.easeInOut});
	// },1000);

});