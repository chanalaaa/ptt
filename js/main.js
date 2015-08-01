$(document).ready(function() {

    $("img.privilege-block_body_info_li_tab")
        .mouseenter(function() {
            $id = ($(this).index('img.privilege-block_body_info_li_tab'));
            top_tab($id, true);
            //console.log($id);
        })
        .mouseleave(function() {
            $id = ($(this).index('img.privilege-block_body_info_li_tab'));
            top_tab($id, false);
        });


    $("#pvl_img_li")
        .mouseenter(function() {
            $id = ($(this).index('#pvl_img_li'));
            top_tab($id, true);
        })
        .mouseleave(function() {
            $id = ($(this).index('#pvl_img_li'));
            animate_tab($id, false);
        });



    

    /* Hover Func. *------------------------------*/
/*
    function animate_tab($id, $bool) {

        if ($bool) {

            $(".privilege-block_body_info_li_tab").eq($id).stop(true, true).animate({
                height: "+=100px",
                marginTop: "-=100px"
            }, 250);

        } else {

            $(".privilege-block_body_info_li_tab").eq($id).stop(true, true).animate({
                height: "-=100px",
                marginTop: "+=100px"
            }, 500);

        }
    };
    */

    function top_tab($id, $bool) {

        if ($bool) {

            $("#pvl_tab_img_li").eq($id).css( "margin-top", "-200px" );

        } else {

            $("pvl_tab_img_li").eq($id).stop(true, true).animate({
                height: "-=100px",
                marginTop: "+=100px"
            }, 500);

        }
    };

});
