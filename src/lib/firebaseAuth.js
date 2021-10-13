import firebase from "./secret.js";

export const createAccountWithtEmail = (email, password)=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    //var errorCode = error.code;
    //var errorMessage = error.message;
    // ..
    console.log(error)
  });

}