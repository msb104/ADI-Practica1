import { pb } from "./backend/config/pb.js";
import { createEvent } from "./backend/services/eventService";
import { logout } from "./backend/services/authService.js";

document.getElementById('createEventButton').addEventListener('click', async () => {
	const title = document.getElementById('eventTitle').value
	const category = document.getElementById('eventCategory').value
	const date = document.getElementById('eventDate').value
	const time = document.getElementById('eventTime').value
	const location = document.getElementById('eventLocation').value
	const duration = document.getElementById('eventDuration').value
	const description = document.getElementById('eventDescription').value
	const priority = document.getElementById('eventPriority').value
	const reminder = document.getElementById('eventReminder').checked
	const owner = pb.authStore.model.id

	const eventData = {
		title,
		category,
		date,
		time,
		location,
		duration,
		description,
		priority,
		reminder,
		owner
	};

	try {
		if (new Date(eventData.date) > new Date('9999-12-31')) throw new Error('La fecha no puede ser mayor a 31/12/9999.');
		await createEvent(eventData);
		window.location.href = 'dashboard.html';
	} catch (error) {
		alert('Error al crear el evento: ' + error.message);
	}
});

document.getElementById('logoutButton').addEventListener('click', (event) => {
	event.preventDefault();
	logout();
	window.location.href = 'index.html';
});