<template>
  <main class="disaster-page">
    <!-- Hero -->
    <section
      class="page-hero"
      :style="{
        backgroundImage: `linear-gradient(rgba(15,23,42,.85), rgba(80,40,0,.85)), url(${heroImage})`,
      }"
    >
      <div class="page-container hero-content">
        <div class="hero-title-row">
          <div class="hero-icon">
            <CloudRain />
          </div>
          <h1>Natural Disaster Management</h1>
        </div>

        <p>
          Satellite observation provides critical data for disaster preparedness, response, and
          recovery, enabling rapid assessment and coordinated relief efforts for communities at
          risk.
        </p>
      </div>
    </section>

    <!-- Key Applications -->
    <section class="page-container content-section">
      <div class="section-header">
        <h2>Key Applications</h2>
        <p>
          Leveraging satellite technology for comprehensive disaster monitoring and emergency
          response
        </p>
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
        <h2>Available Disaster Management Data & Applications</h2>
        <p>
          Explore the comprehensive data types we provide and their real-world applications in
          disaster management
        </p>
      </div>

      <div class="data-table">
        <div class="table-header">
          <div><MapIcon /> <span>Data Type</span></div>
          <div><Activity /> <span>Real-World Application</span></div>
        </div>

        <div v-for="row in disasterData" :key="row.dataType" class="table-row">
          <div class="data-type" v-html="row.dataType"></div>
          <div>{{ row.application }}</div>
        </div>

        <div class="table-footer">
          * For data not listed here, please contact our team to discuss availability and custom
          solutions.
        </div>
      </div>
    </section>

    <!-- BRAVE Solution -->
    <section class="solution-section">
      <div class="page-container">
        <div class="section-header center">
          <h2>Natural Disaster Solutions</h2>
          <p>
            Advanced platforms built on OBSERVE™ for comprehensive disaster monitoring and emergency
            response
          </p>
        </div>

        <div class="solution-card vertical-card brave-card">
          <div class="brave-slider">
            <button class="brave-slider-btn prev" type="button" @click="prevBraveSlide">‹</button>

            <div class="brave-slider-window">
              <div
                class="brave-slider-track"
                :style="{ transform: `translateX(-${activeBraveSlide * 100}%)` }"
              >
                <div v-for="slide in braveSlides" :key="slide.title" class="brave-slide">
                  <img :src="slide.image" :alt="slide.title" />
                </div>
              </div>
            </div>

            <button class="brave-slider-btn next" type="button" @click="nextBraveSlide">›</button>

            <div class="brave-slider-dots">
              <button
                v-for="(slide, index) in braveSlides"
                :key="slide.title"
                type="button"
                :class="{ active: activeBraveSlide === index }"
                @click="activeBraveSlide = index"
              ></button>
            </div>
          </div>

          <div class="solution-content premium-content brave-content">
            <div class="solution-header brave-header">
              <div class="solution-icon orange">
                <Flame />
              </div>

              <div>
                <h3>BRAVE</h3>
                <p>Brunei Response & Action for Vital Emergencies</p>
              </div>
            </div>

            <p class="solution-description">
              BRAVE is a centralized emergency management platform designed to support disaster
              preparedness, monitoring, response, and recovery operations. The platform combines
              GIS-powered situational awareness, real-time incident tracking, alert management,
              operational coordination, and resource deployment tools into a unified command
              environment for emergency responders and decision-makers.
            </p>

            <div class="feature-panel brave-panel">
              <h4 class="orange-text">Key Features</h4>

              <div class="feature-list">
                <div
                  v-for="item in braveFeatures"
                  :key="item.title"
                  class="feature-item orange-dot"
                >
                  <span></span>
                  <p>
                    <strong>{{ item.title }}:</strong>
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import {
  CloudRain,
  Flame,
  Wind,
  AlertTriangle,
  Map as MapIcon,
  Activity,
  Radio,
  Bell,
} from 'lucide-vue-next'

import { ref } from 'vue'

import braveScreenshot from '@/assets/image.png'
import brave1 from '@/assets/Brave1.png'
import brave2 from '@/assets/Brave2.png'
import brave3 from '@/assets/Brave3.png'

const heroImage =
  'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1600&q=80'

const applications = [
  {
    icon: CloudRain,
    title: 'Flood Mapping',
    description: 'Real-time flood extent mapping and inundation monitoring',
    color: 'blue',
  },
  {
    icon: AlertTriangle,
    title: 'Earthquake Assessment',
    description: 'Rapid damage assessment and infrastructure impact analysis',
    color: 'red',
  },
  {
    icon: Flame,
    title: 'Wildfire Detection',
    description: 'Early fire detection, spread tracking, and burn area analysis',
    color: 'orange',
  },
  {
    icon: Wind,
    title: 'Hurricane Monitoring',
    description: 'Track storm paths, intensity, and predict landfall impacts',
    color: 'cyan',
  },
  {
    icon: Radio,
    title: 'Emergency Coordination',
    description: 'Support relief operations with real-time situational awareness',
    color: 'green',
  },
  {
    icon: Activity,
    title: 'Recovery Monitoring',
    description: 'Track reconstruction progress and long-term recovery efforts',
    color: 'purple',
  },
]

const disasterData = [
  {
    dataType: '<strong>Flood Risk Zones & Inundation Models</strong>',
    application: 'Map flood-prone areas, predict extent, and prioritize evacuation zones',
  },
  {
    dataType: '<strong>Elevation & Topography Data</strong> <small>(DEM, contours)</small>',
    application: 'Assess landslide risk, model water flow, and identify safe zones',
  },
  {
    dataType:
      '<strong>Critical Infrastructure</strong> <small>(hospitals, shelters, utilities)</small>',
    application: 'Map essential facilities, assess accessibility, and coordinate relief logistics',
  },
  {
    dataType: '<strong>Evacuation Routes & Road Networks</strong>',
    application: 'Identify safe egress paths, monitor road conditions, and plan emergency access',
  },
  {
    dataType:
      '<strong>Weather & Climate Data</strong> <small>(rainfall, wind speed, temperature)</small>',
    application: 'Forecast storm intensity, predict disaster onset, and issue early warnings',
  },
  {
    dataType: '<strong>Historical Disaster Data</strong>',
    application: 'Analyze past events, identify patterns, and improve preparedness planning',
  },
  {
    dataType: '<strong>Population Density & Demographics</strong>',
    application:
      'Estimate affected populations, target relief distribution, and assess vulnerability',
  },
  {
    dataType: '<strong>SAR Imagery</strong> <small>(all-weather monitoring)</small>',
    application: 'Monitor disaster zones during storms, detect changes through cloud cover',
  },
]

const braveFeatures = [
  {
    title: 'GIS-Integrated Live Mapping',
    description: 'Real-time visualization of incidents across Brunei with interactive mapping',
  },
  {
    title: 'Real-Time Monitoring & Alerts',
    description:
      'IoT sensors collect environmental data and trigger automated alerts to authorities',
  },
  {
    title: 'Incident Registration & Dispatch',
    description: 'Streamlined incident reporting and emergency response coordination',
  },
  {
    title: 'IoT Sensor Integration',
    description: 'Environmental data transmitted securely from sensors placed throughout Brunei',
  },
  {
    title: 'Public Dashboard',
    description: 'Accessible interface for public awareness and community engagement',
  },
]

const activeBraveSlide = ref(0)

const braveSlides = [
  {
    image: brave1,
    title: 'BRAVE Command Dashboard',
  },
  {
    image: brave2,
    title: 'Live Incident Monitoring',
  },
  {
    image: brave3,
    title: 'Emergency Response Coordination',
  },
]

function nextBraveSlide() {
  activeBraveSlide.value =
    activeBraveSlide.value === braveSlides.length - 1 ? 0 : activeBraveSlide.value + 1
}

function prevBraveSlide() {
  activeBraveSlide.value =
    activeBraveSlide.value === 0 ? braveSlides.length - 1 : activeBraveSlide.value - 1
}
</script>

<style scoped>
.disaster-page {
  min-height: 100vh;
  background: #1e293b;
  color: #ffffff;
}

.disaster-page h1,
.disaster-page h2,
.disaster-page h3,
.disaster-page h4,
.disaster-page p {
  color: inherit;
}

.page-container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 1rem;
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
    radial-gradient(circle at 18% 35%, rgba(249, 115, 22, 0.16), transparent 38%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.22), rgba(124, 45, 18, 0.3)),
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
  padding: 5rem 1rem;
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
  background: rgba(124, 45, 18, 0.78);
  color: #fb923c;
  border: 1px solid rgba(251, 146, 60, 0.35);
  display: grid;
  place-items: center;
  box-shadow:
    0 0 24px rgba(249, 115, 22, 0.18),
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
    0 0 18px rgba(251, 146, 60, 0.25),
    0 8px 28px rgba(0, 0, 0, 0.35);
}

.hero-content p {
  color: #e2e8f0;
  max-width: 760px;
  line-height: 1.75;
  font-size: clamp(1rem, 1.3vw, 1.18rem);
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

.section-header.center {
  text-align: center;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.section-header h2 {
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.25rem);
  margin: 0 0 0.75rem;
}

.section-header p {
  color: #cbd5e1;
  line-height: 1.65;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  margin-bottom: 4rem;
}

.application-card,
.data-table,
.solution-card {
  background: linear-gradient(180deg, rgba(39, 46, 70, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 16px;
}

.application-card {
  padding: 1.8rem;
  transition: 0.25s ease;
}

.application-card:hover,
.solution-card:hover {
  transform: translateY(-6px);
  border-color: rgba(251, 146, 60, 0.35);
  box-shadow:
    0 24px 50px rgba(0, 0, 0, 0.32),
    0 0 28px rgba(249, 115, 22, 0.14);
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

.blue {
  background: rgba(30, 64, 175, 0.55);
  color: #60a5fa;
}

.red {
  background: rgba(127, 29, 29, 0.6);
  color: #f87171;
}

.orange {
  background: rgba(124, 45, 18, 0.6);
  color: #fb923c;
}

.cyan {
  background: rgba(22, 78, 99, 0.65);
  color: #22d3ee;
}

.green {
  background: rgba(20, 83, 45, 0.65);
  color: #4ade80;
}

.purple {
  background: rgba(88, 28, 135, 0.65);
  color: #c084fc;
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
  background: linear-gradient(to right, #c2410c, #f97316);
  color: #ffffff;
  font-weight: 700;
}

.table-header > div,
.table-row > div {
  padding: 1rem 1.25rem;
}

.table-header > div {
  display: flex;
  gap: 0.5rem;
  align-items: center;
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
  color: #fb923c;
  font-size: 0.82rem;
  font-style: italic;
  padding: 1rem 1.25rem;
  border-top: 1px solid rgba(71, 85, 105, 0.75);
}

.solution-section {
  background: radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.08), transparent 38%), #0f172a;
  border-top: 1px solid rgba(71, 85, 105, 0.8);
  padding: 5rem 0;
}

.solution-section .page-container {
  max-width: 980px;
}

.solution-card {
  overflow: hidden;
  transition: 0.25s ease;
  border-radius: 18px;
  background:
    radial-gradient(circle at 8% 0%, rgba(251, 146, 60, 0.1), transparent 32%),
    linear-gradient(180deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98));
  border: 1px solid rgba(251, 146, 60, 0.18);
}
.premium-content {
  background:
    radial-gradient(circle at 8% 0%, rgba(251, 146, 60, 0.1), transparent 32%),
    linear-gradient(180deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98));
}
.solution-content {
  padding: 2.4rem;
}
.solution-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 980px;
  margin: 0 auto 1.75rem;
  padding: 1.35rem 1.5rem;
  border-radius: 18px;
  background: rgba(2, 6, 23, 0.28);
  border: 1px solid rgba(251, 146, 60, 0.18);
}

.solution-header h3 {
  margin: 0;
  font-size: clamp(1.9rem, 3vw, 2.5rem);
  color: #ffffff;
  line-height: 1;
  letter-spacing: -0.03em;
}

.solution-header p {
  margin: 0.4rem 0 0;
  color: #cbd5e1;
  line-height: 1.45;
  font-size: 1rem;
}

.solution-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  box-shadow: 0 0 18px rgba(249, 115, 22, 0.18);
}

.solution-icon svg {
  width: 26px;
  height: 26px;
}

.solution-description {
  max-width: 880px;
  margin: 0 auto 2rem;
  color: #e2e8f0;
  line-height: 1.75;
  text-align: center;
}
.solution-title {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.solution-title h3 {
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.15rem);
  margin: 0;
}

.solution-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  box-shadow: 0 0 18px rgba(249, 115, 22, 0.18);
}

.solution-icon svg {
  width: 24px;
  height: 24px;
}

.solution-subtitle {
  color: #94a3b8;
  margin: 1rem 0 0.75rem;
}

.solution-description,
.feature-item p {
  color: #cbd5e1;
  line-height: 1.7;
}

.solution-content h4,
.target-market h4 {
  color: #fb923c;
}

.feature-list {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.feature-item {
  display: flex;
  gap: 0.65rem;
  align-items: flex-start;
}

.feature-item .dot {
  width: 6px;
  height: 6px;
  background: #fb923c;
  border-radius: 50%;
  margin-top: 0.6rem;
  flex-shrink: 0;
}

.feature-item p {
  margin: 0;
  font-size: 0.88rem;
}

.feature-item strong {
  color: #ffffff;
}

.target-market h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.target-market h4 svg {
  width: 18px;
  height: 18px;
}

.feature-panel {
  max-width: 980px;
  margin: 0 auto 1.5rem;
  padding: 1.35rem;
  border-radius: 18px;
  background: rgba(2, 6, 23, 0.28);
  border: 1px solid rgba(251, 146, 60, 0.18);
}

.feature-panel h4 {
  margin: 0 0 1rem;
}

.orange-text {
  color: #fb923c;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.95rem 1.5rem;
  margin-bottom: 0;
}

.feature-item {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  color: #cbd5e1;
  font-size: 0.88rem;
  line-height: 1.6;
}

.feature-item span:first-child {
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

.orange-dot span:first-child {
  background: #fb923c;
  box-shadow: 0 0 12px rgba(251, 146, 60, 0.5);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.chips span {
  background: rgba(30, 41, 59, 0.96);
  border: 1px solid rgba(251, 146, 60, 0.22);
  color: #cbd5e1;
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-size: 0.82rem;
  transition: 0.2s ease;
}

.chips span:hover {
  border-color: rgba(251, 146, 60, 0.55);
  color: #ffffff;
}

.solution-image {
  background: #020617;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.solution-image img {
  width: 100%;
  border-radius: 12px;
  display: block;
  border: 1px solid rgba(71, 85, 105, 0.8);
}

.vertical-card {
  display: flex;
  flex-direction: column;
}

.hero-image {
  position: relative;
  padding: 1.5rem;
  background: #020617;
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.hero-image::before {
  content: '';
  position: absolute;
  inset: 30% 15%;
  background: rgba(251, 146, 60, 0.14);
  filter: blur(80px);
  z-index: 0;
}

.hero-image img {
  position: relative;
  z-index: 1;
  width: 92%;
  height: auto;
  margin: 0 auto;
  display: block;
  object-fit: contain;
  border-radius: 14px;
  border: 1px solid rgba(71, 85, 105, 0.65);
  background: #020617;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.35),
    0 0 30px rgba(251, 146, 60, 0.06);
}

.brave-slider {
  position: relative;
  padding: 1.5rem;
  background: #020617;
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.brave-slider-window {
  overflow: hidden;
  border-radius: 20px;

  background: radial-gradient(circle at center, rgba(30, 41, 59, 0.6), #020617);
}

.brave-slider-track {
  display: flex;
  transition: transform 0.45s ease;
}

.brave-slide {
  min-width: 100%;
  background: #020617;
  display: flex;
  justify-content: center;
  align-items: center;
}

.brave-slide img {
  width: 92%;
  height: auto;
  margin: 0 auto;
  display: block;
  object-fit: contain;
}

.brave-slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;

  width: 48px;
  height: 48px;

  border-radius: 999px;
  border: 1px solid rgba(251, 146, 60, 0.35);

  background: rgba(15, 23, 42, 0.9);
  color: #fb923c;

  font-size: 2rem;
  line-height: 1;

  cursor: pointer;
}

.brave-slider-btn.prev {
  left: 0.75rem;
}

.brave-slider-btn.next {
  right: 0.75rem;
}

.brave-slider-dots {
  display: flex;
  justify-content: center;
  gap: 0.55rem;
  margin-top: 1rem;
}

.brave-slider-dots button {
  width: 26px;
  height: 5px;

  border: none;
  border-radius: 999px;

  background: rgba(148, 163, 184, 0.35);

  cursor: pointer;
  transition: 0.25s ease;
}

.brave-slider-dots button.active {
  width: 42px;
  background: #fb923c;
  box-shadow: 0 0 14px rgba(251, 146, 60, 0.5);
}

@media (max-width: 900px) {
  .application-grid,
  .table-header,
  .table-row,
  .solution-card {
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

  .feature-list {
    grid-template-columns: 1fr;
  }

  .solution-content {
    padding: 1.5rem;
  }

  .solution-description {
    text-align: left;
  }

  .solution-header {
    align-items: flex-start;
  }

  .hero-image img {
    width: 100%;
  }
  .table-row > div:first-child,
  .table-header > div:first-child {
    border-right: 0;
    border-bottom: 1px solid rgba(71, 85, 105, 0.75);
  }

  .brave-slide img {
    width: 100%;
  }

  .brave-slider-btn {
    display: none;
  }
}
</style>
