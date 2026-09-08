<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  dir: string;
  stickLabel?: string;
}>();

// Center is (24, 24). Stick cap radius is 14. Gesture arc radius is 18. ViewBox is 0 0 48 48.
const iconData = computed(() => {
  const d = props.dir;
  switch (d) {
    case 'up': return { type: 'line', angle: 0 };
    case 'up-right': return { type: 'line', angle: 45 };
    case 'right': return { type: 'line', angle: 90 };
    case 'down-right': return { type: 'line', angle: 135 };
    case 'down': return { type: 'line', angle: 180 };
    case 'down-left': return { type: 'line', angle: 225 };
    case 'left': return { type: 'line', angle: 270 };
    case 'up-left': return { type: 'line', angle: 315 };

    // Stepovers (90° quarter turns)
    case 'rotate-up-right': return { type: 'arc', path: 'M 24 6 A 18 18 0 0 1 42 24', arrow: '42,27 37,19 47,19' };
    case 'rotate-up-left': return { type: 'arc', path: 'M 24 6 A 18 18 0 0 0 6 24', arrow: '6,27 1,19 11,19' };
    case 'rotate-right-up': return { type: 'arc', path: 'M 42 24 A 18 18 0 0 0 24 6', arrow: '21,6 29,1 29,11' };
    case 'rotate-left-up': return { type: 'arc', path: 'M 6 24 A 18 18 0 0 1 24 6', arrow: '27,6 19,1 19,11' };

    // Roulettes (270° three-quarter turns)
    case 'rotate-down-right': return { type: 'arc', path: 'M 24 42 A 18 18 0 1 1 42 24', arrow: '42,27 37,19 47,19' };
    case 'rotate-down-left': return { type: 'arc', path: 'M 24 42 A 18 18 0 1 0 6 24', arrow: '6,27 1,19 11,19' };

    // Elasticos (180° semi-circle bottom sweeps)
    case 'rotate-left-right': return { type: 'arc', path: 'M 6 24 A 18 18 0 0 0 42 24', arrow: '42,21 37,29 47,29' };
    case 'rotate-right-left': return { type: 'arc', path: 'M 42 24 A 18 18 0 0 1 6 24', arrow: '6,21 1,29 11,29' };

    // Spins & Full circles
    case 'rotate-left': return { type: 'arc', path: 'M 24 6 A 18 18 0 1 0 6 24', arrow: '6,27 1,19 11,19' };
    case 'rotate-right': return { type: 'arc', path: 'M 24 6 A 18 18 0 1 1 42 24', arrow: '42,27 37,19 47,19' };
    case 'rotate-full': return { type: 'arc', path: 'M 24 6 A 18 18 0 1 1 23.9 6', arrow: '27,6 19,1 19,11' };

    default: return { type: 'line', angle: 0 };
  }
});
</script>

<template>
  <div class="dir-widget" :class="{ 'dir-widget--with-stick': !!stickLabel }">
    <svg viewBox="0 0 48 48" class="dir-widget__svg">
      <defs>
        <!-- Radial gradient for stick thumbwell -->
        <radialGradient id="stickConcave" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#2a2e3d" />
          <stop offset="70%" stop-color="#14161f" />
          <stop offset="100%" stop-color="#0b0d12" />
        </radialGradient>

        <!-- Glow filter for direction arrows -->
        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#00ff87" flood-opacity="0.8" />
        </filter>
      </defs>

      <!-- Central Analog Thumbstick (when stickLabel is provided) -->
      <g v-if="stickLabel" class="dir-widget__stick">
        <!-- Outer rubber ring with bevel -->
        <circle cx="24" cy="24" r="14.5" fill="#1b1e28" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" />
        
        <!-- Inner concave thumbpad -->
        <circle cx="24" cy="24" r="11" fill="url(#stickConcave)" stroke="rgba(0,0,0,0.6)" stroke-width="1" />

        <!-- 4 Tactile Ridges at 12, 3, 6, 9 o'clock -->
        <line x1="24" y1="10" x2="24" y2="12" stroke="rgba(255,255,255,0.3)" stroke-width="1.2" stroke-linecap="round" />
        <line x1="24" y1="36" x2="24" y2="38" stroke="rgba(255,255,255,0.3)" stroke-width="1.2" stroke-linecap="round" />
        <line x1="10" y1="24" x2="12" y2="24" stroke="rgba(255,255,255,0.3)" stroke-width="1.2" stroke-linecap="round" />
        <line x1="36" y1="24" x2="38" y2="24" stroke="rgba(255,255,255,0.3)" stroke-width="1.2" stroke-linecap="round" />

        <!-- Stick Name label (RS / LS) -->
        <text x="24" y="27.5" text-anchor="middle" class="dir-widget__stick-text">
          {{ stickLabel }}
        </text>
      </g>

      <!-- Straight Line Arrow Gesture (Flick / Push) -->
      <g v-if="iconData.type === 'line'" :transform="`rotate(${iconData.angle}, 24, 24)`" filter="url(#neonGlow)">
        <!-- Arrow shaft shooting outward from stick -->
        <line x1="24" y1="13" x2="24" y2="5" class="dir-widget__arrow-shaft" />
        <!-- Tapered arrowhead -->
        <polygon points="24,1 19,7 29,7" class="dir-widget__arrowhead" />
      </g>

      <!-- Curved Arc Rotation Gesture (Stepovers, Roulettes, Elasticos) -->
      <g v-else-if="iconData.type === 'arc'" filter="url(#neonGlow)">
        <!-- Sweeping arc path -->
        <path :d="iconData.path" class="dir-widget__arc-path" />
        <!-- Arrowhead at destination of arc -->
        <polygon :points="iconData.arrow" class="dir-widget__arrowhead" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.dir-widget {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.dir-widget__svg {
  width: 36px;
  height: 36px;
  overflow: visible;
}

.dir-widget--with-stick .dir-widget__svg {
  width: 44px;
  height: 44px;
}

.dir-widget__stick-text {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 10px;
  fill: #f3f4f6;
  letter-spacing: 0.5px;
  user-select: none;
}

.dir-widget__arrow-shaft {
  stroke: var(--color-accent-primary, #00ff87);
  stroke-width: 3.5;
  stroke-linecap: round;
}

.dir-widget__arrowhead {
  fill: var(--color-accent-primary, #00ff87);
}

.dir-widget__arc-path {
  fill: none;
  stroke: var(--color-accent-primary, #00ff87);
  stroke-width: 3.5;
  stroke-linecap: round;
}
</style>
