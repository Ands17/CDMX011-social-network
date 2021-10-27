// eslint-disable-next-line import/no-cycle
import { loginWithGoogle } from '../lib/firebaseAuth.js';

export const buttonGoogle = () => {
  const buttonGoogleDiv = document.createElement('div');
  const googleButton = document.createElement('button');
  googleButton.setAttribute('type', 'button');
  googleButton.setAttribute('id', 'registerGoogle');
  const googleImg = document.createElement('img');
  googleImg.src = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg ';
  googleButton.appendChild(googleImg);
  buttonGoogleDiv.setAttribute('class', 'access-google');
  buttonGoogleDiv.textContent = 'Accede con Google';
  googleButton.appendChild(buttonGoogleDiv);

  googleButton.addEventListener('click', () => {
    loginWithGoogle();
  });
  return googleButton;
};
