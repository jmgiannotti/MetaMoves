<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue';
import { currentLang } from './i18n';
import type { FilterState, SkillMove, Platform, ControlScheme } from './types';
import { skillMoves } from './data/skillMoves';
import AppHeader from './components/AppHeader.vue';
import FilterBar from './components/FilterBar.vue';
import SkillGrid from './components/SkillGrid.vue';

const SkillDetail = defineAsyncComponent(() => import('./components/SkillDetail.vue'));

const filters = ref<FilterState>({
  stars: null,
  search: '',
  newOnly: false,
});

// Detail drawer state
const selectedMove = ref<SkillMove | null>(null);
const platform = ref<Platform>('ps');
const scheme = ref<ControlScheme>('classic');

const normalize = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const filteredMoves = computed(() => {
  const { stars, search, newOnly } = filters.value;
  const query = search.trim() ? normalize(search.trim()) : '';

  return skillMoves.filter(move => {
    if (stars !== null && move.stars !== stars) return false;
    if (newOnly && !move.isNew) return false;
    if (query && !normalize(move.name).includes(query) && !normalize(move.description[currentLang.value]).includes(query)) return false;
    return true;
  });
});

const newCount = computed(() => skillMoves.filter(m => m.isNew).length);

function updateFilters(newFilters: FilterState) {
  filters.value = newFilters;
}

function openDetail(move: SkillMove) {
  selectedMove.value = move;
}

function closeDetail() {
  selectedMove.value = null;
}
</script>

<template>
  <div class="app">
    <AppHeader />

    <FilterBar
      :filters="filters"
      :total-count="skillMoves.length"
      :new-count="newCount"
      @update:filters="updateFilters"
    />

    <main class="app__main container">
      <SkillGrid :moves="filteredMoves" @select="openDetail" />
    </main>

    <!-- Detail Drawer -->
    <Teleport to="body">
      <Transition name="drawer">
        <SkillDetail
          v-if="selectedMove"
          :move="selectedMove"
          :platform="platform"
          :scheme="scheme"
          @close="closeDetail"
          @update:platform="platform = $event"
          @update:scheme="scheme = $event"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app__main {
  flex: 1;
}
</style>
