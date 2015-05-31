/*jshint unused:false */
var _isSidebar = false;

// Display sidebar if necesary
function isSidebar() {
    return(_isSidebar);
}
function setSidebar() {
	if ( _isSidebar === true ) {
		$('.sidebar').show();
		return 'sidebar';
	} else if ( _isSidebar === false ) {
		$('.sidebar').hide();
		return 'no sidebar';
	}
}

function initGallery() {
	var myScroll,
		totalWidths = -19, // -20 marginLeft -1px to be sure images fits the container
		boxHeight = $('#gallery').height();
		

	// Page specific override
	var foo = $('.sidebar').parent().width(),
		marginVal = ( (foo / 100) * 16.66666667 );
	if ($('.main').is('#album')) {totalWidths += 50;}
	if ($('.main').is('#home')) {_isSidebar = true;TweenMax.set('.scrollContainer', {marginLeft:marginVal,marginRight:marginVal/2});}

	// Initiate horizontal scroller  |  http://iscrolljs.com/
	var initScroller = function() {
	    myScroll = new IScroll('.scrollContainer', {
	    	scrollX: true, 
	    	scrollY: false,
	    	scrollbars: true,
	    	mouseWheel: true,
	    	keyBindings: true,
	    	fadeScrollbars: true
	    });
	};

	// Set images and scrolling area size 
	var setSizes = function(){
		// Set image Height and calculate width
		$('#gallery > figure').each(function(){
			var figure = $(this);
				TweenMax.set(figure, {height:boxHeight,onComplete:function(){
					totalWidths += ( figure.width() + 20);
				}});
		}).promise().done(function(){
			TweenMax.set('#gallery', {width:totalWidths,height:boxHeight,onComplete:function(){
				initScroller();
			}});
		});
	};
	
	setSizes();
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