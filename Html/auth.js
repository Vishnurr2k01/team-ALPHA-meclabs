function myFunction() {
  document.location.href = '../html/homepage.html';
  }
  const setupUI = (user) => {
    if (user) {
      window.location.href = "index.html";
      };
  
    } 
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
  
    // log the user in
    firebase.auth().signInWithEmailAndPassword(email, password).then((cred) => {
      myFunction();
      
    });
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
  
      // User not found? Create user.
      if ( errorCode === 'auth/user-not-found' ) {
          firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if ( errorCode == 'email-already-in-use' ) {
                  alert('You already have an account with that email.');
              } else if ( errorCode == 'auth/invalid-email' ) {
                  alert('Please provide a valid email');
              } else if ( errorCode == 'auth/weak-password' ) {
                  alert('The password is too weak.');
              } else {
                  alert(errorMessage);
              }
              console.log(error);
          });
      // Wrong Password Error
      } else if ( errorCode === 'auth/wrong-password' ) {
          
          alert('Wrong password. Please try again');
      } else {
          alert( errorMessage );
      }
      console.log( error );
  });
  
  });