$(document).ready(function () {

  'use strict';


    //add classes
    $( "ul.root_menu > li:first-child" ).addClass( "first" );
    $( "ul.root_menu > li:last-child" ).addClass( "last" );

    $("ul.root_menu li:first-child").addClass("first_item");
    $("ul.root_menu li:last-child").addClass("last_item");


  /* remove 1st item in dropdown menu re-instate my area>my details.
   remove ul where no groups below top-level item  */

    $('ul.sub_menu.sub_menu_level_1 > li.menu_item.menu_item_level_2.first_item').css('display','none');
    $("li.menu_item.menu_item_level_1.has_sub_menu.last_item > ul.sub_menu.sub_menu_level_1 > li.menu_item.menu_item_level_2.first_item a[href='/MyArea/MyDetails.aspx']").parent().css('display','list-item');




    /* mobile menu */

  $('.root_menu').slicknav({
    prependTo: '#mobile_nav',
    allowParentLinks: true,
    label: 'Menu',
    closedSymbol: '&#43;',
    openedSymbol: '&#45;',
    'afterOpen': function() {
      $('.slice_header .slicknav_menu').css({'margin-bottom':'50px'});

    },
    'afterClose': function() {
      $('.slice_header .slicknav_menu').css({'margin-bottom':'0'});

    },
    'init': function(){
      if ($('body').hasClass('guest_user')) {
        $('<li class="sign_in_nav"><div class="statusbar"><a href="/user/login.aspx" title="Login to access more features">Login</a><a href="/User/Registration.aspx" title="Apply for web site username and password" class="register_link">Register</a></div></li>').insertAfter('.slicknav_nav > .last_item').fadeIn("slow");
      }else{
        $('<li class="log_out_nav"><div class="statusbar"><a href="/User/Logout.aspx" title="Sign out of the web site" class="logout_link">Logout</a><a href="/Admin/Default.aspx" title="Access site administration pages" class="weboffice_link">Web Office</a></div></li>').insertAfter('.slicknav_nav > .last_item').fadeIn("slow");
      }
    }
  });

    $('.slicknav_icon').click(function() {
        $('.mobile-logo-dark').toggleClass( "mobile-logo-display" );
        $('.mobile-logo-light').toggleClass( "mobile-logo-display" );
    });


});