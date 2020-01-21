firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    document.getElementById("log-in-nav").style.display = "none";
    document.getElementById("cart-nav").style.display = "flex";
    document.getElementById("log-out-nav").style.display = "flex";

    var user = firebase.auth().currentUser;s

  } else {
      document.getElementById("log-in-nav").style.display = "flex";
      document.getElementById("cart-nav").style.display = "none";
      document.getElementById("log-out-nav").style.display = "none";
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

function logout() {
    firebase.auth().signOut().then(function() {

}).catch(function(error) {
  // An error happened.
});
}
