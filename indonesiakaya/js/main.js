$(document).ready(function(){

    $('.headline__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        dots:true
    });

    $('.kegiatan__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        dots:true,
    });

    $('.agenda__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        arrows: true,
        dots:true,
        prevArrow: '<button class="circle circle__1 border__gray slick-arrow prev-arrow"><img src="images/svg/icon__arrowLeft.svg"></button>',
        nextArrow: '<button class="circle circle__1 border__gray slick-arrow next-arrow"><img src="images/svg/icon__arrowRight.svg"></button>'
    });

    //Kunjungi Kami
    $( "#galeri__inka" ).click(function() {
        $( this ).addClass("btn__solidOrange btn__solid");
        $("#taman__inka").removeClass("btn__solidOrange btn__solid");
        $(".section__item__inner").hide();
        $(".section__item__inner1").show();
    });
    $( "#taman__inka" ).click(function() {
        $( this ).addClass("btn__solidOrange btn__solid");
        $("#galeri__inka").removeClass("btn__solidOrange btn__solid");
        $(".section__item__inner1").hide();
        $(".section__item__inner2").show();
    });


    //header scroll
    var prevScrollpos = window.pageYOffset;
    function scrollHeader(){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $(".header").css("top","0");
        } else {
            $(".header").css("top","-100px");
        }
        prevScrollpos = currentScrollPos;
    }    
    window.addEventListener("scroll", scrollHeader); 

    //goto top
    $('#gotoTop').on("click",function(){
        $("HTML, BODY").animate({
            scrollTop: 0
        }, 1000);
     });

     //menu
     $('.header__menu').on('click',function(){
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).children().attr('src', "images/svg/icon__menuMobileClose.svg");
            $(".nav").css("display","block");           
            $(".header").addClass("border__none__lg");
            window.removeEventListener("scroll", scrollHeader); 
             //$("body").css("overflow","hidden");
            console.log("0");
          }
        else {
            $(this).attr('data-click-state', 1);
            $(this).children().attr('src', "images/svg/icon__menuMobile.svg");
            $(".nav").css("display","none");
            $(".header").removeClass("border__none__lg");
            window.addEventListener("scroll", scrollHeader);           
            //$("body").css("overflow-y","scroll");
            console.log("1");
        } 
      });

     

    //open video
    $(".itemopenVideo").click(function() {
        $(this).parent().children('.itemVideo').addClass('show');
    });
    $(".itemVideo__close").click(function() {
        $(this).removeClass('show');
        $('.itemVideo').removeClass('show');   
    });


    //mobile function
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //accordion
        $('.toggle').click(function(e) {
            e.preventDefault();    
            var $this = $(this);    
            if ($this.next().hasClass('show')) {
                $this.next().removeClass('show');
                $this.next().slideUp(350);
                $this.parent().children(".toggle--arrow").find("img").attr('src', "images/svg/icon__arrowTop.svg");
            } else {
                $this.parent().parent().find('li .inner').removeClass('show');
                $this.parent().parent().find(".toggle--arrow img").attr('src', "images/svg/icon__arrowTop.svg");
                $this.parent().parent().find('li .inner').slideUp(350);
                $this.next().toggleClass('show');
                $this.next().slideToggle(350);
                $this.parent().children(".toggle--arrow").find("img").attr('src', "images/svg/icon__arrowBottomWhite.svg");
            }
        });
    }else{
        //$('.header__logo .header__logo__img').attr("src","images/logo.png");
    }

});

