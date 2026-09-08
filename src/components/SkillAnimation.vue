<script setup lang="ts">
import { ref, computed } from 'vue';
import type { AnimationType, SkillMove } from '../types';
import { currentLang } from '../i18n';
import DirectionIcon from './DirectionIcon.vue';

const props = defineProps<{
  moveId: string;
  animationType: AnimationType;
  categoryColor: string;
  move?: SkillMove;
}>();

// Playback & View Controls
const isPlaying = ref(true);
const isSlowMo = ref(false);
const isPerspective3D = ref(true); // Default to 2.5D broadcast perspective
const animKey = ref(0);

// GIF fallback logic
const hasGifError = ref(false);
const gifUrl = computed(() => `/gifs/${props.moveId}.gif`);

function onGifError() {
  hasGifError.value = true;
}

function togglePlay() {
  isPlaying.value = !isPlaying.value;
}

function toggleSpeed() {
  isSlowMo.value = !isSlowMo.value;
}

function togglePerspective() {
  isPerspective3D.value = !isPerspective3D.value;
}

function restartAnim() {
  animKey.value++;
  isPlaying.value = true;
}

// Durations
const baseDurations: Record<AnimationType, number> = {
  'lateral-shift': 2.4,
  'forward-flick': 2.0,
  'spin-360': 2.6,
  'snap-back': 2.2,
  'behind-leg': 2.4,
  'chop': 2.0,
  'nutmeg': 2.6,
  'rainbow': 2.7,
  'juggle': 2.2,
  'drag-back': 2.4,
};

const effectiveDuration = computed(() => {
  const base = baseDurations[props.animationType] ?? 2.4;
  return isSlowMo.value ? base * 2 : base;
});

// Category/Type Label
const animationLabel = computed(() => {
  const isEs = currentLang.value === 'es';
  const labels: Record<AnimationType, string> = {
    'lateral-shift': isEs ? 'Bicicleta / Paso en Arco' : 'Stepover / Scissors',
    'forward-flick': isEs ? 'Tacón a Tacón' : 'Heel to Heel Flick',
    'spin-360': isEs ? 'Ruleta 360° con Suela' : '360° Roulette Sole Turn',
    'snap-back': isEs ? 'Elástico: Exterior ➔ Interior' : 'Elastico: Outside ➔ Inside',
    'behind-leg': isEs ? 'Rabona tras Pierna de Apoyo' : 'Behind Support Leg',
    'chop': isEs ? 'Corte de Tacón 90°' : '90° Heel Chop Cut',
    'nutmeg': isEs ? 'Caño / Túnel entre Piernas' : 'Nutmeg through Legs',
    'rainbow': isEs ? 'Sombrerito con Talones' : 'Rainbow Heel Flick',
    'juggle': isEs ? 'Toques Aéreos / Vuelta al Mundo' : 'Aerial Juggle / Loop',
    'drag-back': isEs ? 'Pisada y Arrastre 180°' : 'Sole Drag Back 180°',
  };
  return labels[props.animationType] ?? props.animationType;
});

// Biomechanical Phase details for each skill type
const phaseData = computed(() => {
  const isEs = currentLang.value === 'es';
  const data: Record<AnimationType, { s1: string; s2: string; s3: string; stick: string; dir: string; tip: string }> = {
    'snap-back': {
      s1: isEs ? '1. Toque Exterior' : '1. Outside Flick',
      s2: isEs ? '2. Latigazo Interior' : '2. Snap Inside',
      s3: isEs ? '3. Salida en Sprint' : '3. Burst Exit',
      stick: 'RS',
      dir: 'half-right',
      tip: isEs ? 'Exterior con botín derecho, latigazo inmediato con empeine.' : 'Push with outside boot laces, whip back inside.',
    },
    'rainbow': {
      s1: isEs ? '1. Atrapar en Talones' : '1. Trap with Heels',
      s2: isEs ? '2. Elevación por Pantorrilla' : '2. Roll & Heel Pop',
      s3: isEs ? '3. Parábola Aérea' : '3. Sombrero Arc',
      stick: 'RS',
      dir: 'up',
      tip: isEs ? 'Atrapa entre tobillos, rueda por la pantorrilla y taconazo.' : 'Clamp with ankles, roll up calf and strike with back heel.',
    },
    'spin-360': {
      s1: isEs ? '1. Suela Derecha Frena' : '1. Right Sole Plant',
      s2: isEs ? '2. Giro 180° de Cadera' : '2. 180° Hip Pivot',
      s3: isEs ? '3. Suela Izquierda Arrastra' : '3. Left Sole Drag',
      stick: 'RS',
      dir: 'spin-cw',
      tip: isEs ? 'Pisa con una suela, gira de espaldas y arrastra con la otra.' : 'Plant sole on ball, turn body away and drag with other foot.',
    },
    'chop': {
      s1: isEs ? '1. Salto de Apoyo' : '1. Plant Stride',
      s2: isEs ? '2. Corte tras Pierna 90°' : '2. Behind Leg 90° Chop',
      s3: isEs ? '3. Inclinación y Quiebre' : '3. Bank into Angle',
      stick: 'RS',
      dir: 'down-left',
      tip: isEs ? 'Cruza la pierna activa por detrás de la rodilla de apoyo.' : 'Chop ball 90° behind plant knee using active heel.',
    },
    'lateral-shift': {
      s1: isEs ? '1. Paso por Encima' : '1. Stepover Ball',
      s2: isEs ? '2. Finta de Cadera' : '2. Hip Feint Drop',
      s3: isEs ? '3. Empuje y Cambio' : '3. Push Other Side',
      stick: 'RS',
      dir: 'quarter-right',
      tip: isEs ? 'El pie rodea el balón en el aire sin tocarlo para engañar.' : 'Foot sweeps over ball in air without touching, selling feint.',
    },
    'behind-leg': {
      s1: isEs ? '1. Amago de Disparo' : '1. Fake Strike',
      s2: isEs ? '2. Cruce tras Apoyo' : '2. Cross Behind Knee',
      s3: isEs ? '3. Bloqueo en Seco' : '3. Dead Stop Skid',
      stick: 'RS',
      dir: 'down',
      tip: isEs ? 'Amaga remate potente y clava la suela por detrás.' : 'Wind up big shot, wrap leg behind and brake ball dead.',
    },
    'nutmeg': {
      s1: isEs ? '1. Encarar al Defensor' : '1. Approach Marker',
      s2: isEs ? '2. Toque entre Piernas' : '2. Poked through Legs',
      s3: isEs ? '3. Esquive y Recuperación' : '3. Bypass & Regain',
      stick: 'RS',
      dir: 'right',
      tip: isEs ? 'Toque seco y raso justo cuando el rival abre las piernas.' : 'Punch ball low right through open stance of defender.',
    },
    'forward-flick': {
      s1: isEs ? '1. Toque Talón Atrás' : '1. Back Heel Kick',
      s2: isEs ? '2. Rebote en Pie Delantero' : '2. Forward Heel Tap',
      s3: isEs ? '3. Salida en Velocidad' : '3. Speed Boost',
      stick: 'RS',
      dir: 'up',
      tip: isEs ? 'Talón trasero impacta el delantero y catapulta el balón.' : 'Rear heel hits front heel, shooting ball into stride.',
    },
    'drag-back': {
      s1: isEs ? '1. Pisada de Suela' : '1. Sole on Ball',
      s2: isEs ? '2. Arrastre hacia Atrás' : '2. Roll Backward',
      s3: isEs ? '3. Giro 180° y Fuga' : '3. 180° Turn & Escape',
      stick: 'RS',
      dir: 'down',
      tip: isEs ? 'Pisa firme, arrastra hacia el cuerpo y escapa de espaldas.' : 'Step sole firmly on ball, pull back and spin 180°.',
    },
    'juggle': {
      s1: isEs ? '1. Toque Elevación' : '1. Pop Up Laces',
      s2: isEs ? '2. Vuelta al Mundo 360°' : '2. Around the World',
      s3: isEs ? '3. Control / Volea' : '3. Mid-Air Volley',
      stick: 'RS',
      dir: 'spin-cw',
      tip: isEs ? 'La pierna gira completamente alrededor del balón en el aire.' : 'Leg circles completely around airborne ball before it drops.',
    },
  };

  return data[props.animationType] ?? {
    s1: isEs ? '1. Preparación' : '1. Setup',
    s2: isEs ? '2. Regate' : '2. Trick Execution',
    s3: isEs ? '3. Salida' : '3. Exit Burst',
    stick: 'RS',
    dir: 'right',
    tip: '',
  };
});
</script>

<template>
  <div
    class="sim-card"
    :class="{ 'sim-card--3d': isPerspective3D }"
    :style="{
      '--anim-dur': `${effectiveDuration}s`,
      '--cat-color': categoryColor,
      '--play-state': isPlaying ? 'running' : 'paused',
    }"
    :key="animKey"
  >
    <!-- GIF Player (if gif file exists) -->
    <template v-if="!hasGifError">
      <div class="sim-gif-container">
        <img :src="gifUrl" @error="onGifError" class="sim-gif-image" :alt="`GIF ${moveId}`" />
      </div>
    </template>

    <!-- 2.5D BIOMECHANICAL FOOTBALL SIMULATOR (Default) -->
    <template v-else>
      <!-- Top Header Overlay -->
      <div class="sim-header">
        <div class="sim-header__badge">
          <span class="sim-header__dot"></span>
          <span class="sim-header__title">
            {{ currentLang === 'es' ? 'BIOMECÁNICA 2.5D · EA FC 26' : '2.5D BIOMECHANICS · EA FC 26' }}
          </span>
        </div>

        <div v-if="move" class="sim-header__meta">
          <span class="sim-header__stars">{{ move.stars }} ★</span>
          <span class="sim-header__divider">·</span>
          <span class="sim-header__trick-name">{{ animationLabel }}</span>
        </div>
      </div>

      <!-- Synchronized Mini Controller HUD (shows controller gesture in real-time) -->
      <div class="sim-stick-hud">
        <div class="sim-stick-hud__icon">
          <DirectionIcon :stickLabel="phaseData.stick" :dir="phaseData.dir" />
        </div>
        <div class="sim-stick-hud__details">
          <span class="sim-stick-hud__label">{{ phaseData.stick }} {{ phaseData.dir.toUpperCase() }}</span>
          <span class="sim-stick-hud__tip">{{ phaseData.tip }}</span>
        </div>
      </div>

      <!-- Tactical Pitch Arena in 2.5D Broadcast Angle -->
      <div class="sim-arena">
        <!-- Stadium Grass & Perspective Markings -->
        <svg class="sim-pitch-svg" viewBox="0 0 500 280" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0e2a1e" />
              <stop offset="50%" stop-color="#0a1f16" />
              <stop offset="100%" stop-color="#06140e" />
            </linearGradient>
            <radialGradient id="turfSpot" cx="45%" cy="55%" r="45%">
              <stop offset="0%" stop-color="rgba(0, 255, 135, 0.12)" />
              <stop offset="100%" stop-color="transparent" />
            </radialGradient>
          </defs>

          <!-- Grass Base -->
          <rect x="0" y="0" width="500" height="280" fill="url(#grassGrad)" />
          <rect x="0" y="0" width="500" height="280" fill="url(#turfSpot)" />

          <!-- Perspective Mowed Lawn Bands -->
          <polygon points="0,0 80,0 60,280 0,280" fill="rgba(255,255,255,0.015)" />
          <polygon points="80,0 160,0 140,280 60,280" fill="rgba(0,0,0,0.14)" />
          <polygon points="160,0 240,0 220,280 140,280" fill="rgba(255,255,255,0.015)" />
          <polygon points="240,0 320,0 300,280 220,280" fill="rgba(0,0,0,0.14)" />
          <polygon points="320,0 400,0 380,280 300,280" fill="rgba(255,255,255,0.015)" />
          <polygon points="400,0 500,0 500,280 380,280" fill="rgba(0,0,0,0.14)" />

          <!-- Perspective Pitch Boundary Lines -->
          <polygon points="30,20 470,20 450,260 50,260" fill="none" stroke="rgba(0, 255, 135, 0.15)" stroke-width="1.8" />
          
          <!-- Halfway line in perspective -->
          <line x1="250" y1="20" x2="250" y2="260" stroke="rgba(0, 255, 135, 0.12)" stroke-dasharray="6 4" stroke-width="1.5" />
          
          <!-- Center circle ellipse in isometric tilt -->
          <ellipse cx="250" cy="140" rx="75" ry="24" fill="none" stroke="rgba(0, 255, 135, 0.12)" stroke-width="1.5" />
          <ellipse cx="250" cy="140" rx="4" ry="1.5" fill="rgba(0, 255, 135, 0.4)" />

          <!-- Dynamic Trajectory Path (Neon dotted line) -->
          <g class="sim-path-group">
            <!-- Snap-back / Elastico Arc -->
            <path
              v-if="animationType === 'snap-back'"
              d="M 120 180 Q 200 200 230 205 Q 265 155 370 170"
              class="sim-laser-trail"
            />
            <!-- Rainbow Arc -->
            <path
              v-else-if="animationType === 'rainbow'"
              d="M 130 180 Q 260 25 380 180"
              class="sim-laser-trail sim-laser-trail--aerial"
            />
            <!-- Roulette / 360 Spin Arc -->
            <path
              v-else-if="animationType === 'spin-360'"
              d="M 120 180 Q 210 180 235 140 Q 290 135 370 180"
              class="sim-laser-trail"
            />
            <!-- Heel Chop 90° Cut -->
            <path
              v-else-if="animationType === 'chop'"
              d="M 120 180 L 260 180 L 260 240"
              class="sim-laser-trail"
            />
            <!-- Lateral Shift / Stepover -->
            <path
              v-else-if="animationType === 'lateral-shift'"
              d="M 120 180 Q 200 180 230 145 L 370 145"
              class="sim-laser-trail"
            />
            <!-- Nutmeg Through Legs -->
            <path
              v-else-if="animationType === 'nutmeg'"
              d="M 120 180 L 390 180"
              class="sim-laser-trail"
            />
            <!-- Behind Leg / Rabona Fake -->
            <path
              v-else-if="animationType === 'behind-leg'"
              d="M 120 180 Q 240 180 250 145 L 360 145"
              class="sim-laser-trail"
            />
            <!-- Forward Flick -->
            <path
              v-else-if="animationType === 'forward-flick'"
              d="M 120 180 L 390 180"
              class="sim-laser-trail"
            />
            <!-- Drag Back 180 -->
            <path
              v-else-if="animationType === 'drag-back'"
              d="M 120 180 L 260 180 Q 180 180 160 235"
              class="sim-laser-trail"
            />
            <!-- Aerial Juggle -->
            <path
              v-else-if="animationType === 'juggle'"
              d="M 235 180 Q 250 100 265 180"
              class="sim-laser-trail sim-laser-trail--aerial"
            />
          </g>
        </svg>

        <!-- DEFENDER TRAINING MANNEQUIN (Stood in 2.5D with open stance) -->
        <div v-if="animationType !== 'juggle'" class="sim-entity sim-mannequin">
          <!-- Defender Ground Shadow -->
          <div class="sim-mannequin__shadow"></div>

          <!-- Defender Silhouette in 2.5D Stance -->
          <svg viewBox="0 0 70 110" width="56" height="88" class="sim-mannequin__svg">
            <!-- Open Stance Legs (Gap in center for Caño / Nutmeg!) -->
            <!-- Left Leg of defender -->
            <path d="M 24 55 L 14 96 L 6 98 L 6 102 L 18 102 L 28 58 Z" fill="#181920" stroke="#ef4444" stroke-width="1.2" />
            <!-- Right Leg of defender -->
            <path d="M 46 55 L 56 96 L 64 98 L 64 102 L 52 102 L 42 58 Z" fill="#181920" stroke="#ef4444" stroke-width="1.2" />
            
            <!-- Red Cleats / Boots -->
            <polygon points="6,98 18,98 18,103 6,103" fill="#ef4444" />
            <polygon points="52,98 64,98 64,103 52,103" fill="#ef4444" />

            <!-- Shorts -->
            <polygon points="20,44 50,44 54,60 38,60 35,50 32,60 16,60" fill="#111218" stroke="#ef4444" stroke-width="1.2" />

            <!-- Torso / Red Training Bib -->
            <path d="M 20 20 L 50 20 L 52 46 L 18 46 Z" fill="#b91c1c" stroke="#f87171" stroke-width="1" />
            <!-- Bib Numbers/Text -->
            <text x="35" y="36" fill="#ffffff" font-size="9" font-family="monospace" font-weight="900" text-anchor="middle">DEF</text>

            <!-- Head / Dummy Cap -->
            <circle cx="35" cy="12" r="9" fill="#2d303e" stroke="#ef4444" stroke-width="1.2" />
            <ellipse cx="35" cy="11" rx="5" ry="3" fill="#ef4444" opacity="0.8" />
          </svg>

          <!-- Defensive Pressing Ring in Perspective -->
          <div class="sim-mannequin__ring"></div>
        </div>

        <!-- 2.5D ARTICULATED FOOTBALL PLAYER -->
        <div
          class="sim-entity sim-player"
          :class="`sim-player--${animationType}`"
        >
          <!-- Ground Contact Shadow -->
          <div class="sim-player__shadow"></div>

          <!-- The Articulated Vector Athlete -->
          <svg viewBox="0 0 100 130" width="76" height="98" class="sim-player__rig">
            <!-- Left Arm (Back Arm) -->
            <g class="rig-part rig-arm-back">
              <path d="M 38 42 L 24 58 L 18 52" stroke="#2a2e40" stroke-width="4.5" stroke-linecap="round" fill="none" />
              <circle cx="18" cy="52" r="3" fill="#e5e7eb" />
            </g>

            <!-- Left Leg (Support / Plant Leg) -->
            <g class="rig-part rig-leg-left">
              <!-- Thigh -->
              <path d="M 40 68 L 32 90" stroke="#1f2438" stroke-width="6.5" stroke-linecap="round" fill="none" />
              <!-- Sock & Shin -->
              <path d="M 32 90 L 26 112" :stroke="categoryColor" stroke-width="5" stroke-linecap="round" fill="none" />
              <!-- White Boot with Black Studs (Support Cleat) -->
              <path d="M 26 112 L 18 116 L 18 120 L 32 120 L 30 112 Z" fill="#ffffff" stroke="#1e293b" stroke-width="1" />
              <rect x="18" y="120" width="13" height="2" fill="#0f172a" />
            </g>

            <!-- Torso & Jersey -->
            <g class="rig-part rig-torso">
              <!-- Jersey Body -->
              <path d="M 34 32 L 62 32 L 66 68 L 30 68 Z" :fill="categoryColor" stroke="#0f172a" stroke-width="1.5" />
              <!-- Shorts -->
              <polygon points="30,68 66,68 70,82 52,82 48,74 44,82 26,82" fill="#111827" stroke="#374151" stroke-width="1" />
              <!-- Squad Number -->
              <text x="48" y="54" fill="#0f172a" font-size="14" font-weight="900" font-family="var(--font-display)" text-anchor="middle">10</text>
              
              <!-- Athletic Head & Visor -->
              <g class="rig-head">
                <circle cx="48" cy="18" r="11" fill="#1f2937" stroke="#374151" stroke-width="1.2" />
                <!-- Headband / Trim -->
                <path d="M 39 16 Q 48 13 57 16" fill="none" :stroke="categoryColor" stroke-width="2.5" />
                <!-- Face visor / Direction of sight -->
                <polygon points="56,15 63,18 56,21" :fill="categoryColor" />
              </g>
            </g>

            <!-- Right Leg (Active / Kicking Leg - Does the Dribble Moves) -->
            <g class="rig-part rig-leg-right">
              <!-- Thigh -->
              <path d="M 54 68 L 62 88" stroke="#1f2438" stroke-width="7" stroke-linecap="round" fill="none" />
              <!-- Sock & Calf -->
              <path d="M 62 88 L 68 110" :stroke="categoryColor" stroke-width="5.5" stroke-linecap="round" fill="none" />
              <!-- High-Visibility Active Boot (Highlighted Cleat) -->
              <!-- Instep, Exterior, Heel & Studs -->
              <path d="M 68 110 L 80 115 L 82 120 L 64 120 L 63 112 Z" fill="#f8fafc" :stroke="categoryColor" stroke-width="1.5" />
              <!-- Bright Colored Laces / Accent -->
              <line x1="72" y1="113" x2="77" y2="117" :stroke="categoryColor" stroke-width="2" />
              <rect x="64" y="120" width="17" height="2.5" fill="#0f172a" />
            </g>

            <!-- Right Arm (Front Arm) -->
            <g class="rig-part rig-arm-front">
              <path d="M 58 40 L 72 54 L 80 48" stroke="#374151" stroke-width="5" stroke-linecap="round" fill="none" />
              <circle cx="80" cy="48" r="3.2" fill="#e5e7eb" />
            </g>
          </svg>
        </div>

        <!-- THE 3D SHADED FOOTBALL WITH ROLLING & AERIAL ELEVATION -->
        <div
          class="sim-entity sim-ball-carrier"
          :class="`sim-ball-carrier--${animationType}`"
        >
          <!-- Ground Projection Shadow (Scales & fades when aerial) -->
          <div class="sim-ball-ground-shadow"></div>

          <!-- Rolling Football Sphere with Pentagons -->
          <div class="sim-ball-mesh">
            <svg viewBox="0 0 32 32" width="24" height="24" class="sim-ball-svg">
              <!-- White Leather Base -->
              <circle cx="16" cy="16" r="14" fill="#f8fafc" stroke="#94a3b8" stroke-width="1" />
              <!-- Pentagons Pattern -->
              <polygon points="16,10 20,13 18,18 14,18 12,13" fill="#0f172a" />
              <polygon points="16,2 20,5 21,3 17,1" fill="#334155" opacity="0.6" />
              <polygon points="28,14 29,18 25,20 24,16" fill="#334155" opacity="0.6" />
              <polygon points="4,14 3,18 7,20 8,16" fill="#334155" opacity="0.6" />
              <polygon points="12,28 16,30 20,28 19,25 13,25" fill="#334155" opacity="0.6" />
              <!-- Specular 3D Sunlight Highlight -->
              <ellipse cx="12" cy="9" rx="5" ry="3" fill="#ffffff" opacity="0.85" />
            </svg>
          </div>
        </div>

        <!-- Turf Impact Shockwave Ripple at Pivot Spot -->
        <div class="sim-turf-contact"></div>
      </div>

      <!-- Real-Time Progress Track -->
      <div class="sim-progress-track">
        <div class="sim-progress-fill"></div>
      </div>

      <!-- Bottom HUD Controls & Phase Timeline -->
      <div class="sim-hud">
        <!-- Synchronized 3-Phase Timeline -->
        <div class="sim-hud__phases">
          <span class="sim-hud__phase sim-hud__phase--p1" @click="restartAnim" title="Fase 1">{{ phaseData.s1 }}</span>
          <span class="sim-hud__arrow">➔</span>
          <span class="sim-hud__phase sim-hud__phase--p2" title="Fase 2">{{ phaseData.s2 }}</span>
          <span class="sim-hud__arrow">➔</span>
          <span class="sim-hud__phase sim-hud__phase--p3" title="Fase 3">{{ phaseData.s3 }}</span>
        </div>

        <!-- Interactive Controls -->
        <div class="sim-hud__controls">
          <!-- 2D / 3D Perspective Toggle -->
          <button
            class="sim-btn"
            :class="{ 'sim-btn--active': isPerspective3D }"
            @click="togglePerspective"
            :title="isPerspective3D ? 'Cambiar a Vista Plana' : 'Cambiar a Cámara Tele 3/4'"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
            {{ isPerspective3D ? '3/4 TELE' : '2D' }}
          </button>

          <!-- 0.5x Slow-Motion Toggle -->
          <button
            class="sim-btn"
            :class="{ 'sim-btn--active': isSlowMo }"
            @click="toggleSpeed"
            title="Alternar cámara lenta (0.5x) para ver el contacto del pie"
          >
            {{ isSlowMo ? '0.5x' : '1.0x' }}
          </button>

          <!-- Play / Pause -->
          <button
            class="sim-btn"
            @click="togglePlay"
            :title="isPlaying ? 'Pausar' : 'Reanudar'"
          >
            <svg v-if="isPlaying" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
            <svg v-else width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </button>

          <!-- Restart -->
          <button class="sim-btn" @click="restartAnim" title="Reiniciar animación">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
              <path d="M21 3v5h-5"/>
              <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
              <path d="M3 21v-5h5"/>
            </svg>
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.sim-card {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9.4;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 50% 30%, #0e241b 0%, #050d09 100%);
  border: 1px solid rgba(0, 255, 135, 0.22);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.75),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  overflow: hidden;
  perspective: 900px;
}

/* ── GIF FALLBACK ── */
.sim-gif-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}
.sim-gif-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ── HEADER OVERLAY ── */
.sim-header {
  position: absolute;
  top: 10px;
  left: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 15;
  pointer-events: none;
}

.sim-header__badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 9px;
  background: rgba(6, 15, 10, 0.82);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 255, 135, 0.3);
  border-radius: var(--radius-full);
}

.sim-header__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent-primary, #00ff87);
  box-shadow: 0 0 8px var(--color-accent-primary, #00ff87);
  animation: beaconPulse 1.8s ease-in-out infinite;
}

@keyframes beaconPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.7); }
}

.sim-header__title {
  font-family: var(--font-display);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.8px;
  color: #d1fae5;
}

.sim-header__meta {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 3px 9px;
  background: rgba(15, 20, 30, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-full);
  font-family: var(--font-display);
  font-size: 9.5px;
  font-weight: 700;
  color: #f3f4f6;
}

.sim-header__stars {
  color: #fbbf24;
}

.sim-header__divider {
  opacity: 0.35;
}

/* ── SYNCHRONIZED CONTROLLER STICK HUD ── */
.sim-stick-hud {
  position: absolute;
  top: 40px;
  left: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(10, 14, 22, 0.85);
  backdrop-filter: blur(10px);
  padding: 4px 10px 4px 6px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  z-index: 15;
  pointer-events: none;
  max-width: 240px;
}

.sim-stick-hud__icon {
  transform: scale(0.85);
  transform-origin: center;
}

.sim-stick-hud__details {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.sim-stick-hud__label {
  font-family: var(--font-display);
  font-size: 9px;
  font-weight: 800;
  color: var(--color-accent-primary, #00ff87);
  letter-spacing: 0.5px;
}

.sim-stick-hud__tip {
  font-family: var(--font-body);
  font-size: 8.5px;
  color: #94a3b8;
  line-height: 1.15;
}

/* ── ARENA & PITCH ── */
.sim-arena {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform-origin: center center;
  transition: transform 0.5s cubic-bezier(0.34, 1.3, 0.64, 1);
  transform-style: preserve-3d;
}

.sim-card--3d .sim-arena {
  transform: rotateX(18deg) scale(0.98) translateY(-4px);
}

.sim-pitch-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.sim-laser-trail {
  fill: none;
  stroke: var(--color-accent-primary, #00ff87);
  stroke-width: 2.5;
  stroke-dasharray: 6 5;
  filter: drop-shadow(0 0 6px rgba(0, 255, 135, 0.65));
  animation: dashMove 1.2s linear infinite;
  animation-play-state: var(--play-state);
}

.sim-laser-trail--aerial {
  stroke: #38bdf8;
  filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.7));
}

@keyframes dashMove {
  to { stroke-dashoffset: -22; }
}

/* ── ENTITY COMMON ── */
.sim-entity {
  position: absolute;
  transform: translate(-50%, -50%);
  user-select: none;
  pointer-events: none;
}

/* ── DEFENDER TRAINING MANNEQUIN ── */
.sim-mannequin {
  top: 52%;
  left: 62%;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sim-mannequin__shadow {
  position: absolute;
  bottom: -4px;
  width: 54px;
  height: 14px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.65);
  filter: blur(3px);
  z-index: 1;
}

.sim-mannequin__svg {
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.6));
}

.sim-mannequin__ring {
  position: absolute;
  bottom: -10px;
  width: 60px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px dashed rgba(239, 68, 68, 0.55);
  animation: rotateDisc 8s linear infinite;
  animation-play-state: var(--play-state);
}

@keyframes rotateDisc {
  to { transform: rotate(360deg); }
}

/* ── 2.5D ARTICULATED PLAYER RIG ── */
.sim-player {
  top: 52%;
  left: 28%;
  z-index: 5;
  animation-duration: var(--anim-dur);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-iteration-count: infinite;
  animation-play-state: var(--play-state);
}

.sim-player__shadow {
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 58px;
  height: 15px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.65);
  filter: blur(3px);
  z-index: 1;
}

.sim-player__rig {
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.6));
}

/* Articulated Limb Transform Origins */
.rig-leg-right {
  transform-origin: 54px 68px;
  animation-duration: var(--anim-dur);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-iteration-count: infinite;
  animation-play-state: var(--play-state);
}

.rig-leg-left {
  transform-origin: 40px 68px;
  animation-duration: var(--anim-dur);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-iteration-count: infinite;
  animation-play-state: var(--play-state);
}

.rig-torso {
  transform-origin: 48px 80px;
  animation-duration: var(--anim-dur);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-iteration-count: infinite;
  animation-play-state: var(--play-state);
}

.rig-arm-front {
  transform-origin: 58px 40px;
}
.rig-arm-back {
  transform-origin: 38px 42px;
}

/* ── THE 3D ROLLING & AERIAL BALL ── */
.sim-ball-carrier {
  top: 56%;
  left: 35%;
  z-index: 6;
  animation-duration: var(--anim-dur);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-iteration-count: infinite;
  animation-play-state: var(--play-state);
}

.sim-ball-mesh {
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.65));
}

.sim-ball-svg {
  animation: rollSphere var(--anim-dur) linear infinite;
  animation-play-state: var(--play-state);
}

@keyframes rollSphere {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(720deg); }
}

.sim-ball-ground-shadow {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 8px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.65);
  filter: blur(2.5px);
  z-index: 1;
}

/* ── TURF IMPACT RIPPLE ── */
.sim-turf-contact {
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 18px;
  border-radius: 50%;
  border: 1.8px solid var(--cat-color, #00ff87);
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  animation: turfShock var(--anim-dur) cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
  animation-play-state: var(--play-state);
}

@keyframes turfShock {
  0%, 35% { transform: translate(-50%, -50%) scale(0.2); opacity: 0; }
  45%      { opacity: 0.9; }
  68%      { transform: translate(-50%, -50%) scale(2.4); opacity: 0; }
  100%     { opacity: 0; }
}

/* ═════════════════════════════════════════════════════════
   BIOMECHANICAL ANIMATIONS FOR EACH SKILL MOVE
   ═════════════════════════════════════════════════════════ */

/* 1. SNAP-BACK (ELÁSTICO: Outside Hook ➔ Violent Inside Snap) */
@keyframes playerSnapBack {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  25%        { transform: translate(-50%, -50%) translate(30px, 12px); }
  45%        { transform: translate(-50%, -50%) translate(55px, 16px); }
  65%        { transform: translate(-50%, -50%) translate(95px, -18px); }
  85%, 100%  { transform: translate(-50%, -50%) translate(155px, -10px); }
}
@keyframes rightLegSnapBack {
  0%         { transform: rotate(0deg); }
  25%        { transform: rotate(-22deg) translateX(4px); } /* Outside flick with pinky toe edge */
  45%        { transform: rotate(32deg) translateX(-6px); }  /* Violent inside boot snap! */
  65%        { transform: rotate(-10deg); }
  85%, 100%  { transform: rotate(0deg); }
}
@keyframes torsoSnapBack {
  0%         { transform: rotate(0deg); }
  25%        { transform: rotate(14deg); }  /* Body feints right */
  45%        { transform: rotate(-18deg); } /* Body whips left */
  65%        { transform: rotate(-5deg); }
  85%, 100%  { transform: rotate(0deg); }
}
@keyframes ballSnapBack {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  25%        { transform: translate(-50%, -50%) translate(32px, 18px); } /* Pushed outside */
  45%        { transform: translate(-50%, -50%) translate(58px, 20px); }
  65%        { transform: translate(-50%, -50%) translate(100px, -20px); } /* Snatched inside */
  85%, 100%  { transform: translate(-50%, -50%) translate(160px, -12px); }
}

.sim-player--snap-back { animation-name: playerSnapBack; }
.sim-player--snap-back .rig-leg-right { animation-name: rightLegSnapBack; }
.sim-player--snap-back .rig-torso { animation-name: torsoSnapBack; }
.sim-ball-carrier--snap-back { animation-name: ballSnapBack; }

/* 2. RAINBOW FLICK (Clamp with Heels ➔ Roll Up Calf ➔ Heel Launch) */
@keyframes playerRainbow {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  25%        { transform: translate(-50%, -50%) translate(20px, 0); }
  45%        { transform: translate(-50%, -50%) translate(50px, 0); }
  65%        { transform: translate(-50%, -50%) translate(90px, 0); }
  85%, 100%  { transform: translate(-50%, -50%) translate(150px, 0); }
}
@keyframes rightLegRainbow {
  0%         { transform: rotate(0deg); }
  25%        { transform: rotate(20deg) translateY(-4px); }  /* Traps ball against left ankle */
  42%        { transform: rotate(-35deg) translateY(-14px); } /* Heel pops upward! */
  65%        { transform: rotate(15deg); }
  85%, 100%  { transform: rotate(0deg); }
}
@keyframes leftLegRainbow {
  0%         { transform: rotate(0deg); }
  25%        { transform: rotate(-10deg); } /* Front plant foot */
  42%        { transform: rotate(15deg) translateY(-8px); }
  65%        { transform: rotate(-5deg); }
  85%, 100%  { transform: rotate(0deg); }
}
@keyframes ballRainbow {
  0%         { transform: translate(-50%, -50%) translate(0, 0) scale(1); }
  25%        { transform: translate(-50%, -50%) translate(15px, 0) scale(1); }
  45%        { transform: translate(-50%, -50%) translate(50px, -70px) scale(1.4); } /* Apex in air */
  65%        { transform: translate(-50%, -50%) translate(95px, -65px) scale(1.3); }
  85%, 100%  { transform: translate(-50%, -50%) translate(150px, 0) scale(1); }
}
@keyframes shadowRainbow {
  0%, 25%    { transform: translateX(-50%) scale(1); opacity: 0.65; filter: blur(2.5px); }
  45%, 65%   { transform: translateX(-50%) scale(2.6); opacity: 0.18; filter: blur(7px); }
  85%, 100%  { transform: translateX(-50%) scale(1); opacity: 0.65; filter: blur(2.5px); }
}

.sim-player--rainbow { animation-name: playerRainbow; }
.sim-player--rainbow .rig-leg-right { animation-name: rightLegRainbow; }
.sim-player--rainbow .rig-leg-left  { animation-name: leftLegRainbow; }
.sim-ball-carrier--rainbow { animation-name: ballRainbow; }
.sim-ball-carrier--rainbow .sim-ball-ground-shadow {
  animation: shadowRainbow var(--anim-dur) cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-play-state: var(--play-state);
}

/* 3. SPIN-360 (ROULETTE: Right Sole Plant ➔ 180° Turn ➔ Left Sole Drag) */
@keyframes playerSpin360 {
  0%         { transform: translate(-50%, -50%) translate(0, 0) rotate(0deg); }
  25%        { transform: translate(-50%, -50%) translate(35px, 0) rotate(20deg); }
  50%        { transform: translate(-50%, -50%) translate(70px, -20px) rotate(190deg); } /* Back to defender */
  75%        { transform: translate(-50%, -50%) translate(120px, -5px) rotate(360deg); }
  90%, 100%  { transform: translate(-50%, -50%) translate(160px, 0) rotate(360deg); }
}
@keyframes rightLegSpin360 {
  0%         { transform: rotate(0deg); }
  25%        { transform: rotate(-25deg) translateY(4px); } /* Sole steps on ball */
  50%        { transform: rotate(15deg); }
  75%        { transform: rotate(0deg); }
  100%       { transform: rotate(0deg); }
}
@keyframes leftLegSpin360 {
  0%         { transform: rotate(0deg); }
  25%        { transform: rotate(0deg); }
  50%        { transform: rotate(-30deg) translateY(4px); } /* Left sole drags ball */
  75%        { transform: rotate(0deg); }
  100%       { transform: rotate(0deg); }
}
@keyframes ballSpin360 {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  25%        { transform: translate(-50%, -50%) translate(35px, 0); }
  50%        { transform: translate(-50%, -50%) translate(70px, -20px); }
  75%        { transform: translate(-50%, -50%) translate(120px, 0); }
  90%, 100%  { transform: translate(-50%, -50%) translate(160px, 0); }
}

.sim-player--spin-360 { animation-name: playerSpin360; }
.sim-player--spin-360 .rig-leg-right { animation-name: rightLegSpin360; }
.sim-player--spin-360 .rig-leg-left  { animation-name: leftLegSpin360; }
.sim-ball-carrier--spin-360 { animation-name: ballSpin360; }

/* 4. CHOP (HEEL CHOP: Behind Plant Knee 90° Cut) */
@keyframes playerChop {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  35%        { transform: translate(-50%, -50%) translate(55px, 0); }
  55%        { transform: translate(-50%, -50%) translate(75px, 25px); }
  85%, 100%  { transform: translate(-50%, -50%) translate(80px, 55px); }
}
@keyframes rightLegChop {
  0%         { transform: rotate(0deg); }
  35%        { transform: rotate(-45deg) translateX(-8px); } /* Crosses behind plant knee */
  55%        { transform: rotate(25deg); }                  /* Heel strikes ball */
  85%, 100%  { transform: rotate(0deg); }
}
@keyframes torsoChop {
  0%         { transform: rotate(0deg); }
  35%        { transform: rotate(8deg); }
  55%        { transform: rotate(35deg); } /* Torso cuts 90° into new lane */
  85%, 100%  { transform: rotate(35deg); }
}
@keyframes ballChop {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  35%        { transform: translate(-50%, -50%) translate(55px, 0); }
  55%        { transform: translate(-50%, -50%) translate(75px, 30px); }
  85%, 100%  { transform: translate(-50%, -50%) translate(80px, 60px); }
}

.sim-player--chop { animation-name: playerChop; }
.sim-player--chop .rig-leg-right { animation-name: rightLegChop; }
.sim-player--chop .rig-torso { animation-name: torsoChop; }
.sim-ball-carrier--chop { animation-name: ballChop; }

/* 5. LATERAL-SHIFT (STEPOVER: Foot Sweeps Around Ball in Air) */
@keyframes playerLatShift {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  30%        { transform: translate(-50%, -50%) translate(30px, 0); }
  55%        { transform: translate(-50%, -50%) translate(70px, -24px); }
  85%, 100%  { transform: translate(-50%, -50%) translate(155px, -24px); }
}
@keyframes rightLegLatShift {
  0%         { transform: rotate(0deg); }
  30%        { transform: rotate(38deg) translateY(-8px); } /* Sweeps in circle over ball */
  55%        { transform: rotate(-20deg); }
  85%, 100%  { transform: rotate(0deg); }
}
@keyframes torsoLatShift {
  0%         { transform: rotate(0deg); }
  30%        { transform: rotate(18deg); }  /* Feint body right */
  55%        { transform: rotate(-15deg); } /* Explode left */
  85%, 100%  { transform: rotate(0deg); }
}
@keyframes ballLatShift {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  30%        { transform: translate(-50%, -50%) translate(30px, 0); }
  55%        { transform: translate(-50%, -50%) translate(70px, -24px); }
  85%, 100%  { transform: translate(-50%, -50%) translate(155px, -24px); }
}

.sim-player--lateral-shift { animation-name: playerLatShift; }
.sim-player--lateral-shift .rig-leg-right { animation-name: rightLegLatShift; }
.sim-player--lateral-shift .rig-torso { animation-name: torsoLatShift; }
.sim-ball-carrier--lateral-shift { animation-name: ballLatShift; }

/* 6. NUTMEG (CAÑO: Direct Poke between Defender's Open Legs) */
@keyframes playerNutmeg {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  25%        { transform: translate(-50%, -50%) translate(30px, 0); }
  45%        { transform: translate(-50%, -50%) translate(65px, -22px); } /* Vaults around defender */
  75%        { transform: translate(-50%, -50%) translate(145px, 0); }
  90%, 100%  { transform: translate(-50%, -50%) translate(175px, 0); }
}
@keyframes rightLegNutmeg {
  0%         { transform: rotate(0deg); }
  25%        { transform: rotate(25deg); } /* Sharp toe-poke through legs */
  45%        { transform: rotate(-15deg); }
  75%        { transform: rotate(0deg); }
}
@keyframes ballNutmeg {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  25%        { transform: translate(-50%, -50%) translate(30px, 0); }
  40%        { transform: translate(-50%, -50%) translate(75px, 0); } /* Glides through gap */
  75%        { transform: translate(-50%, -50%) translate(145px, 0); }
  90%, 100%  { transform: translate(-50%, -50%) translate(175px, 0); }
}

.sim-player--nutmeg { animation-name: playerNutmeg; }
.sim-player--nutmeg .rig-leg-right { animation-name: rightLegNutmeg; }
.sim-ball-carrier--nutmeg { animation-name: ballNutmeg; }

/* 7. BEHIND-LEG (RABONA FAKE: Fake Big Shot ➔ Brake Behind Standing Leg) */
@keyframes playerBehindLeg {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  35%        { transform: translate(-50%, -50%) translate(50px, 0); }
  60%        { transform: translate(-50%, -50%) translate(65px, -22px); }
  85%, 100%  { transform: translate(-50%, -50%) translate(140px, -22px); }
}
@keyframes rightLegBehindLeg {
  0%         { transform: rotate(0deg); }
  30%        { transform: rotate(-50deg) translateY(-10px); } /* Winds up big shot! */
  50%        { transform: rotate(30deg) translateY(6px); }    /* Wraps behind knee to stop ball */
  75%, 100%  { transform: rotate(0deg); }
}
@keyframes ballBehindLeg {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  35%        { transform: translate(-50%, -50%) translate(45px, 0); }
  60%        { transform: translate(-50%, -50%) translate(65px, -22px); }
  85%, 100%  { transform: translate(-50%, -50%) translate(140px, -22px); }
}

.sim-player--behind-leg { animation-name: playerBehindLeg; }
.sim-player--behind-leg .rig-leg-right { animation-name: rightLegBehindLeg; }
.sim-ball-carrier--behind-leg { animation-name: ballBehindLeg; }

/* 8. FORWARD-FLICK (HEEL TO HEEL) */
@keyframes playerFwdFlick {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  25%        { transform: translate(-50%, -50%) translate(22px, 0); }
  55%        { transform: translate(-50%, -50%) translate(80px, 0); }
  85%, 100%  { transform: translate(-50%, -50%) translate(165px, 0); }
}
@keyframes rightLegFwdFlick {
  0%         { transform: rotate(0deg); }
  25%        { transform: rotate(-30deg); } /* Rear heel pop */
  50%        { transform: rotate(20deg); }
  85%, 100%  { transform: rotate(0deg); }
}
@keyframes ballFwdFlick {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  25%        { transform: translate(-50%, -50%) translate(22px, 0); }
  50%        { transform: translate(-50%, -50%) translate(100px, 0); }
  85%, 100%  { transform: translate(-50%, -50%) translate(165px, 0); }
}

.sim-player--forward-flick { animation-name: playerFwdFlick; }
.sim-player--forward-flick .rig-leg-right { animation-name: rightLegFwdFlick; }
.sim-ball-carrier--forward-flick { animation-name: ballFwdFlick; }

/* 9. DRAG-BACK (PULL BACK 180° WITH SOLE) */
@keyframes playerDragBack {
  0%         { transform: translate(-50%, -50%) translate(0, 0) rotate(0deg); }
  35%        { transform: translate(-50%, -50%) translate(45px, 0) rotate(0deg); }
  60%        { transform: translate(-50%, -50%) translate(10px, 0) rotate(160deg); } /* Spins backwards */
  85%, 100%  { transform: translate(-50%, -50%) translate(-20px, 30px) rotate(140deg); }
}
@keyframes rightLegDragBack {
  0%         { transform: rotate(0deg); }
  35%        { transform: rotate(-25deg) translateY(4px); } /* Sole on ball */
  60%        { transform: rotate(30deg); }                  /* Pulls back */
  85%, 100%  { transform: rotate(0deg); }
}
@keyframes ballDragBack {
  0%         { transform: translate(-50%, -50%) translate(0, 0); }
  35%        { transform: translate(-50%, -50%) translate(45px, 0); }
  60%        { transform: translate(-50%, -50%) translate(10px, 0); }
  85%, 100%  { transform: translate(-50%, -50%) translate(-20px, 30px); }
}

.sim-player--drag-back { animation-name: playerDragBack; }
.sim-player--drag-back .rig-leg-right { animation-name: rightLegDragBack; }
.sim-ball-carrier--drag-back { animation-name: ballDragBack; }

/* 10. JUGGLE (AERIAL AROUND THE WORLD) */
@keyframes playerJuggle {
  0%, 100%   { transform: translate(-50%, -50%) translate(50px, 0); }
  25%        { transform: translate(-50%, -50%) translate(50px, -6px); }
  50%        { transform: translate(-50%, -50%) translate(50px, 0); }
  75%        { transform: translate(-50%, -50%) translate(50px, -4px); }
}
@keyframes rightLegJuggle {
  0%         { transform: rotate(0deg); }
  25%        { transform: rotate(35deg) translateY(-8px); }
  50%        { transform: rotate(-40deg) translateY(-14px); } /* 360 loop around ball */
  75%        { transform: rotate(20deg); }
  100%       { transform: rotate(0deg); }
}
@keyframes ballJuggle {
  0%, 100%   { transform: translate(-50%, -50%) translate(70px, 0) scale(1); }
  25%        { transform: translate(-50%, -50%) translate(70px, -35px) scale(1.25); }
  50%        { transform: translate(-50%, -50%) translate(70px, 0) scale(1); }
  75%        { transform: translate(-50%, -50%) translate(70px, -25px) scale(1.2); }
}

.sim-player--juggle { animation-name: playerJuggle; }
.sim-player--juggle .rig-leg-right { animation-name: rightLegJuggle; }
.sim-ball-carrier--juggle { animation-name: ballJuggle; }

/* ── PROGRESS TRACK ── */
.sim-progress-track {
  position: absolute;
  bottom: 38px;
  left: 14px;
  right: 14px;
  height: 2px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 1px;
  overflow: hidden;
  z-index: 10;
}

.sim-progress-fill {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, rgba(0, 255, 135, 0.2), var(--color-accent-primary, #00ff87));
  transform-origin: left center;
  animation: sweepBar var(--anim-dur) linear infinite;
  animation-play-state: var(--play-state);
}

@keyframes sweepBar {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* ── HUD OVERLAY ── */
.sim-hud {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 14px;
  background: linear-gradient(180deg, transparent 0%, rgba(5, 13, 9, 0.96) 55%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  z-index: 15;
}

.sim-hud__phases {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-size: 11px;
  user-select: none;
}

.sim-hud__phase {
  cursor: pointer;
  transition: all var(--transition-fast);
}

.sim-hud__phase--p1 {
  animation: glowP1 var(--anim-dur) infinite;
  animation-play-state: var(--play-state);
}
@keyframes glowP1 {
  0%, 30%    { color: var(--color-accent-primary, #00ff87); font-weight: 700; text-shadow: 0 0 8px rgba(0,255,135,0.6); }
  35%, 100%  { color: var(--color-text-muted); font-weight: 500; text-shadow: none; }
}

.sim-hud__phase--p2 {
  animation: glowP2 var(--anim-dur) infinite;
  animation-play-state: var(--play-state);
}
@keyframes glowP2 {
  0%, 28%    { color: var(--color-text-muted); font-weight: 500; text-shadow: none; }
  35%, 70%   { color: var(--color-accent-primary, #00ff87); font-weight: 700; text-shadow: 0 0 8px rgba(0,255,135,0.6); }
  75%, 100%  { color: var(--color-text-muted); font-weight: 500; text-shadow: none; }
}

.sim-hud__phase--p3 {
  animation: glowP3 var(--anim-dur) infinite;
  animation-play-state: var(--play-state);
}
@keyframes glowP3 {
  0%, 68%    { color: var(--color-text-muted); font-weight: 500; text-shadow: none; }
  75%, 100%  { color: var(--color-accent-primary, #00ff87); font-weight: 700; text-shadow: 0 0 8px rgba(0,255,135,0.6); }
}

.sim-hud__arrow {
  opacity: 0.35;
  font-size: 10px;
}

.sim-hud__controls {
  display: flex;
  align-items: center;
  gap: 6px;
}

.sim-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 24px;
  padding: 0 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-sm);
  color: #e5e7eb;
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.sim-btn:hover {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
}

.sim-btn--active {
  background: rgba(0, 255, 135, 0.18);
  border-color: var(--color-accent-primary, #00ff87);
  color: var(--color-accent-primary, #00ff87);
  box-shadow: 0 0 8px rgba(0, 255, 135, 0.25);
}
</style>
