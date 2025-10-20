import { listarEventos } from './backend/services/listarEventos.js';
import { borrarEvento } from './backend/services/borrarEvento.js';

document.addEventListener('DOMContentLoaded', async () => {
    const eventsList = document.getElementById('eventsList');
    const emptyState = document.getElementById('eventsEmptyState');
    const emptyStateMessage = document.getElementById('eventsEmptyStateMessage');

    try {
        const eventos = await listarEventos();
        
        if (eventos && eventos.length > 0) {
            emptyState.style.display = 'none';
            eventsList.innerHTML = eventos.map(evento => `
                <div class="event-card">
                    <h3>${evento.title || 'Sin título'}</h3>
                    <p>${evento.description || 'Sin descripción'}</p>
                    <div class="event-details">
                        <span>${evento.date ? new Date(evento.date).toLocaleDateString() : 'Fecha no disponible'}</span>
                        <span>${evento.category || 'Sin categoría'}</span>
                    </div>
                    <div class="event-actions">
                        <a href="detalle-evento.html?id=${evento.id}" class="btn btn-secondary">Ver</a>
                        <a href="editar-evento.html?id=${evento.id}" class="btn btn-secondary">Editar</a>
                        <button class="btn btn-danger delete-btn" data-id="${evento.id}">🗑️</button>
                    </div>
                </div>
            `).join('');

            // Añadir event listeners para los botones de borrar
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', async (e) => {
                    if (!confirm('¿Estás seguro de que quieres borrar este evento?')) return;
                    const id = button.dataset.id; // usar el button directamente (evita e.target)
                    try {
                        await borrarEvento(id);
                        window.location.reload(); // Recargar para mostrar la lista actualizada
                    } catch (error) {
                        alert('Error al borrar el evento: ' + (error.message || error));
                    }
                });
            });
        } else {
            emptyState.style.display = 'block';
            emptyStateMessage.textContent = 'No hay eventos disponibles.';
        }
    } catch (error) {
        emptyState.style.display = 'block';
        emptyStateMessage.textContent = 'Error al cargar los eventos: ' + error.message;
    }
});