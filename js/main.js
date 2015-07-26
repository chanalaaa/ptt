
$(document).ready(function(){

    $( ".privilege-block_body_info_li_tab" )
  .mouseenter(function() {
    $( this ).animate({
        height: "+=100px",
        marginTop: "-=100px"
    }, 200);
  })
  .mouseleave(function() {
    $( this ).animate({
        height: "-=100px",
        marginTop: "+=100px"
    }, 500);
  });
  
	/*
    $('.privilege-block_body_info_li_tab').hover(function(){
     $(this).animate({ 
                height:"+=100px",
                marginTop:"-=100px"}, 200);},
        function() {
            $(this).animate({ 
                height:"-=100px",
                marginTop:"+=100px"}, 500);
           });
        */
});