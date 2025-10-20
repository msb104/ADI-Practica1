import { login } from './backend/services/authService.js';

document.getElementById('loginForm').addEventListener('submit', async (event) => {
	event.preventDefault();
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	try {
		await login(email, password);
		window.location.href = 'dashboard.html';
	} catch (error) {
		alert('Error de inicio de sesión: ' + error.message);
	}
});