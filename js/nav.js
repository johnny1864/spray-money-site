$(document).ready(function(){
   $(window).on('scroll', function(){
       
       //Adds class 'shrink' to nav on scroll
       if($(window).scrollTop()>60){
           $('nav').addClass('shrink');
       }else{
           $('nav').removeClass('shrink');
       }
   });
});//End of ready function