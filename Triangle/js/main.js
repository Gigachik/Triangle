$(function(){

    $('.slider_inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false

        
    });

    $('.menu_btn').on('click', function(){
        $('.menu_ul').slideToggle();
    });

    let header = $("#header");

    let introH;
    let scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load resize", function() {
        introH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    });

  


    $("[data-scroll]").on('click', function(event){
        event.preventDefault();
        
        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    $('.form_btn').on('click', function(){
       
        document.getElementById('namej1').innerHTML += document.forms['idform'].elements['Name'].value

        document.getElementById('namej2').innerHTML += document.forms['idform'].elements['Surname'].value

        document.getElementById('namej3').innerHTML += document.forms['idform'].elements['Title'].value

        document.getElementById('namej4').innerHTML += document.forms['idform'].elements['Comment'].value
    });
});