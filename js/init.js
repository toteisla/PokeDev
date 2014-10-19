// Initialize JavaScript bccf3 18c72dda387 88a4cee258dcfda8
// RagBrasil
// -------------------------------------------------------
// CSS Hax
// -------------------------------------------------------

$("#navbar ul li:last").addClass('noborder');
$("#secondary .stat-icon:first").addClass('first');
$(".sb-ranking tr:odd").addClass('odd');

// -------------------------------------------------------
// Secondary Bar Animation
// -------------------------------------------------------
/*
$(document).ready(function() {
  $("#secondary").addClass('ready');
  $("#secondary").animate({
    opacity: 1.0,
    height: "55px"
  }, { duration: "slow", "easing": "easeOutBounce" });
});
*/
// -------------------------------------------------------
// Character Animation
// -------------------------------------------------------

$('.char-con').hover(function() {
    $(this).animate({
        width: '42px', 
    }, { duration: "slow", "easing": "easeOutBounce" });
},function() {
    $(this).animate({
        width: '30px', 
    }, 800);
});

// -------------------------------------------------------
// jQ UI Buttons
// -------------------------------------------------------

$('.sb-links a').button({
	icons: {primary: "ui-icon-traingle-1-e"}
});

	$('a.i-none').button();
	$('a.i-logout').button({icons: {primary: "ui-icon-unlocked"}});
	$('a.i-acc').button({icons: {primary: "ui-icon-gear"}});
	$('a.i-char').button({icons: {primary: "ui-icon-person"}});
	$('a.i-cart').button({icons: {primary: "ui-icon-cart"}});
	$('a.i-bullet').button({icons: {primary: "ui-icon-bullet"}});

	
// -------------------------------------------------------
// Social Icons Animation
// -------------------------------------------------------

$('.social a').hover(function() {
    $(this).animate({
        height: '30px', 
		opacity: 1.0
    }, { duration: "slow", "easing": "easeOutBounce" });
},function() {
    $(this).animate({
        height: '19px', 
		opacity: 0.7
    }, 200);
});

// -------------------------------------------------------
// Fading
// -------------------------------------------------------

var fadeDuration = 200;
$('#header #logo a').hover(function() {
  $(this).animate({ opacity: '0.7' }, fadeDuration);
}, function() {
  $(this).animate({ opacity: '1.0' }, fadeDuration);       
});

$('#navbar a,a.ilink,.btn,.screenshots a img').hover(function() {
  $(this).animate({ opacity: '1.00' }, fadeDuration);
}, function() {
  $(this).animate({ opacity: '0.7' }, fadeDuration);       
});

$('.sb-special,.news a').hover(function() {
  $(this).animate({ opacity: '1.00' }, fadeDuration);
}, function() {
  $(this).animate({ opacity: '0.9' }, fadeDuration);       
});

$('.cp-warn, .cp-ok').hover(function() {
  $(this).animate({ opacity: '1.00' }, fadeDuration);
}, function() {
  $(this).animate({ opacity: '0.8' }, fadeDuration);       
});

$('.Button').hover(function() {
  $(this).animate({ opacity: '1.00' }, fadeDuration);
}, function() {
  $(this).animate({ opacity: '0.8' }, fadeDuration);       
});

// -------------------------------------------------------
// Ranking Animation
// -------------------------------------------------------

$('.sb-ranking-div').css('display', 'none');
$('#sb-ranking-revolution-players').css('display', 'block');

$('.switch-menu').click(function () { 
	$('.sb-ranking-div').slideUp("slow"); 
	$('#sb-ranking-menu').delay(500).slideDown("slow"); 
	$('#sb-ranking-title').text("Ranking - Menu");
});

$('.sb-ranking-btn').click(function () { 
	$('#sb-ranking-menu').slideUp("slow"); 
	$('#sb-ranking-title').text($(this).text());	
	$('#sb-'+$(this).attr('id')).delay(500).slideDown("slow"); 
});

// -------------------------------------------------------
// Slider 
// -------------------------------------------------------

$('#slider').anythingSlider({
	buildArrows : false,
	hashTags: false,
	animationTime: 200,
	delay: 5000,
	easing: "easeInOutExpo"
});

//

$('#content a.i-acc').button({icons: {primary: "ui-icon-gear"}});

//
//$('input[title!=""]').hint();

//
$('body').ajaxStart(function(){
	$(this).css('cursor', 'progress');
});

$('body').ajaxStop(function(){
	$(this).css('cursor', 'auto');
});

$("select").css('width', '205px');