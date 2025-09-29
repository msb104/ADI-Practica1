# EventManager - Sistema de Gestión de Eventos

## Descripción del Proyecto

EventManager es un prototipo estático de una aplicación web para la gestión de eventos personales. Desarrollado como parte de la Práctica 1 de ADI (Aplicaciones Distribuidas para Internet), este proyecto implementa un CRUD completo para la gestión de usuarios y eventos.

## 🚀 Características Principales

### Entidades
- **Usuario**: Registro, autenticación y gestión de perfil
- **Evento**: CRUD completo con categorización y prioridades

### Funcionalidades
- ✅ Autenticación (login/registro/logout)
- ✅ Gestión completa de eventos (crear, leer, actualizar, eliminar)
- ✅ Búsqueda y filtrado avanzado
- ✅ Categorización de eventos (trabajo, personal, ocio, salud, etc.)
- ✅ Sistema de prioridades
- ✅ Gestión de recordatorios
- ✅ Perfil de usuario con estadísticas
- ✅ Diseño responsive
- ✅ Interfaz intuitiva y moderna

## 📁 Estructura del Proyecto

```
gestion-eventos/
├── index.html                 # Página de login/registro
├── dashboard.html             # Panel principal con lista de eventos
├── nuevo-evento.html         # Formulario para crear eventos
├── editar-evento.html        # Formulario para editar eventos
├── detalle-evento.html       # Vista detallada de un evento
├── perfil.html               # Perfil del usuario y configuración
├── buscar-eventos.html       # Búsqueda avanzada y filtros
├── css/
│   ├── style.css            # Estilos principales
│   ├── components.css       # Componentes reutilizables
│   └── responsive.css       # Media queries para responsive
├── js/
│   └── main.js             # Funcionalidades JavaScript básicas
├── assets/
│   └── images/             # Imágenes del proyecto
└── README.md               # Documentación del proyecto
```

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: #007bff (Azul)
- **Secundario**: #6c757d (Gris)
- **Éxito**: #28a745 (Verde)
- **Peligro**: #dc3545 (Rojo)
- **Advertencia**: #ffc107 (Amarillo)
- **Info**: #17a2b8 (Cian)

### Categorías de Eventos
- 🔵 **Trabajo**: #007bff
- 🟢 **Personal**: #28a745
- 🟡 **Ocio**: #ffc107
- 🔴 **Salud**: #dc3545
- 🟣 **Educación**: #6f42c1
- 🟠 **Familia**: #fd7e14

### Características de Diseño
- Diseño moderno y limpio
- Interfaz responsive (mobile-first)
- Componentes reutilizables
- Feedback visual para interacciones
- Accesibilidad considerada
- Tipografía clara y legible

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica con formularios funcionales
- **CSS3**: Estilos modernos con Flexbox, Grid y animaciones CSS
- **CSS Puro**: Funcionalidades interactivas sin JavaScript (tabs, efectos)
- **Responsive Design**: Compatible con móviles y tablets

## 📱 Páginas Implementadas

### 1. Inicio (index.html)
- Formularios de login y registro
- Tabs interactivos
- Validación básica

### 2. Dashboard (dashboard.html)
- Lista de eventos del usuario
- Filtros por categoría
- Búsqueda rápida
- Vista de tarjetas responsive

### 3. Nuevo Evento (nuevo-evento.html)
- Formulario completo de creación
- Campos para todas las propiedades
- Validación de campos requeridos

### 4. Detalle de Evento (detalle-evento.html)
- Vista completa del evento
- Información organizada en secciones
- Eventos relacionados
- Metadatos del evento

### 5. Editar Evento (editar-evento.html)
- Formulario pre-rellenado
- Mismas validaciones que creación
- Navegación con breadcrumbs

### 6. Perfil (perfil.html)
- Información personal del usuario
- Configuración de notificaciones
- Estadísticas de uso
- Cambio de contraseña

### 7. Búsqueda (buscar-eventos.html)
- Búsqueda por texto
- Filtros avanzados
- Resultados paginados
- Tags visuales de prioridad

## 🎨 Funcionalidades CSS Puras

### Implementadas (Solo HTML/CSS)
- ✅ **Tabs interactivos** (login/registro) con radio buttons
- ✅ **Efectos hover** en tarjetas y botones
- ✅ **Transiciones suaves** en todas las interacciones  
- ✅ **Formularios funcionales** con navegación
- ✅ **Validación HTML5** nativa
- ✅ **Responsive design** completo

### Para Futuras Implementaciones (JavaScript)
- Vista de calendario interactiva
- Búsqueda en tiempo real
- Notificaciones dinámicas
- Validaciones avanzadas
- Almacenamiento local

## 📊 Casos de Uso Cubiertos

### Autenticación
- [x] Registro de usuario
- [x] Inicio de sesión
- [x] Cierre de sesión

### Gestión de Eventos
- [x] Crear evento
- [x] Listar eventos
- [x] Ver detalle de evento
- [x] Editar evento
- [x] Eliminar evento
- [x] Buscar eventos
- [x] Filtrar por categoría
- [x] Filtrar por fecha/prioridad

### Perfil de Usuario
- [x] Ver perfil
- [x] Editar información personal
- [x] Configurar notificaciones
- [x] Ver estadísticas
- [x] Cambiar contraseña

## 🚀 Cómo Usar el Prototipo

1. **Clona o descarga** el proyecto
2. **Abre** `index.html` en tu navegador
3. **Prueba los tabs** haciendo clic entre "Iniciar Sesión" y "Registrarse"
4. **Navega** entre páginas usando los enlaces y formularios
5. **Llena formularios** para ver la navegación automática
6. **Redimensiona** la ventana para probar el diseño responsive

## 📝 Notas del Desarrollo

### Características del Prototipo (Primera Entrega)
- Es completamente **estático** (solo HTML y CSS)
- Los datos son de **ejemplo** y no se persisten
- Las funcionalidades están implementadas con **CSS puro**
- La navegación se hace mediante **formularios** y **enlaces directos**
- Incluye **validación HTML5** nativa

### Consideraciones Técnicas
- Código semántico y bien estructurado
- CSS modular y mantenible
- Formularios con action/method para navegación
- Tabs implementados con radio buttons + CSS
- Sin dependencias de JavaScript para la primera entrega
- Accesibilidad básica implementada
- Responsive design móvil-primero
- **JavaScript preservado** para futuras entregas

## 🎯 Objetivos Cumplidos (Primera Entrega)

- ✅ CRUD completo de eventos (interfaz)
- ✅ Sistema de autenticación (interfaz)  
- ✅ Formularios de búsqueda y filtrado
- ✅ Diseño responsive y moderno
- ✅ Navegación intuitiva con formularios
- ✅ Componentes reutilizables
- ✅ Validaciones HTML5 nativas
- ✅ Tabs funcionales solo con CSS
- ✅ **Completamente estático** (HTML + CSS)

## 👥 Autor

**Práctica 1 - ADI 2025**
- Prototipo de frontend con HTML/CSS
- Sistema de gestión de eventos

---

*Este es un prototipo educativo desarrollado para la asignatura de Aplicaciones Distribuidas para Internet (ADI).*