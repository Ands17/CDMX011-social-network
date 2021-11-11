/* eslint-disable import/named */
/* eslint-disable import/no-duplicates */
// eslint-disable-next-line import/no-cycle
import { signOut } from '../lib/firebaseAuth.js';
// eslint-disable-next-line import/no-cycle
import { getUser } from '../lib/firebaseAuth.js';
import { createPost } from '../lib/firestore.js';
// eslint-disable-next-line no-unused-vars
import {
  onGetPost, getPost, deletePost, updatePost,
} from '../lib/firestore.js';

export const Home = () => {
  const currentuser = getUser();
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
  welcome.textContent = `Bienvenid@ ${currentuser.email}`;
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

  // Guardar estado de app
  let editStatus = false;
  let id = '';

  // actualizar los post
  onGetPost((querySnapshot) => {
    publicar.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const publicacion = document.createElement('div');
      publicacion.id = ('post');
      const html = ` 
        <p>${doc.data().text}</p>
        <p><b>publicado por:</b> ${doc.data().user}</p>
        <div><button  class='btnEdit' data-id = '${doc.id}'>Editar</button>
        <button  class='btnEliminar' data-id = '${doc.id}'>Eliminar</button>
        </div>`;
        // eslint-disable-next-line no-console
      // console.log(doc.id);
      publicacion.innerHTML = html;
      publicar.append(publicacion);
    });

    const btnsEdit = document.querySelectorAll('.btnEdit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const docEdit = await getPost(e.target.dataset.id);
        // eslint-disable-next-line no-console
        console.log(docEdit.data());
        id = docEdit.id;
        editStatus = true;
        texto.value = docEdit.data().text;
        btnPublicar.innerText = 'Actualizar';
      });
    });

    const btnsDelete = document.querySelectorAll('.btnEliminar');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        // eslint-disable-next-line no-console
        console.log(e.target.dataset.id);
        deletePost(e.target.dataset.id);
      });
    });
  });
  btnPublicar.addEventListener('click', () => {
    if (!editStatus) {
      createPost(texto.value, currentuser.email);
    } else {
      const postData = {
        text: texto.value,
      };
      updatePost(id, postData);
      editStatus = false;
      btnPublicar.innerText = 'Publicar';
    }
    texto.value = '';
  });
  return container;
};
