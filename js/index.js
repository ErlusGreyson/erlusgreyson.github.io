firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    document.getElementById("log-in-nav").style.display = "none";
    document.getElementById("sign-up-nav").style.display = "none";
    document.getElementById("cart-nav").style.display = "flex";
    document.getElementById("log-out-nav").style.display = "flex";

  } else {
      document.getElementById("sign-up-nav").style.display = "flex";
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
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          window.location.href = "../index.html";
      } else {
      }
    });

}

function logout() {
    firebase.auth().signOut().then(function() {
        window.location.href = "../index.html";
    }).catch(function(error) {
        // An error happened.
    });
}

function signup() {
    var email = document.getElementById("email_input").value;
    var password = document.getElementById("password_input").value;
    var confirmPassword = document.getElementById("confirm_password_input").value;

    if (password == confirmPassword){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              window.location.href = "../index.html";
          } else {
          }
        });
    } else {
        window.alert("Passwords do not match.")
    }
}
