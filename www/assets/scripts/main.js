/*jshint unused:false, undef:false */

var sidebarState = false;
var myScroll;
var resizeTimer;
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
    return(sidebarState);
}
function setSidebar(val) {
	sidebarState = val; // true of false
	var sW = $('.sidebar').width() + 15 + 35 + 'px';
		
	if ( sidebarState === true ) {
		TweenMax.to('.sidebar', 0.5, {x:0,ease:Expo.easeOut});
		// TweenMax.to('main .content > div', 0.5, {x:'+='+sW,ease:Expo.easeOut});
		setTimeout(animateInSidebar,250);
		// if ($('.main').is('#about') ) {
		// 	// TweenMax.to('.main', 0.5, {marginLeft:sW + 'px',marginRight:(sW/2) + 'px',ease:Expo.easeOut});
		// 	TweenMax.to('.container', 0.5, {x:'+='+sW+'px',ease:Expo.easeOut});
		// } else {
		// 	// TweenMax.to('.scrollContainer', 0.5, {marginLeft:sW + 'px',marginRight:(sW/2) + 'px',ease:Expo.easeOut});
		// 	TweenMax.to('.scrollContainer', 0.5, {x:'+='+sW+'px',ease:Expo.easeOut});
		// }
		// TweenMax.to('.sidebar', 0.5, {css:{x:100},ease:Expo.easeOut});
	} else if ( sidebarState === false ) {
		TweenMax.to('.sidebar', 0.5, {x:'-='+sW,ease:Expo.easeOut});
		// TweenMax.to('main .content > div', 0.5, {x:'-='+sW,ease:Expo.easeOut});
		setTimeout(setAnimators,500);

		// if ($('.main').is('#about') ) {
		// 	// TweenMax.to('.main', 0.5, {margin:0,ease:Expo.easeOut});
		// 	TweenMax.to('.container', 0.5, {x:'-='+sW+'px',ease:Expo.easeOut});
		// } else {
		// 	// TweenMax.to('.scrollContainer', 0.5, {margin:0,ease:Expo.easeOut});
		// 	TweenMax.to('.scrollContainer', 0.5, {x:'-='+sW+'px',ease:Expo.easeOut});
		// }
		// TweenMax.to('.sidebar', 0.5, {css:{x:-100},ease:Expo.easeOut,onComplete:setAnimators});
	}
}
function initScroller(){
	myScroll = new IScroll('.scrollContainer', {
    	scrollX: true, 
    	scrollY: false,
    	scrollbars: 'custom',
    	mouseWheel: true,
    	keyBindings: true,
    	fadeScrollbars: false
    });
}
// function updateGallery() {
// 	var totalWidths = -14, // -15 marginLeft -1px to be sure images fits the container
// 		boxHeight = $('#gallery').height();

// 	if ($('.main').is('#album')) {
// 		totalWidths += 80;
// 	}

// 	// Set figure Height and update totalwidth value
// 	$('#gallery > figure').each(function(){
// 		var figure = $(this);
// 		TweenMax.set(figure, {height:'100%',onComplete:function(){
// 			totalWidths += ( figure.width() + 17);
// 		}});
// 	}).promise().done(function(){
// 		// reset correct width for gallery and refresh iscroll
// 		TweenMax.set('#gallery', {width:totalWidths,onComplete:function(){
// 			myScroll.refresh();
// 		}});
// 	});

// }
// function initGallery() {
// 	var totalWidths = -14, // -15 marginLeft -1px to be sure images fits the container
// 		boxHeight = $('#gallery').height();

// 	// Page specific override
// 	if ($('.main').is('#album')) {
// 		totalWidths += 80;
// 	}

// 	// Initiate horizontal scroller  |  http://iscrolljs.com/
// 	var initScroller = function() {
// 	    myScroll = new IScroll('.scrollContainer', {
// 	    	scrollX: true, 
// 	    	scrollY: false,
// 	    	scrollbars: 'custom',
// 	    	mouseWheel: true,
// 	    	keyBindings: true,
// 	    	fadeScrollbars: false
// 	    });
// 	    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
// 	};

// 	// Set images and scrolling area size 
// 	var setSizes = function(){
// 		// Set image Height and calculate width
// 		$('#gallery > figure').each(function(){
// 			var figure = $(this);
// 			totalWidths += ( figure.width() + 17);
// 		}).promise().done(function(){
// 			TweenMax.set('#gallery', {width:totalWidths,onComplete:function(){
// 				initScroller();
// 			}});
// 		});
// 	};
	
// 	setSizes();
// }
$(document).ready(function(){


	// Set the sidebar to disabled by default
	var sW = $('.sidebar').width() + 15 + 35 + 'px';
	TweenMax.to('.sidebar', 0.5, {x:'-='+sW,ease:Expo.easeOut,onComplete:setAnimators});

	setTimeout(function(){

		if ( $('#gallery').length ){initScroller();}

		TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeOut});
	}, 2000);

	// bind menu link for sidebar animation:
	$('body').on('click', '.sidebarTrigger', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		if( sidebarState === true ) {
			setSidebar(false);
		} else if ( sidebarState === false ) {
			setSidebar(true);
		}
	});
});


// Bind window resize to update iscroll when necessary
// $(window).on('resize', function(e) {

//   	clearTimeout(resizeTimer);
	
// 	resizeTimer = setTimeout(function() {
// 	  	if ($('#gallery').length) {
// 	  		updateGallery();	
// 	  	}
// 	}, 250);

// });