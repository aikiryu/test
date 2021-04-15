(function($) {
  'use strict';
  

  // Caching Selectors
  var $body = $('body');
  var $window = $(window);
  var $document = $(document);
  var $navBar = $('#navbar');
  var $asideNav = $('#aside-nav');

  

  function initNavbar() {
    // if (
    //   !$firstSection.is('.parallax-section, .dark-bg, .colored-bg') &&
    //   $homeSlider.length === 0
    // ) {
    //   $navBar.addClass('stick');
    // }

    // if ($firstSection.is('.parallax-section.text-dark')) {
    //   $body.addClass('light-slide');
    // }

    $navBar.find('.navigation-menu>li').slice(-2).addClass('last-elements');

    $('.menu-toggle, .toggle-nav').on('click', function(event) {
      event.preventDefault();
      if ($window.width() < 992) {
        $(this).find('.hamburger').toggleClass('is-active');

        $('#navigation').slideToggle(400);
        $navBar.find('.cart-open').removeClass('opened');
      }
    });

    $.merge($navBar, $asideNav).on('click', '.navigation-menu li.menu-item-has-children>a', function(e) {
      if ($window.width() < 992) {
        e.preventDefault();
        $(this).parent('li').toggleClass('opened').find('.submenu:first').slideToggle();
      }
    });

    $('#navigation .navigation-menu a[data-scroll="true"]').on('click', function() {
      if ($window.width() < 992) {
        $('.menu-toggle').trigger('click');
      }
    });

    $body.scrollspy({
      target: '#navigation',
    });

    $navBar.on('click', '.cart-open>a', function(event) {
      if ($window.width() < 992) {
        event.preventDefault();
        event.stopPropagation();

        if ($('#navigation').is(':visible')) {
          $('.menu-toggle').trigger('click');
        }

        $(this).parent('.cart-open').toggleClass('opened');
      }
    });
  }


  function initGeneral() {

    $('.toggle-nav').on('click', function(event) {
      if ($window.width() > 991) {
        $(this).find('.hamburger').toggleClass('is-active');
        $asideNav.toggleClass('is-active');
      }
    });

    $('.toggle-fs-menu').on('click', function(event) {
      $body.toggleClass('modal-open');
      $(this).toggleClass('menu-active');
      $(this).find('.hamburger').toggleClass('is-active');
      $(this).parents('.fs-menu-wrapper').find('.fullscreen-menu').toggleClass('is-active');
    });

    $('.fs-menu-wrapper')
      .on('click', '.navigation-menu >li.menu-item-has-children>a', function(e) {
        e.preventDefault();
        $('.navigation-menu>li').not($(this).parent('li')).find('.submenu').slideUp(300);
        $(this).parent('li').find('ul:first').slideToggle(300);
      })
      .on(
        'click',
        '.submenu>li.menu-item-has-children>a, .sub-menu>li.menu-item-has-children>a',
        function(e) {
          e.preventDefault();
          $('.navigation-menu .submenu>li').not($(this).parent('li')).find('.submenu').slideUp(300);
          $('.navigation-menu .submenu>li')
            .not($(this).parent('li'))
            .find('.sub-menu')
            .slideUp(300);
          $(this).parent('li').find('ul:first').slideToggle(300);
        }
      );

    $asideNav
      .on('click', '.navigation-menu >li.menu-item-has-children>a', function(e) {
        if ($window.width() > 991) {
          e.preventDefault();
          $('.navigation-menu>li').not($(this).parent('li')).find('.submenu').slideUp(300);
          $(this).parent('li').find('ul:first').slideToggle(300);
        }
      })
      .on(
        'click',
        '.submenu>li.menu-item-has-children>a, .sub-menu>li.menu-item-has-children>a',
        function(e) {
          if ($window.width() > 991) {
            e.preventDefault();
            $('.navigation-menu .submenu>li')
              .not($(this).parent('li'))
              .find('.submenu')
              .slideUp(300);
            $('.navigation-menu .submenu>li')
              .not($(this).parent('li'))
              .find('.sub-menu')
              .slideUp(300);
            $(this).parent('li').find('ul:first').slideToggle(300);
          }
        }
      );

    
  }
  

  function init() {
    initGeneral();
    initNavbar();
  }

  init();
})(jQuery);