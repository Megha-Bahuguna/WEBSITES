function validate(){

   let username = document.getElementById('username').value;

   let password = document.getElementById('password').value;

  if (username == 'world' && password == '12345678')
  {
      alert('Login Successfully!');
  }
  

  else (username != 'world' && password != '12345678')
  {
         alert('Login Failed');
  }
  

}

function myFunction(){

  var x= document.getElementById("password");

  if (x.type =="password"){

    x.type = "text";
  }
  else{
    x.type = "password";
  }
}