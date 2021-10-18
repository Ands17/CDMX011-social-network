/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
// eslint-disable-next-line object-curly-spacing
import {createAccountWithtEmail} from '../lib/firebaseAuth.js';

export const Register = () => {
  const RegisterDiv = document.createElement('div');
  RegisterDiv.className = 'registerDiv';
  const header = document.createElement('div');
  header.id = 'hregister';
  const texheader = document.createElement('h2');
  texheader.textContent = 'Registrarte';
  const tex2 = document.createElement('p');
  tex2.textContent = 'Es fácil y rápido';
  const form = document.createElement('form');
  form.id = 'formRegister';
  const user = document.createElement('input');
  user.setAttribute('id', 'user');
  const email = document.createElement('input');
  email.setAttribute('id', 'email1');
  const password = document.createElement('input');
  password.setAttribute('id', 'password1');
  password.setAttribute('type', 'password');
  const confirmPass = document.createElement('input');
  confirmPass.setAttribute('id', 'confirmPass');
  confirmPass.setAttribute('type', 'password');
  const btnRegister = document.createElement('button');
  btnRegister.setAttribute('id', 'btnRegister');
  btnRegister.setAttribute('type', 'button');
  btnRegister.textContent = 'Confirmar';
  const btnLogin = document.createElement('button');
  btnLogin.setAttribute('id', 'btnLogin');
  btnLogin.setAttribute('type', 'button');
  btnLogin.textContent = 'Inicia sesión';

  user.placeholder = 'Nombre de usuario';
  email.placeholder = 'Correo electrónico';
  password.placeholder = 'Contraseña';
  confirmPass.placeholder = 'Confirmar contraseña';
  form.append(email);
  form.append(password);
  form.append(confirmPass);
  form.append(btnRegister);
  form.append(btnLogin);
  RegisterDiv.append(header);
  RegisterDiv.append(form);

  btnLogin.addEventListener('click', () => onNavigate('/'));
  // btnRegister.addEventListener('click', ()=> {
  // createAccountWithtEmail("gatito@bonito.com", "123456")
  //   })

  btnRegister.addEventListener('click', () => {
    // e.preventDefault(); //para cancelar el reinicio de formulario
    // eslint-disable-next-line no-shadow
    const email = document.getElementById('email1').value;
    // eslint-disable-next-line no-shadow
    const password = document.getElementById('password1').value;
    createAccountWithtEmail(email, password);
    // console.log(email, password, confirmPassword)

    // eslint-disable-next-line max-len
    // if (validateEmail(email) === true && (validatePassword(password, inputConfirmPassword) === true)) {
    // fireBaseSignUp(email, password);
    // } else {
    // onNavigate('/signUp');
    // }
  });

  return RegisterDiv;
};
