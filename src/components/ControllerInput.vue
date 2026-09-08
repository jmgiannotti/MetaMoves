<script setup lang="ts">
import type { InputToken, Platform, ControlScheme } from '../types';
import { currentLang, ui, translateInputToken } from '../i18n';
import DirectionIcon from './DirectionIcon.vue';
import ControllerButton from './ControllerButton.vue';

defineProps<{
  steps: InputToken[];
  platform: Platform;
  scheme: ControlScheme;
  note?: import('../types').LocalizedString;
}>();
</script>

<template>
  <div class="ctrl-input-inline">
    <div class="ctrl-input-inline__sequence">
      <template v-for="(token, i) in steps" :key="i">
        
        <!-- Skip direction if it was already merged into the previous stick -->
        <template v-if="!(token.type === 'direction' && steps[i-1]?.type === 'stick')">
          
          <!-- Text separator / action -->
          <template v-if="token.type === 'text'">
            <span v-if="token.value === '+'" class="ctrl-input-inline__plus">+</span>
            <span v-else-if="token.value === 'o'" class="ctrl-input-inline__pill ctrl-input-inline__pill--or">
              {{ translateInputToken(token.value, currentLang) }}
            </span>
            <span v-else-if="token.value === 'luego'" class="ctrl-input-inline__pill ctrl-input-inline__pill--then">
              {{ translateInputToken(token.value, currentLang) }} ➔
            </span>
            <span v-else class="ctrl-input-inline__pill ctrl-input-inline__pill--action">
              {{ translateInputToken(token.value, currentLang) }}
            </span>
          </template>

          <!-- Stick (with merged direction if immediately following) -->
          <div v-else-if="token.type === 'stick'" class="ctrl-input-inline__element">
            <template v-if="steps[i+1]?.type === 'direction'">
              <DirectionIcon :stickLabel="token.value" :dir="steps[i+1].value" />
            </template>
            <template v-else>
              <DirectionIcon :stickLabel="token.value" dir="" />
            </template>
          </div>

          <!-- Standalone Direction (e.g. D-Pad flick or separated) -->
          <div v-else-if="token.type === 'direction'" class="ctrl-input-inline__element">
            <DirectionIcon :dir="token.value" />
          </div>

          <!-- Controller Button (L1, R1, L2, R2, Triangle, Circle, Cross, Square, etc.) -->
          <div v-else-if="token.type === 'button'" class="ctrl-input-inline__element">
            <ControllerButton :button="token.value" :platform="platform" />
          </div>

        </template>
      </template>
    </div>

    <!-- Note / Pro Tip if available -->
    <div v-if="note" class="ctrl-input-inline__note">
      <span class="ctrl-input-inline__note-tag">💡 {{ ui.proTip }}:</span>
      <span class="ctrl-input-inline__note-text">{{ note[currentLang] }}</span>
    </div>
  </div>
</template>

<style scoped>
.ctrl-input-inline {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  background: linear-gradient(145deg, rgba(20, 24, 36, 0.7) 0%, rgba(10, 12, 18, 0.8) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-lg);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 16px rgba(0, 0, 0, 0.3);
}

.ctrl-input-inline__sequence {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.ctrl-input-inline__element {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ctrl-input-inline__plus {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-accent-primary, #00ff87);
  opacity: 0.8;
  padding: 0 2px;
  user-select: none;
  text-shadow: 0 0 6px rgba(0, 255, 135, 0.4);
}

.ctrl-input-inline__pill {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding: 4px 9px;
  border-radius: 6px;
  user-select: none;
}

.ctrl-input-inline__pill--action {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--color-text-secondary);
}

.ctrl-input-inline__pill--or {
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #fbbf24;
}

.ctrl-input-inline__pill--then {
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: #38bdf8;
}

.ctrl-input-inline__note {
  margin-top: var(--space-2);
  padding: var(--space-3) var(--space-4);
  background: rgba(0, 255, 135, 0.06);
  border: 1px solid rgba(0, 255, 135, 0.2);
  border-left: 3px solid var(--color-accent-primary, #00ff87);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  box-shadow: inset 0 0 12px rgba(0, 255, 135, 0.03);
}

.ctrl-input-inline__note-tag {
  font-weight: 800;
  color: var(--color-accent-primary, #00ff87);
  white-space: nowrap;
}

.ctrl-input-inline__note-text {
  line-height: 1.5;
}
</style>
