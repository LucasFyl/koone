/*jshint unused:false */
var _isSidebar = false;
var myScroll;
// Set parts to be animated
function setAnimators() {
	TweenMax.set('.fadein', {opacity:0});
	TweenMax.set('.frombottom', {css:{y:'+=40px'}});
	TweenMax.set('.fromleft', {css:{x:'-=50px'}});
}
function animateInSidebar(){
	TweenMax.staggerTo('.fadein', 0.25, {opacity:1,ease:Power2.easeOut}, 0.07);
	TweenMax.staggerTo('.frombottom', 0.25, {css:{y:0},ease:Power3.easeOut}, 0.07);
	TweenMax.staggerTo('.fromleft', 0.25, {css:{x:0},ease:Power3.easeOut}, 0.07);
}
// Display sidebar if necesary
function isSidebar() {
    return(_isSidebar);
}
function setSidebar(val) {
	_isSidebar = val;
	var sW = $('.sidebar').width();
		
	if ( _isSidebar === true ) {
		if ($('.main').is('#about') ) {
			TweenMax.to('.main', 0.5, {marginLeft:sW + 'px',marginRight:(sW/2) + 'px',ease:Expo.easeOut});
			
		} else {
			TweenMax.to('.scrollContainer', 0.5, {marginLeft:sW + 'px',marginRight:(sW/2) + 'px',ease:Expo.easeOut});
		}
		TweenMax.to('.sidebar', 0.5, {css:{x:'+=100%'},ease:Expo.easeOut});
		setTimeout(animateInSidebar,350);
		setTimeout(function () {
	        myScroll.refresh();
	    }, 10);
	} else if ( _isSidebar === false ) {
		if ($('.main').is('#about') ) {
			TweenMax.to('.main', 0.5, {margin:0,ease:Expo.easeOut});
		} else {
			TweenMax.to('.scrollContainer', 0.5, {margin:0,ease:Expo.easeOut});
		}
		TweenMax.to('.sidebar', 0.5, {css:{x:'-=100%'},ease:Expo.easeOut,onComplete:setAnimators});
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
		totalWidths += 55;
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
}
$(document).ready(function(){

	setSidebar(false);
	
	setTimeout(function(){
		initGallery();
	}, 100);

	$('body').on('click', '.sidebarTrigger', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
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
	}, 350);
	

});