var myScroll,
	isSidebar = false;

function loaded() {
    myScroll = new IScroll('.scrollContainer', {
    	scrollX: true, 
    	scrollY: false,
    	scrollbars: true,
    	mouseWheel: true,
    	keyBindings: true,
    	fadeScrollbars: true
    	// bindToWrapper: true
    });
}

function homeSidebarOverride() {
	if ( isSidebar === true ) {
		var	marginVal = 25;
		TweenMax.set('.scrollContainer', {marginLeft:marginVal+'%'});
	} else {
		TweenMax.set('.scrollContainer', {marginLeft:0});
	}
}

function initGallery() {
	var totalWidths = -20,
		boxHeight = $('#gallery').height();
	if ($('.main').is('#album')) {totalWidths += 50;}
	var setSizes = function(){
		// Set image Height and calculate width
		$('#gallery > figure').each(function(){
			var figure = $(this);
				// aphoto = $(this).find('img');
				TweenMax.set(figure, {height:boxHeight,onComplete:function(){
					totalWidths += ( figure.width() + 20);
				}});
		});
		setTimeout(function(){
			// Set gallery size
			TweenMax.set('#gallery', {width:totalWidths,height:boxHeight,onComplete:function(){
				loaded();
			}});
		},100);
	};
	
	var setSidebar = function() {
		if ( isSidebar === true ) {
			$('.sidebar').show();
		} else if ( isSidebar === false ) {
			$('.sidebar').hide();
		}
	};


	setSizes();
	if ( $('.main').is('#home') ) { 
		isSidebar = true; 
		homeSidebarOverride();
	}
	setSidebar();
}

$( document ).ready(function(){

	'use strict';

	initGallery();

});