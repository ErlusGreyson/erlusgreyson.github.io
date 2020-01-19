firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_field").style.display = "initial";

    var user = firebase.auth().currentUser;

    if (user != null) {
        var email_id = user.email;
        document.getElementById("user_field").innerHTML = email_id;
    }

  } else {
    document.getElementById("user_field").style.display = "none";
  }
});

function login() {
    var email = document.getElementById("email_input").value;
    var password = document.getElementById("password_input").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("error: " + errorMessage);
  // ...
});
    window.alert(email + ' ' + password);
}
