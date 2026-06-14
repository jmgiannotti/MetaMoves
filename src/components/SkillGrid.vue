<script setup lang="ts">
import type { SkillMove } from '../types';
import SkillCard from './SkillCard.vue';

defineProps<{
  moves: SkillMove[];
}>();

const emit = defineEmits<{
  select: [move: SkillMove];
}>();

import { ui } from '../i18n';
</script>

<template>
  <section class="skill-grid" aria-label="Catálogo de regates">
    <!-- Results count -->
    <div class="skill-grid__status">
      <p class="skill-grid__count">
        {{ moves.length }} {{ moves.length === 1 ? ui.resultsSingular : ui.resultsPlural }}
      </p>
    </div>

    <!-- Grid -->
    <TransitionGroup name="card-list" tag="div" class="skill-grid__grid">
      <SkillCard
        v-for="(move, index) in moves"
        :key="move.id"
        :move="move"
        :index="index"
        @select="emit('select', $event)"
      />
    </TransitionGroup>

    <!-- Empty state -->
    <Transition name="fade">
      <div v-if="moves.length === 0" class="skill-grid__empty">
        <span class="skill-grid__empty-icon">🔍</span>
        <h3 class="skill-grid__empty-title">{{ ui.noResults }}</h3>
        <p class="skill-grid__empty-text">{{ ui.noResultsText }}</p>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.skill-grid {
  padding: var(--space-2) 0 var(--space-16);
}

/* Status bar */
.skill-grid__status {
  margin-bottom: var(--space-6);
}

.skill-grid__count {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
}

/* Grid layout */
.skill-grid__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1200px) {
  .skill-grid__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .skill-grid__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
}

@media (max-width: 520px) {
  .skill-grid__grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}

/* Empty state */
.skill-grid__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-16) var(--space-6);
  text-align: center;
}

.skill-grid__empty-icon {
  font-size: 3rem;
  margin-bottom: var(--space-4);
  opacity: 0.6;
}

.skill-grid__empty-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}

.skill-grid__empty-text {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  max-width: 360px;
  line-height: 1.6;
}
</style>
