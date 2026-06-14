<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  dir: string;
  stickLabel?: string;
}>();

// Center is 20,20. Radius for arcs is 16.
const iconData = computed(() => {
  const d = props.dir;
  switch (d) {
    case 'up': return { type: 'line', angle: 0 };
    case 'down': return { type: 'line', angle: 180 };
    case 'left': return { type: 'line', angle: 270 };
    case 'right': return { type: 'line', angle: 90 };
    case 'up-left': return { type: 'line', angle: 315 };
    case 'up-right': return { type: 'line', angle: 45 };
    case 'down-left': return { type: 'line', angle: 225 };
    case 'down-right': return { type: 'line', angle: 135 };
    case 'rotate-left-right': return { type: 'arc-under', mirror: false }; // Elastica
    case 'rotate-right-left': return { type: 'arc-under', mirror: true }; // Elastica inversa
    case 'rotate-up-right': return { type: 'arc-quarter', angle: 0, mirror: false };
    case 'rotate-up-left': return { type: 'arc-quarter', angle: 0, mirror: true };
    case 'rotate-right-up': return { type: 'arc-quarter', angle: 90, mirror: true };
    case 'rotate-left-up': return { type: 'arc-quarter', angle: 270, mirror: false };
    case 'rotate-down-right': return { type: 'arc-half', angle: 180, mirror: true }; // Roulette right
    case 'rotate-down-left': return { type: 'arc-half', angle: 180, mirror: false }; // Roulette left
    case 'rotate-left': return { type: 'arc-full', angle: 270 };
    case 'rotate-right': return { type: 'arc-full', angle: 90 };
    case 'rotate-full': return { type: 'arc-full', angle: 0 };
    default: return { type: 'line', angle: 0 };
  }
});
</script>

<template>
  <div class="dir-icon" :class="{ 'dir-icon--composite': !!stickLabel }">
    <!-- SVG Rotated 90deg for Left-to-Right Perspective -->
    <svg viewBox="0 0 40 40" :width="stickLabel ? 48 : 32" :height="stickLabel ? 48 : 32" style="transform: rotate(90deg); overflow: visible;">

      <!-- Optional Central Stick -->
      <g v-if="stickLabel" style="transform: rotate(-90deg); transform-origin: 20px 20px;">
        <circle cx="20" cy="20" r="12" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5" />
        <text x="20" y="24" text-anchor="middle" font-family="var(--font-display)" font-weight="800" font-size="12" fill="var(--color-text-primary)">
          {{ stickLabel }}
        </text>
      </g>

      <!-- Straight Line -->
      <g v-if="iconData.type === 'line'" :style="{ transform: `rotate(${iconData.angle}deg)`, transformOrigin: '20px 20px' }">
        <path d="M20 36 L20 6" class="dir-path" />
        <polygon points="20,2 14,12 26,12" class="dir-arrowhead" />
      </g>

      <!-- Quarter Arc -->
      <g v-else-if="iconData.type === 'arc-quarter'" :style="{ transform: `rotate(${iconData.angle}deg) scaleX(${iconData.mirror ? -1 : 1})`, transformOrigin: '20px 20px' }">
        <path d="M20 4 A 16 16 0 0 1 36 20" class="dir-path" />
        <!-- Points DOWN at 36,20 -->
        <polygon points="36,22 30,12 42,12" class="dir-arrowhead" />
      </g>

      <!-- Half Arc -->
      <g v-else-if="iconData.type === 'arc-half'" :style="{ transform: `rotate(${iconData.angle}deg) scaleX(${iconData.mirror ? -1 : 1})`, transformOrigin: '20px 20px' }">
        <path d="M20 4 A 16 16 0 0 1 20 36" class="dir-path" />
        <!-- Points LEFT at 20,36 -->
        <polygon points="18,36 28,30 28,42" class="dir-arrowhead" />
      </g>

      <!-- Under Arc -->
      <g v-else-if="iconData.type === 'arc-under'" :style="{ transform: `scaleX(${iconData.mirror ? -1 : 1})`, transformOrigin: '20px 20px' }">
        <path d="M36 20 A 16 16 0 0 1 4 20" class="dir-path" />
        <!-- Points UP at 4,20 -->
        <polygon points="4,18 -2,28 10,28" class="dir-arrowhead" />
      </g>

      <!-- Full Circle Arc -->
      <g v-else-if="iconData.type === 'arc-full'" :style="{ transform: `rotate(${iconData.angle}deg)`, transformOrigin: '20px 20px' }">
        <path d="M20 4 A 16 16 0 1 1 19.9 4" class="dir-path" />
        <!-- Points RIGHT at 20,4 -->
        <polygon points="22,4 12,-2 12,10" class="dir-arrowhead" />
      </g>

    </svg>
  </div>
</template>

<style scoped>
.dir-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.dir-icon--composite {
  /* Give composite icons a subtle glow/background to pop */
  background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
  border-radius: 50%;
  padding: 2px;
}

.dir-path {
  fill: none;
  stroke: var(--color-text-primary);
  stroke-width: 4;
  stroke-linecap: round;
}

.dir-arrowhead {
  fill: var(--color-text-primary);
}
</style>
