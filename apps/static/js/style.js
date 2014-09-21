// if($(console.log($(window).scrollTop())>= 300))
// {
// 	$("#background-image").attr('style','-moz-filter: blur(20px); -webkit-filter: blur(5px); -ms-filter: blur(5px); filter: blur(5px);');
// }

// var winScroll = $(window).scrollTop()
// if(winScroll >= 500)
// {
// 	$("#background-image").attr('style','-moz-filter: blur(20px); -webkit-filter: blur(5px); -ms-filter: blur(5px); filter: blur(5px);');
// }
// var winScroll = $(window).scrollTop()
// if(winScroll >= 500)
// {
// 	$("#background-image").css('style','-moz-filter: blur(20px); -webkit-filter: blur(5px); -ms-filter: blur(5px); filter: blur(5px);');
// }


// $(document).ready(function(){
// 	$(window).on('scroll', function() {
// 		console.log($(window).scrollTop());
// 		if($(window).scrollTop() < 450) {
// 			var $scrollTop = $(window).scrollTop();
// 			var $scrollPoint = 450;

// 			var $per = 20 * ($scrollTop / $scrollPoint);
// 			console.log($per);

// 			$("#background-image").attr('style','-moz-' + $per + 'filter: blur(' + $per + 'px); -webkit-filter: blur(' + $per + 'px); -ms-filter: blur(' + $per + 'px); filter: blur(' + $per + 'px);');
// 		}
// 	});

// });


$(window).scroll(function() {
      // get scroll position
      var s = $(window).scrollTop();
      // scroll value and opacity
      opacityVal = (s / 280.0);
      // opacity value 0% ~ 100%
      $('.blurred-img').css('opacity', opacityVal);
    });


//
$(window).scroll(function(){
  var k = $(window).scrollTop();
  console.log(k);
  if(k >=800){
    $('#Humans_nav_bar_1').css('display','none');
    $('#Humans_nav_bar_2').css('display','block');
  }
  else{
     $('#Humans_nav_bar_1').css('display','block');
    $('#Humans_nav_bar_2').css('display','none');
  }
  
});



// $(window).scroll(function(){
//   var scroll = $(window).scrollTop();
//   console.log(scroll);

//   if (scroll >= 60) {
//    $('#HOA-navbar').removeClass('HOA-navbar');
//    $('#HOA-navbar').addClass('HOA-navbar-small');
//    $('#HOA-container-fluid').removeClass('HOA-container-fluid');

//  }
//  else{
//    $('#HOA-navbar').removeClass('HOA-navbar-small');
//    $('#HOA-navbar').addClass('HOA-navbar');
//    $('#HOA-container-fluid').addClass('HOA-container-fluid');

//  } 
// });














