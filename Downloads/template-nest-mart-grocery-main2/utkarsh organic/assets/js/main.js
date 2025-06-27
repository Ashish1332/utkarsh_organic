(function ($) {
    "use strict";
    // Page loading
    $(window).on('load', function() {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
        $("#onloadModal").modal('show');
    });
    /*-----------------
        Menu Stick
    -----------------*/
    var header = $('.sticky-bar');
    var win = $(window);
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
            $('.header-style-2 .categories-dropdown-active-large').removeClass('open');
            $('.header-style-2 .categories-button-active').removeClass('open');
        } else {
            header.addClass('stick');
        }
    });
    
    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="fi-rs-arrow-small-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    /*------ Wow Active ----*/
    new WOW().init();  

    //sidebar sticky
    if ($('.sticky-sidebar').length) { 
        $('.sticky-sidebar').theiaStickySidebar();
    }

    // Slider Range JS 
    if ( $("#slider-range").length ) {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [130, 250],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    }  

    /*------ Hero slider 1 ----*/
    $('.hero-slider-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: true,
        arrows: true,
        prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-angle-left"></i></span>',
        nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-angle-right"></i></span>',
        appendArrows: '.hero-slider-1-arrow',
        autoplay: true,
    });

    /*Carausel 8 columns*/
    $(".carausel-8-columns").each(function(key, item) {
        var id=$(this).attr("id");
        var sliderID='#'+id;
        var appendArrowsClassName = '#'+id+'-arrows'

        $(sliderID).slick({
            dots: false,
            infinite: true,
            speed: 1000,
            arrows: true,
            autoplay: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            loop: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ],
            prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
            nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
            appendArrows:  (appendArrowsClassName),
        });
    });

    /*Carausel 4 columns*/
    $(".carausel-4-columns").each(function(key, item) {
        var id=$(this).attr("id");
        var sliderID='#'+id;
        var appendArrowsClassName = '#'+id+'-arrows'

        $(sliderID).slick({
            dots: false,
            infinite: true,
            speed: 1000,
            arrows: true,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            loop: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
            nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
            appendArrows:  (appendArrowsClassName),
        });
    });
    /*Carausel 4 columns*/
    $(".carausel-3-columns").each(function(key, item) {
        var id=$(this).attr("id");
        var sliderID='#'+id;
        var appendArrowsClassName = '#'+id+'-arrows'

        $(sliderID).slick({
            dots: false,
            infinite: true,
            speed: 1000,
            arrows: true,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            loop: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
            nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
            appendArrows:  (appendArrowsClassName),
        });
    });

    /*Fix Bootstrap 5 tab & slick slider*/

    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
		$('.carausel-4-columns').slick('setPosition');
	});

     /*------ Timer Countdown ----*/

    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $(this).html(      
                event.strftime(''      
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%d</span><span class="countdown-period">Days</span></span>'
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%H</span><span class="countdown-period">Hours</span></span>'
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%M</span><span class="countdown-period">Mins</span></span>'
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%S</span><span class="countdown-period">Sec</span></span>'
                )
            );           
        });
    });

    // Debug patch: Always show seconds box, even if zero, and log if missing
    $(document).ready(function() {
        $('.deals-countdown').each(function() {
            var $this = $(this);
            if ($this.find('.countdown-period:contains("Sec")').length === 0) {
                $this.append('<span class="countdown-section"><span class="countdown-amount hover-up">00</span><span class="countdown-period">Sec</span></span>');
                console.warn('Debug: Seconds box was missing and has been appended for:', $this.get(0));
            }
        });
    });

    /*------ Product slider active 1 ----*/
    $('.product-slider-active-1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-icon-1-prev"><i class="fi-rs-angle-small-left"></i></span>',
        nextArrow: '<span class="pro-icon-1-next"><i class="fi-rs-angle-small-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3, 
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*------ Testimonial active 1 ----*/
    $('.testimonial-active-1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-icon-1-prev"><i class="fi-rs-angle-small-left"></i></span>',
        nextArrow: '<span class="pro-icon-1-next"><i class="fi-rs-angle-small-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3, 
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*------ Testimonial active 3 ----*/
    $('.testimonial-active-3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3, 
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*------ Categories slider 1 ----*/
    $('.categories-slider-1').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4, 
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });  
    
    /*----------------------------
        Category toggle function
    ------------------------------*/
    var searchToggle = $('.categories-button-active');
    searchToggle.on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
           $(this).removeClass('open');
           $(this).siblings('.categories-dropdown-active-large').removeClass('open');
        }else{
           $(this).addClass('open');
           $(this).siblings('.categories-dropdown-active-large').addClass('open');
        }
    })
        
    
    /*---------------------
        Price range
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    }); 
        
    /*-------------------------------
        Sort by active
    -----------------------------------*/
    if ($('.sort-by-product-area').length) {
        var $body = $('body'),
            $cartWrap = $('.sort-by-product-area'),
            $cartContent = $cartWrap.find('.sort-by-dropdown');
        $cartWrap.on('click', '.sort-by-product-wrap', function(e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.parent().hasClass('show')) {
                $this.siblings('.sort-by-dropdown').addClass('show').parent().addClass('show');
            } else {
                $this.siblings('.sort-by-dropdown').removeClass('show').parent().removeClass('show');
            }
        });
        /*Close When Click Outside*/
        $body.on('click', function(e) {
            var $target = e.target;
            if (!$($target).is('.sort-by-product-area') && !$($target).parents().is('.sort-by-product-area') && $cartWrap.hasClass('show')) {
                $cartWrap.removeClass('show');
                $cartContent.removeClass('show');
            }
        });
    }
    
    /*-----------------------
        Shop filter active 
    ------------------------- */
    $('.shop-filter-toogle').on('click', function(e) {
        e.preventDefault();
        $('.shop-product-fillter-header').slideToggle();
    })
    var shopFiltericon = $('.shop-filter-toogle');
    shopFiltericon.on('click', function() {
        $('.shop-filter-toogle').toggleClass('active');
    })
    
    /*-------------------------------------
        Product details big image slider
    ---------------------------------------*/
    $('.pro-dec-big-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: false,
        asNavFor: '.product-dec-slider-small , .product-dec-slider-small-2',
    });
    
    /*---------------------------------------
        Product details small image slider
    -----------------------------------------*/
    $('.product-dec-slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        arrows: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    /*-----------------------
        Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });   
  
    /*---------------------
        Select active
    --------------------- */
    $('.select-active').select2();    
    
    /*--- Checkout toggle function ----*/
    $('.checkout-click1').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
    });
    
    /*--- Checkout toggle function ----*/
    $('.checkout-click3').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
    });
    
    /*-------------------------
        Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function() {
        $('.open-toggle2').slideToggle(1000);
    });
    
    $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
    });    
    

    /*-------------------------------------
        Checkout paymentMethod function
    ---------------------------------------*/
    paymentMethodChanged();
	function paymentMethodChanged() {
		var $order_review = $( '.payment-method' );

		$order_review.on( 'click', 'input[name="payment_method"]', function() {
			var selectedClass = 'payment-selected';
			var parent = $( this ).parents( '.sin-payment' ).first();
			parent.addClass( selectedClass ).siblings().removeClass( selectedClass );
		} );
	}
    
    /*---- CounterUp ----*/
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });
    
    // Isotope active
    $('.grid').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });
    
    /*====== SidebarSearch ======*/
    function sidebarSearch() {
        var searchTrigger = $('.search-active'),
            endTriggersearch = $('.search-close'),
            container = $('.main-search-active');
        
        searchTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('search-visible');
        });
        
        endTriggersearch.on('click', function() {
            container.removeClass('search-visible');
        });
        
    };
    sidebarSearch();
    
     /*====== Sidebar menu Active ======*/
    function mobileHeaderActive() {
        var navbarTrigger = $('.burger-icon'),
            endTrigger = $('.mobile-menu-close'),
            container = $('.mobile-header-active'),
            wrapper4 = $('body');
        
        wrapper4.prepend('<div class="body-overlay-1"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('sidebar-visible');
            wrapper4.addClass('mobile-menu-active');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('mobile-menu-active');
        });
        
        $('.body-overlay-1').on('click', function() {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('mobile-menu-active');
        });
    };
    mobileHeaderActive();
    
    
   /*---------------------
        Mobile menu active
    ------------------------ */
    var $offCanvasNav = $('.mobile-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
    
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fi-rs-angle-small-down"></i></span>');
    
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });
    
    /*--- language currency active ----*/
    $('.mobile-language-active').on('click', function(e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
    });    
    
    /*--- categories-button-active-2 ----*/
    $('.categories-button-active-2').on('click', function(e) {
        e.preventDefault();
        $('.categori-dropdown-active-small').slideToggle(900);
    });
    
    /*--- Mobile demo active ----*/
    var demo = $('.tm-demo-options-wrapper');
    $('.view-demo-btn-active').on('click', function (e) {
        e.preventDefault();
        demo.toggleClass('demo-open');
    });

    /*-----More Menu Open----*/
    $('.more_slide_open').slideUp();	
    $('.more_categories').on('click', function (){
        $(this).toggleClass('show');
        $('.more_slide_open').slideToggle();
    });

    /*-----Modal----*/

    $('.modal').on('shown.bs.modal', function (e) {
        $('.product-image-slider').slick('setPosition');
        $('.slider-nav-thumbnails').slick('setPosition');

        $('.product-image-slider .slick-active img').elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750
        });
    })

    /*--- VSticker ----*/
    $('#news-flash').vTicker({
        speed: 500,
        pause: 3000,
        animation: 'fade',
        mousePause: false,
        showItems: 1
    });
        
    // === BEGIN: Cart & Wishlist Logic ===
    (function() {
        // Utility functions
        function getCart() {
            return JSON.parse(localStorage.getItem('cart') || '[]');
        }
        function setCart(cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        function getWishlist() {
            return JSON.parse(localStorage.getItem('wishlist') || '[]');
        }
        function setWishlist(wishlist) {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
        function updateHeaderCounts() {
            var cart = getCart();
            var wishlist = getWishlist();
            $('.header-action-icon-2 .mini-cart-icon .pro-count').text(cart.length);
            $('.header-action-icon-2 a[href="shop-wishlist.html"] .pro-count').text(wishlist.length);
        }
        // Add to Cart
        $(document).on('click', '.btn-add-to-cart', function(e) {
            e.preventDefault();
            var $card = $(this).closest('.product-cart-wrap');
            var id = $card.data('id');
            var name = $card.find('.product-name').text().trim();
            var price = parseFloat($card.find('.product-price span').first().text().replace(/[^\d.]/g, ''));
            var img = $card.find('img').first().attr('src');
            var cart = getCart();
            var found = cart.find(function(item) { return item.id === id; });
            if (found) {
                found.qty += 1;
            } else {
                cart.push({ id, name, price, img, qty: 1 });
            }
            setCart(cart);
            updateHeaderCounts();
            alert('Added to cart!');
        });
        // Add to Wishlist
        $(document).on('click', '.btn-add-to-wishlist', function(e) {
            e.preventDefault();
            var $card = $(this).closest('.product-cart-wrap');
            var id = $card.data('id');
            var name = $card.find('.product-name').text().trim();
            var price = parseFloat($card.find('.product-price span').first().text().replace(/[^\d.]/g, ''));
            var img = $card.find('img').first().attr('src');
            var wishlist = getWishlist();
            if (!wishlist.find(function(item) { return item.id === id; })) {
                wishlist.push({ id, name, price, img });
                setWishlist(wishlist);
                updateHeaderCounts();
                alert('Added to wishlist!');
            }
        });
        // Remove from Cart
        $(document).on('click', '.btn-remove-cart', function(e) {
            e.preventDefault();
            var id = $(this).data('id');
            var cart = getCart().filter(function(item) { return item.id !== id; });
            setCart(cart);
            updateHeaderCounts();
            renderCartTable();
        });
        // Remove from Wishlist
        $(document).on('click', '.btn-remove-wishlist', function(e) {
            e.preventDefault();
            var id = $(this).data('id');
            var wishlist = getWishlist().filter(function(item) { return item.id !== id; });
            setWishlist(wishlist);
            updateHeaderCounts();
            renderWishlistTable();
        });
        // Quantity up/down in cart
        $(document).on('click', '.btn-qty-up, .btn-qty-down', function(e) {
            e.preventDefault();
            var id = $(this).data('id');
            var cart = getCart();
            var item = cart.find(function(i) { return i.id === id; });
            if (!item) return;
            if ($(this).hasClass('btn-qty-up')) {
                item.qty += 1;
            } else {
                item.qty = Math.max(1, item.qty - 1);
            }
            setCart(cart);
            renderCartTable();
            updateHeaderCounts();
        });
        // Render Cart Table
        function renderCartTable() {
            if (!$('.cart-table-body').length) return;
            var cart = getCart();
            var html = '';
            var total = 0;
            cart.forEach(function(item) {
                var subtotal = item.price * item.qty;
                total += subtotal;
                html += `<tr><td></td><td><img src="${item.img}" style="width:60px"></td><td>${item.name}</td><td>₹${item.price}</td><td><div class="detail-qty border radius"><a href="#" class="btn-qty-down" data-id="${item.id}"><i class="fi-rs-angle-small-down"></i></a><span class="qty-val">${item.qty}</span><a href="#" class="btn-qty-up" data-id="${item.id}"><i class="fi-rs-angle-small-up"></i></a></div></td><td>₹${subtotal}</td><td><a href="#" class="btn-remove-cart text-body" data-id="${item.id}"><i class="fi-rs-trash"></i></a></td></tr>`;
            });
            $('.cart-table-body').html(html);
            $('.cart-total-amount').text('₹' + total);
        }
        // Render Wishlist Table
        function renderWishlistTable() {
            if (!$('.wishlist-table-body').length) return;
            var wishlist = getWishlist();
            var html = '';
            wishlist.forEach(function(item) {
                html += `<tr><td></td><td><img src="${item.img}" style="width:60px"></td><td>${item.name}</td><td>₹${item.price}</td><td>In Stock</td><td><button class="btn btn-sm btn-add-to-cart" data-id="${item.id}">Add to cart</button></td><td><a href="#" class="btn-remove-wishlist text-body" data-id="${item.id}"><i class="fi-rs-trash"></i></a></td></tr>`;
            });
            $('.wishlist-table-body').html(html);
        }
        // On page load
        $(function() {
            updateHeaderCounts();
            renderCartTable();
            renderWishlistTable();
        });
    })();
    // === END: Cart & Wishlist Logic ===
})(jQuery);

