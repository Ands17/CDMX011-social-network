/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import { Home } from './components/Home.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Login,
  '/register': Register,
  '/home': Home,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.append(routes[pathname]());
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    onNavigate('/home');
    // ...
  } else {
    onNavigate('/');
  }
});

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.append(component());
};

rootDiv.append(component());
