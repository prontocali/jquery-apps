// Prevent spoilerphobes from seeing spoilers - prevenir que sean visto
// Solution: Hide spoilers and reveal them through user interaction - (Esconder y mostrar por interacion del ususario)

//1. hide spoiler
$(".spoiler span").hide();

//2. add button
$(".spoiler").append("<button>Reveal Spoiler</button>");

//3. when button is pressed
$(".spoiler button").click(function(){
  //3.1 show previous
  $(this).prev().show()
  
  //3.2 Remove spoiler button
  $(this).remove();
});
