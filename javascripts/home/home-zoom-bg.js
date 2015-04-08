

(function(){
  "use strict";


$(function ($) {

     //Detecting viewpot dimension
     var vW = $(window).width();
     var vH = $(window).height();


    //Vertical Centering of natural content spcific elements (non-images)
     $(function ($) {
              /*if your element is an image then please use $(window).load() instead tha above function wrap, because we want the coding to take
              effect when the image is loaded. */
              
              //get the width of the parent
              var parent_height = $('.vertical-center').parent().height();
              var image_height = $('.vertical-center').height();
              
              var top_margin = (parent_height - image_height)/2;
              
              //center it
              $('.vertical-center').css( 'padding-top' , top_margin);
              //uncomment the following if ithe element to be centered is an image
              // $('.home-owl').css( 'width' , vW);


       });

     $(window).load(function(){
      $('.home-section,.home-section .inner-section').css('height' , vH);
      var home_owl_ht = $('.home-owl').height();
      var home_padding = (vH - home_owl_ht)/2;
      $('.home-section .inner-section').css({
          'padding-top':home_padding,
          'padding-bottom':home_padding
        });

     });


     //Home Carousel

     $(document).ready(function() {
        $(".home-owl").owlCarousel({
          autoPlay: 5000, //Set AutoPlay to 5 seconds
          autoHeight : true,
          singleItem:true,
          pagination: false,
          navigation : true,
          transitionStyle : "goDown",
          navigationText : ["<",">"],
          items : 1,
          itemsDesktop : [1199,1],
          itemsDesktopSmall : [979,1]
        });
      });

     $('.sub-heading').each(function(){

        var text_width = $(this).find('span').width();
        var text_height = $(this).find('span').height();
        var heading_width = $(this).width();
        var elmt_width = ((heading_width - text_width)/2)-20;
        var elmt_top = text_height/2;

        var heading_text = $(this).find('span').html();

        var left_elmt = '<div class="sub-heading-custom-element" style="width:'+elmt_width+'px; position:absolute; left:0px; top:'+elmt_top+'px;"></div>'; 
        var right_elmt = '<div class="sub-heading-custom-element" style="width:'+elmt_width+'px; position:absolute; right:0px; top:'+elmt_top+'px;"></div>'; 
        $(this).html(left_elmt + '<span>' + heading_text + '</span>' + right_elmt);

     });

     $(window).load(function(){
         $.mbBgndGallery.buildGallery({
          containment:"body", // or "#myGalleryElement"
          timer:1000,
          effTimer:5000,
          controls:"#controls",
          grayScale:false,
          effect: "zoom",
          // If your server allow directory listing
          //folderPath:"elements/",
          // else:
          images:[
           "http://placehold.it/1920X1080",
           "http://placehold.it/1920X1080",
           "http://placehold.it/1920X1080"
           
           ],
           onStart:function(){},
          onPause:function(){},
          onPlay:function(opt){},
          onChange:function(opt,idx){},
          onNext:function(opt){},
          onPrev:function(opt){}
        }); 
    });     



      });
      // $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

