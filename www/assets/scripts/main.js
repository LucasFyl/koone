/*jshint unused:false */
var _isSidebar = false;
var myScroll;
// Display sidebar if necesary
function isSidebar() {
    return(_isSidebar);
}
function setSidebar(val) {
	_isSidebar = val;
	var sW = $('.sidebar').width();
		
	if ( _isSidebar === true ) {
		TweenMax.to('.scrollContainer', 0.5, {marginLeft:sW + 'px',marginRight:(sW/2) + 'px',ease:Expo.easeOut});
		TweenMax.to('.sidebar', 0.5, {css:{x:'+=100%'},ease:Expo.easeOut});
		setTimeout(function () {
	        myScroll.refresh();
	    }, 10);
	} else if ( _isSidebar === false ) {
		TweenMax.to('.scrollContainer', 0.5, {margin:0,ease:Expo.easeOut});
		TweenMax.to('.sidebar', 0.5, {css:{x:'-=100%'},ease:Expo.easeOut});
		setTimeout(function () {
	        myScroll.refresh();
	    }, 550);
	}
}

function initGallery() {
	var totalWidths = -14, // -15 marginLeft -1px to be sure images fits the container
		boxHeight = $('#gallery').height();
		

	// Page specific override
	var foo = $('.sidebar').parent().width(),
		marginVal = ( (foo / 100) * 16.66666667 );
	if ($('.main').is('#album')) {
		setSidebar(false);
		totalWidths += 55;
	}
	if ($('.main').is('#about')) {
		setSidebar(false);
	}
	if ($('.main').is('#home')) {
		_isSidebar = true;
		TweenMax.set('.scrollContainer', {marginLeft:marginVal,marginRight:marginVal/2});
	}

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
					totalWidths += ( figure.width() + 15);
				}});
		}).promise().done(function(){
			TweenMax.set('#gallery', {width:totalWidths,height:boxHeight,onComplete:function(){
				initScroller();
			}});
		});
	};
	
	setSizes();
	// setSidebar();
}
$(document).ready(function(){
	setTimeout(function(){
		initGallery();
	}, 100);

	$('body').on('click', '.menu-trigger', function(e) {
		e.preventDefault();
		if( _isSidebar === true ) {
			setSidebar(false);
		} else if ( _isSidebar === false ) {
			setSidebar(true);
		}
	});
	
});
$( window ).load(function() { 

	'use strict';

	setTimeout(function(){
		TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeOut});
	}, 300);
	


});