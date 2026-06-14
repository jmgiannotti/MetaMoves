<script setup lang="ts">
import type { InputToken, Platform, ControlScheme } from '../types';
import { psToXboxMap } from '../data/skillMoves';
import DirectionIcon from './DirectionIcon.vue';

const props = defineProps<{
  steps: InputToken[];
  platform: Platform;
  scheme: ControlScheme;
  note?: import('../types').LocalizedString;
}>();

function getButtonLabel(element: string): string {
  if (props.platform === 'ps') {
    const psSymbols: Record<string, string> = {
      'Triangle': '△',
      'Square': '□',
      'Circle': '○',
      'X': '✕',
    };
    return psSymbols[element] ?? element;
  }
  return psToXboxMap[element] ?? element;
}

function getIconType(element: string): 'trigger' | 'stick' | 'face' {
  if (['L1', 'L2', 'R1', 'R2'].includes(element)) return 'trigger';
  if (['RS', 'LS', 'R3', 'L3'].includes(element)) return 'stick';
  return 'face';
}

function isStick(element: string): boolean {
  return getIconType(element) === 'stick';
}
function isTrigger(element: string): boolean {
  return getIconType(element) === 'trigger';
}
function isFaceButton(element: string): boolean {
  return getIconType(element) === 'face';
}

function getFaceButtonColor(element: string): string {
  if (props.platform === 'ps') {
    const colors: Record<string, string> = {
      'Triangle': 'var(--color-ps-triangle)',
      'Circle': 'var(--color-ps-circle)',
      'X': 'var(--color-ps-cross)',
      'Square': 'var(--color-ps-square)',
    };
    return colors[element] ?? 'var(--color-text-secondary)';
  }
  const colors: Record<string, string> = {
    'Triangle': 'var(--color-xbox-y)',
    'Circle': 'var(--color-xbox-b)',
    'X': 'var(--color-xbox-a)',
    'Square': 'var(--color-xbox-x)',
  };
  return colors[element] ?? 'var(--color-text-secondary)';
}
</script>

<template>
  <div class="ctrl-input-inline">
    <div class="ctrl-input-inline__sequence">
      <template v-for="(token, i) in steps" :key="i">
        
        <!-- Skip if it's a rotation that was already merged into the previous stick -->
        <template v-if="!(token.type === 'direction' && token.value.startsWith('rotate-') && steps[i-1]?.type === 'stick')">
          
          <!-- Text or Plus -->
          <span v-if="token.type === 'text'" class="ctrl-input-inline__text" :class="{ 'ctrl-input-inline__text--plus': token.value === '+' }">
            {{ token.value }}
          </span>

          <!-- Direction Animated Icon (Isolated, e.g. Straight arrow) -->
          <div v-else-if="token.type === 'direction'" class="ctrl-input-inline__direction">
            <DirectionIcon :dir="token.value" />
          </div>

          <!-- Button or Stick -->
          <div v-else-if="token.type === 'button' || token.type === 'stick'" class="ctrl-input-inline__element">
            
            <template v-if="isStick(token.value)">
              <!-- Check if we should merge with a following rotation direction -->
              <template v-if="steps[i+1]?.type === 'direction' && steps[i+1].value.startsWith('rotate-')">
                <DirectionIcon :stickLabel="getButtonLabel(token.value)" :dir="steps[i+1].value" />
              </template>
              <template v-else>
                <!-- Normal isolated Stick -->
                <div class="ctrl-input-inline__icon ctrl-input-inline__icon--stick">
                  <span class="ctrl-input-inline__icon-label">{{ getButtonLabel(token.value) }}</span>
                </div>
              </template>
            </template>

            <template v-else-if="isTrigger(token.value)">
              <div class="ctrl-input-inline__icon ctrl-input-inline__icon--trigger">
                <span class="ctrl-input-inline__icon-label">{{ getButtonLabel(token.value) }}</span>
              </div>
            </template>

            <template v-else-if="isFaceButton(token.value)">
              <div class="ctrl-input-inline__icon ctrl-input-inline__icon--face" :style="{ borderColor: getFaceButtonColor(token.value) }">
                <span class="ctrl-input-inline__icon-label" :style="{ color: getFaceButtonColor(token.value) }">
                  {{ getButtonLabel(token.value) }}
                </span>
              </div>
            </template>
          </div>

        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
.ctrl-input-inline {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}

.ctrl-input-inline__sequence {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.ctrl-input-inline__text {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
  text-transform: uppercase;
}

.ctrl-input-inline__text--plus {
  color: var(--color-text-muted);
}

.ctrl-input-inline__direction {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ctrl-input-inline__element {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ctrl-input-inline__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-text-primary);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.ctrl-input-inline__icon-label {
  line-height: 1;
}

.ctrl-input-inline__icon--trigger {
  padding: 4px 8px;
  border-radius: 6px;
  min-width: 36px;
  font-size: 13px;
}

.ctrl-input-inline__icon--stick {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 11px;
}

.ctrl-input-inline__icon--face {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  font-size: 16px;
  border-width: 1.5px;
}
</style>
