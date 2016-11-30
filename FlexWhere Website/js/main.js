
$('.nav.navbar-nav li').click(function(){
  if($('#my-navbar').hasClass('navbar-collapse collapse in')){
    animateHam();
    $('#my-navbar').removeClass('in');
    console.log("close sidemenu......");
  }
})

$('.navbar-toggle').click(function(){
  // animateHam();

  if($('.icon').hasClass('icon-search')){
    $('.icon').removeClass('icon-search');
    $('.icon').addClass('icon-x');
  }
  else{
    $('.icon').removeClass('icon-x');
    $('.icon').addClass('icon-search');
  }
});


// -------floormenu button-----------
$('.floormenu-btn').click(function()
{
  if($('.floormenu').hasClass('active'))
  {
    $('.floormenu').removeClass('active');
    $('.floormenu-btn').removeClass('active');
  }
  else{
    $('.floormenu').addClass('active');
    $('.floormenu-btn').addClass('active');
  }
});

// ------------Legends button------------
$('.legend-link').click(function()
{
  $('.legends').addClass('active');
  $('.legend-link').addClass('active');
});

$('.legend-link-active').click(function()
{
  $('.legends').removeClass('active');
  $('.legend-link').removeClass('active');
});

function animateHam()
{
  if($('#my-navbar').hasClass('navbar-collapse collapse in')){
    console.log("in");
    $( ".one" ).css('transform-origin','center center center');
    $( ".two" ).css('transform-origin','center center center');
    $( ".one" ).css('transform','translate(0px,0px) rotate(0deg)');
    $( ".two" ).css('transform','translate(0px,0px) rotate(0deg)');
    $( ".one" ).css('transition-timing-function','ease-in');
    $( ".two" ).css('transition-timing-function','ease-in');
    $( ".one" ).css('transition-duration','0.5s');
    $( ".two" ).css('transition-duration','0.5s');
  }
  else{
    console.log("out");
    $( ".one" ).css('transform-origin','center center center');
    $( ".two" ).css('transform-origin','center center center');
    $( ".one" ).css('transform','translate(0px,3px) rotate(45deg)');
    $( ".two" ).css('transform','translate(0px,-3px) rotate(-45deg)');
    $( ".one" ).css('transition-timing-function','ease-in');
    $( ".two" ).css('transition-timing-function','ease-in');
    $( ".one" ).css('transition-duration','0.5s');
    $( ".two" ).css('transition-duration','0.5s');
  }
}

$('.nav.navbar-nav li').click(function (event) {
  console.log("id: "+$('.nav.navbar-nav li').children().attr('href'));
});
