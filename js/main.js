// JavaScript Document

$(function(){
 $(".navigation-buttons").click(function(){
   $("#header").toggleClass("on");
	
 });


	
	 $('#button_toggle').click(function() {
      $('#menu_page').toggleClass('on_motion');
   });
   
   $('#button_toggle').click(function() {
      $(this).toggleClass('beWhite');
   });
   
   $('.main_nav_li').click(function() {
      $('#button_toggle').removeClass('beWhite');
	   $('#menu_page').removeClass('on_motion');
   });
   
   $('.map-view').click(function() {
      $('#location_contents').addClass('contents_on');
	  $('#project_contents').removeClass('contents_on');
	  $('#join_contents').removeClass('contents_on');
	   
	  $('#nav_location_contents').addClass('btn_on');
	  $('#nav_project_contents').removeClass('btn_on');
	  $('#nav_join_contents').removeClass('btn_on');
	   
   });
   
   $('.project-inquiry').click(function() {
		$('#location_contents').removeClass('contents_on');
		$('#project_contents').addClass('contents_on');
		$('#join_contents').removeClass('contents_on');
		
		$('#nav_location_contents').removeClass('btn_on');
		$('#nav_project_contents').addClass('btn_on');
		$('#nav_join_contents').removeClass('btn_on');
   });
	
   $('.join-inquiry').click(function() {
		$('#location_contents').removeClass('contents_on');
	  	$('#project_contents').removeClass('contents_on');
	  	$('#join_contents').addClass('contents_on');
	   
	   	$('#nav_location_contents').removeClass('btn_on');
		$('#nav_project_contents').removeClass('btn_on');
		$('#nav_join_contents').addClass('btn_on');
   });
   
   $('#map_view_open').click(function() {
      $('#odden_map_view').addClass('open_motion');
	  $('#odden_map_view').removeClass('close_motion');
   });
   
   $('#closeMap').click(function() {
      $('#odden_map_view').addClass('close_motion');
	  $('#odden_map_view').removeClass('open_motion');
   });
   
   $('#nav_contact').click(function() {
      $('#nav_location_contents').addClass('btn_on');
	  $('#nav_project_contents').removeClass('btn_on');
	  $('#nav_join_contents').removeClass('btn_on');
	   
	  	$('#location_contents').addClass('contents_on');
		$('#project_contents').removeClass('contents_on');
		$('#join_contents').removeClass('contents_on');
   });

});







