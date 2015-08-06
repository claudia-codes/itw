$(document).ready(function() {

    // $('.owl-carousel').owlCarousel({
    //     margin:0,
    //     items:3,
    //     loop:true,
    //     navigation: true
    // })

    $(document).ready(function() {
        var carousel = $("#owl-demo");
        carousel.owlCarousel({
            pagination: true,
            singleItem: true,
            height: 540,
            autoWidth: true,
            items: 3,
            responsive: true,
            navigationText: [
                "<i class='icon-chevron-left icon-white'><</i>",
                "<i class='icon-chevron-right icon-white'>></i>"
            ]
        });


    });



    $('.group-1').fadeIn(200).animate({
        width: "280px",
        left: "100px"
    }, {
        duration: 1000
    });

    $('.group-3').fadeIn(200).delay(1200).animate({
        top: "100px"
    }, {
        duration: 1900
    });
})
