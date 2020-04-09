$(function () {
    "use strict";

    // Calculate Body Padding Top Depend On Navbar Height

    $("body").css("paddingTop", $(".navbar").innerHeight());

    // Smoothly Scroll To Element

    $(".navbar li a").click(function (e) {

        e.preventDefault();

        $("html, body").animate({

            scrollTop: $("#" + $(this).data("scroll")).offset().top + 1

        }, 1000);
    });

    // Add Active Class On Navbar Link And Remove From Siblings

    $(".navbar li a").click(function () {
        
        $(".navbar li a").removeClass("active");
        $(this).addClass("active");
    })

   
    $(window).scroll(function () {

         // Sync Navbar Links With Sections

        $(".block").each(function () {

            if ($(window).scrollTop() > $(this).offset().top) {

                var blockID = $(this).attr("id");

                $(".navbar li a").removeClass("active");

                $('.navbar li a[data-scroll="'+ blockID +'"]').addClass('active');
            }
        });

        // Scroll To Top Button
        
    
        if ($(window).scrollTop() >= 1000) {

            if ($(".myBtn").is(":hidden")) {

                $(".myBtn").fadeIn(400);
            }

        } else { 

            $(".myBtn").fadeOut(400);
        }
    });

    // Click On Scroll To Top To Go Up

    $(".myBtn").click(function (e) {

        e.preventDefault();

        $("html, body").animate({

            scrollTop: 0
            
        }, 1000);
    });

    // Pop Up

    $(".showPopUp").click(function () {
        $("." + $(this).data("popup")).fadeIn();
    });

    $(".popup").click(function () {
        $(this).fadeOut();
    });
    $(".popup .inner").click(function (e){
        e.stopPropagation();
    })
    $(".popup .close").click(function (e){
        e.preventDefault();
        $(this).parentsUntil(".popup").parent().fadeOut();
    })

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $(".popup").fadeOut();
        }
    });

    /*
    ** Buttons With Effects
    ** Border From Direction
    ** Fill From Direction
    ** Bounce
    */

    // Buttons With Effects

    $('.buttons-effects button').each(function () {
        // Add Span To Element In The Frist Place
        $(this).prepend('<span></span>');
    });

    $(".from-left, .border-left").hover(function () {

        $(this).find("span").eq(0).animate({

            width: "100%" 
        }, 500);
    }, function () {

           $(this).find("span").eq(0).animate({
                width: 0
            }, 500);
    });

    $(".from-top, .border-top").hover(function () {

        $(this).find("span").eq(0).animate({

            height: "100%" 
        }, 500);
    }, function () {

            $(this).find("span").eq(0).animate({
                height: 0
            }, 500);
    });

    // Bounce Button Effects Function

    function bounceElement(selector, times, distance, speed) {

        for (var i = 0; i < times; i = i + 1)  {

            $(selector).animate({
                top: '-=' + distance
            }, speed).animate({
                top: '+=' + distance
            }, speed)
        }
    }

    $('.bounce-one').on('click', function () {
        bounceElement($(this), 3, 20, 400);
    });

    $('.bounce-two').on('click', function () {
        bounceElement($(this), 5, 30, 500);
    });
    $('.bounce-three').on('click', function () {
        bounceElement($(this), 10, 25, 200);
    });

    // Animated Progress

    $(".animated-progress span").each(function () {

        $(this).animate({
            width: $(this).data("progress")
        }, 1000, function () {
            $(this).text($(this).data("progress"));
        });
    })

    // Fixed Menu

    $(".fixed-menu .fa-gear").on("click", function () {
        $(this).parent(".fixed-menu").toggleClass("is-visible");
        if ($(this).parent(".fixed-menu").hasClass("is-visible")) {
            $(this).parent(".fixed-menu").animate({
                left: 0
            }, 500);
            $("body").animate({
               paddingLeft: $(this).parent(".fixed-menu").innerWidth() + 'px'
            }, 500);
        } else {  
            $(this).parent(".fixed-menu").animate({
            left: '-' + $(this).parent(".fixed-menu").innerWidth() + 'px'
        }, 500);
        $("body").animate({
            paddingLeft: 0
         }, 500);
    }
    });

    // Change Colors

    $(".change-colors li").on("click", function () {
        $("body").attr("data-default-color", $(this).data("color"))
    });

    // Thumbnails Gallery

    var numberOfThumbnails = $(".thumbnails").children().length,
        marginBetweenThumbnails = "0.5",
        totalMarginBetweenThumbnails = (numberOfThumbnails - 1) * marginBetweenThumbnails,
        thumbnailsWidth = (100 - totalMarginBetweenThumbnails) / numberOfThumbnails;
    
    $(".thumbnails img").css({
        "width" : thumbnailsWidth + "%",
        "margin-right" : marginBetweenThumbnails + "%"
    });

    $(".thumbnails img").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".master-img img").hide().attr("src", $(this).attr("src")).fadeIn(500);
    });

    $(".master-img .fa-chevron-right").on("click", function () {
        if ($(".thumbnails .active").is(":last-child")) {
            $(".thumbnails img").eq(0).click();
        } else {
            $(".thumbnails .active").next().click();
        }
    })

    $(".master-img .fa-chevron-left").on("click", function () {
        if ($(".thumbnails .active").is(":first-child")) {
            $(".thumbnails img:last").click();
        } else {
            $(".thumbnails .active").prev().click();
        }
    });

    // Toggle Product Description

    $(".products .product button").on("click", function() {
        $(this).toggleClass("fa-plus fa-minus");
        $(this).next("p").slideToggle();
    });

    // Switch List And Grid View

    $('.view-options button').on("click", function() {

        $(this).addClass("active").siblings().removeClass("active");
        $(".items").removeClass("list-view grid-view").addClass($(this).data("class"));
    })

    // Error Message Effect 
    $(".error").each(function () {
        $(this).animate({
            right: 0

        }, 500, function () {
            $(this).delay(3000).fadeOut(1000);
        });
    })

    /* 
    ** Our Form
    ** Practical Examples
    */

    // Hide Placeholder On Focus & Restore On Blur

    var placeAttr= ""

    $("[placeholder]").focus(function () {

        placeAttr=$(this).attr("placeholder");
        $(this).attr("placeholder", "");

    }).blur(function () {
        $(this).attr("placeholder", placeAttr)
    })

    // Show Message When Field Is Empty

    $("[required").blur(function () {

        if ($(this).val() == "") {
            $(this).next('span').fadeIn().delay(2000).fadeOut();
        }
    })

    // Add Asterisk To All Required Field

    $("<span class='asterisk'>*</span>").insertBefore(":input[required]");

    // Customize The Astrisk With Jquery 

    $('.asterisk').parent('div').css('position', 'relative');

    $(".asterisk").each(function () {

        $('.asterisk').css({
            'position': 'absolute',
            'top': '5px',
            'left': $(this).parent('div').find(':input').innerWidth()+130,
            'color': '#f00',
            'font-weight': 'bold',
        });
    });

   // Customize The Input Field

   $('.our-form input[type="file"]').wrap("<div class='custom-file'></div>");

   $(".custom-file").prepend('<span> Upload Your Files</span>');
   
   $(".custom-file").append('<button class="fa fa-upload fa-lg skin-color">^</button>');
   
   $('.our-form input[type="file"]').change(function () {
        
        $(this).prev('span').text($(this).val());
   })

   // Detect Unicode Keyboard Keys

   $('.detect-unicode').on('keyup', function (e) {
       
    var keyboardKey = e.keyCode || e.which;

        $('.unicode').text(keyboardKey);
   })

   // Change Input direction Depend On The Langauge

   $(".auto-direction").on('keyup', function () {
       if ($(this).val().charCodeAt(0) < 200) {
           $(this).css('direction', 'ltr');
       } else {
           $(this).css('direction', 'rtl');
       }
   });


   // Convert Input Value To Tags

   $('.add-tag').on('keyup', function (e) {
       
    var keyboardKey = e.keyCode || e.which;

    // If Comma Pressed

    if (keyboardKey === 188) {

        // Store Value Inside Variable

        var thisValue = $(this).val().slice(0, -1);

        // Add The Tag To Tags Elemnt

        $('.tags').append('<span class="tag-span"><button class="fa fa-times">x</button>' + thisValue +'</span')
        
        // Empty The Input Field After Appending The Tag

        $(this).val('');
    }
   });

   // Remove Tag On Click 

   $('.tags').on('click', '.tag-span button', function () {

    $(this).parent('.tag-span').fadeOut(800);
   })

   // Trim Text Characters 

   function trimText (selector, maxLength) {

    $(selector).each(function () {
       
        if ($(this).text().length > maxLength) {
    
            var trimmedText = $(this).text().substr(0, maxLength);
    
            $(this).text(trimmedText + ' ...');
        }
       });
   }

   trimText('.trimmed-texts .p-one', 100);
   trimText('.trimmed-texts .p-two', 200);
   trimText('.trimmed-texts .p-three', 300);

   // Adjust Elements Height To Be The Same
   var theMaxHeight = 0;

   // Loop On Elements You Want To Adjust Height
   $('.same-height div').each(function () {

    if ($(this).height() > theMaxHeight) {
        theMaxHeight = $(this).height();
    }
   });
   $('.same-height div').height(theMaxHeight);

   // Shuffling Cards

   var zIndexValue = 0;

   $('.cards .card').on("click", function () {

    $(this).animate({

        left: '20%',
        marginTop: '30px',

    }, 400, function () {

        zIndexValue--;

        $(this).css('z-index', zIndexValue)

    }).animate({

        left: $(this).css('left'),
        marginTop: 0

    }, 400);
   });

   // Create Blink Warning

   blinkWarning();

   function blinkWarning() {
    $('.blink-warning').fadeOut(500, function () {
        $(this).fadeIn(500);
        blinkWarning();
    });
   }

   // To Do List

    var newTask = $('.task-input');

    $('.add-task').on('submit', function (e) {
        e.preventDefault();

        if (newTask.val() != '') {
            $('<li>' + newTask.val() + '</li>').appendTo('.tasks');
            newTask.val('');
        }
    });

    $('.tasks').on('click', 'li', function () {
        $(this).css('text-decoration', 'line-through').delay(200).fadeOut(400, function () {
            $(this).remove();
        });
    });

    // Type Write Effects

    var theText = $('.typer').data('text'),
        theTextLength = theText.length,
        n = 0,
        theTyper = setInterval(function () {
            $('.typer').each(function () {
                $(this).html($(this).html() + theText[n]);
            });

            n += 1;

            if (n >= theTextLength) {

                clearInterval(theTyper);
            }
        }, 100);

        // Calculate Item Prices

        var theSummary = 0;
        $('.price').each(function () {
            theSummary += parseInt($(this).text());
        })

        $('.the-total').text(theSummary)

       // Auto Change Content
     /* (function autoChange() {
           $('.ticker-list .active').each(function () {
               if (! $(this).is(':last-child')) {
                   $(this).delay(1000).fadeOut(1000, function () {
                       $(this).removeClass('active').next().addClass('active').fadeIn();
                       autoChange();
                   })
               } else {
                   $(this).delay(1000).fadeOut(1000, function () {
                       $(this).removeClass('active');
                       $('.ticker-list li').eq(0).addClass('active').fadeIn();
                       autoChange();
                   });
               }
           });
       }()); */

       // Dynamic Tabs 
       $('.tabs-list li').on('click', function () {

           $(this).addClass('active').siblings().removeClass('active');
           $('.content-list > div').hide();
           $($(this).data('content')).fadeIn();
       });

       // Switch tabs View

       $('.switch-tabs').on('click', function () {
           $(this).next('.dynamic-tabs').toggleClass('left-tabs');
       });

       // Suggest Box

       var emailProviders=['gmail.com', 'hotmail.com', 'yahoo.com', 'outlock.com'],
        finalString= '';

        $('.email-suggest').on('keyup', function () {
            finalString= '';
            if(! $(this).next().is('suggest-box')) {
                $('<ul class="suggest-box"></ul>').insertAfter($(this));
            }
            for (var i = 0; i < emailProviders.length; i++) {
                finalString += '<li>' + $(this).val() + '@' + emailProviders[i] + '</li>';
            }

            $('.suggest-box').html(finalString);
        });

        $('body').on("click", ".suggest-box li", function () {

            $('.email-suggest').val($(this).text());

            $(this).parent().fadeOut(300).remove();

        });

        // Extend Element With Height

        $.extend($.expr[':'], {
            moreThan100Pixels: function (element) {
                if ($(element).height() > 100) {
                    return $(element)
                }
            }
        });
        $('.extendh li:moreThan100Pixels').css('color', '#F00');

        // Extend Element With Red Color

       $.extend($.expr[':'], {
            redColor: function (element) {
                if ($(element).css('color') === 'rgb(255, 0, 0)') {
                    return $(element)
                }
            }
        });
        $('.extendr li:redColor').height('100');

        // Calculate Textarea Remaining Letters

        var maxText = $('.counterarea').attr('maxlength');

        $('.counter').html('<span>' + maxText + '</span> Characters Remaning');

        $('.counterarea').keyup(function () {
            var textLength = $(this).val().length,
                remaningChars = maxText - textLength;
                $('.counter').html('<span>' + remaningChars + '</span> Characters Remaning');
        })

        // Convert Password Field To Text

        $('.myConvert').click(function () {
            $(this).toggleClass('active');

            if ($(this).hasClass("active")) {

                $(this).text('Hide Password').prev('.convert').attr('type', 'text');

            } else {
                $(this).text('Show Password').prev('.convert').attr('type', 'password');
            }
        })

        // Make Horizontal Slider

            // Show First Info

            $('.slider-info').first().show().animate({width: "40%"});

            // Show Info On Click

            $('.slider-item').click(function () {
                $(this).next().show().animate({width: "40%"}).siblings('.slider-info').animate({width: '0'});
            })

        // Make Infinity Animation Function

        /*  (function infinityAnimate() {

            $('.offer img').animate( {

                top: '-180px'
    
            }, 1000, function () {

                $(this).animate({

                    top: '-132px'
                }, 1000, function () {
                    infinityAnimate();
                });
            });
        }()); */


        // Count Down

        var ourCountdown = setInterval(function () {

            var counter = parseInt($('.countdown').html());

            if (counter !== 0) {

                $('.countdown').html(counter - 1);

            } else {

                clearInterval(ourCountdown);
                $('.countdown').html('Done');

            }

        }, 1000);

        // Create Jquery Plugin "centering"

        $.fn.centerMe = function () {
           
            $(this).css ({

            'position': 'absolute',

            'left': ($(window).width() - $('our-test-one').width()) / 2,

            'top': ($(window).height() - $('our-test-one').height()) / 2,

            })
        }

        $('our-test-one').centerMe();

            
        // Create Jquery Plugin Coloring

        $.fn.colorMe = function () {
            $(this).css({
                'color': '#f00'
            })
            
            return $(this);
        }

        $('.our-test-two').colorMe();

        // Generate Options

         /* for (var i = 2000; i <= 2015; i) {

            $('<option>', {value: i , text: i}).appendTo($('#years'))
        } */


        

});


