/*jshint unused:false, undef:false */
var pageInitialized = false;
var sidebarState = false;
var myScroll;
var resizeTimer;

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
function setSidebar(val) {
	sidebarState = val; // true of false
	var sW = $('.sidebar').width() + 15 + 35 + 'px';
		
	if ( sidebarState === true ) {
		TweenMax.to('.sidebar', 0.5, {x:0,ease:Expo.easeOut});
		setTimeout(animateInSidebar,250);
	} else if ( sidebarState === false ) {
		TweenMax.to('.sidebar', 0.5, {x:'-='+sW,ease:Expo.easeOut});
		setTimeout(setAnimators,500);
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
function pageloaded(){
	if ( $('#gallery').length ){initScroller();}
	TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeOut,delay:0.2});
}

$(document).ready(function(){
	// Set the sidebar to disabled by default
	var sW = $('.sidebar').width() + 15 + 35 + 'px';
	TweenMax.to('.sidebar', 0.5, {x:'-='+sW,ease:Expo.easeOut,onComplete:setAnimators});

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
	
	// Bind window resize to update iscroll when necessary
	$(window).on('resize', function(e) {
	  	if ($('#gallery').length) {
		  	clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
			  		myScroll.refresh();	
			}, 250);
	  	}
	});
});

$(function() {
    if(pageInitialized) {
    	return;	
    }
    pageInitialized = true;
    pageloaded();
});

	