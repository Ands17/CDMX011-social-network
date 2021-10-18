import firebase from './secret.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// Metodo que me permite autenticar  con usuario y contraseña
export const createAccountWithtEmail = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
    // eslint-disable-next-line no-alert
      alert('Registro exitoso');
    // ...
    })
    .catch(() => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
      // eslint-disable-next-line no-alert
      alert('contraseña debe de ser de más de 6 carácteres');
    });
};
// método para iniciar sesión con Google

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
    /** @type {firebase.auth.OAuthCredential} */
      // const credential = result.credential;
      // eslint-disable-next-line no-console
      // console.log(credential);
      // eslint-disable-next-line no-console
      onNavigate('/home');
      // eslint-disable-next-line no-console
      console.log('registro con google');
    // ...
    }).catch((error) => {
      // const errorMessage = error.message;
      // eslint-disable-next-line no-alert
      alert(error.menssage);
    // ...
    });
};
// Inicio sesión correo
export const signInWithEmail = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // eslint-disable-next-line no-alert
      alert('Bienvenid@ a Adopta-Pet, Adóptame');
      onNavigate('/home');
    })
    .catch(() => {
      // eslint-disable-next-line no-alert
      alert('Correo no válido');
    });
};
