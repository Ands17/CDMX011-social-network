/* eslint-disable import/named */
/* eslint-disable import/no-duplicates */
// eslint-disable-next-line import/no-cycle
import { signOut } from '../lib/firebaseAuth.js';
// eslint-disable-next-line import/no-cycle
import { getUser } from '../lib/firebaseAuth.js';
import { createPost } from '../lib/firestore.js';
import { getData } from '../lib/firestore.js';

export const Home = () => {
  const carrentuser = getUser();
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv';
  const header = document.createElement('header');
  header.id = 'home';
  /* const logo = document.createElement('img');
  logo.src = '../images/adopta.png';
  logo.id = 'logoHome'; */
  const inicio = document.createElement('h1');
  inicio.textContent = 'Conecta con tu próximo amigo peludo';
  // header.append(logo);
  header.append(inicio);
  const welcome = document.createElement('h2');
  welcome.textContent = `Bienvenid@ ${carrentuser.email}`;
  const container = document.createElement('div');
  const texto = document.createElement('textarea');
  texto.id = 'txt';
  texto.placeholder = 'Publica a los perros y/o gatos que tengas en adopción';
  const contenedorTxt = document.createElement('div');
  contenedorTxt.id = 'contenedor';
  const btnHome = document.createElement('button');
  btnHome.id = 'btnHome';
  const btnPublicar = document.createElement('button');
  btnPublicar.id = 'btnPublicar';
  btnPublicar.textContent = 'Publicar';
  btnHome.textContent = 'Cerrar sesión';
  const publicar = document.createElement('div');
  publicar.id = ('divPublicar');
  contenedorTxt.append(texto);
  homeDiv.append(header);
  container.append(homeDiv);
  container.append(btnHome);
  container.append(welcome);
  container.append(contenedorTxt);
  container.append(btnPublicar);
  container.append(publicar);
  btnHome.addEventListener('click', () => signOut());

  btnPublicar.addEventListener('click', () => {
    createPost(texto.value, carrentuser.email);
  });

  const templatePost = (publicaciones) => {
    const publicacion = document.createElement('div');
    publicacion.id = ('post');
    const html = ` 
    <p>${publicaciones.text}</p>
    <p><b>publicado por:</b> ${publicaciones.user}</p>`;
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
