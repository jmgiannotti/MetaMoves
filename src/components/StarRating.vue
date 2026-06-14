<script setup lang="ts">
import type { StarRating as StarRatingType } from '../types';

const props = defineProps<{
  rating: StarRatingType;
  size?: 'sm' | 'md' | 'lg';
}>();

const sizeMap = {
  sm: 14,
  md: 18,
  lg: 22,
};

const starSize = sizeMap[props.size ?? 'md'];
</script>

<template>
  <div class="star-rating" :class="`star-rating--${size ?? 'md'}`" :aria-label="`${rating} de 5 estrellas`">
    <svg
      v-for="i in 5"
      :key="i"
      class="star-rating__star"
      :class="{ 'star-rating__star--active': i <= rating }"
      :width="starSize"
      :height="starSize"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14.9 8.62L22 9.27L16.73 13.97L18.18 21.02L12 17.27L5.82 21.02L7.27 13.97L2 9.27L9.1 8.62L12 2Z"
        :fill="i <= rating ? 'var(--color-accent-gold)' : 'var(--color-text-muted)'"
        :stroke="i <= rating ? 'var(--color-accent-gold)' : 'none'"
        stroke-width="0.5"
      />
    </svg>
  </div>
</template>

<style scoped>
.star-rating {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.star-rating--lg {
  gap: 3px;
}

.star-rating__star {
  transition: transform var(--transition-fast), filter var(--transition-fast);
  flex-shrink: 0;
}

.star-rating__star--active {
  filter: drop-shadow(0 0 3px rgba(255, 215, 0, 0.4));
}

.star-rating:hover .star-rating__star--active {
  animation: starTwinkle 1.2s ease-in-out infinite;
}

.star-rating:hover .star-rating__star--active:nth-child(2) {
  animation-delay: 0.1s;
}

.star-rating:hover .star-rating__star--active:nth-child(3) {
  animation-delay: 0.2s;
}

.star-rating:hover .star-rating__star--active:nth-child(4) {
  animation-delay: 0.3s;
}

.star-rating:hover .star-rating__star--active:nth-child(5) {
  animation-delay: 0.4s;
}
</style>
