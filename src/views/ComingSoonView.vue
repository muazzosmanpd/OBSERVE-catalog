<template>
  <main class="coming-soon">
    <picture class="bg-picture">
      <source media="(max-width: 768px)" :srcset="comingSoonMobileBackground" />

      <img :src="comingSoonBackground" class="bg-image" alt="Coming Soon Background" />
    </picture>

    <div class="overlay"></div>

    <div class="content">
      <RouterLink to="/" class="back-btn"> Back to Home </RouterLink>
    </div>
  </main>
</template>

<script setup>
import comingSoonBackground from '@/assets/comingsoon2.png'
import comingSoonMobileBackground from '@/assets/ComingSoonMobile.png'
</script>

<style scoped>
.coming-soon {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.35);
  z-index: 1;
}

.content {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.9rem 2rem;

  border-radius: 999px;
  border: 1px solid rgba(34, 211, 238, 0.45);

  background: rgba(34, 211, 238, 0.08);
  backdrop-filter: blur(12px);

  color: #67e8f9;
  text-decoration: none;
  font-weight: 600;

  transition: 0.25s;
}

.back-btn:hover {
  background: #22d3ee;
  color: #0f172a;
}

/* Mobile */
@media (max-width: 768px) {
  .content {
    bottom: 1.5rem;
    width: 100%;
    text-align: center;
  }

  .back-btn {
    padding: 0.85rem 1.8rem;
    font-size: 0.95rem;
  }

  /* Optional: show more of the mobile artwork */
  .bg-image {
    object-fit: cover;
    object-position: center;
  }
}
</style>
