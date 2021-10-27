import firebase from './secret.js';

export const db = firebase.firestore();
export const createPost = (text, user) => db.collection('post').doc().set(
  {
    text,
    user,
  },
);

export const getData = () => db.collection('post').get();
