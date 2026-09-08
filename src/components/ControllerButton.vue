<script setup lang="ts">
import { computed } from 'vue';
import type { Platform } from '../types';
import { psToXboxMap } from '../data/skillMoves';

const props = defineProps<{
  button: string; // 'Triangle' | 'Square' | 'Circle' | 'X' | 'L1' | 'L2' | 'R1' | 'R2' | 'R3' | 'L3'
  platform: Platform;
}>();

const mappedLabel = computed(() => {
  if (props.platform === 'xbox') {
    return psToXboxMap[props.button] ?? props.button;
  }
  return props.button;
});

const isBumper = computed(() => ['L1', 'R1', 'LB', 'RB'].includes(mappedLabel.value));
const isTrigger = computed(() => ['L2', 'R2', 'LT', 'RT'].includes(mappedLabel.value));
const isStickPress = computed(() => ['R3', 'L3', 'RS', 'LS'].includes(mappedLabel.value));
</script>

<template>
  <!-- Shoulder Bumper (L1, R1 / LB, RB) -->
  <div v-if="isBumper" class="ctrl-btn ctrl-btn--bumper" :class="`ctrl-btn--${platform}`">
    <span class="ctrl-btn__inner-gloss"></span>
    <span class="ctrl-btn__label">{{ mappedLabel }}</span>
  </div>

  <!-- Trigger (L2, R2 / LT, RT) -->
  <div v-else-if="isTrigger" class="ctrl-btn ctrl-btn--trigger" :class="`ctrl-btn--${platform}`">
    <span class="ctrl-btn__trigger-notch"></span>
    <span class="ctrl-btn__label">{{ mappedLabel }}</span>
  </div>

  <!-- Stick Click (R3 / L3) -->
  <div v-else-if="isStickPress" class="ctrl-btn ctrl-btn--stick-press">
    <div class="ctrl-btn__stick-outer">
      <div class="ctrl-btn__stick-inner">
        <span class="ctrl-btn__stick-text">{{ mappedLabel }}</span>
        <svg class="ctrl-btn__press-arrow" viewBox="0 0 16 16" width="10" height="10">
          <path d="M8 2 L8 12 M4 8 L8 12 L12 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>

  <!-- PlayStation Face Buttons (Triangle, Circle, Cross, Square) -->
  <div v-else-if="platform === 'ps'" class="ctrl-btn ctrl-btn--face ctrl-btn--ps" :class="`ctrl-btn--ps-${button.toLowerCase()}`">
    <svg viewBox="0 0 32 32" width="22" height="22" class="ctrl-btn__ps-svg">
      <!-- Triangle (Green) -->
      <template v-if="button === 'Triangle'">
        <polygon points="16,6 26,24 6,24" fill="none" stroke="#00e5a3" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" />
      </template>
      <!-- Circle (Red) -->
      <template v-else-if="button === 'Circle'">
        <circle cx="16" cy="16" r="9" fill="none" stroke="#ff4b60" stroke-width="3" />
      </template>
      <!-- X / Cross (Blue) -->
      <template v-else-if="button === 'X'">
        <line x1="8" y1="8" x2="24" y2="24" stroke="#4f8cff" stroke-width="3.2" stroke-linecap="round" />
        <line x1="24" y1="8" x2="8" y2="24" stroke="#4f8cff" stroke-width="3.2" stroke-linecap="round" />
      </template>
      <!-- Square (Pink) -->
      <template v-else-if="button === 'Square'">
        <rect x="7" y="7" width="18" height="18" rx="3.5" fill="none" stroke="#f06292" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </template>
    </svg>
  </div>

  <!-- Xbox Face Buttons (A, B, X, Y) -->
  <div v-else class="ctrl-btn ctrl-btn--face ctrl-btn--xbox" :class="`ctrl-btn--xbox-${mappedLabel.toLowerCase()}`">
    <span class="ctrl-btn__xbox-gloss"></span>
    <span class="ctrl-btn__xbox-label">{{ mappedLabel }}</span>
  </div>
</template>

<style scoped>
.ctrl-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  font-family: var(--font-display);
  font-weight: 800;
  user-select: none;
  vertical-align: middle;
}

/* ── BUMPERS (L1 / R1 / LB / RB) ── */
.ctrl-btn--bumper {
  height: 26px;
  min-width: 44px;
  padding: 0 10px;
  border-radius: 6px 6px 4px 4px;
  background: linear-gradient(180deg, #323746 0%, #1c1f2b 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.22);
  border-top-color: rgba(255, 255, 255, 0.4);
  box-shadow: 
    0 2px 5px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.35),
    inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  color: #f3f4f6;
  font-size: 11.5px;
  letter-spacing: 0.5px;
}

.ctrl-btn--bumper .ctrl-btn__inner-gloss {
  position: absolute;
  top: 1px;
  left: 3px;
  right: 3px;
  height: 40%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, transparent 100%);
  border-radius: 4px 4px 0 0;
  pointer-events: none;
}

/* ── TRIGGERS (L2 / R2 / LT / RT) ── */
.ctrl-btn--trigger {
  height: 30px;
  min-width: 42px;
  padding: 0 8px;
  border-radius: 5px 5px 12px 12px;
  background: linear-gradient(180deg, #2b303d 0%, #1a1d26 60%, #0d0f14 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-bottom: 2px solid rgba(0, 0, 0, 0.8);
  box-shadow: 
    0 3px 8px rgba(0, 0, 0, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  color: #e5e7eb;
  font-size: 11.5px;
  letter-spacing: 0.5px;
  overflow: hidden;
}

.ctrl-btn__trigger-notch {
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1px;
}

/* ── STICK PRESS (R3 / L3) ── */
.ctrl-btn--stick-press {
  width: 32px;
  height: 32px;
}

.ctrl-btn__stick-outer {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(145deg, #2a2e3d, #14161f);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  padding: 2px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.ctrl-btn__stick-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #252936, #101218);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgba(255, 255, 255, 0.25);
}

.ctrl-btn__stick-text {
  font-size: 9.5px;
  line-height: 1;
  color: #f3f4f6;
  font-weight: 800;
}

.ctrl-btn__press-arrow {
  margin-top: 1px;
  color: var(--color-accent-primary, #00ff87);
}

/* ── PLAYSTATION FACE BUTTONS ── */
.ctrl-btn--face.ctrl-btn--ps {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #1e2230 0%, #10121a 75%, #0a0b10 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.14);
  box-shadow: 
    0 3px 6px rgba(0, 0, 0, 0.5),
    inset 0 1px 1px rgba(255, 255, 255, 0.15);
}

.ctrl-btn--ps-triangle {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 229, 163, 0.25);
}
.ctrl-btn--ps-circle {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 75, 96, 0.25);
}
.ctrl-btn--ps-x {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5), 0 0 10px rgba(79, 140, 255, 0.25);
}
.ctrl-btn--ps-square {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5), 0 0 10px rgba(240, 98, 146, 0.25);
}

.ctrl-btn__ps-svg {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
}

/* ── XBOX FACE BUTTONS ── */
.ctrl-btn--face.ctrl-btn--xbox {
  width: 29px;
  height: 29px;
  border-radius: 50%;
  box-shadow: 
    0 3px 6px rgba(0, 0, 0, 0.45),
    inset 0 1px 1px rgba(255, 255, 255, 0.35);
  font-size: 14px;
}

.ctrl-btn__xbox-label {
  position: relative;
  z-index: 2;
  line-height: 1;
}

.ctrl-btn__xbox-gloss {
  position: absolute;
  top: 1px;
  left: 4px;
  right: 4px;
  height: 45%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 50% 50% 40% 40%;
  pointer-events: none;
}

.ctrl-btn--xbox-a {
  background: radial-gradient(circle at 40% 30%, #22c55e 0%, #15803d 70%, #14532d 100%);
  border: 1.5px solid #4ade80;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5), 0 0 10px rgba(34, 197, 94, 0.3);
  color: #ffffff;
}

.ctrl-btn--xbox-b {
  background: radial-gradient(circle at 40% 30%, #ef4444 0%, #b91c1c 70%, #7f1d1d 100%);
  border: 1.5px solid #f87171;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5), 0 0 10px rgba(239, 68, 68, 0.3);
  color: #ffffff;
}

.ctrl-btn--xbox-x {
  background: radial-gradient(circle at 40% 30%, #3b82f6 0%, #1d4ed8 70%, #1e3a8a 100%);
  border: 1.5px solid #60a5fa;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5), 0 0 10px rgba(59, 130, 246, 0.3);
  color: #ffffff;
}

.ctrl-btn--xbox-y {
  background: radial-gradient(circle at 40% 30%, #facc15 0%, #ca8a04 70%, #854d0e 100%);
  border: 1.5px solid #fde047;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5), 0 0 10px rgba(250, 204, 21, 0.3);
  color: #1a1a1a;
}
</style>
