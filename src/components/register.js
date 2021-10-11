import { onNavigate } from "../main.js";


export const Register = () => {
const RegisterDiv = document.createElement('div');
RegisterDiv.className = 'registerDiv'
 const header = document.createElement("div")
 header.id = 'hregister'
 const texheader = document.createElement("h2")
 texheader.textContent = "Registrarte"
 const tex2= document.createElement("p")
 tex2.textContent="Es fácil y rápido"
 const form = document.createElement('form');
 form.id = 'formLogin'
 const user = document.createElement('input')
 user.setAttribute('id', 'user')
 const email = document.createElement('input');
 email.setAttribute('id','email')
const password = document.createElement('input');
password.setAttribute('id','password')
password.setAttribute('type', 'password');
const confirmPass = document.createElement('input');
confirmPass.setAttribute('id','password')
confirmPass.setAttribute('type', 'password')
const btnRegister = document.createElement('button');
    btnRegister.setAttribute('id','btnRegister')
    btnRegister.textContent='Confirmar';
    const btnLogin= document.createElement('button');
    btnLogin.setAttribute('id','btnLogin')
    btnLogin.textContent='Inicia sesión';

    
    btnLogin.addEventListener('click', () => onNavigate('/'));
    user.placeholder = 'Nombre de usuario'
    email.placeholder = 'Correo electrónico';
    password.placeholder = 'Contraseña';
    confirmPass.placeholder ='Confirmar contraseña'
 header.append(texheader);
 header.append(tex2);
 form.append(user)
 form.append(email)
 form.append(password)
 form.append(confirmPass)
 form.append(btnRegister)
 form.append(btnLogin)
 RegisterDiv.append(header)
    RegisterDiv.append(form);
   

    return RegisterDiv;
};