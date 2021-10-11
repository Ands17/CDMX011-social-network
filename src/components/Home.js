import { onNavigate } from "../main.js";

export const Home = () => {
    const container = document.createElement('div');
    const btnHome = document.createElement('button');
    
    btnHome.textContent='Cerrar sesión';
    
    btnHome.addEventListener('click', () => onNavigate('/'));

    container.append(btnHome);
    
    return container;
};