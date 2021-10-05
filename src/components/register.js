import { onNavigate } from "../main.js";

export const Register = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent='Registrate es rápido y fácil';
    const btnHome = document.createElement('button');
    
    btnHome.textContent='Regresar';
    
    btnHome.addEventListener('click', () => onNavigate('/'));

    HomeDiv.append(btnHome);
   

    return HomeDiv;
};