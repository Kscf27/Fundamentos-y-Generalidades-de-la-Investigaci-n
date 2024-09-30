// Inicializa el mapa centrado en Bogotá
var map = L.map('map').setView([4.6104, -74.082], 13); // Coordenadas de Bogotá

// Añade el mapa base desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marcadores de ejemplo para Rafael Uribe Uribe

// Liderazgos Comunitarios
var liderazgo = L.marker([4.5816, -74.1105]).addTo(map);
liderazgo.bindPopup("<b>Liderazgo Comunitario</b><br>UPZ Quiroga").openPopup();

// Vocaciones Productivas
var vocaciones = L.marker([4.5842, -74.0910]).addTo(map);
vocaciones.bindPopup("<b>Vocación Productiva</b><br>Microempresas de comercio y servicios en San José").openPopup();

// Oportunidades
var oportunidades = L.marker([4.6045, -74.0917]).addTo(map);
oportunidades.bindPopup("<b>Oportunidades</b><br>Zonas de desarrollo empresarial en Marruecos").openPopup();

// Conflictos Territoriales
var conflictos = L.marker([4.5772, -74.0987]).addTo(map);
conflictos.bindPopup("<b>Conflictos Territoriales</b><br>Deterioro de vías y espacio público en San Carlos").openPopup();

// Configuración Territorial Comunitaria
var configuracion = L.marker([4.5871, -74.1013]).addTo(map);
configuracion.bindPopup("<b>Configuración Comunitaria</b><br>Áreas residenciales consolidadas en Diana Turbay").openPopup();
