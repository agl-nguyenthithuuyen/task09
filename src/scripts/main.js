// menu nav
function menuOnScroll(mySection, myMenu, myClass) {
    $(window).scroll(function(){
        var elScroll = $(window).scrollTop();
        $(mySection).each(function(i){
            if ($(this).offset().top - $('.c-header').outerHeight() <= elScroll) {
                $(myMenu).removeClass(myClass);
                $(myMenu).eq(i).addClass(myClass);
            }
        });
    });
}
menuOnScroll('.activescroll', '.c-header__nav li a', 'c-active');

// show dialog photo & movie
(function($) {
    'use strict';
  
    var $accountDelete = $('#show-dialog'),
    $accountDeleteDialog = $('#confirm-delete'),
    transition;
  
    $accountDelete.on('click', function() {
        $accountDeleteDialog[0].showModal();
        transition = window.setTimeout(function() {
            $accountDeleteDialog.addClass('dialog-scale');
        }, 0.5);
    });
  
    $('#cancel').on('click', function() {
        $accountDeleteDialog[0].close();
        $accountDeleteDialog.removeClass('dialog-scale');
        clearTimeout(transition);
    });
  
})(jQuery);
