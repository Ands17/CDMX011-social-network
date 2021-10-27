import firebase from './secret.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { validationPassword } from '../validation.js';

export const getUser = () => firebase.auth().currentUser;
// Metodo que me permite autenticar  con usuario y contraseña
export const createAccountWithtEmail = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
    // eslint-disable-next-line no-alert
      alert('Registro exitoso');
    // ...
    })
    .catch(() => {
      // eslint-disable-next-line no-alert
      validationPassword();
    });
};
// método para iniciar sesión con Google

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
    /** @type {firebase.auth.OAuthCredential} */
      // eslint-disable-next-line no-alert
      alert('Bienvenid@ a Adopta-Pet, Adóptame');
      // const credential = result.credential;
      // eslint-disable-next-line no-console
      // console.log(credential);
      // eslint-disable-next-line no-console
      onNavigate('/home');
      // eslint-disable-next-line no-console
      console.log('registro con google');
    // ...
    }).catch(() => {
      // const errorMessage = error.message;
      // eslint-disable-next-line no-alert
      // alert(error.menssage);
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
// Cerrar sesión
export const signOut = () => {
  firebase.auth().signOut()
    .then(() => {
      onNavigate('/');
      // eslint-disable-next-line no-console
      console.log('salir de app');
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
