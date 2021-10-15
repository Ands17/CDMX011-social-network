import firebase from './secret.js';
// Metodo que me permite autenticar  con usuario y contraseña
export const createAccountWithtEmail = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in

      const user = userCredential.user;
      console.log(user);
    // ...
    })
    .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
      console.log(error);
    });
};
// método para iniciar sesión con Google

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      console.log(credential);
    // ...
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    // ...
    });
};
