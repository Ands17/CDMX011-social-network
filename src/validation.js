export const validationPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    // eslint-disable-next-line no-alert
    alert('contraseñas no coinciden');
    return true;
  }

  if (password.length < 6) {
    // eslint-disable-next-line no-alert
    alert('la contraseña debe tener más de 6 carácteres');
    return false;
  }
  return validationPassword;
};

const validPost = (post) => {
  if (post === '') {
    return false;
  }
  return true;
};
