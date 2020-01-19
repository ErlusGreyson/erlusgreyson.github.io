firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.



    var user = firebase.auth().currentuser;

    if (user != null){
        val email_id = user.email;
        document.getElementById("user_field").innerHTML = email_id;
    }
  } else {
    // No user is signed in.
  }
});

function login() {
    var email = document.getElementById("email_input").value;
    var password = document.getElementById("password_input").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("Error: " + errorMessage);
  // ...
});
}
