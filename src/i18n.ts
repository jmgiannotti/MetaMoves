import { ref, computed } from 'vue';

export type Language = 'es' | 'en';

// Define the global reactive language state
export const currentLang = ref<Language>('es');

// Global translations for UI elements
export const ui = computed(() => {
  const isEs = currentLang.value === 'es';
  return {
    searchPlaceholder: isEs ? 'Buscar regate...' : 'Search skill move...',
    resultsPlural: isEs ? 'regates encontrados' : 'skill moves found',
    resultsSingular: isEs ? 'regate encontrado' : 'skill move found',
    noResults: isEs ? 'Sin resultados' : 'No results found',
    noResultsText: isEs 
      ? 'No se encontraron regates con esos filtros. Probá cambiando los criterios de búsqueda.' 
      : 'No skill moves matched your filters. Try changing your search criteria.',
    clearFilters: isEs ? 'Limpiar filtros' : 'Clear filters',
    starsRequired: isEs ? '★ de filigranas requeridas' : '★ skill moves required',
    animation: isEs ? 'Animación' : 'Animation',
    controls: isEs ? 'Controles' : 'Controls',
    platform: isEs ? 'Plataforma' : 'Platform',
    scheme: isEs ? 'Esquema' : 'Control Scheme',
    classic: isEs ? 'Clásica' : 'Classic',
    alternative: isEs ? 'Alternativa' : 'Alternative',
    viewDetail: isEs ? 'Ver detalle →' : 'View detail →',
  };
});

export const categories = computed(() => {
  const isEs = currentLang.value === 'es';
  return {
    basic: isEs ? 'Básico' : 'Basic',
    flicks: isEs ? 'Flicks' : 'Flicks',
    spins: isEs ? 'Giros' : 'Spins',
    juggles: isEs ? 'Malabarismo' : 'Juggling',
    advanced: isEs ? 'Avanzado' : 'Advanced',
    meta: 'Meta',
  };
});
