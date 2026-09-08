<script setup lang="ts">
import type { SkillMove } from '../types';
import { categoryIcons } from '../data/skillMoves';
import { currentLang, ui, categories } from '../i18n';
import StarRating from './StarRating.vue';

defineProps<{
  move: SkillMove;
  index: number;
}>();

const emit = defineEmits<{
  select: [move: SkillMove];
}>();

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    basic: 'var(--color-cat-basic)',
    flicks: 'var(--color-cat-flicks)',
    spins: 'var(--color-cat-spins)',
    juggles: 'var(--color-cat-juggles)',
    advanced: 'var(--color-cat-advanced)',
    meta: 'var(--color-cat-meta)',
  };
  return colors[category] ?? 'var(--color-text-secondary)';
}
</script>

<template>
  <article
    class="skill-card"
    :style="{ '--stagger-delay': `${Math.min(index, 10) * 50}ms`, '--cat-color': getCategoryColor(move.category) }"
    :id="`skill-card-${move.id}`"
    @click="emit('select', move)"
    role="button"
    tabindex="0"
    @keydown.enter="emit('select', move)"
  >
    <!-- Glow border effect -->
    <div class="skill-card__glow"></div>

    <!-- Card content -->
    <div class="skill-card__content">
      <!-- Header row: category + new badge -->
      <div class="skill-card__header">
        <span class="skill-card__category" :style="{ color: getCategoryColor(move.category) }">
          {{ categoryIcons[move.category] }} {{ categories[move.category as keyof typeof categories] }}
        </span>
        <span v-if="move.isNew" class="skill-card__badge">NEW</span>
      </div>

      <!-- Move name -->
      <h3 class="skill-card__name">{{ typeof move.name === 'string' ? move.name : move.name[currentLang] }}</h3>

      <!-- Star rating -->
      <div class="skill-card__stars">
        <StarRating :rating="move.stars" size="md" />
        <span class="skill-card__star-label">{{ move.stars }}{{ ui.starsShort }}</span>
      </div>

      <!-- Description -->
      <p class="skill-card__description">{{ move.description[currentLang] }}</p>

      <!-- Bottom: accent line + hint -->
      <div class="skill-card__footer">
        <div class="skill-card__accent-line"></div>
        <span class="skill-card__hint">{{ ui.viewDetail }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.skill-card {
  position: relative;
  border-radius: var(--radius-lg);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  overflow: hidden;
  cursor: pointer;
  contain: layout;
  transition:
    transform var(--transition-base),
    border-color var(--transition-base),
    box-shadow var(--transition-base);
  animation: fadeInUp var(--transition-slow) ease-out both;
  animation-delay: var(--stagger-delay, 0ms);
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-card-hover);
}

/* Glow effect on hover */
.skill-card__glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(
    ellipse at 50% 0%,
    var(--color-accent-glow) 0%,
    transparent 70%
  );
  transition: opacity var(--transition-base);
  pointer-events: none;
  z-index: 0;
}

.skill-card:hover .skill-card__glow {
  opacity: 1;
}

/* Content */
.skill-card__content {
  position: relative;
  z-index: 1;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* Header */
.skill-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.skill-card__category {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* NEW badge */
.skill-card__badge {
  font-family: var(--font-display);
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--color-bg-primary);
  background: var(--color-accent-primary);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  letter-spacing: 0.1em;
  animation: badgePulse 2s ease-in-out infinite;
}

/* Move name */
.skill-card__name {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.3;
  transition: color var(--transition-fast);
}

.skill-card:hover .skill-card__name {
  color: var(--color-accent-primary);
}

/* Stars row */
.skill-card__stars {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.skill-card__star-label {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-weight: 500;
}

/* Description */
.skill-card__description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-top: var(--space-1);
}

/* Footer */
.skill-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

/* Accent line */
.skill-card__accent-line {
  height: 2px;
  width: 0;
  flex: 1;
  background: linear-gradient(
    90deg,
    var(--cat-color, var(--color-accent-primary)),
    transparent
  );
  border-radius: var(--radius-full);
  transition: width var(--transition-slow);
}

.skill-card:hover .skill-card__accent-line {
  width: 100%;
}

/* Hint */
.skill-card__hint {
  font-size: var(--text-xs);
  color: var(--color-accent-primary);
  font-weight: 500;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity var(--transition-base), transform var(--transition-base);
  white-space: nowrap;
}

.skill-card:hover .skill-card__hint {
  opacity: 1;
  transform: translateX(0);
}

/* Responsive */
@media (max-width: 480px) {
  .skill-card__content {
    padding: var(--space-5);
  }

  .skill-card__name {
    font-size: var(--text-lg);
  }
}
</style>
