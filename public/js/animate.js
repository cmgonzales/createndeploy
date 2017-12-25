//$(document).ready(function(){
    // $('.me').hover(function(){
    //     if(!$(this).hasClass('animated')){
    //         $(this).addClass('animated');
    //         $(this).stop().effect('shake', {distance:3}, 200);
    //     }
    // });


$(function(){
    $("#test").hover(function() {
          $("#test").effect("shake", { times:3 }, 100);
    });
 });
 
