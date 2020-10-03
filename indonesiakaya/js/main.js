$(document).ready(function(){

    $('.headline__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        arrows: true,
        dots:true,
        appendDots: '.headline__slider__dots__slot',
        appendArrows: '.headline__slider__arrow__slot',
        prevArrow: '<button class="circle circle__1 border__white slick-arrow prev-arrow"><img src="images/svg/icon__arrowLeft_white.svg"></button>',
        nextArrow: '<button class="circle circle__1 border__white slick-arrow next-arrow"><img src="images/svg/icon__arrowRight_white.svg"></button>'        
    });



    $('.sliderFeed').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        arrows: true,
        dots:true,
        appendArrows: '.sliderFeed__arrow',
        prevArrow: '<button class="circle circle__1 border__white slick-arrow prev-arrow"><img src="images/svg/icon__arrowLeft_white.svg"></button>',
        nextArrow: '<button class="circle circle__1 border__white slick-arrow next-arrow"><img src="images/svg/icon__arrowRight_white.svg"></button>',  
        responsive: [
            {
                breakpoint: 1024,
                arrows: false,
            }
        ],
    });

    $('.sliderFeed2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        dots:true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick",
            },
            {
                breakpoint: 1024
            }
        ],
    });
    $('.slider2Col').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        dots:true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1024
            }
        ],
    });


    $('.agenda__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        arrows: true,
        dots:true, 
        appendArrows: '.agenda__arrow',
        prevArrow: '<button class="circle circle__1 border__gray slick-arrow prev-arrow"><img src="images/svg/icon__arrowLeft.svg"></button>',
        nextArrow: '<button class="circle circle__1 border__gray slick-arrow next-arrow"><img src="images/svg/icon__arrowRight.svg"></button>'
    });

    $('.sliderGalery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
        dots:false, 
        centerMode: true,
        centerPadding: '60px',        
        variableWidth: true,
        //appendArrows: '.sliderGalery__dot',
        prevArrow: '<button class="circle circle__1 border__gray slick-arrow prev-arrow"><img src="images/svg/icon__arrowLeft.svg"></button>',
        nextArrow: '<button class="circle circle__1 border__gray slick-arrow next-arrow"><img src="images/svg/icon__arrowRight.svg"></button>',
        asNavFor: '.sliderGalery-for',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow:1,
                    arrows: false,
                }
    
                //settings: "unslick"
            }
        ],
    });

    $('.sliderGalery--white').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
        dots:false, 
        centerMode: true,
        centerPadding: '60px',        
        variableWidth: true,
        //appendArrows: '.sliderGalery__dot',
        prevArrow: '<button class="circle circle__1 border__white slick-arrow prev-arrow"><img src="images/svg/icon__arrowLeft_white.svg"></button>',
        nextArrow: '<button class="circle circle__1 border__white slick-arrow next-arrow"><img src="images/svg/icon__arrowRight_white.svg"></button>',
        asNavFor: '.sliderGalery--white-for',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow:1,
                    arrows: false,
                }

            }
        ],
    });

    $('.sliderGalery-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false, 
        fade: true,       
        centerMode: true,
        asNavFor: '.sliderGalery',
        responsive: [
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 1,
                    centerMode: false,
                    fade: false,  
                }
            }
        ],
      });

    $('.sliderGalery--white-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false, 
        fade: true,       
        centerMode: true,
        asNavFor: '.sliderGalery--white',
        responsive: [
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 1,
                    centerMode: false,
                    fade: false,  
                }
            }
        ],
      });

    //Kunjungi Kami
    $( "#galeri__inka" ).click(function() {
        var galeri__id = $( this ).attr('id');
        console.log(galeri__id);
        $( this ).addClass("btn__solidOrange btn__solid");
        $("#taman__inka").removeClass("btn__solidOrange btn__solid");
        $(".section__item__inner").hide();
        $(".section__item__inner1").show();
        $(".galeri").css("background-image"," url(images/"+galeri__id+".jpg)");
    });
    $( "#taman__inka" ).click(function() {
        var galeri__id = $( this ).attr('id');
        console.log(galeri__id);
        $( this ).addClass("btn__solidOrange btn__solid");
        $("#galeri__inka").removeClass("btn__solidOrange btn__solid");
        $(".section__item__inner1").hide();
        $(".section__item__inner2").show();
        $(".galeri").css("background-image"," url(images/"+galeri__id+".jpg)");
    });
    $('.facility_btn').click(function(){
        var facility_id = $(this).attr('id');
        $(this).addClass('btn__solidOrange btn__solid');
        $(this).siblings().removeClass("btn__solidOrange btn__solid");
        $('.section__item__inner').hide();
        $('#'+ facility_id +'__item').show();
        $(".galeri").css("background-image"," url("+ $(this).attr('data-bg') +")");
    });


    //header scroll
    var prevScrollpos = window.pageYOffset;
    var getHeight = $(window).height();
    function scrollHeader(){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $(".header").css("top","0");
            $(".section__page--article__bar").css("bottom","0");
        } else {
            $(".header").css("top","-150px");
            $(".section__page--article__bar").css("bottom","-100px");
        }
        if (currentScrollPos >= 150){
            $(".header__bar").addClass("open");
        }else{
            $(".header__bar").removeClass("open");
        }
        prevScrollpos = currentScrollPos;
        console.log(getHeight, prevScrollpos);
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
            $(".header__search").attr('data-click-state', 1);
            $(".header__search").children().attr('src', "images/svg/icon__search.svg");
            $(".header__search__open").css("display","none");     
            window.removeEventListener("scroll", scrollHeader); 
            console.log("0");
          }
        else {
            $(this).attr('data-click-state', 1);
            $(this).children().attr('src', "images/svg/icon__menuMobile.svg");
            $(".nav").css("display","none");
            window.addEventListener("scroll", scrollHeader);           
            console.log("1");
        } 
      });

     //search
     $('.header__search').on('click',function(){
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).children().attr('src', "images/svg/icon__menuMobileClose.svg");    
            $(".header__search__open").css("display","flex");     
            $(".header__menu").attr('data-click-state', 1);
            $(".header__menu").children().attr('src', "images/svg/icon__menuMobile.svg");
            $(".nav").css("display","none");
            window.removeEventListener("scroll", scrollHeader); 
          }
        else {
            $(this).attr('data-click-state', 1);
            $(this).children().attr('src', "images/svg/icon__search.svg");
            $(".header__search__open").css("display","none");
            window.addEventListener("scroll", scrollHeader);           
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
        
    }

    //menu hover
    var parentMenu  = $(".header__bar ul li");
    var headerBar  = $(".header__bar");
    var subBarMenu  = $(".header__bar__subbar");
    $(parentMenu).each(function() {
        var dataMenu =  $(this).data("id");    
        $(this).hover(function () {
            console.log(dataMenu);  
            $(this).addClass( "show" );
            $(subBarMenu).addClass(""+dataMenu+"" );
            $(headerBar).addClass(""+dataMenu+"" );
        },function () {
            $(this).removeClass( "show" );
            $(subBarMenu).removeClass(""+dataMenu+"");
            $(headerBar).removeClass(""+dataMenu+"");
        });
    });

    //infoMore
    $('.btn__infoMore').click(function(){
    
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).parent().parent().parent().find(".infoMore ul").slideDown();
            $(this).find(".circle__2").children('img').attr('src', "images/svg/icon__arrowBottom.svg");
            }
        else {
            $(this).attr('data-click-state', 1);
            $(this).parent().parent().parent().find(".infoMore ul").slideUp();
            $(this).find(".circle__2").children('img').attr('src', "images/svg/icon__arrowTopGray.svg");
        } 
    });

    //selectToggle
    $('#selectToggle').click(function(){
    
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).css("background-image", "url(../images/svg/icon__arrowBottom.svg)");
        } else {
            $(this).attr('data-click-state', 1);
            $(this).css("background-image", "url(../images/svg/icon__arrowTopGray.svg)");
        } 
    });

    //popup   
    $('.popupGalery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
   
 
});

