/* eslint-disable import/named */
/* eslint-disable import/no-duplicates */
// eslint-disable-next-line import/no-cycle
import { signOut } from '../lib/firebaseAuth.js';
// eslint-disable-next-line import/no-cycle
import { getUser } from '../lib/firebaseAuth.js';
import { createPost } from '../lib/firestore.js';
import { getData } from '../lib/firestore.js';

export const Home = () => {
  const container = document.createElement('div');
  const texto = document.createElement('textarea');
  const btnHome = document.createElement('button');
  const btnPublicar = document.createElement('button');
  btnPublicar.textContent = 'Publicar';
  btnHome.textContent = 'Cerrar sesión';
  const publicar = document.createElement('div');
  publicar.id = ('divPublicar');

  container.append(texto);
  container.append(btnPublicar);
  container.append(btnHome);
  container.append(publicar);
  const carrentuser = getUser();
  btnHome.addEventListener('click', () => signOut());

  btnPublicar.addEventListener('click', () => {
    createPost(texto.value, carrentuser.email);
  });

  const templatePost = (publicaciones) => {
    const publicacion = document.createElement('div');
    publicacion.id = ('post');
    const html = ` 
    <p>${publicaciones.text}</p>
    <p>Publicado by: ${publicaciones.user}</p>`;
    publicacion.innerHTML = html;
    publicar.append(publicacion);
  };

  const printData = async () => {
    await getData().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        templatePost(doc.data());
      });
    });
  };

  printData();

  return container;
};
