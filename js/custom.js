$(function(){



 // back-top part start

    $('.back-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);

    });
    $(window).scroll(function (){
        var scroll = $(this).scrollTop();

        if (scroll > 150) {
            $('.back-top').fadeIn();
        } 
        else {
            $('.back-top').fadeOut();
        }

       if(scroll>100){
         $('.navbar').addClass('bg');
     }
       else{
         $('.navbar').removeClass('bg');
     }  

    });


// $('.search-box').click(function(){
//      $('.search-overlay').show().delay(2000);
//  });
    
//  $('.cancel-btn').click(function(){
//      $('.search-overlay').hide();
//  });


 $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });

  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });

  $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });




$(function(){

  $('input[type="number"]').niceNumber();

});


 //testimonial part start
   
$('.test-slider').slick({
 slidesToShow: 2,
 slidesToScroll: 1,
 autoplay: true, 
 arrows:false,
 dots:true,
 autoplaySpeed: 2000,
 autoplayHoverPause:true,
 responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
     
      
    ]
 
});



});




var fname=document.getElementById('full-name');
var error=document.getElementById('name-error');

// var email=document.getElementById('email');
// var eml=document.getElementById('email-error');

var password=document.getElementById('password');
var pass=document.getElementById('password-error');

var rpassword=document.getElementById('rpassword');
var rpass=document.getElementById('rpassword-error');





function sub(){
	if(fname.value==''){
	error.innerHTML='please inter your name';
	fname.style.border='1px solid red';
	fname.focus();
	return false;
   }
 //   if(email.value==''){
	// eml.innerHTML='please inter your email ';
	// email.style.border='2px solid red';
	// email.focus();
	// return false;
 //   }
   if(password.value==''){
	pass.innerHTML='please inter your password ';
	password.style.border='1px solid red';
	password.focus();
	return false;
   }
    if(rpassword.value==''){
	rpass.innerHTML='please inter your password again';
	rpassword.style.border='1px solid red';
	rpassword.focus();
	return false;
   }

   if(password.value!=rpassword.value){
	rpass.innerHTML='your password dont match ';
	rpassword.style.border='1px solid red';
	rpassword.focus();
	return false;
   }
     if(password.value.length < 8){
	pass.innerHTML='please inter your password at least 8 character ';
	password.style.border='1px solid red';
	password.focus();
	return false;
   }
    
}
function err_valid (){
	if(fname.value!=''){
	error.innerHTML='';
	fname.style.border='1px solid #073937';
	
   }
 //   if(email.value!=''){
	// eml.innerHTML='';
	// email.style.border='2px solid green';
	
 //   }
   if(password.value!=''){
	pass.innerHTML='';
	password.style.border='1px solid #073937';
	
   }
    if(rpassword.value!=''){
	rpass.innerHTML='';
	rpassword.style.border='1px solid #073937';
	
   }
    if(password.value==rpassword.value){
	rpass.innerHTML='';
	rpassword.style.border='1px solid #073937';
   }
   
    
   
     
}
fname.addEventListener('blur',err_valid);
// email.addEventListener('blur',err_valid);
password.addEventListener('blur',err_valid);
rpassword.addEventListener('blur',err_valid);


