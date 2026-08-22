// Cargar datos del JSON
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        // Header
        document.getElementById('corte').textContent = data.corte;
        document.getElementById('corte-footer').textContent = data.corte;
        document.getElementById('declaratoria').textContent = data.declaratoria;
        document.getElementById('decreto-footer').textContent = data.declaratoria;
        document.getElementById('fuente').textContent = data.fuente;
        
        // Población
        document.getElementById('poblacion-afectada').textContent = data.rufe.personas_registradas.toLocaleString();
        document.getElementById('poblacion-fallecidos').textContent = data.poblacion.fallecidos;
        document.getElementById('poblacion-desaparecidos').textContent = data.poblacion.desaparecidos;
        document.getElementById('poblacion-heridos').textContent = data.poblacion.heridos;
        
        // Viviendas
        document.getElementById('viviendas-urbanas-averiadas').textContent = data.poblacion.viviendas_urbanas_averiadas;
        document.getElementById('viviendas-urbanas-destruidas').textContent = data.poblacion.viviendas_urbanas_destruidas;
        document.getElementById('viviendas-rurales-averiadas').textContent = data.poblacion.viviendas_rurales_averiadas;
        document.getElementById('viviendas-rurales-destruidas').textContent = data.poblacion.viviendas_rurales_destruidas;
        
        // RUFE
        document.getElementById('rufe-realizados').textContent = data.rufe.realizados.toLocaleString();
        document.getElementById('rufe-personas').textContent = data.rufe.personas_registradas.toLocaleString();
        
        // Emergencias
        document.getElementById('escombros-toneladas').textContent = data.escombros.toneladas_dispuestas;
        document.getElementById('sitios-aislados').textContent = data.sitios.aislados;
        document.getElementById('mercados-entregados').textContent = data.asistencia.mercados_entregados;
        
        // Infraestructura
        document.getElementById('educacion-centros-principales').textContent = data.educacion.centros_educativos_principales;
        document.getElementById('salud-hospitales').textContent = data.salud.hospitales;
        document.getElementById('iglesia-principal').textContent = data.edificaciones_publicas.iglesias > 0 ? 1 : 0;
        document.getElementById('iglesias-otras').textContent = data.edificaciones_publicas.iglesias - 1;
        document.getElementById('cementerio').textContent = 1;
        document.getElementById('municipio').textContent = data.edificaciones_publicas.alcaldia;
        document.getElementById('comisaria').textContent = 1;
        document.getElementById('hotel').textContent = 1;
        document.getElementById('centro-vida').textContent = 1;
        document.getElementById('polideportivo').textContent = 1;
        
        // Servicios
        document.getElementById('servicios').textContent = data.servicios;
        document.getElementById('albergues-ubicacion').textContent = data.albergues.ubicacion;
        document.getElementById('albergues-activos').textContent = data.albergues.activos;
        document.getElementById('albergues-personas').textContent = data.albergues.personas;
        document.getElementById('atencion-asistencia-humanitaria').textContent = data.atencion.asistencia_humanitaria;
        document.getElementById('atencion-colchones-frazadas').textContent = data.atencion.colchones_frazadas;
        document.getElementById('atencion-maquinaria-amarilla').textContent = data.atencion.maquinaria_amarilla;
        document.getElementById('locales-averiados').textContent = data.locales.averiados;
        document.getElementById('locales-destruidos').textContent = data.locales.destruidos;
        
        // Psicosocial
        document.getElementById('psico-equipos').textContent = data.psicosocial.equipos_creados;
        document.getElementById('psico-individual').textContent = data.psicosocial.atencion_individual;
        document.getElementById('psico-grupal').textContent = data.psicosocial.atencion_grupal;
        
        // Gestión
        document.getElementById('gestion-pmu').textContent = data.gestion.pmu;
        document.getElementById('requerimientos').textContent = data.requerimientos;
        
    } catch (error) {
        console.error('Error cargando datos:', error);
    }
}

// Cargar datos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadData);

// Smooth scroll para los links de la navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});