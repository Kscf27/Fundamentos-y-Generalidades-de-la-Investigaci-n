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

// --- Nuevos puntos agregados según las problemáticas y actividades económicas ---

// Deterioro de Infraestructura Vial - San Carlos
var deterioroVial = L.marker([4.5772, -74.0987]).addTo(map);
deterioroVial.bindPopup("<b>Deterioro de Infraestructura Vial</b><br>Problemas de movilidad en San Carlos").openPopup();

// Alta Densidad Poblacional - Quiroga
var altaDensidad = L.marker([4.5895, -74.1107]).addTo(map);
altaDensidad.bindPopup("<b>Alta Densidad Poblacional</b><br>Área densamente poblada en Quiroga").openPopup();

// Inseguridad - Estadio Olaya Herrera
var inseguridad = L.marker([4.5819, -74.1215]).addTo(map);
inseguridad.bindPopup("<b>Inseguridad</b><br>Altos índices de criminalidad cerca del Estadio Olaya Herrera").openPopup();

// Desempleo y Economía Informal - San Jorge
var desempleo = L.marker([4.5900, -74.1012]).addTo(map);
desempleo.bindPopup("<b>Desempleo y Economía Informal</b><br>Alta tasa de desempleo en San Jorge").openPopup();

// Zonas de Concentración Económica - Olaya Herrera
var comercioOlaya = L.marker([4.5985, -74.1201]).addTo(map);
comercioOlaya.bindPopup("<b>Comercio Local</b><br>Microempresas y comercio local en Olaya Herrera").openPopup();

// Industria - Quiroga
var industriaQuiroga = L.marker([4.5840, -74.1120]).addTo(map);
industriaQuiroga.bindPopup("<b>Industria Manufacturera</b><br>Sector industrial en Quiroga").openPopup();

// Emprendimiento Tecnológico - Marruecos
var emprendimientoMarruecos = L.marker([4.6045, -74.0917]).addTo(map);
emprendimientoMarruecos.bindPopup("<b>Emprendimiento Tecnológico</b><br>Oportunidades de emprendimiento en Marruecos").openPopup();
