//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
//var $password = $("#password");
//var $confirmPassword = $("#confirm_password");


var $password = $("#password");    // crea objeto $password
var $confirmPassword = $("#confirm_password"); // crea obejto $confirmPassword

//Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8; //retorna true si longitud del password >=9
  //console.log("cola de albaca");
}



function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val(); // verdadero si los password son iguales
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching(); // true si password son validos y coinciden
}

function passwordEvent(){
    //Find out if password is valid  
    if(isPasswordValid()) {
      //Hide hint if valid      
      $password.next().hide(1000); // oculta span
      
    } else {
      //else show hint
      $password.next().show(); // show span
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide(); //oculta segundo span solo si los dos paswords son iguales
  } else {
    //else show hint 
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit()); // desahilita submit es el inverso de canSubmit()
}


//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
