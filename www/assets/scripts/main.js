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
		var	marginVal = 8;
		TweenMax.set('.scrollContainer', {marginLeft:marginVal+'%'});
	} else {
		TweenMax.set('.scrollContainer', {marginLeft:0});
	}
}

function initGallery() {
	var totalWidths = -19, // 20 margin -1px to be sure images fits the container
		boxHeight = $('#gallery').height();

	if ($('.main').is('#album')) {totalWidths += 50;}
	var setSizes = function(){
		// Set image Height and calculate width
		$('#gallery > figure').each(function(){
			var figure = $(this);
				TweenMax.set(figure, {height:boxHeight,onComplete:function(){
					totalWidths += ( figure.width() + 20);
				}});
		}).promise().done(function(){
			TweenMax.set('#gallery', {width:totalWidths,height:boxHeight,onComplete:function(){
				loaded();
			}});
		});
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
$(document).ready(function(){
	setTimeout(function(){
		initGallery();
	}, 100);
	
});
$( window ).load(function() { 

	'use strict';

	setTimeout(function(){
		TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeOut});
	}, 300);
	

});