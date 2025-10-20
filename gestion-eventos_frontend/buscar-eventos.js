import { pb } from './backend/config/pb.js';
import { logout } from './backend/services/authService.js';
import { getAllEvents, getEventsByFilters } from './backend/services/eventService.js';

const resultsGrid = document.getElementById('resultsGrid');
const resultsCount = document.getElementById('resultsCount');
const ownerId = pb?.authStore?.model?.id || null;

if (!ownerId) {
	window.location.href = '/login.html';
}

const getFiltersFromForm = () => {
	const reminderInput = document.querySelector('#searchForm input[name="withReminder"]');
	return {
		searchText: document.getElementById('searchText').value.trim(),
		category: document.getElementById('filterCategory').value,
		priority: document.getElementById('filterPriority').value,
		dateFrom: document.getElementById('dateFrom').value,
		dateTo: document.getElementById('dateTo').value,
		withReminder: reminderInput ? reminderInput.checked : false
	};
};

const isDefaultFilters = (filters) =>
	!filters.searchText &&
	!filters.category &&
	!filters.priority &&
	!filters.dateFrom &&
	!filters.dateTo &&
	!filters.withReminder;

const filterEventsByOwner = (events) =>
	!Array.isArray(events) ? [] : events.filter((event) => event.owner === ownerId);

const displayEvents = (events) => {
	const userEvents = filterEventsByOwner(events);

	if (!userEvents || userEvents.length === 0) {
		resultsCount.textContent = 'Sin resultados';
		resultsGrid.innerHTML = `
			<div class="empty-state">
				<p>No se encontraron eventos con los filtros aplicados.</p>
			</div>
		`;
		return;
	}

	resultsCount.textContent =
		userEvents.length === 1 ? '1 resultado' : `${userEvents.length} resultados`;

	resultsGrid.innerHTML = userEvents
		.map(
			(event) => `
			<div class="event-card">
				<h3>${event.title || 'Sin título'}</h3>
				<p>${event.description || 'Sin descripción disponible.'}</p>
				<div class="event-details">
					<span>${event.date ? new Date(event.date).toLocaleDateString() : 'Sin fecha'}</span>
					<span>${event.category || 'Sin categoría'}</span>
					<span>${event.priority || 'Sin prioridad'}</span>
				</div>
				<div class="event-actions">
					<a href="detalle-evento.html?id=${event.id}" class="btn btn-secondary">Ver</a>
					<a href="editar-evento.html?id=${event.id}" class="btn btn-secondary">Editar</a>
				</div>
			</div>
		`
		)
		.join('');
};

document.getElementById('searchForm').addEventListener('submit', async (event) => {
	event.preventDefault();
	const filters = getFiltersFromForm();
	const useAllEvents = isDefaultFilters(filters);

	try {
		const events = useAllEvents
			? await getAllEvents()
			: await getEventsByFilters(filters);
		displayEvents(events);
	} catch (error) {
		console.error('Error searching events:', error);
		resultsCount.textContent = 'Sin resultados';
		resultsGrid.innerHTML = `
			<div class="empty-state">
				<p>No se pudieron cargar los eventos. Inténtalo nuevamente.</p>
			</div>
		`;
	}
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
