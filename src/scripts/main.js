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
// var modal = document.getElementById('myModal');

// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");

// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() { 
//     modal.style.display = "none";
// }
