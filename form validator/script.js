function isEmail(email){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return regex.test(email);
} 

$('#submit-btn').click(function(){
    let errorMessage = '';
    let fieldsMissing = '';
    let successMessage = '';

if($('#email').val() == ''){
  fieldsMissing += '<br>Email';
}
if($('#phone').val() == '') {
  fieldsMissing += '<br>Phone';
}
if($('#password').val()== ''){
  fieldsMissing += '<br>Password';
}
if($('#password-confirm').val() == ''){
  fieldsMissing += '<br>Confirm password';
}
if(fieldsMissing != ''){
  errorMessage += '<p>The following field(s) are missing:' + fieldsMissing;
}
if(!isEmail($('#email').val())){
      errorMessage += `<p>You have entered wrong email</p>`;  
}
if(!$.isNumeric($('#phone').val())){
 errorMessage += `<p>you have entered wrong number</p>`;
}
if($('#password').val() !== $('#password-confirm').val()){
  errorMessage += `<P>Passwords do not match </p>`;
}   
 
if(errorMessage != ''){
  $('.modal').css('display', 'flex');
  $('.modal-box p').html(errorMessage);
}else{
  successMessage += `<p>You were successful</p>`;
  $('.modal').css('display', 'flex');
  $('.modal-box p').html(successMessage);
}
});

$('.close-btn').click(function(){
  $('.modal').css('display', 'none');
});

$('#password').keydown(function(){
  if ($("#password").val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
    $('#password').css('color', 'green' );
}else{
 $('#password').css('color', 'red');
}
});

$('#password-confirm').keydown(function(){
if ($("#password-confirm").val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
  $('#password-confirm').css('color', 'green' );
}else{
  $('#password-confirm').css('color', 'red');
}
});