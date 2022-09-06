
// Nav Java Start 

$(function(){

    
    var navtop = $('#menu').offset().top;
    
    $(window).scroll(function(){
    
        var navscroll = $(this).scrollTop();
    
        if( navscroll > navtop ){
            $('#menu').addClass('fix_nav');
        }
    
        else{
            $('#menu').removeClass('fix_nav');
        }
    });
    
    
    })
    
    // Nav Java end