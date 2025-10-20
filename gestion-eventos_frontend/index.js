import { login, register } from './backend/services/authService.js';

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

document.getElementById('registerForm').addEventListener('submit', async (event) => {
	event.preventDefault();
	const name = document.getElementById('regName').value;
	const email = document.getElementById('regEmail').value;
	const password = document.getElementById('regPassword').value;
	const confirmPassword = document.getElementById('confirmPassword').value;

	try {
		console.log('Registering user:', name, email, password, confirmPassword);
		await register(name, email, password, confirmPassword);
		window.location.href = 'index.html';
	} catch (error) {
		alert('Error de registro: ' + error.message);
	}
});
