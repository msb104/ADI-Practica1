// Funcionalidades básicas de JavaScript para el prototipo
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para los tabs de login/registro
    setupAuthTabs();
    
    // Funcionalidad para filtros
    setupFilters();
    
    // Funcionalidad para búsqueda
    setupSearch();
    
    // Funcionalidad para confirmaciones de eliminación
    setupDeleteConfirmations();
    
    // Funcionalidad para tooltips
    setupTooltips();
    
    // Inicializar valores por defecto en formularios
    setupFormDefaults();
});

// Configurar tabs de autenticación
function setupAuthTabs() {
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginTab && registerTab && loginForm && registerForm) {
        loginTab.addEventListener('click', function() {
            // Cambiar tab activo
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
            
            // Mostrar/ocultar formularios
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        });
        
        registerTab.addEventListener('click', function() {
            // Cambiar tab activo
            registerTab.classList.add('active');
            loginTab.classList.remove('active');
            
            // Mostrar/ocultar formularios
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });
    }
}

// Configurar funcionalidad de filtros
function setupFilters() {
    const filterSelects = document.querySelectorAll('.filters-section select');
    const searchInputs = document.querySelectorAll('.search-group input');
    
    // Simular filtrado cuando cambia una opción
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            // En un prototipo real, aquí se filtrarían los eventos
            console.log('Filtro aplicado:', this.name, this.value);
            
            // Ejemplo de feedback visual
            const container = document.querySelector('.events-container, .results-grid');
            if (container) {
                container.style.opacity = '0.5';
                setTimeout(() => {
                    container.style.opacity = '1';
                }, 300);
            }
        });
    });
    
    // Configurar búsqueda en tiempo real (simulada)
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            // En un prototipo real, aquí se buscarían los eventos
            console.log('Búsqueda:', this.value);
            
            // Simulación de búsqueda con delay
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                const resultsCount = document.querySelector('.results-count');
                if (resultsCount && this.value.length > 0) {
                    const randomCount = Math.floor(Math.random() * 10) + 1;
                    resultsCount.textContent = `${randomCount} eventos encontrados`;
                } else if (resultsCount) {
                    resultsCount.textContent = '3 eventos encontrados';
                }
            }, 500);
        });
    });
}

// Configurar funcionalidad de búsqueda avanzada
function setupSearch() {
    const searchForm = document.querySelector('.advanced-search');
    const clearButton = document.querySelector('.filter-actions .btn-secondary');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recoger datos del formulario
            const formData = new FormData(this);
            const searchData = {};
            
            for (let [key, value] of formData.entries()) {
                if (value.trim() !== '') {
                    searchData[key] = value;
                }
            }
            
            console.log('Búsqueda avanzada:', searchData);
            
            // Simular resultados de búsqueda
            simulateSearchResults(searchData);
        });
    }
    
    // Limpiar filtros
    if (clearButton) {
        clearButton.addEventListener('click', function() {
            const form = document.querySelector('.advanced-search');
            if (form) {
                form.reset();
                
                // Restaurar resultados originales
                const resultsCount = document.querySelector('.results-count');
                if (resultsCount) {
                    resultsCount.textContent = '3 eventos encontrados';
                }
            }
        });
    }
}

// Simular resultados de búsqueda
function simulateSearchResults(searchData) {
    const resultsGrid = document.querySelector('.results-grid');
    const resultsCount = document.querySelector('.results-count');
    
    if (resultsGrid && resultsCount) {
        // Simular loading
        resultsGrid.style.opacity = '0.5';
        resultsCount.textContent = 'Buscando...';
        
        setTimeout(() => {
            const randomCount = Math.floor(Math.random() * 8) + 1;
            resultsCount.textContent = `${randomCount} eventos encontrados`;
            resultsGrid.style.opacity = '1';
            
            // Aquí se actualizarían los resultados reales
            console.log('Resultados simulados:', randomCount);
        }, 800);
    }
}

// Configurar confirmaciones de eliminación
function setupDeleteConfirmations() {
    const deleteButtons = document.querySelectorAll('.btn-danger');
    
    deleteButtons.forEach(button => {
        if (button.textContent.includes('Eliminar')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const confirmation = confirm('¿Estás seguro de que quieres eliminar este evento?');
                if (confirmation) {
                    // Simular eliminación
                    const eventCard = this.closest('.event-card');
                    if (eventCard) {
                        eventCard.style.opacity = '0.5';
                        eventCard.style.transform = 'scale(0.95)';
                        
                        setTimeout(() => {
                            eventCard.remove();
                            showNotification('Evento eliminado correctamente', 'success');
                        }, 300);
                    } else {
                        // Si estamos en detalle de evento, redirigir
                        showNotification('Evento eliminado correctamente', 'success');
                        setTimeout(() => {
                            window.location.href = 'dashboard.html';
                        }, 1500);
                    }
                }
            });
        }
    });
}

// Mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-20px)';
    notification.style.transition = 'all 0.3s ease';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Mostrar con animación
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Configurar tooltips básicos
function setupTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.position = 'relative';
        });
    });
}

// Configurar valores por defecto en formularios
function setupFormDefaults() {
    // Establecer fecha mínima en inputs de fecha (hoy)
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    
    dateInputs.forEach(input => {
        if (!input.value) {
            input.min = today;
        }
    });
    
    // Configurar validación básica de formularios
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Validación básica para demostración
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = 'var(--danger-color)';
                    isValid = false;
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                showNotification('Por favor, completa todos los campos requeridos', 'error');
                return;
            }
            
            // Si el formulario es válido y no es de navegación, mostrar éxito
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton && !submitButton.querySelector('a')) {
                e.preventDefault();
                showNotification('Formulario enviado correctamente', 'success');
            }
        });
    });
}

// Funciones de utilidad

// Toggle de vista (lista/calendario) - para futura implementación
function toggleView(viewType) {
    const buttons = document.querySelectorAll('.view-toggle .btn');
    const container = document.querySelector('.events-container');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (container) {
        container.className = `events-container view-${viewType}`;
        console.log('Vista cambiada a:', viewType);
    }
}

// Compartir evento - para futura implementación
function shareEvent(eventId) {
    if (navigator.share) {
        navigator.share({
            title: 'Evento compartido',
            text: 'Te comparto este evento interesante',
            url: window.location.href
        });
    } else {
        // Fallback: copiar al clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Enlace copiado al portapapeles', 'info');
        });
    }
}

// Exportar a calendario - para futura implementación
function exportToCalendar(eventData) {
    console.log('Exportando evento al calendario:', eventData);
    showNotification('Funcionalidad de exportación próximamente', 'info');
}

// Aplicar tema oscuro - para futura implementación
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    showNotification(isDark ? 'Tema oscuro activado' : 'Tema claro activado', 'info');
}