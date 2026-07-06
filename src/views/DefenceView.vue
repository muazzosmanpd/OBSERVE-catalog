<template>
  <main class="defence-page">
    <!-- Hero -->
    <section
      class="page-hero"
      :style="{
        backgroundImage: `linear-gradient(
      rgba(15, 23, 42, 0.85),
      rgba(71, 15, 15, 0.90)
    ), url(${heroImage})`,
      }"
    >
      <div class="page-container hero-content">
        <div class="hero-title-row">
          <div class="hero-icon">
            <Shield />
          </div>
          <h1>Defence</h1>
        </div>

        <p>
          Satellite observation technology plays a critical role in modern defence operations,
          providing real-time intelligence, surveillance, and reconnaissance capabilities for
          national security.
        </p>
      </div>
    </section>

    <!-- Key Applications -->
    <section class="page-container content-section">
      <div class="section-header">
        <h2>Key Applications</h2>
        <p>Advanced satellite technology supporting critical defence and security operations</p>
      </div>

      <div class="application-grid">
        <div v-for="item in applications" :key="item.title" class="application-card">
          <div class="application-icon" :class="item.color">
            <component :is="item.icon" />
          </div>

          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>

      <!-- Data Table -->
      <div class="section-header">
        <h2>Available Defence Data & Applications</h2>
        <p>
          Explore the comprehensive data types we provide and their real-world applications in
          defence operations
        </p>
      </div>

      <div class="data-table">
        <div class="table-header">
          <div>
            <Shield />
            <span>Data Type</span>
          </div>

          <div>
            <Activity />
            <span>Real-World Application</span>
          </div>
        </div>

        <div v-for="row in defenceData" :key="row.dataType" class="table-row">
          <div class="data-type" v-html="row.dataType"></div>
          <div>{{ row.application }}</div>
        </div>

        <div class="table-footer">
          * For data not listed here, please contact our team to discuss availability and custom
          solutions.
        </div>
      </div>
    </section>
    <!-- Solutions -->
    <section class="solution-section">
      <div class="page-container">
        <div class="section-header center">
          <h2>Defence Solutions</h2>
          <p>Command-ready platforms built on OBSERVE™ for defence intelligence and operations</p>
        </div>

        <div class="solution-card falcon-card">
          <div class="solution-content">
            <div class="solution-header falcon-header">
              <div class="hero-icon">
                <Crosshair />
              </div>

              <div>
                <h3>FALCON</h3>
                <p>Field Analytics & Live Command Operation Network</p>
              </div>
            </div>

            <p class="solution-description">
              Field Analytics & Live Command Operation Network (FALCON) is an integrated geospatial
              intelligence and command operations platform designed to enhance military situational
              awareness, operational coordination, and decision-making across land, maritime, and
              air domains.
            </p>

            <div class="feature-panel falcon-panel">
              <h4 class="red-text">Core Capabilities</h4>

              <div class="feature-list">
                <div v-for="item in falconFeatures" :key="item.title" class="feature-item red-dot">
                  <span></span>

                  <p>
                    <strong>{{ item.title }}:</strong>
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>

            <div class="falcon-slider">
              <button class="falcon-slider-btn prev" @click="prevFalconSlide">‹</button>
              <div class="falcon-slider-window">
                <div
                  class="falcon-slider-track"
                  :style="{ transform: `translateX(-${activeFalconSlide * 100}%)` }"
                >
                  <div v-for="slide in falconSlides" :key="slide.title" class="falcon-slide">
                    <img :src="slide.image" :alt="slide.title" />

                    <div class="falcon-module-content">
                      <h4>{{ slide.title }}</h4>
                      <p>{{ slide.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button class="falcon-slider-btn next" @click="nextFalconSlide">›</button>
              <div class="slider-dots">
                <button
                  v-for="(slide, index) in falconSlides"
                  :key="slide.title"
                  type="button"
                  :class="{ active: activeFalconSlide === index }"
                  @click="activeFalconSlide = index"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Shield, Eye, Radio, Activity, AlertTriangle, TrendingUp, Crosshair } from 'lucide-vue-next'

// import falconDrawGif from '@/assets/falcon-draw.gif'
import falconGeofenceGif from '@/assets/falcon-geofence.gif'
import falconTrackingGif from '@/assets/falcon-truck-monitoring.gif'
import falconElevationGif from '@/assets/falcon-elevation-profile.gif'
import falconViewshedGif from '@/assets/falcon-viewshed.gif'
import heroImage from '@/assets/defence.jpg'

const applications = [
  {
    icon: Eye,
    title: 'Border Surveillance',
    description: 'Continuous monitoring of national borders and restricted areas',
    color: 'red',
  },
  {
    icon: AlertTriangle,
    title: 'Threat Detection',
    description: 'Early warning systems for potential security threats and anomalies',
    color: 'orange',
  },
  {
    icon: Shield,
    title: 'Infrastructure Protection',
    description: 'Monitor and secure critical military and civilian infrastructure',
    color: 'blue',
  },
  {
    icon: Radio,
    title: 'Maritime Domain Awareness',
    description: 'Track vessel movements and monitor territorial waters',
    color: 'cyan',
  },
  {
    icon: TrendingUp,
    title: 'Change Detection',
    description: 'Identify terrain modifications and infrastructure developments',
    color: 'purple',
  },
  {
    icon: Activity,
    title: 'Tactical Intelligence',
    description: 'Real-time situational awareness for operational planning',
    color: 'green',
  },
]

const defenceData = [
  {
    dataType: '<strong>Border Zones & Restricted Areas</strong>',
    application:
      'Define territorial boundaries, monitor border activity, and enforce access restrictions',
  },
  {
    dataType: '<strong>Military Installations & Strategic Sites</strong>',
    application: 'Map defense infrastructure, assess vulnerabilities, and plan security measures',
  },
  {
    dataType: '<strong>Terrain & Elevation Data</strong> <small>(DEM, contours, slope)</small>',
    application:
      'Analyze terrain for tactical planning, identify vantage points, and assess trafficability',
  },
  {
    dataType: '<strong>SAR Imagery</strong> <small>(all-weather surveillance)</small>',
    application: 'Enable 24/7 monitoring regardless of cloud cover or lighting conditions',
  },
  {
    dataType: '<strong>Change Detection Analysis</strong>',
    application: 'Identify new construction, troop movements, and infrastructure modifications',
  },
  {
    dataType: '<strong>AIS & Vessel Tracking Data</strong>',
    application:
      'Monitor maritime traffic, detect unauthorized vessels, and ensure territorial security',
  },
  {
    dataType: '<strong>Transportation Networks</strong> <small>(roads, railways, airports)</small>',
    application: 'Map logistics routes, monitor supply lines, and plan operational movements',
  },
  {
    dataType: '<strong>Weather & Environmental Data</strong>',
    application:
      'Support mission planning with meteorological intelligence and visibility forecasts',
  },
]
const falconFeatures = [
  {
    title: 'Live Troop, Asset & Vehicle Tracking',
    description:
      'Monitor operational units and mission-critical assets in real time across multiple domains.',
  },
  {
    title: 'ISR Management Platform',
    description:
      'Centralize surveillance feeds, reconnaissance imagery, intelligence reports, and operational records.',
  },
  {
    title: 'Battle Management System Integration',
    description:
      'Support mission planning, force coordination, tasking, and operational execution workflows.',
  },
  {
    title: 'Geofencing & Threat Alerts',
    description:
      'Generate alerts based on restricted areas, asset proximity, and operational boundaries.',
  },
  {
    title: 'Secure Command & Control',
    description:
      'Provide a secure multi-user operational environment for commanders and field personnel.',
  },
  {
    title: 'Geospatial Intelligence (GEOINT)',
    description:
      'Leverage terrain analysis, satellite imagery, and geospatial analytics for informed decisions.',
  },
]

import { ref } from 'vue'

const activeFalconSlide = ref(0)

const falconSlides = [
  {
    image: falconTrackingGif,
    title: 'Live Asset & Vehicle Tracking',
    description:
      'Monitor military vehicles and operational assets in real time across multiple domains.',
  },
  {
    image: falconGeofenceGif,
    title: 'Geofencing & Proximity Alert System',
    description:
      'Establish virtual operational zones and receive automated alerts when personnel or assets enter or exit designated areas.',
  },
  {
    image: falconElevationGif,
    title: 'Terrain & Elevation Analysis',
    description:
      'Analyze terrain elevation, slope, and topography for mission planning and mobility assessment.',
  },
  {
    image: falconViewshedGif,
    title: 'Line-of-Sight & Visibility Assessment',
    description:
      'Determine visible areas from observation points to support reconnaissance and surveillance operations.',
  },
]

function nextFalconSlide() {
  activeFalconSlide.value =
    activeFalconSlide.value === falconSlides.length - 1 ? 0 : activeFalconSlide.value + 1
}

function prevFalconSlide() {
  activeFalconSlide.value =
    activeFalconSlide.value === 0 ? falconSlides.length - 1 : activeFalconSlide.value - 1
}
</script>

<style scoped>
.defence-page {
  min-height: 100vh;
  background: #1e293b;
  color: #ffffff;
}

.defence-page h1,
.defence-page h2,
.defence-page h3,
.defence-page p {
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
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 35%, rgba(239, 68, 68, 0.16), transparent 38%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.22), rgba(127, 29, 29, 0.3)),
    linear-gradient(90deg, rgba(2, 6, 23, 0.42), rgba(2, 6, 23, 0.05));
  pointer-events: none;
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
  border-radius: 1.1rem;
  background: rgba(127, 29, 29, 0.78);
  color: #f87171;
  border: 1px solid rgba(248, 113, 113, 0.35);
  display: grid;
  place-items: center;
  box-shadow:
    0 0 24px rgba(239, 68, 68, 0.18),
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
    0 0 18px rgba(248, 113, 113, 0.25),
    0 8px 28px rgba(0, 0, 0, 0.35);
}

.hero-content p {
  max-width: 760px;
  color: #e2e8f0;
  font-size: clamp(1rem, 1.3vw, 1.18rem);
  line-height: 1.75;
  margin: 0;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
}

.content-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.section-header {
  margin-bottom: 2.5rem;
}

.section-header h2 {
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.25rem);
  margin: 0 0 0.75rem;
}

.section-header p {
  color: #cbd5e1;
  line-height: 1.65;
  margin: 0;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  margin-bottom: 4rem;
}

.application-card,
.data-table {
  background: linear-gradient(180deg, rgba(39, 46, 70, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 16px;
}

.application-card {
  padding: 1.8rem;
  transition: 0.25s ease;
}

.application-card:hover {
  transform: translateY(-6px);
  border-color: rgba(248, 113, 113, 0.55);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.28),
    0 0 24px rgba(239, 68, 68, 0.12);
}

.application-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  margin-bottom: 1.2rem;
}

.application-icon svg {
  width: 24px;
  height: 24px;
}

.application-card h3 {
  color: #ffffff;
  font-size: 1.05rem;
  margin: 0 0 0.75rem;
}

.application-card p {
  color: #cbd5e1;
  font-size: 0.88rem;
  line-height: 1.65;
  margin: 0;
}

.red {
  background: rgba(127, 29, 29, 0.6);
  color: #f87171;
}

.orange {
  background: rgba(124, 45, 18, 0.6);
  color: #fb923c;
}

.blue {
  background: rgba(30, 64, 175, 0.55);
  color: #60a5fa;
}

.cyan {
  background: rgba(22, 78, 99, 0.65);
  color: #22d3ee;
}

.purple {
  background: rgba(88, 28, 135, 0.65);
  color: #c084fc;
}

.green {
  background: rgba(20, 83, 45, 0.65);
  color: #4ade80;
}

.data-table {
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);
}

.table-header,
.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.table-header {
  background: linear-gradient(to right, #991b1b, #dc2626);
  color: #ffffff;
  font-weight: 700;
}

.table-header > div,
.table-row > div {
  padding: 1rem 1.25rem;
}

.table-header > div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.table-header svg {
  width: 18px;
  height: 18px;
}

.table-row {
  border-top: 1px solid rgba(71, 85, 105, 0.75);
  color: #cbd5e1;
  font-size: 0.86rem;
  transition: 0.2s ease;
}

.table-row:hover {
  background: rgba(30, 41, 59, 0.98);
  color: #ffffff;
}

.table-row > div:first-child,
.table-header > div:first-child {
  border-right: 1px solid rgba(71, 85, 105, 0.75);
}

.data-type :deep(small) {
  color: #94a3b8;
}

.table-footer {
  background: #020617;
  color: #f87171;
  font-size: 0.82rem;
  font-style: italic;
  padding: 1rem 1.25rem;
  border-top: 1px solid rgba(71, 85, 105, 0.75);
}

.section-header.center {
  text-align: center;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.solution-section {
  background: radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.08), transparent 38%), #0f172a;
  border-top: 1px solid rgba(71, 85, 105, 0.8);
  padding: 5rem 0;
}

.solution-card {
  overflow: hidden;
  border-radius: 18px;
  background:
    radial-gradient(circle at 8% 0%, rgba(248, 113, 113, 0.1), transparent 32%),
    linear-gradient(180deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98));
  border: 1px solid rgba(248, 113, 113, 0.18);
}

.solution-content {
  padding: 2.4rem;
}

.solution-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.35rem 1.5rem;
  border-radius: 18px;
  background: rgba(2, 6, 23, 0.28);
  border: 1px solid rgba(248, 113, 113, 0.18);
}

.solution-header h3 {
  margin: 0;
  font-size: clamp(1.9rem, 3vw, 2.5rem);
  color: #ffffff;
}

.solution-header p {
  margin: 0.35rem 0 0;
  color: #cbd5e1;
}

.solution-description {
  max-width: 850px;
  margin: 0 auto 2rem;
  color: #e2e8f0;
  line-height: 1.75;
  text-align: center;
}

.feature-panel {
  padding: 1.35rem;
  border-radius: 18px;
  background: rgba(2, 6, 23, 0.28);
  border: 1px solid rgba(148, 163, 184, 0.12);
  margin-bottom: 1.5rem;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.95rem 1.5rem;
}

.feature-item {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  color: #cbd5e1;
  font-size: 0.88rem;
  line-height: 1.6;
}

.feature-item span {
  width: 7px;
  height: 7px;
  margin-top: 0.55rem;
  border-radius: 50%;
  flex-shrink: 0;
}

.feature-item p {
  margin: 0;
}

.feature-item strong {
  color: #ffffff;
}

.red-dot span {
  background: #f87171;
  box-shadow: 0 0 12px rgba(248, 113, 113, 0.55);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.chips span {
  background: rgba(30, 41, 59, 0.96);
  border: 1px solid rgba(248, 113, 113, 0.22);
  color: #cbd5e1;
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-size: 0.82rem;
}

.falcon-showcase {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.falcon-module {
  overflow: hidden;

  border-radius: 20px;

  background: rgba(15, 23, 42, 0.78);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(248, 113, 113, 0.12);

  transition: all 0.3s ease;
}

.falcon-module:hover {
  transform: translateY(-4px);

  border-color: rgba(248, 113, 113, 0.35);

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.25),
    0 0 24px rgba(248, 113, 113, 0.08);
}

.falcon-module img {
  width: 100%;
  display: block;

  min-height: 420px;
  max-height: 520px;

  object-fit: contain;

  background: #020617;

  border-bottom: 1px solid rgba(248, 113, 113, 0.1);
}

.falcon-module-content {
  padding: 1.75rem 2rem;
}

.falcon-module-content h4 {
  margin: 0 0 0.85rem;

  color: #f87171;

  font-size: 1.35rem;
  font-weight: 700;
}

.falcon-module-content p {
  margin: 0;

  color: #cbd5e1;

  line-height: 1.8;

  font-size: 0.95rem;
}

.falcon-module-content h4 {
  margin: 0 0 0.75rem;

  color: #f87171;

  font-size: 1.1rem;
}

.falcon-module-content p {
  color: #cbd5e1;

  line-height: 1.7;

  margin: 0;
}

.falcon-slider {
  position: relative;
  margin-top: 2rem;
}

.falcon-slider-window {
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid rgba(248, 113, 113, 0.16);
  background: rgba(15, 23, 42, 0.78);
}

.falcon-slider-track {
  display: flex;
  transition: transform 0.45s ease;
}

.falcon-slide {
  min-width: 100%;
}

.falcon-slide img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  background: #020617;
  border-bottom: 1px solid rgba(248, 113, 113, 0.12);
}

.falcon-module-content {
  padding: 1.75rem 2rem;
}

.falcon-module-content h4 {
  margin: 0 0 0.85rem;
  color: #f87171;
  font-size: 1.35rem;
}

.falcon-module-content p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.8;
}

.falcon-slider-btn:hover {
  background: rgba(30, 41, 59, 0.95);
  border-color: rgba(248, 113, 113, 0.6);
  box-shadow: 0 0 20px rgba(248, 113, 113, 0.2);
}

.falcon-slider-btn {
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  z-index: 20;

  width: 48px;
  height: 48px;

  border-radius: 999px;
  border: 1px solid rgba(248, 113, 113, 0.35);

  background: rgba(15, 23, 42, 0.9);
  color: #f87171;

  font-size: 2rem;
  line-height: 1;

  cursor: pointer;
}

.falcon-slider-btn.prev {
  left: -24px;
}

.falcon-slider-btn.next {
  right: -24px;
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.slider-dots button {
  width: 12px;
  height: 12px;

  border: none;
  border-radius: 999px;

  background: rgba(148, 163, 184, 0.35);

  transition: all 0.3s ease;
}

.slider-dots button.active {
  width: 42px;

  background: linear-gradient(90deg, #f87171, #ef4444);

  box-shadow: 0 0 16px rgba(248, 113, 113, 0.45);
}

@media (max-width: 900px) {
  .application-grid,
  .table-header,
  .table-row {
    grid-template-columns: 1fr;
  }

  .page-hero {
    min-height: 360px;
  }

  .hero-title-row {
    flex-direction: column;
    align-items: flex-start;
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

  .table-row > div:first-child,
  .table-header > div:first-child {
    border-right: 0;
    border-bottom: 1px solid rgba(71, 85, 105, 0.75);
  }

  .feature-list {
    grid-template-columns: 1fr;
  }

  .solution-content {
    padding: 1.5rem;
  }

  .solution-description {
    text-align: left;
  }

  .falcon-module {
    grid-template-columns: 1fr;
  }

  .falcon-module img {
    height: auto;
  }

  .falcon-module img {
    min-height: 260px;
    max-height: 320px;
  }

  .falcon-module-content {
    padding: 1.25rem;
  }
  .slider-btn {
    display: none;
  }

  .falcon-module-content {
    padding: 1.25rem;
  }
}
</style>
