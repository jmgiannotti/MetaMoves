<script setup lang="ts">
import { computed } from 'vue';
import type { StarRating, FilterState } from '../types';
import { ui } from '../i18n';

const props = defineProps<{
  filters: FilterState;
  totalCount: number;
  newCount: number;
}>();

const emit = defineEmits<{
  'update:filters': [filters: FilterState];
}>();

const hasActiveFilters = computed(() =>
  props.filters.stars !== null || props.filters.search !== '' || props.filters.newOnly
);

function setStarFilter(stars: StarRating | null) {
  emit('update:filters', {
    ...props.filters,
    stars: props.filters.stars === stars ? null : stars,
  });
}

let searchTimer: ReturnType<typeof setTimeout> | undefined;
function setSearch(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    emit('update:filters', { ...props.filters, search: value });
  }, 250);
}

function toggleNewOnly() {
  emit('update:filters', { ...props.filters, newOnly: !props.filters.newOnly });
}

function clearFilters() {
  clearTimeout(searchTimer);
  emit('update:filters', { stars: null, search: '', newOnly: false });
}
</script>

<template>
  <div class="filter-bar" id="filter-bar">
    <div class="filter-bar__inner">
      <!-- Search -->
      <div class="filter-bar__search">
        <svg class="filter-bar__search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <input
          type="text"
          class="filter-bar__search-input"
          :placeholder="ui.searchPlaceholder"
          :value="filters.search"
          @input="setSearch"
          id="search-input"
        />
      </div>

      <!-- Star filters -->
      <div class="filter-bar__stars">
        <button
          v-for="star in ([1, 2, 3, 4, 5] as StarRating[])"
          :key="star"
          class="filter-bar__star-btn"
          :class="{ 'filter-bar__star-btn--active': filters.stars === star }"
          @click="setStarFilter(star)"
          :id="`filter-star-${star}`"
          :aria-label="`Filtrar por ${star} estrellas`"
          :aria-pressed="filters.stars === star"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.9 8.62L22 9.27L16.73 13.97L18.18 21.02L12 17.27L5.82 21.02L7.27 13.97L2 9.27L9.1 8.62L12 2Z"/>
          </svg>
          {{ star }}
        </button>
      </div>

      <!-- New filter + Clear -->
      <div class="filter-bar__actions">
        <button
          class="filter-bar__new-btn"
          :class="{ 'filter-bar__new-btn--active': filters.newOnly }"
          @click="toggleNewOnly"
          id="filter-new"
          :aria-pressed="filters.newOnly"
        >
          NEW
          <span class="filter-bar__new-count">{{ newCount }}</span>
        </button>

        <Transition name="fade">
          <button
            v-if="hasActiveFilters"
            class="filter-bar__clear-btn"
            @click="clearFilters"
            id="filter-clear"
          >
            {{ ui.clearFilters }}
          </button>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg-filter);
  backdrop-filter: blur(20px) saturate(1.2);
  -webkit-backdrop-filter: blur(20px) saturate(1.2);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-4) 0;
  margin-bottom: var(--space-6);
}

.filter-bar__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* Search */
.filter-bar__search {
  position: relative;
  flex: 1;
  min-width: 200px;
  max-width: 320px;
}

.filter-bar__search-icon {
  position: absolute;
  left: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
  pointer-events: none;
}

.filter-bar__search-input {
  width: 100%;
  padding: var(--space-2) var(--space-4) var(--space-2) 2.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-glass);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  outline: none;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.filter-bar__search-input::placeholder {
  color: var(--color-text-muted);
}

.filter-bar__search-input:focus {
  border-color: var(--color-border-active);
  box-shadow: 0 0 0 3px var(--color-accent-glow);
}

/* Star buttons */
.filter-bar__stars {
  display: flex;
  gap: var(--space-1);
}

.filter-bar__star-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-glass);
  color: var(--color-text-muted);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  cursor: pointer;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast),
    transform var(--transition-fast);
}

.filter-bar__star-btn:hover {
  background: var(--color-accent-gold-dim);
  border-color: rgba(255, 215, 0, 0.3);
  color: var(--color-accent-gold);
  transform: translateY(-1px);
}

.filter-bar__star-btn--active {
  background: var(--color-accent-gold-dim);
  border-color: var(--color-accent-gold);
  color: var(--color-accent-gold);
}

/* New button */
.filter-bar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-left: auto;
}

.filter-bar__new-btn {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background: var(--color-bg-glass);
  color: var(--color-text-muted);
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast);
}

.filter-bar__new-btn:hover {
  border-color: rgba(0, 255, 135, 0.3);
  color: var(--color-accent-primary);
}

.filter-bar__new-btn--active {
  background: var(--color-accent-glow);
  border-color: var(--color-accent-primary);
  color: var(--color-accent-primary);
}

.filter-bar__new-count {
  font-size: 0.625rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 1px 6px;
  border-radius: var(--radius-full);
  font-weight: 600;
}

.filter-bar__new-btn--active .filter-bar__new-count {
  background: rgba(0, 255, 135, 0.2);
}

/* Clear button */
.filter-bar__clear-btn {
  padding: var(--space-2) var(--space-3);
  border: none;
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--color-text-muted);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color var(--transition-fast);
}

.filter-bar__clear-btn:hover {
  color: var(--color-text-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .filter-bar__inner {
    padding: 0 var(--space-4);
    gap: var(--space-3);
  }

  .filter-bar__search {
    min-width: 100%;
    max-width: 100%;
    order: -1;
  }

  .filter-bar__stars {
    flex: 1;
  }
}

@media (max-width: 480px) {
  .filter-bar__inner {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-bar__stars {
    justify-content: space-between;
  }

  .filter-bar__actions {
    margin-left: 0;
    justify-content: space-between;
  }
}
</style>
