<script setup lang="ts">
import { ref, watch } from 'vue';
import type { AnimationType } from '../types';

const props = defineProps<{
  moveId: string;
  animationType: AnimationType;
  categoryColor: string;
}>();

const animationDurations: Record<AnimationType, string> = {
  'lateral-shift': '2s',
  'forward-flick': '1.8s',
  'spin-360': '1.5s',
  'snap-back': '2s',
  'behind-leg': '2.2s',
  'chop': '1.8s',
  'nutmeg': '2.5s',
  'rainbow': '2s',
  'juggle': '1.6s',
  'drag-back': '1.8s',
};

const animLabels: Record<AnimationType, string> = {
  'lateral-shift': 'Desplazamiento lateral',
  'forward-flick': 'Flick hacia adelante',
  'spin-360': 'Giro 360°',
  'snap-back': 'Snap elástico',
  'behind-leg': 'Detrás de la pierna',
  'chop': 'Corte',
  'nutmeg': 'Caño',
  'rainbow': 'Sombrero',
  'juggle': 'Malabar',
  'drag-back': 'Arrastre hacia atrás',
};

const duration = animationDurations[props.animationType];

// Try to load GIF
const hasGifError = ref(false);
const gifUrl = ref(`/gifs/${props.moveId}.gif`);

watch(() => props.moveId, (newId) => {
  hasGifError.value = false;
  gifUrl.value = `/gifs/${newId}.gif`;
});

function onGifError() {
  hasGifError.value = true;
}
</script>

<template>
  <div class="skill-anim" :id="`skill-anim-${animationType}`">
    
    <!-- Video Player style container for GIF -->
    <template v-if="!hasGifError">
      <div class="skill-anim__gif-container">
        <img :src="gifUrl" @error="onGifError" class="skill-anim__gif" :alt="`GIF de ${moveId}`" />
      </div>
    </template>

    <!-- CSS Animation Fallback -->
    <template v-else>
      <!-- Background field lines (Not rotated so it looks right on wide aspect ratio) -->
      <svg class="skill-anim__field" viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="90" x2="240" y2="90" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
        <line x1="120" y1="0" x2="120" y2="180" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
        <circle cx="120" cy="90" r="35" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
      </svg>

      <!-- Scene Wrapper for perspective (Left-to-Right) -->
      <div class="skill-anim__scene">
        <!-- Player silhouette -->
        <svg class="skill-anim__player" viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="16" r="8" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
          <line x1="30" y1="24" x2="30" y2="56" stroke="rgba(255,255,255,0.25)" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="30" y1="32" x2="16" y2="44" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-linecap="round"/>
          <line x1="30" y1="32" x2="44" y2="44" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-linecap="round"/>
          <line x1="30" y1="56" x2="20" y2="80" stroke="rgba(255,255,255,0.25)" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="30" y1="56" x2="40" y2="80" stroke="rgba(255,255,255,0.25)" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="20" y1="80" x2="14" y2="82" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-linecap="round"/>
          <line x1="40" y1="80" x2="46" y2="82" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-linecap="round"/>
        </svg>

        <!-- Ball with animation -->
        <div
          class="skill-anim__ball"
          :style="{
            animation: `anim-${animationType} ${duration} ease-in-out infinite`,
            '--cat-color': categoryColor,
          }"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="var(--cat-color, #00ff87)" opacity="0.9"/>
            <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>
            <!-- Pentagon pattern -->
            <path d="M12 4 L14.5 9 L12 11 L9.5 9 Z" fill="rgba(0,0,0,0.15)"/>
            <path d="M17 8 L15 12 L17 15 L20 12 Z" fill="rgba(0,0,0,0.1)"/>
            <path d="M7 8 L9 12 L7 15 L4 12 Z" fill="rgba(0,0,0,0.1)"/>
          </svg>
        </div>

        <!-- Trail effect -->
        <div
          class="skill-anim__trail"
          :style="{
            animation: `anim-${animationType} ${duration} ease-in-out infinite`,
            animationDelay: '-100ms',
          }"
        ></div>
      </div>

      <!-- Label -->
      <span class="skill-anim__label">{{ animLabels[animationType] }}</span>
    </template>
  </div>
</template>

<style scoped>
.skill-anim {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(
    135deg,
    rgba(10, 10, 20, 0.8) 0%,
    rgba(15, 15, 30, 0.6) 100%
  );
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-anim__gif-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}

.skill-anim__gif {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.skill-anim__field {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.skill-anim__scene {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(90deg);
}

.skill-anim__player {
  position: absolute;
  width: 48px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  opacity: 0.6;
}

.skill-anim__ball {
  position: absolute;
  top: calc(50% + 10px);
  left: calc(50% - 12px);
  z-index: 2;
  filter: drop-shadow(0 0 8px var(--cat-color, rgba(0, 255, 135, 0.5)));
}

.skill-anim__trail {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--cat-color, var(--color-accent-primary));
  opacity: 0.15;
  filter: blur(6px);
  z-index: 1;
  top: calc(50% + 16px);
  left: calc(50% - 6px);
}

.skill-anim__label {
  position: absolute;
  bottom: var(--space-3);
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
}
</style>
