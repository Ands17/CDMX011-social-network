// eslint-disable-next-line import/no-cycle
import { signOut } from '../lib/firebaseAuth.js';

export const Home = () => {
  const container = document.createElement('div');
  const btnHome = document.createElement('button');

  btnHome.textContent = 'Cerrar sesión';

  btnHome.addEventListener('click', () => signOut());

  container.append(btnHome);

  return container;
};
