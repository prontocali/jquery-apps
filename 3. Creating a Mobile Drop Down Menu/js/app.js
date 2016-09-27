//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//create a select and append to menu

var $select = $("<select></select>");
$("#menu").append($select);
  console.log("glozalo");

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //console.log($anchor);
  
  //Create an option
  var $option = $("<option></option>");
  
  //consigne opcion dependiendo de la pagina
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected",true);
    //console.log($option);
  }
  
  //option's value is the href
  $option.val($anchor.attr("href"));
  
  //option's text is the text of link
  $option.text($anchor.text());
  
  //append option to select
  $select.append($option);
});

//Bind change listener to the select
$select.change(function(){
  //Go to select's location
  window.location = $select.val();
});
  

  
