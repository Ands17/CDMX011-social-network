import { onNavigate } from "../main.js";
export const Login = () => {
    const LoginDiv = document.createElement('div');
    LoginDiv.className = 'LoginDiv';
     
    const form = document.createElement('form');
    const email = document.createElement('input');
    email.setAttribute('id','email')
    const password = document.createElement('input');
    password.setAttribute('id','password')
    password.setAttribute('type', 'password');
    const btnRegister = document.createElement('button');
    btnRegister.setAttribute('id','btnRegister')
    btnRegister.textContent='Registrate';
    const btnLogin= document.createElement('button');
    btnLogin.setAttribute('id','btnLogin')
    btnLogin.textContent='Inicia sesión';
    const a = document.createElement('a');
    const linkText = document.createTextNode('¿Olvidaste tu contraseña?');
    a.append(linkText);
    a.href = '';
    a.setAttribute('id','link');
    const line = document.createElement('object')
    line.setAttribute('id','line');
    const account = document.createElement('p');
    account.textContent = '¿Aún no tienes cuenta?'
    account.setAttribute('id','account');

    btnRegister.addEventListener('click', () => onNavigate('/register'))
    btnLogin.addEventListener('click', () => onNavigate('/home'))
    
    email.placeholder = 'Correo electrónico';
    password.placeholder = 'Contraseña';
    form.append(email);
    form.append(line);
    form.append(password);
    form.append(a);
    form.append(account);
    form.append(btnRegister);
    form.append(btnLogin);
    LoginDiv.append(form);


    return LoginDiv;
};