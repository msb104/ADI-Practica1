import { verEvento } from './backend/services/verEvento.js';

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventoId = urlParams.get('id');

    if (!eventoId) {
        alert('No se especificó un ID de evento');
        window.location.href = 'dashboard.html';
        return;
    }

    try {
        const evento = await verEvento(eventoId);
        
        // Rellenar los detalles del evento
        document.getElementById('eventTitle').textContent = evento.title;
        document.getElementById('eventDescription').textContent = evento.description;
        document.getElementById('eventLocation').textContent = evento.location;
        document.getElementById('eventDate').textContent = new Date(evento.date).toLocaleDateString();
        document.getElementById('eventTime').textContent = evento.time;
        document.getElementById('eventDuration').textContent = `${evento.duration} minutos`;
        document.getElementById('eventCategory').textContent = evento.category;
        document.getElementById('eventPriority').textContent = evento.priority;
        document.getElementById('eventReminder').textContent = evento.reminder ? 'Sí' : 'No';

        // Configurar el botón de editar
        const editButton = document.getElementById('editButton');
        editButton.href = `editar-evento.html?id=${eventoId}`;
        
    } catch (error) {
        console.error('Error al cargar el evento:', error);
        alert('Error al cargar los datos del evento');
        window.location.href = 'dashboard.html';
    }
});