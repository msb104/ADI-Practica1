import { pb } from '../config/pb.js';

const updateUser = async (updatedData) => {
	if (!pb.authStore.isValid) {
		throw new Error('No hay sesión activa.');
	}

	const user = pb.authStore.model;
	if (!user) {
		throw new Error('Usuario no encontrado.');
	}

	try {
		const updatedUser = await pb.collection('users').update(user.id, updatedData);
		return updatedUser;
	} catch (error) {
		throw new Error('Error al actualizar el usuario: ' + error.message);
	}
};

const updatePassword = async (currentPassword, newPassword) => {
	if (!pb.authStore.isValid) {
		throw new Error('No hay sesión activa.');
	}

	const user = pb.authStore.model;
	try {
		await pb.collection('users').update(user.id, {
			password: newPassword,
			passwordConfirm: newPassword,
			oldPassword: currentPassword
		});
	} catch (error) {
		throw new Error('Error al actualizar la contraseña: ' + error.message);
	}
};

export { updateUser, updatePassword };
