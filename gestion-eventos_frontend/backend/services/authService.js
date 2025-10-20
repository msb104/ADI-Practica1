import { pb } from '../config/pb.js';

const login = async function (email, password) {
  const trimmedEmail = email?.trim();
  const trimmedPassword = password?.trim();

  if (!trimmedEmail || !trimmedPassword) {
    throw new Error('Debes indicar email y contraseña.');
  }

  return pb.collection('users').authWithPassword(trimmedEmail, trimmedPassword);
};

const register = async function (name, email, password, confirmPassword) {
  const trimmedName = name?.trim();
  const trimmedEmail = email?.trim();
  const trimmedPassword = password?.trim();
  const trimmedConfirm = confirmPassword?.trim();

  if (!trimmedName || !trimmedEmail || !trimmedPassword || !trimmedConfirm) {
    throw new Error('Debes indicar nombre, email y contraseña.');
  }

  if (trimmedPassword !== trimmedConfirm) {
    throw new Error('Las contraseñas no coinciden.');
  }

  return pb.collection('users').create({
    name: trimmedName,
    email: trimmedEmail,
    password: trimmedPassword,
    passwordConfirm: trimmedConfirm,
  });
};

const deleteUser = async () => {
  if (!pb.authStore.isValid) {
    throw new Error('No hay sesión activa.');
  }

  const userId = pb.authStore.model?.id;

  if (!userId) {
    throw new Error('Usuario actual no encontrado.');
  }

  await pb.collection('users').delete(userId);
  pb.authStore.clear();
};

const logout = () => {
  pb.authStore.clear();
};

const isAuthenticated = () => pb.authStore.isValid;

const getCurrentUser = () => (pb.authStore.isValid ? pb.authStore.model : null);

export { login, logout, isAuthenticated, getCurrentUser, register, deleteUser };
