<script setup lang="ts">
import { currentLang } from '../i18n';

function toggleLanguage() {
  currentLang.value = currentLang.value === 'es' ? 'en' : 'es';
}
</script>

<template>
  <header class="app-header" id="app-header">
    <div class="app-header__inner">
      <!-- Logo -->
      <div class="app-header__brand">
        <div class="app-header__logo">
          <span class="app-header__logo-icon">⚽</span>
          <div class="app-header__logo-glow"></div>
        </div>
        <div class="app-header__titles">
          <h1 class="app-header__title">
            <span class="app-header__title-meta">Meta</span><span class="app-header__title-moves">Moves</span>
          </h1>
          <p class="app-header__subtitle">EA FC 26 · Skill Moves</p>
        </div>
      </div>

      <!-- Decorative element & Lang toggle -->
      <div class="app-header__decoration">
        <button class="app-header__lang-toggle" @click="toggleLanguage" aria-label="Cambiar idioma">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          {{ currentLang === 'es' ? 'ES' : 'EN' }}
        </button>
        <span class="app-header__version">v1.0</span>
      </div>
    </div>

    <!-- Bottom gradient line -->
    <div class="app-header__line"></div>
  </header>
</template>

<style scoped>
.app-header {
  position: relative;
  background: var(--color-bg-secondary);
  overflow: hidden;
}

/* Subtle noise/grid pattern */
.app-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 20% 50%,
      rgba(0, 255, 135, 0.06) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 80% 50%,
      rgba(255, 215, 0, 0.04) 0%,
      transparent 50%
    );
  pointer-events: none;
}

.app-header__inner {
  position: relative;
  z-index: 1;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.app-header__brand {
  display: flex;
  align-items: center;
  gap: var(--space-5);
}

/* Logo icon */
.app-header__logo {
  position: relative;
  font-size: 2.5rem;
  line-height: 1;
}

.app-header__logo-icon {
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 0 8px rgba(0, 255, 135, 0.3));
  animation: float 3s ease-in-out infinite;
  will-change: transform;
}

.app-header__logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 255, 135, 0.15) 0%,
    transparent 70%
  );
  animation: glowPulse 3s ease-in-out infinite;
}

/* Titles */
.app-header__titles {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.app-header__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
}

.app-header__title-meta {
  color: var(--color-accent-primary);
}

.app-header__title-moves {
  color: var(--color-text-primary);
}

.app-header__subtitle {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Version badge & Tools */
.app-header__decoration {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.app-header__lang-toggle {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.app-header__lang-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-border-hover);
}

.app-header__version {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-weight: 500;
}

/* Bottom accent line */
.app-header__line {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--color-accent-primary) 20%,
    var(--color-accent-gold) 50%,
    var(--color-accent-primary) 80%,
    transparent 100%
  );
  opacity: 0.5;
}

/* Responsive */
@media (max-width: 480px) {
  .app-header__inner {
    padding: var(--space-6) var(--space-4);
  }

  .app-header__title {
    font-size: var(--text-2xl);
  }

  .app-header__logo {
    font-size: 2rem;
  }

  .app-header__version {
    display: none;
  }
}
</style>
