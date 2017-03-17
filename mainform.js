// solution 4


var entry = document.getElementById('entry')
entry.addEventListener('click', function (event){
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
    if (username.length < 14 && password == "12345678"){
    var heading = document.getElementById('heading')
    heading.innerHTML = "Congrats on knowing your username and password"
  } else {
    alert ("Incorrect username or password")
  }
})
