
$(document).ready(function(){
    $('.privilege-block_body_info_li_tab').hover(function(){
     $(this).animate({ 
                height:"+=50px",
                marginTop:"-=50px"}, 200);},
        function() {
            $(this).animate({ 
                height:"-=50px",
                marginTop:"+=50px"}, 500);
           });
        
});