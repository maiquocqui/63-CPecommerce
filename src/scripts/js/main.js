$(document).ready(function() {
    new WOW().init();
    $('header').scrollToFixed({ zIndex: 500 });
    // $('.topbar').scrollToFixed({
    //     marginTop: 129,
    //     zIndex: 50
    // });
    // $('.parallax-window').parallax({
    //     speed: 0.5
    // });
    $('[data-toggle="tooltip"]').tooltip()
        // $(".TickerNews").newsTicker();
    $('.btn-comment').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 150
        }, 700);
        // $('.nav-tabs li').removeClass('active');
        // $(this).parent('li').addClass('active');
        return false;
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 400) {
            $('.product-fly-button').addClass('open');
        } else {
            $('.product-fly-button').removeClass('open');
        }
    });
    $('.up').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 500);
    });
    // if ($(window).width() < 768) {
    //     $('.btn-showtop').click(function() {
    //         $(this).siblings('ul').slideToggle(300);
    //     });
    // }
    $(".counter").countimator({
        duration: 1000,
    });
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());
    // $('.searchtoggle').click(function() {
    //     $('.search').slideToggle(300);
    // });
    // $('.btn-closesearch').click(function() {
    //     $('.search').slideToggle(300);
    // });

    // MENU
    // if ($(window).width() < 1200) {
    //     $('.menu').insertBefore('.fullpage');
    // }
    $('.popupwrap').click(function() {
        $('.popupwrap').fadeOut(300);
    });
    if ($(window).width() < 1200) {
        $('.btn-showmenu').click(function() {
            $('.menu').toggleClass('open');
            $('.overlay').fadeIn(500);
            $('html').css('overflow', 'hidden');
        });
        $('.overlay').click(function() {
            $(this).fadeOut(500);
            $('.menu').removeClass('open');
            $('.search').removeClass('open');
            $('html').css('overflow', 'auto');
        });
        $('.btn-showsub').click(function() {
            // $(this).toggleClass('active');
            $(this).siblings('.sub').addClass('open');
        });
        $('.btn-closesub').click(function() {
            // $(this).toggleClass('active');
            $(this).parent('.sub').removeClass('open');
        });
    }

    $('.searchtoggle').click(function() {
        $('.search').toggleClass('open');
        $('.overlay').fadeIn(500);
        $('html').css('overflow', 'hidden');
    });
    $('.btn-closesearch').click(function() {
        $('.search').removeClass('open');
        $('.overlay').fadeOut(500);
        $('html').css('overflow', 'auto');
    });
    // END-MENU

    $('.btn-apply').click(function() {
        $('.apply-form').slideToggle(300);
    });
    $('#map').click(function() {
            $(this).find('iframe').addClass('active')
        })
        .mouseleave(function() {
            $(this).find('iframe').removeClass('active')
        });

    // FILTER SCRIPT

    $('.btn-showsubfilter').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(300);
    });
    $('.btn-showcate').click(function() {
        $(this).toggleClass('active');
        $('.btn-showfilter').removeClass('active');
        $('.filter-wrap').removeClass('open');
        $('.filter-category').toggleClass('open');
        $('html').css('overflow', 'hidden');
    });
    $('.btn-showfilter').click(function() {
        $(this).toggleClass('active');
        $('.btn-showcate').removeClass('active');
        $('.filter-wrap').removeClass('open');
        $('.filter-properties').toggleClass('open');
        $('html').css('overflow', 'hidden');
    });
    $('.btn-closefilter').click(function() {
        $('.btn-showcate').removeClass('active');
        $('.btn-showfilter').removeClass('active');
        $('.filter-wrap').removeClass('open');
        $('html').css('overflow', 'auto');
    });

    $('.faqtitle').click(function() {
        $(this).siblings('.faqcontent').slideToggle(300);
    });

    // PRODUCT SCRIPT
    if ($(window).width() < 1024) {
        $('.product-policy').insertBefore('.product-description');
    }


    $('.user-sidebar').click(function() {
        $('.user-sidelink').slideToggle(300);
    });

    $('#btn-changepw').click(function() {
        $('.changepw-form').slideToggle(300);
    });

    // $('category-link').mCustomScrollbar({
    //     theme: 'minimal-dark',
    //     axis: "x",
    //     scrollInertia: 300,
    // });
    $('.btn-closeads').click(function() {
        $('.welcome-banner').addClass('hide');
    });

    // SLIDE
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
    });

    $('.banner-sale').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
    });

    $('.hotproduct-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        speed: 500,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.eventlist').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
    });
    $('.category-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        speed: 500,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.bannerads').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
    });

    // PRODUCT SLIDE

    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        fade: true,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        focusOnSelect: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 5,
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    });
    $('.lastview-slide').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 8,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    // CART PAGE SCRIPT

    $('.removenotice').click(function() {
        $('.cartnotice').slideToggle(300);
    });

    $('#btn-ttmh').click(function() {
        $('.user-info').slideToggle(300);
    });
    $('#btn-xuathd').click(function() {
        $('.bill-form').slideToggle(300);
    });

    $('#ship1').click(function() {
        $('#ship1-popup').show(300);
        $('#ship2-popup').hide(300);
    });
    $('#ship2').click(function() {
        $('#ship2-popup').show(300);
        $('#ship1-popup').hide(300);
    });

    $('.btn-spin').click(function() {

        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);

    });
});