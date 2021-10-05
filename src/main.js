import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { myFunction } from './lib/index.js';

myFunction()
const rootDiv = document.getElementById('root');

const routes = {
    '/': Login,
    '/register': Register,
    '/home' : Home
};

export const onNavigate = (pathname) => {
  window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
  );

  while(rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.append(routes[pathname]());
};
const component = routes[window.location.pathname];

window.onpopstate = () => {
    rootDiv.append(component());
}

rootDiv.append(component());
