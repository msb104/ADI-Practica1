import { logout } from './backend/services/authService.js';
import { editarEvento } from './backend/services/editarEvento.js';
import { verEvento } from './backend/services/verEvento.js';

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventoId = urlParams.get('id');

    if (!eventoId) {
        alert('No se especificó un ID de evento');
        window.location.href = 'dashboard.html';
        return;
    }

    let eventoOriginal; // Para mantener una referencia al evento original

    try {
        eventoOriginal = await verEvento(eventoId);
        console.log('Evento original:', eventoOriginal);
        
        // Rellenar el formulario con los datos existentes
        document.getElementById('title').value = eventoOriginal.title;
        document.getElementById('description').value = eventoOriginal.description;
        document.getElementById('location').value = eventoOriginal.location;
        document.getElementById('date').value = eventoOriginal.date;
        document.getElementById('time').value = eventoOriginal.time;
        document.getElementById('duration').value = eventoOriginal.duration;
        document.getElementById('category').value = eventoOriginal.category;
        document.getElementById('priority').value = eventoOriginal.priority;
        document.getElementById('reminder').checked = eventoOriginal.reminder;
        
    } catch (error) {
        console.error('Error al cargar:', error);
        alert('Error al cargar los datos del evento');
        window.location.href = 'dashboard.html';
    }

    document.getElementById('editEventForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Solo incluimos los campos editables
        const datosActualizados = {
            title: document.getElementById('title').value.trim(),
            description: document.getElementById('description').value.trim(),
            location: document.getElementById('location').value.trim(),
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            duration: parseInt(document.getElementById('duration').value),
            category: document.getElementById('category').value,
            priority: document.getElementById('priority').value,
            reminder: document.getElementById('reminder').checked,
            owner: eventoOriginal.owner // Mantenemos el owner original
        };

        try {
            await editarEvento(eventoId, datosActualizados);
            alert('Evento actualizado con éxito');
            window.location.href = 'dashboard.html';
        } catch (error) {
            console.error('Error al actualizar:', error);
            alert('Error al actualizar el evento: ' + error.message);
        }
    });
});

document.getElementById('logoutLink').addEventListener('click', async (event) => {
	event.preventDefault();
	try {
		await logout();
		window.location.href = '/login.html';
	} catch (error) {
		console.error('Error during logout:', error);
	}
});