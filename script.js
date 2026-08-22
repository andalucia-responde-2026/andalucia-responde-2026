// Cargar datos desde JSON
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        populateData(data);
    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

// Llenar datos en la página
function populateData(data) {
    // Header
    document.getElementById('corte').textContent = data.corte || '--';
    document.getElementById('declaratoria').textContent = data.declaratoria || '--';
    document.getElementById('fuente').textContent = data.fuente || '--';

    // Población
    document.getElementById('poblacion-afectada').textContent = formatNumber(data.poblacion.afectada);
    document.getElementById('poblacion-fallecidos').textContent = formatNumber(data.poblacion.fallecidos);
    document.getElementById('poblacion-desaparecidos').textContent = formatNumber(data.poblacion.desaparecidos);
    document.getElementById('poblacion-heridos').textContent = formatNumber(data.poblacion.heridos);

    // Viviendas
    document.getElementById('viviendas-urbanas-averiadas').textContent = formatNumber(data.poblacion.viviendas_urbanas_averiadas);
    document.getElementById('viviendas-urbanas-destruidas').textContent = formatNumber(data.poblacion.viviendas_urbanas_destruidas);
    document.getElementById('viviendas-rurales-averiadas').textContent = formatNumber(data.poblacion.viviendas_rurales_averiadas);
    document.getElementById('viviendas-rurales-destruidas').textContent = formatNumber(data.poblacion.viviendas_rurales_destruidas);

    // Salud
    document.getElementById('salud-hospitales').textContent = formatNumber(data.salud.hospitales);
    document.getElementById('salud-centros-salud').textContent = formatNumber(data.salud.centros_salud);
    document.getElementById('salud-puestos-salud').textContent = formatNumber(data.salud.puestos_salud);
    document.getElementById('salud-clinicas-ips').textContent = formatNumber(data.salud.clinicas_ips);

    // Educación
    document.getElementById('educacion-centros-principales').textContent = formatNumber(data.educacion.centros_educativos_principales);
    document.getElementById('educacion-sedes-urbanas').textContent = formatNumber(data.educacion.sedes_urbanas);
    document.getElementById('educacion-sedes-rurales').textContent = formatNumber(data.educacion.sedes_rurales);

    // Edificaciones Públicas
    document.getElementById('edificaciones-centros-comunitarios').textContent = formatNumber(data.edificaciones_publicas.centros_comunitarios);
    document.getElementById('edificaciones-alcaldia').textContent = formatNumber(data.edificaciones_publicas.alcaldia);
    document.getElementById('edificaciones-iglesias').textContent = formatNumber(data.edificaciones_publicas.iglesias);
    document.getElementById('edificaciones-plaza-mercado').textContent = formatNumber(data.edificaciones_publicas.plaza_mercado);
    document.getElementById('edificaciones-cultura').textContent = formatNumber(data.edificaciones_publicas.cultura);
    document.getElementById('edificaciones-jac').textContent = data.edificaciones_publicas.jac || '--';
    document.getElementById('edificaciones-otras').textContent = formatNumber(data.edificaciones_publicas.otras);

    // Vías
    document.getElementById('vias-principales-urbanas').textContent = formatNumber(data.vias.principales_urbanas);
    document.getElementById('vias-secundarias-terciarias-rurales').textContent = formatNumber(data.vias.secundarias_terciarias_rurales);

    // Locales
    document.getElementById('locales-averiados').textContent = formatNumber(data.locales.averiados);
    document.getElementById('locales-destruidos').textContent = formatNumber(data.locales.destruidos);

    // Albergues
    document.getElementById('albergues-ubicacion').textContent = data.albergues.ubicacion || '--';
    document.getElementById('albergues-activos').textContent = formatNumber(data.albergues.activos);
    document.getElementById('albergues-personas').textContent = formatNumber(data.albergues.personas);
    document.getElementById('albergues-necesidades').textContent = data.albergues.necesidades || '--';

    // Servicios
    document.getElementById('servicios').textContent = data.servicios || '--';

    // Atención
    document.getElementById('atencion-asistencia-humanitaria').textContent = data.atencion.asistencia_humanitaria || '--';
    document.getElementById('atencion-colchones-frazadas').textContent = data.atencion.colchones_frazadas || '--';
    document.getElementById('atencion-maquinaria-amarilla').textContent = formatNumber(data.atencion.maquinaria_amarilla);
    document.getElementById('atencion-material-construccion').textContent = data.atencion.material_construccion || '--';

    // Gestión
    document.getElementById('gestion-pmu').textContent = data.gestion.pmu || '--';

    // Requerimientos
    document.getElementById('requerimientos').textContent = data.requerimientos || '--';
}

// Función para formatear números
function formatNumber(num) {
    if (num === undefined || num === null) return '--';
    return Number(num).toLocaleString('es-ES');
}

// Cargar datos al iniciar
document.addEventListener('DOMContentLoaded', loadData);