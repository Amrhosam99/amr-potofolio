
var typed = new Typed('#demo', {
    strings: ['web developer', 'web designer'],
    typeSpeed: 130,
    backSpeed : 130,
    loop: true,
    fadeOut: true,
  });
 $(window).scroll(function(){
    let scroll = $(this).scrollTop();
    if(scroll<100){
        $(".fa-arrow-turn-down").fadeIn();
    }
    else{
        $(".fa-arrow-turn-down").fadeOut();
    }
 })

 var typed2 = new Typed('#typed2', {
    strings: [],
    typeSpeed: 150,
    backSpeed: 0,
    fadeOut: true,
    smartBackspace: false,
    loop: true
  });