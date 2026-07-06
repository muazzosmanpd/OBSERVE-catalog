<template>
  <main class="satellite-page">
    <!-- Header -->
    <section
      class="page-hero"
      :style="{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(8, 47, 73, 0.75)), url(${backgroundGif})`,
      }"
    >
      <div class="page-container hero-content">
        <div class="hero-title-row">
          <div class="hero-icon">
            <Satellite />
          </div>
          <h1>Satellite Imagery & Remote Sensing</h1>
        </div>

        <p>
          High-resolution, multi-source satellite imagery to support monitoring, spatial analysis,
          and mapping across diverse environments. Gain timely insights for decision-making through
          both optical and radar-based earth observation data.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="page-container content-section">
      <h2>Key Capabilities</h2>

      <div class="feature-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="card-icon cyan">
            <component :is="feature.icon" />
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>

      <!-- Benefits -->
      <div class="benefits-card">
        <h2>Benefits</h2>

        <ul>
          <li v-for="benefit in benefits" :key="benefit">
            <span class="check-icon">✓</span>
            <span>{{ benefit }}</span>
          </li>
        </ul>
      </div>

      <!-- Imagery Types -->
      <div class="imagery-section">
        <h2>Key Highlights of Satellite Imageries</h2>
        <p class="section-subtitle">
          Understanding different satellite imagery capabilities for comprehensive earth observation
          and monitoring
        </p>

        <div class="imagery-grid">
          <div
            v-for="item in imageryTypes"
            :key="item.key"
            class="imagery-card"
            :class="{ active: expandedCard === item.key }"
            @click="toggleCard(item.key)"
          >
            <div class="imagery-icon" :class="item.bg">
              <component :is="item.icon" :class="item.iconColor" />
            </div>

            <h3>{{ item.title }}</h3>
            <p>{{ item.shortDescription }}</p>

            <div class="expand-content" :class="{ open: expandedCard === item.key }">
              <div class="expand-inner">
                <img :src="item.image" :alt="item.alt" />

                <h4>Capabilities</h4>
                <p>{{ item.capabilities }}</p>

                <h4 class="advantage-title">Advantages</h4>
                <p class="advantage-text" v-html="item.advantages"></p>
              </div>
            </div>
          </div>
        </div>

        <p class="hint">
          Tap (mobile) or hover (desktop) over each card to explore detailed capabilities and
          advantages
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

import { Satellite, Eye, Radar, Globe, Activity, Layers, Radio } from 'lucide-vue-next'

import backgroundGif from '@/assets/2023-02-24_09-44-12-1.gif'
import sarImageExample from '@/assets/c02a17c1-9426-4660-ab15-5d1e63f4672d__1_.png'
import multispectralImageExample from '@/assets/fbca8859013a78ab0832160280c0f14edaea1c3d.png'

const expandedCard = ref(null)

const toggleCard = (cardName) => {
  expandedCard.value = expandedCard.value === cardName ? null : cardName
}

const features = [
  {
    icon: Eye,
    title: 'High-Resolution Imagery',
    description:
      'Access to multi-source satellite imagery with exceptional detail and clarity for precise monitoring and analysis.',
  },
  {
    icon: Radar,
    title: 'Optical & Radar Data',
    description: 'Options available for optical, thermal, SAR, multispectral, hyperspectral, etc.',
  },
  {
    icon: Globe,
    title: 'Multi-Environment Coverage',
    description:
      'Support for monitoring and mapping across diverse environments including urban, agricultural, and natural landscapes.',
  },
]

const benefits = [
  'Access to the latest satellite imagery from multiple sources worldwide',
  'Support for temporal analysis and change detection over time',
  'All-weather monitoring capabilities through radar technology',
  'Timely delivery for critical decision-making processes',
]

const imageryTypes = [
  {
    key: 'optical',
    title: 'Optical Imagery',
    icon: Eye,
    bg: 'blue-bg',
    iconColor: 'blue-text',
    shortDescription: 'High-resolution visual spectrum imaging',
    image:
      'https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?auto=format&fit=crop&w=1080&q=80',
    alt: 'Optical satellite imagery example',
    capabilities:
      'Natural color imagery similar to human vision, ideal for detailed visual analysis and feature identification.',
    advantages:
      '• High spatial resolution<br>• Easy visual interpretation<br>• Detailed feature recognition<br>• True color representation',
  },
  {
    key: 'sar',
    title: 'SAR Imagery',
    icon: Radio,
    bg: 'purple-bg',
    iconColor: 'purple-text',
    shortDescription: 'Synthetic Aperture Radar imaging',
    image: sarImageExample,
    alt: 'SAR satellite imagery example',
    capabilities:
      'All-weather radar imaging that penetrates clouds and operates day/night for continuous monitoring.',
    advantages:
      '• Weather independent<br>• Day/night operation<br>• Cloud penetration<br>• Surface deformation detection<br>• Oil spill detection',
  },
  {
    key: 'thermal',
    title: 'Thermal Imagery',
    icon: Activity,
    bg: 'red-bg',
    iconColor: 'red-text',
    shortDescription: 'Infrared heat signature detection',
    image:
      'https://images.unsplash.com/photo-1700081744390-53ac7df645ac?auto=format&fit=crop&w=1080&q=80',
    alt: 'Thermal infrared imagery example',
    capabilities:
      'Detects heat emissions and surface temperature variations for thermal analysis and monitoring.',
    advantages:
      '• Night operation<br>• Temperature mapping<br>• Heat source detection<br>• Fire monitoring<br>• Energy efficiency analysis',
  },
  {
    key: 'multispectral',
    title: 'Multispectral Imagery',
    icon: Layers,
    bg: 'green-bg',
    iconColor: 'green-text',
    shortDescription: 'Multiple wavelength band imaging',
    image: multispectralImageExample,
    alt: 'Multispectral vegetation imagery example',
    capabilities:
      'Captures data across visible, near-infrared, and other spectral bands for advanced analysis and classification.',
    advantages:
      '• Vegetation health analysis<br>• Water quality monitoring<br>• Land cover classification<br>• Mineral identification<br>• Crop monitoring',
  },
]
</script>

<style scoped>
.satellite-page {
  min-height: 100vh;
  background: #1e293b;
  color: #ffffff;
}

.satellite-page h1,
.satellite-page h2,
.satellite-page h3,
.satellite-page h4,
.satellite-page p {
  color: inherit;
}

.page-container {
  max-width: 980px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.page-hero {
  min-height: 420px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 35%, rgba(6, 182, 212, 0.15), transparent 35%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.25), rgba(8, 47, 73, 0.35)),
    linear-gradient(90deg, rgba(2, 6, 23, 0.45), rgba(2, 6, 23, 0.05));
}

.page-hero::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 140px;
  background: linear-gradient(180deg, transparent, rgba(30, 41, 59, 0.98));
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.hero-title-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.4rem;
}

.hero-icon {
  width: 68px;
  height: 68px;
  background: rgba(22, 78, 99, 0.78);
  color: #67e8f9;
  border: 1px solid rgba(103, 232, 249, 0.35);
  border-radius: 1.1rem;
  display: grid;
  place-items: center;
  box-shadow:
    0 0 24px rgba(34, 211, 238, 0.18),
    inset 0 0 18px rgba(255, 255, 255, 0.04);
}

.hero-icon svg {
  width: 36px;
  height: 36px;
}

.hero-title-row h1 {
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.08;
  margin: 0;
  text-shadow:
    0 0 18px rgba(103, 232, 249, 0.25),
    0 8px 28px rgba(0, 0, 0, 0.35);
}

.hero-content p {
  color: #e2e8f0;
  font-size: clamp(1rem, 1.3vw, 1.18rem);
  line-height: 1.75;
  max-width: 780px;
  margin: 0;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
}

.content-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.content-section > h2,
.imagery-section h2 {
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.25rem);
  margin-bottom: 2.5rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  margin-bottom: 3.5rem;
}

.feature-card,
.imagery-card,
.benefits-card {
  background: linear-gradient(180deg, rgba(39, 46, 70, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 16px;
  color: #ffffff;
  transition: 0.25s ease;
}

.feature-card {
  padding: 1.8rem;
}

.feature-card:hover,
.imagery-card:hover,
.imagery-card.active {
  transform: translateY(-6px);
  border-color: rgba(34, 211, 238, 0.65);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.28),
    0 0 24px rgba(34, 211, 238, 0.12);
}

.card-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  margin-bottom: 1.4rem;
}

.card-icon svg,
.imagery-icon svg {
  width: 24px;
  height: 24px;
}

.cyan {
  background: #164e63;
  color: #67e8f9;
}

.feature-card h3,
.imagery-card h3 {
  color: #ffffff;
  font-size: 1.15rem;
  margin: 0 0 0.9rem;
}

.feature-card p,
.imagery-card p,
.section-subtitle {
  color: #cbd5e1;
  line-height: 1.65;
  margin: 0;
}

.benefits-card {
  padding: 2.4rem 2.5rem;
  margin-bottom: 4rem;
}

.benefits-card h2 {
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.15rem);
  margin: 0 0 1.5rem;
}

.benefits-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits-card li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #cbd5e1;
  font-size: 1.02rem;
  margin-bottom: 1rem;
  line-height: 1.55;
}

.check-icon {
  width: 24px;
  height: 24px;
  background: #06b6d4;
  color: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: 0 0 16px rgba(6, 182, 212, 0.4);
}

.imagery-section {
  margin-top: 2rem;
}

.imagery-section h2 {
  margin-bottom: 0.7rem;
}

.section-subtitle {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.imagery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.imagery-card {
  padding: 1.5rem;
  border-width: 1px;
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(8px);
}

.imagery-card:hover h3,
.imagery-card.active h3 {
  color: #22d3ee;
}

.imagery-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-bottom: 1rem;
}

.expand-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.45s ease;
}

.imagery-card:hover .expand-content,
.expand-content.open {
  max-height: 650px;
}

.expand-inner {
  border-top: 1px solid #334155;
  padding-top: 1rem;
  margin-top: 1rem;
}

.expand-inner img {
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(71, 85, 105, 0.8);
}

.expand-inner h4 {
  color: #22d3ee;
  font-size: 0.82rem;
  margin: 0 0 0.4rem;
}

.expand-inner p {
  color: #cbd5e1;
  font-size: 0.78rem;
  line-height: 1.5;
}

.advantage-title {
  color: #4ade80 !important;
  margin-top: 0.9rem !important;
}

.hint {
  margin-top: 1.5rem;
  text-align: center;
  color: #94a3b8;
  font-size: 0.85rem;
  font-style: italic;
}

.blue-bg {
  background: rgba(30, 64, 175, 0.55);
}

.purple-bg {
  background: rgba(88, 28, 135, 0.55);
}

.red-bg {
  background: rgba(127, 29, 29, 0.55);
}

.green-bg {
  background: rgba(20, 83, 45, 0.55);
}

.blue-text {
  color: #60a5fa;
}

.purple-text {
  color: #c084fc;
}

.red-text {
  color: #f87171;
}

.green-text {
  color: #4ade80;
}

@media (max-width: 900px) {
  .feature-grid,
  .imagery-grid {
    grid-template-columns: 1fr;
  }

  .page-hero {
    min-height: 360px;
  }

  .hero-title-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }

  .hero-icon {
    width: 58px;
    height: 58px;
  }

  .hero-content {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }

  .benefits-card {
    padding: 1.8rem;
  }
}
</style>
