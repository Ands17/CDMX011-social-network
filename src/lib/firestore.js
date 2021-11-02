import firebase from './secret.js';

// instancia
export const db = firebase.firestore();

// Crear colección
export const createPost = (text, user) => db.collection('post').doc().set(
  {
    text,
    user,
  },
);

// Obtener los post
export const getData = () => db.collection('post').get();

// obtener un solo post, recibe un id
export const getDoc = (id) => db.collection('post').doc(id).get();

// Eliminar post
export const deletePost = (id) => db.collection('post').doc(id).delete();

// Actualizar al instante colección de post publicados
export const onGetPost = (obj) => db.collection('post').onSnapshot(obj);

// Actualizar un post
export const updatePost = (id, updatedPost) => db.collection('post').doc(id).update(id, updatedPost);
