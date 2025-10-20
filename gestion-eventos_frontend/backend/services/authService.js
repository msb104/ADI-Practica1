import { pb } from '../config/pb.js';

const login = async function (email, password) {
  const trimmedEmail = email?.trim();
  const trimmedPassword = password?.trim();

  if (!trimmedEmail || !trimmedPassword) {
    throw new Error('Debes indicar email y contraseña.');
  }

  return pb.collection('users').authWithPassword(trimmedEmail, trimmedPassword);
};

const logout = () => {
  pb.authStore.clear();
};

const isAuthenticated = () => pb.authStore.isValid;

const getCurrentUser = () => (pb.authStore.isValid ? pb.authStore.model : null);

export { login, logout, isAuthenticated, getCurrentUser };
