// jQuery permite crear u 
var $overlay = $('<div id="overlay"></div>');
var $image=$("<img>");
var $caption = $('<p></p>');

$overlay.append($image);
$overlay.append($caption);

// añade overlay en body
$("body").append($overlay);                 

//capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imagelocation =$(this).attr("href");
  
  //console.log(imagelocation)
  $image=$image.attr("src",imagelocation);
  
  // show de overlay
  $overlay.show();
 
   // get caption
 var captiontext = $("#imageGallery a").children("img").attr("alt")
  
 // var captiontext = $(this).children("img").attr("alt");
  console.log(captiontext);
 $caption= $caption.text(captiontext);
 
});

//when overlay is click then hide
$overlay.click(function(){
  $overlay.hide();
});
