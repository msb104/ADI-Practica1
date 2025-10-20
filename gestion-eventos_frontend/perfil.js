import { pb } from './backend/config/pb.js';
import { deleteUser, logout } from './backend/services/authService.js';
import { updatePassword, updateUser } from './backend/services/userService.js';

document.addEventListener('DOMContentLoaded', () => {
	const user = pb.authStore.model;
	console.log(user);

	if (user) {
		document.getElementById('userName').setAttribute('placeholder', user.name || 'Nombre no disponible');
		document.getElementById('userEmail').setAttribute('placeholder', user.email || 'Email no disponible');
	} else {
		window.location.href = 'index.html';
	}
});

document.getElementById('updateUser').addEventListener('click', async (event) => {
	event.preventDefault();

	const name = document.getElementById('userName').value;
	const email = document.getElementById('userEmail').value;

	const updatedData = {};
	if (name) updatedData.name = name;
	if (email) updatedData.email = email;

	try {
		const user = pb.authStore.model;
		await updateUser(updatedData);
		alert('Perfil actualizado exitosamente.');
		window.location.reload();
	} catch (error) {
		alert('Error al actualizar el perfil: ' + error.message);
	}
});

document.getElementById('updatePasswd').addEventListener('click', async (event) => {
	event.preventDefault();

	const currentPassword = document.getElementById('currentPassword').value;
	const newPassword = document.getElementById('newPassword').value;
	const confirmNewPassword = document.getElementById('confirmNewPassword').value;

	if (newPassword !== confirmNewPassword) {
		alert('Las contraseñas no coinciden.');
		return;
	}

	try {
		await updatePassword(currentPassword, newPassword);
		alert('Contraseña actualizada exitosamente.');
		document.getElementById('currentPassword').value = '';
		document.getElementById('newPassword').value = '';
	} catch (error) {
		alert('Error al actualizar la contraseña: ' + error.message);
	}
});

document.getElementById('deleteAccountButton').addEventListener('click', async (event) => {
	event.preventDefault();

	try {
		await deleteUser();
		alert('Cuenta eliminada exitosamente.');
		window.location.href = 'index.html';
	} catch (error) {
		alert('Error al eliminar la cuenta: ' + error.message);
	}
});

document.getElementById('logoutButton').addEventListener('click', (event) => {
	event.preventDefault();
	logout();
	window.location.href = 'index.html';
});