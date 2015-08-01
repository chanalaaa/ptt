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

/*
    $(".privilege-block_body_img_li")
        .mouseenter(function() {
            $id = ($(this).index('.privilege-block_body_img_li'));
            animate_tab($id, true);
        })
        .mouseleave(function() {
            $id = ($(this).index('.privilege-block_body_img_li'));
            animate_tab($id, false);
        });

*/

    

    /* Hover Func. *------------------------------*/

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

    function top_tab($id, $bool) {

        if ($bool) {

            $("img.privilege-block_body_info_li_tab").eq($id).stop(true, true).css({
                height: "+=100px",
                marginTop: "-=100px"
            }, 250);

        } else {

            $("img.privilege-block_body_info_li_tab").eq($id).stop(true, true).animate({
                height: "-=100px",
                marginTop: "+=100px"
            }, 500);

        }
    };

});
