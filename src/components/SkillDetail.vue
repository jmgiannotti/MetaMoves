<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue';
import type { SkillMove, Platform, ControlScheme } from '../types';
import { categoryIcons } from '../data/skillMoves';
import { currentLang, ui, categories } from '../i18n';
import StarRating from './StarRating.vue';
import SkillAnimation from './SkillAnimation.vue';
import ControllerInput from './ControllerInput.vue';

const props = defineProps<{
  move: SkillMove;
  platform: Platform;
  scheme: ControlScheme;
}>();

const emit = defineEmits<{
  close: [];
  'update:platform': [platform: Platform];
  'update:scheme': [scheme: ControlScheme];
}>();

const activeSteps = computed(() => {
  return props.move.inputs[props.scheme];
});

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

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close');
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
  document.body.classList.add('modal-open');
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.body.classList.remove('modal-open');
});
</script>

<template>
  <!-- Backdrop -->
  <Transition name="backdrop">
    <div class="detail-backdrop" @click="emit('close')" id="detail-backdrop"></div>
  </Transition>

  <!-- Drawer -->
  <aside class="detail-drawer" id="skill-detail" role="dialog" :aria-label="typeof move.name === 'string' ? move.name : move.name[currentLang]">
    <!-- Header -->
    <header class="detail-drawer__header">
      <div class="detail-drawer__header-info">
        <span class="detail-drawer__category" :style="{ color: getCategoryColor(move.category) }">
          {{ categoryIcons[move.category] }} {{ categories[move.category as keyof typeof categories] }}
        </span>
        <span v-if="move.isNew" class="detail-drawer__badge">NEW</span>
      </div>
      <button class="detail-drawer__close" @click="emit('close')" id="detail-close" :aria-label="ui.closeDetail">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </header>

    <!-- Scrollable content -->
    <div class="detail-drawer__body">
      <!-- Title & Stars -->
      <div class="detail-drawer__title-section">
        <h2 class="detail-drawer__title">{{ typeof move.name === 'string' ? move.name : move.name[currentLang] }}</h2>
        <div class="detail-drawer__stars">
          <StarRating :rating="move.stars" size="lg" />
          <span class="detail-drawer__star-text">{{ move.stars }} {{ ui.starsRequired }}</span>
        </div>
        <p class="detail-drawer__description">{{ move.description[currentLang] }}</p>
      </div>

      <!-- Animation -->
      <section class="detail-drawer__section">
        <h3 class="detail-drawer__section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          {{ ui.animation }}
        </h3>
        <SkillAnimation
          :move-id="move.id"
          :animation-type="move.animationType"
          :category-color="getCategoryColor(move.category)"
          :move="move"
        />
      </section>

      <!-- Controls Section -->
      <section class="detail-drawer__section">
        <h3 class="detail-drawer__section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <rect x="2" y="6" width="20" height="12" rx="4"/>
            <circle cx="9" cy="12" r="2"/>
            <circle cx="15" cy="12" r="2"/>
          </svg>
          {{ ui.controls }}
        </h3>

        <!-- Toggle Row: Platform + Scheme -->
        <div class="detail-drawer__toggles">
          <!-- Platform Toggle -->
          <div class="detail-drawer__toggle-group">
            <span class="detail-drawer__toggle-label">{{ ui.platform }}</span>
            <div class="detail-drawer__toggle" id="platform-toggle">
              <button
                class="detail-drawer__toggle-btn"
                :class="{ 'detail-drawer__toggle-btn--active': platform === 'ps' }"
                @click="emit('update:platform', 'ps')"
                id="toggle-ps"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.886.49.266.397.932.397 1.622v4.461c2.446 1.19 4.314.625 4.314-2.195 0-2.871-1.55-3.954-5.42-5.166C10.695 3.88 8.985 2.596 8.985 2.596zM3.882 16.727c-2.454-.553-.588-2.302-.588-2.302L7.97 12.6v-2.26l-6.295 2.46C.46 13.27-.283 14.626.136 16.075c.44 1.528 2.272 2.412 4.131 2.658 2.386.295 4.686-.263 4.686-.263v-2.605s-2.537 1.207-5.071.862zM20.487 14.27c-1.327-.756-3.097-1.039-3.097-1.039v2.407s1.222.2 2.245.715c.824.413.612.97-.02 1.048-.63.079-2.15-.232-2.15-.232v2.195s.92.133 2.315.1c1.832-.043 3.266-.558 3.607-1.694.392-1.305-.6-2.647-2.9-3.5z"/>
                </svg>
                PS
              </button>
              <button
                class="detail-drawer__toggle-btn"
                :class="{ 'detail-drawer__toggle-btn--active': platform === 'xbox' }"
                @click="emit('update:platform', 'xbox')"
                id="toggle-xbox"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.102 21.033C6.211 22.881 8.977 24 12 24s5.789-1.119 7.898-2.967c1.235-1.725-.322-6.142-4.322-9.766-.86.27-1.726.49-2.576.49-.85 0-1.716-.22-2.576-.49-4 3.624-5.557 8.041-4.322 9.766zM12 4.56S9.879.897 7.235.287C6.552.132 5.56.14 5.148.55c-.787.782-.544 3.146.596 5.051C7.586 6.57 9.648 7.74 12 7.74s4.414-1.17 6.256-2.14c1.14-1.905 1.383-4.269.596-5.05-.412-.412-1.404-.42-2.087-.264C14.121.897 12 4.56 12 4.56zM1.834 9.677c-.573 1.7-.834 3.515-.834 5.323 0 1.906.583 3.7 1.3 5.317.284-.38.707-.845 1.3-1.407.192-.183.384-.385.6-.581C2.4 15.573 1.234 11.527 1.834 9.677zm20.332 0c.6 1.85-.566 5.896-2.4 8.652.216.196.408.398.6.581.593.562 1.016 1.027 1.3 1.407.717-1.617 1.3-3.411 1.3-5.317 0-1.808-.261-3.623-.834-5.323z"/>
                </svg>
                Xbox
              </button>
            </div>
          </div>

          <!-- Scheme Toggle -->
          <div class="detail-drawer__toggle-group">
            <span class="detail-drawer__toggle-label">{{ ui.scheme }}</span>
            <div class="detail-drawer__toggle" id="scheme-toggle">
              <button
                class="detail-drawer__toggle-btn"
                :class="{ 'detail-drawer__toggle-btn--active': scheme === 'classic' }"
                @click="emit('update:scheme', 'classic')"
                id="toggle-classic"
              >
                {{ ui.classic }}
              </button>
              <button
                class="detail-drawer__toggle-btn"
                :class="{ 'detail-drawer__toggle-btn--active': scheme === 'alternative' }"
                @click="emit('update:scheme', 'alternative')"
                id="toggle-alternative"
              >
                {{ ui.alternative }}
              </button>
            </div>
          </div>
        </div>

        <!-- Controller Inputs -->
        <ControllerInput
          :steps="activeSteps"
          :platform="platform"
          :scheme="scheme"
          :note="move.inputs.note"
        />
      </section>
    </div>
  </aside>
</template>

<style scoped>
/* Backdrop */
.detail-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 200;
}

/* Drawer */
.detail-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: var(--drawer-width);
  max-width: 100vw;
  background: var(--color-bg-secondary);
  border-left: 1px solid var(--color-border);
  z-index: 201;
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

/* Header */
.detail-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5) var(--space-6);
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}

.detail-drawer__header-info {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.detail-drawer__category {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.detail-drawer__badge {
  font-family: var(--font-display);
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--color-bg-primary);
  background: var(--color-accent-primary);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  letter-spacing: 0.1em;
}

.detail-drawer__close {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.detail-drawer__close:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-primary);
  border-color: var(--color-border-hover);
}

/* Body */
.detail-drawer__body {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

/* Title section */
.detail-drawer__title-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.detail-drawer__title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.2;
}

.detail-drawer__stars {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.detail-drawer__star-text {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.detail-drawer__description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* Sections */
.detail-drawer__section {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.detail-drawer__section-title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.detail-drawer__section-title svg {
  color: var(--color-accent-primary);
}

/* Toggles */
.detail-drawer__toggles {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.detail-drawer__toggle-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.detail-drawer__toggle-label {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-weight: 500;
}

.detail-drawer__toggle {
  display: flex;
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 2px;
  gap: 2px;
}

.detail-drawer__toggle-btn {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border: none;
  border-radius: calc(var(--radius-md) - 2px);
  background: transparent;
  color: var(--color-text-muted);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.detail-drawer__toggle-btn:hover {
  color: var(--color-text-primary);
  background: rgba(255, 255, 255, 0.04);
}

.detail-drawer__toggle-btn--active {
  background: var(--color-accent-glow);
  color: var(--color-accent-primary);
  box-shadow: 0 0 12px var(--color-accent-glow);
}

.detail-drawer__toggle-btn--active:hover {
  background: var(--color-accent-glow);
  color: var(--color-accent-primary);
}

.detail-drawer__toggle-btn svg {
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 640px) {
  .detail-drawer {
    width: 100vw;
    border-left: none;
  }

  .detail-drawer__body {
    padding: var(--space-4);
  }

  .detail-drawer__title {
    font-size: var(--text-xl);
  }

  .detail-drawer__toggles {
    flex-direction: column;
  }
}
</style>
