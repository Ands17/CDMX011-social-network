import { onNavigate } from "../main.js";

export const Home = () => {
    const LoginDiv = document.createElement('div');
    const btnHome = document.createElement('button');
    
    btnHome.textContent='Cerrar sesión';
    
    btnHome.addEventListener('click', () => onNavigate('/'));

    LoginDiv.append(btnHome);
    
    return LoginDiv;
};