<template>
  <main class="maritime-page">
    <section
      class="page-hero"
      :style="{
        backgroundImage: `linear-gradient(rgba(15,23,42,.8), rgba(6,78,112,.85)), url(${heroImage})`,
      }"
    >
      <div class="page-container hero-content">
        <div class="hero-title-row">
          <div class="hero-icon">
            <Anchor />
          </div>
          <h1>Maritime</h1>
        </div>

        <p>
          Comprehensive maritime surveillance and intelligence through satellite observation,
          supporting navigation safety, resource management, security operations, and environmental
          protection across maritime domains.
        </p>
      </div>
    </section>

    <section class="page-container content-section">
      <div class="section-header">
        <h2>Available Maritime Data & Applications</h2>
        <p>
          Explore the comprehensive data types we provide and their real-world applications in
          maritime operations
        </p>
      </div>

      <div class="data-table">
        <div class="table-header">
          <div><Database /> <span>Data Type</span></div>
          <div><CheckCircle2 /> <span>Real-World Application</span></div>
        </div>

        <div v-for="item in dataTypes" :key="item.name" class="table-row">
          <div>
            <strong>{{ item.name }}</strong>
            <small v-if="item.detail"> {{ item.detail }}</small>
          </div>
          <div>{{ item.useCase }}</div>
        </div>

        <div class="table-footer">
          * For data not listed here, please contact our team to discuss availability and custom
          solutions.
        </div>
      </div>
    </section>

    <section class="solution-section">
      <div class="page-container">
        <div class="section-header center">
          <h2>Our Maritime Solutions</h2>
          <p>
            Proven platforms built on OBSERVE™ delivering actionable intelligence for maritime
            authorities
          </p>
        </div>

        <!-- MDA -->
        <div class="solution-card vertical-card maritime-card">
          <div class="solution-image hero-image">
            <img :src="mdaScreenshot" alt="Maritime Domain Awareness Platform" />
          </div>

          <div class="solution-content premium-content mda-content">
            <div class="solution-header mda-header">
              <div class="solution-icon cyan">
                <Ship />
              </div>

              <div>
                <h3>Maritime Domain Awareness (MDA)</h3>
                <p>Integrated Maritime Situational Awareness Platform</p>
              </div>
            </div>

            <p class="solution-description">
              Designed to provide comprehensive visibility and intelligence across the maritime
              environment. Integrates multiple data sources including vessel tracking, satellite
              imagery and sensor data to deliver near real-time situational awareness.
            </p>

            <ChipList color="cyan" :items="mdaMarkets" />
          </div>
        </div>

        <!-- MDA-IUU -->
        <div class="solution-card vertical-card maritime-card">
          <div class="solution-image hero-image multi-image-hero">
            <img :src="mdaIuuScreenshot1" alt="MDA-IUU Main View" />

            <div class="two-grid small">
              <img :src="mdaIuuScreenshot2" alt="MDA-IUU Feature 1" />
              <img :src="mdaIuuScreenshot3" alt="MDA-IUU Feature 2" />
            </div>
          </div>

          <div class="solution-content premium-content iuu-content">
            <div class="solution-header iuu-header">
              <div class="solution-icon red">
                <Shield />
              </div>

              <div>
                <h3>MDA-IUU Monitoring Platform</h3>
                <p>Illegal, Unreported & Unregulated Fishing Detection</p>
              </div>
            </div>

            <p class="solution-description">
              Detects and analyzes illegal, unreported, and unregulated fishing activities by
              correlating vessel movement patterns and anomalies across multiple maritime data
              sources.
            </p>

            <ChipList color="red" :items="mdaMarkets" />
          </div>
        </div>

        <!-- SAFER -->
        <div class="solution-card vertical-card maritime-card">
          <div class="solution-image hero-image">
            <img :src="saferGif" alt="SAFER" />
          </div>

          <div class="solution-content premium-content safer-content">
            <div class="solution-header safer-header">
              <div class="solution-icon green">
                <Activity />
              </div>

              <div>
                <h3>SAFER</h3>
                <p>Environmental Event Detection & Response Platform</p>
              </div>
            </div>

            <p class="solution-description">
              Monitors and detects air, land, and marine events by integrating satellite imagery,
              sensor data, and environmental indicators to identify anomalies such as oil spills or
              water/air quality changes.
            </p>

            <ChipList color="green" :items="saferMarkets" />
          </div>
        </div>

        <!-- Core Features -->
        <div class="core-section">
          <h3>OBSERVE™ Maritime Surveillance Core Features</h3>

          <div class="core-visual" ref="coreVisualRef">
            <!-- Desktop diagram -->
            <svg class="core-connections">
              <line
                v-for="feature in coreFeatures"
                :key="feature.title"
                :x1="centerPoint.x"
                :y1="centerPoint.y"
                :x2="feature.x + 100"
                :y2="feature.y + 64"
              />
            </svg>

            <div
              class="core-center"
              :style="{ left: centerPoint.x + 'px', top: centerPoint.y + 'px' }"
            >
              <Ship />
              <strong>OBSERVE™</strong>
              <span>Maritime Surveillance</span>
            </div>

            <button
              v-for="feature in coreFeatures"
              :key="feature.title"
              class="core-feature"
              :class="{ active: activeFeature.title === feature.title }"
              :style="{ left: feature.x + 'px', top: feature.y + 'px' }"
              @click="activeFeature = feature"
              @pointerdown="startDrag($event, feature)"
            >
              <div class="feature-icon">
                <component :is="feature.icon" />
              </div>

              <strong>{{ feature.title }}</strong>
              <span>{{ feature.text }}</span>
            </button>

            <!-- Mobile diagram -->
            <div class="mobile-core-map">
              <button
                v-for="feature in coreFeatures"
                :key="feature.title"
                class="mobile-core-dot"
                :class="{ active: activeFeature.title === feature.title }"
                @click="activeFeature = feature"
              >
                <component :is="feature.icon" />
              </button>

              <div class="mobile-core-center">
                <Ship />
                <strong>OBSERVE™</strong>
                <span>Maritime Surveillance</span>
              </div>
            </div>
          </div>

          <div class="core-detail">
            <strong>{{ activeFeature.title }}</strong>
            <p>{{ activeFeature.detail }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import {
  Anchor,
  Ship,
  Activity,
  Shield,
  Database,
  CheckCircle2,
  Radio,
  LayoutDashboard,
  Waves,
  MapPin,
  History,
  AnchorIcon,
  CircleCheck,
} from 'lucide-vue-next'

import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import mdaScreenshot from '@/assets/Screenshot_2026-05-24_at_5.13.19_PM-1.png'
import mdaIuuScreenshot1 from '@/assets/Screenshot_2026-05-24_at_5.13.34_PM-2.png'
import mdaIuuScreenshot2 from '@/assets/Screenshot_2026-05-24_at_5.13.34_PM_copy.png'
import mdaIuuScreenshot3 from '@/assets/Screenshot_2026-05-24_at_5.13.34_PM_copy_2.png'
import saferGif from '@/assets/SAFER_Short_Demo.gif'
import mdaCoreFeatures from '@/assets/Screenshot_2026-05-24_at_5.14.09_PM.png'
import vesselIntelligence from '@/assets/Screenshot_2026-05-24_at_5.13.41_PM-1.png'
import portIntelligence from '@/assets/Screenshot_2026-05-24_at_5.13.48_PM-1.png'

const coreVisualRef = ref(null)

const centerPoint = ref({
  x: 0,
  y: 0,
})

const heroImage =
  'https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3?auto=format&fit=crop&w=1600&q=80'

const dataTypes = [
  {
    name: 'Administrative Boundary',
    detail: ' (National, District, Mukim, Region, etc.)',
    useCase: 'Define jurisdiction zones for maritime patrol and enforcement operations',
  },
  {
    name: 'Ports & Jetties',
    detail: '',
    useCase: 'Monitor port traffic, capacity utilization, and vessel movements',
  },
  {
    name: 'Waterways & Waterbodies',
    detail: '',
    useCase: 'Track navigable routes and identify restricted or hazardous areas',
  },
  {
    name: 'AIS / ADS-B',
    detail: '',
    useCase: 'Real-time vessel tracking and identification for situational awareness',
  },
  {
    name: 'Hydrographic Data',
    detail: ' (Water level, salinity, temperature, current, tidal, etc.)',
    useCase: 'Support safe navigation and environmental monitoring',
  },
  {
    name: 'DEM / Bathymetry / Contour',
    detail: '',
    useCase: 'Analyze seabed topography for port planning and underwater operations',
  },
  {
    name: 'Demographic Data*',
    detail: '',
    useCase: 'Assess coastal population impacts and resource planning',
  },
  {
    name: 'Major POIs',
    detail: ' (industrial area, treatment plants, landfill, etc.)',
    useCase: 'Identify critical infrastructure and potential environmental concerns',
  },
]

const mdaMarkets = ['Maritime & Port Authority', 'Navy & Marine Police', 'Department of Fisheries']
const saferMarkets = ['Maritime & Port Authority', 'Oil & Gas Industry', 'Transport & Logistics']

const coreFeatures = ref([
  {
    title: 'Real-time Tracking',
    text: 'Continuous monitoring of vessels using AIS and radar',
    detail: 'Continuous monitoring of vessels using AIS and radar',
    icon: Activity,
    x: 365,
    y: 55,
  },
  {
    title: 'Interactive Dashboard',
    text: 'A user-friendly interface for data visualization',
    detail: 'A user-friendly interface for data visualization',
    icon: LayoutDashboard,
    x: 640,
    y: 90,
  },
  {
    title: 'Suspicious Activity Detection',
    text: 'Identifying unusual vessel behavior',
    detail: 'Identifying unusual vessel behavior',
    icon: Shield,
    x: 675,
    y: 250,
  },
  {
    title: 'Data Integration',
    text: 'Combining data from various sources',
    detail: 'Combining data from various sources',
    icon: Database,
    x: 640,
    y: 430,
  },
  {
    title: 'Historical Playback',
    text: 'Reviewing past vessel movements',
    detail: 'Reviewing past vessel movements',
    icon: History,
    x: 365,
    y: 470,
  },
  {
    title: 'Geofencing',
    text: 'Setting up virtual boundaries for alerts',
    detail: 'Setting up virtual boundaries for alerts',
    icon: MapPin,
    x: 95,
    y: 430,
  },
  {
    title: 'Centralized View',
    text: 'A single platform for all maritime data',
    detail: 'A single platform for all maritime data',
    icon: AnchorIcon,
    x: 70,
    y: 250,
  },
  {
    title: 'Scalable Deployment',
    text: 'Adaptable system to different needs',
    detail: 'Adaptable system to different needs',
    icon: CircleCheck,
    x: 95,
    y: 90,
  },
])

const activeFeature = ref(coreFeatures.value[0])

let draggingFeature = null
let offsetX = 0
let offsetY = 0

function updateCenterPoint() {
  const box = coreVisualRef.value?.getBoundingClientRect()
  if (!box) return

  centerPoint.value = {
    x: box.width / 2,
    y: box.height / 2,
  }
}

function startDrag(event, feature) {
  draggingFeature = feature

  const box = coreVisualRef.value.getBoundingClientRect()

  offsetX = event.clientX - box.left - feature.x
  offsetY = event.clientY - box.top - feature.y

  window.addEventListener('pointermove', onDrag)
  window.addEventListener('pointerup', stopDrag)
}

function onDrag(event) {
  if (!draggingFeature || !coreVisualRef.value) return

  const box = coreVisualRef.value.getBoundingClientRect()

  const cardWidth = 200
  const cardHeight = 128

  draggingFeature.x = Math.max(
    12,
    Math.min(event.clientX - box.left - offsetX, box.width - cardWidth - 12),
  )
  draggingFeature.y = Math.max(
    12,
    Math.min(event.clientY - box.top - offsetY, box.height - cardHeight - 12),
  )
}

function stopDrag() {
  draggingFeature = null
  window.removeEventListener('pointermove', onDrag)
  window.removeEventListener('pointerup', stopDrag)
}

onMounted(() => {
  nextTick(updateCenterPoint)
  window.addEventListener('resize', updateCenterPoint)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCenterPoint)
  window.removeEventListener('pointermove', onDrag)
  window.removeEventListener('pointerup', stopDrag)
})
</script>

<style scoped>
.maritime-page {
  min-height: 100vh;
  background: #1e293b;
  color: #ffffff;
}

.maritime-page h1,
.maritime-page h2,
.maritime-page h3,
.maritime-page h4,
.maritime-page p {
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
    radial-gradient(circle at 18% 35%, rgba(34, 211, 238, 0.16), transparent 38%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.22), rgba(14, 116, 144, 0.3)),
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
  background: rgba(14, 116, 144, 0.78);
  color: #22d3ee;
  border: 1px solid rgba(34, 211, 238, 0.35);
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
    0 0 18px rgba(34, 211, 238, 0.25),
    0 8px 28px rgba(0, 0, 0, 0.35);
}

.hero-content p {
  max-width: 760px;
  color: #e2e8f0;
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

.data-table {
  background: linear-gradient(180deg, rgba(39, 46, 70, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);
}

.table-header,
.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.table-header {
  background: linear-gradient(to right, #0e7490, #06b6d4);
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

.table-row small {
  color: #94a3b8;
}

.table-row > div:first-child,
.table-header > div:first-child {
  border-right: 1px solid rgba(71, 85, 105, 0.75);
}

.table-footer {
  background: #020617;
  color: #22d3ee;
  font-size: 0.82rem;
  font-style: italic;
  padding: 1rem 1.25rem;
  border-top: 1px solid rgba(71, 85, 105, 0.75);
}

.solution-section {
  background: radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.08), transparent 38%), #0f172a;
  border-top: 1px solid rgba(71, 85, 105, 0.8);
  padding: 5rem 0;
}

.solution-card,
.image-card,
.core-section img {
  background: linear-gradient(180deg, rgba(39, 46, 70, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 16px;
}

.solution-card,
.image-card {
  overflow: hidden;
  margin-bottom: 3rem;
  transition: 0.25s ease;
}

.solution-card:hover,
.image-card:hover {
  transform: translateY(-6px);
  border-color: rgba(34, 211, 238, 0.55);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.28),
    0 0 24px rgba(34, 211, 238, 0.12);
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.solution-card img,
.image-card img,
.image-stack img,
.core-section img {
  width: 100%;
  display: block;
  object-fit: contain;
  background: #020617;
}

.solution-content {
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.solution-title {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.solution-title h3 {
  color: #ffffff;
  font-size: clamp(1.5rem, 2.5vw, 1.9rem);
  margin: 0;
}

.solution-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.18);
}

.solution-icon svg {
  width: 24px;
  height: 24px;
}

.solution-content p,
.image-card p {
  color: #cbd5e1;
  line-height: 1.7;
}

.cyan {
  background: rgba(22, 78, 99, 0.65);
  color: #22d3ee;
}

.red {
  background: rgba(127, 29, 29, 0.6);
  color: #f87171;
}

.green {
  background: rgba(20, 83, 45, 0.65);
  color: #4ade80;
}

.two-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.two-grid.small {
  gap: 1rem;
  margin-top: 1rem;
}

.image-card div {
  padding: 1.5rem;
}

.image-card h4 {
  color: #ffffff;
  margin: 0 0 0.75rem;
}

.image-stack {
  background: #020617;
  padding: 1rem;
}

.image-stack img,
.image-card img {
  border-bottom: 1px solid rgba(71, 85, 105, 0.8);
}

.core-section {
  margin-top: 4rem;
  text-align: center;
}

.core-section h3 {
  color: #ffffff;
  font-size: clamp(1.5rem, 2.5vw, 1.9rem);
  margin-bottom: 1.5rem;
}

.core-section img {
  padding: 1rem;
}

.core-visual {
  position: relative;
  height: 680px;
  margin-top: 2rem;
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-radius: 18px;
  background:
    radial-gradient(circle at center, rgba(34, 211, 238, 0.1), transparent 34%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.96));
  overflow: hidden;
}

.core-center {
  position: absolute;
  width: 220px;
  height: 220px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 0.35rem;
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  border: 4px solid #22d3ee;
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.35);
  z-index: 3;
}
.core-center svg {
  width: 46px;
  height: 46px;
}

.core-center strong {
  font-size: 1.25rem;
}

.core-center span {
  color: #e0f2fe;
  font-size: 0.95rem;
}

.core-feature {
  position: absolute;
  width: 170px;
  min-height: 100px;
  padding: 0.85rem;
  border-radius: 10px;
  border: 2px solid rgba(34, 211, 238, 0.85);
  background: rgba(30, 41, 59, 0.94);
  color: #e2e8f0;
  text-align: center;
  cursor: grab;
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
  z-index: 4;
  user-select: none;
  touch-action: none;
}

.core-feature:active {
  cursor: grabbing;
}

.core-feature:hover,
.core-feature.active {
  background: rgba(14, 116, 144, 0.5);
  box-shadow:
    0 18px 34px rgba(0, 0, 0, 0.28),
    0 0 26px rgba(34, 211, 238, 0.25);
}

.feature-icon {
  width: 38px;
  height: 38px;
  margin: 0 auto 0.6rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(6, 182, 212, 0.16);
  color: #22d3ee;
}

.feature-icon svg {
  width: 18px;
  height: 18px;
}

.core-feature strong {
  display: block;
  color: #22d3ee;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.core-feature span {
  color: #cbd5e1;
  font-size: 0.75rem;
  line-height: 1.25;
}

.core-feature.top {
  left: 50%;
  top: 52px;
  transform: translateX(-50%);
}

.core-feature.bottom {
  left: 50%;
  bottom: 52px;
  transform: translateX(-50%);
}

.core-feature.left-top {
  left: 70px;
  top: 85px;
}

.core-feature.left-middle {
  left: 48px;
  top: 50%;
  transform: translateY(-50%);
}

.core-feature.left-bottom {
  left: 70px;
  bottom: 85px;
}

.core-feature.right-top {
  right: 70px;
  top: 85px;
}

.core-feature.right-middle {
  right: 48px;
  top: 50%;
  transform: translateY(-50%);
}

.core-feature.right-bottom {
  right: 70px;
  bottom: 85px;
}

.core-feature.top:hover,
.core-feature.top.active,
.core-feature.bottom:hover,
.core-feature.bottom.active {
  transform: translateX(-50%) translateY(-6px);
}

.core-feature.left-middle:hover,
.core-feature.left-middle.active,
.core-feature.right-middle:hover,
.core-feature.right-middle.active {
  transform: translateY(-50%) translateY(-6px);
}

.core-line {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2px;
  height: 180px;
  background: repeating-linear-gradient(
    to bottom,
    rgba(34, 211, 238, 0.55) 0 8px,
    transparent 8px 15px
  );
  transform-origin: top center;
  opacity: 0.7;
  z-index: 1;
}

.line-top {
  transform: rotate(180deg);
}

.line-bottom {
  transform: rotate(0deg);
}

.line-left {
  transform: rotate(90deg);
}

.line-right {
  transform: rotate(-90deg);
}

.line-top-left {
  transform: rotate(125deg);
}

.line-top-right {
  transform: rotate(-125deg);
}

.line-bottom-left {
  transform: rotate(55deg);
}

.line-bottom-right {
  transform: rotate(-55deg);
}

.core-detail {
  max-width: 720px;
  margin: 1.5rem auto 0;
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(34, 211, 238, 0.25);
  text-align: center;
  display: none;
}

.core-detail strong {
  color: #22d3ee;
  font-size: 1.05rem;
}

.core-detail p {
  margin: 0.5rem 0 0;
  color: #cbd5e1;
  line-height: 1.6;
}

.core-connections {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.core-connections line {
  stroke: rgba(34, 211, 238, 0.45);
  stroke-width: 2;
  stroke-dasharray: 8 10;
}

.solution-section .page-container {
  max-width: 980px;
}

.vertical-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.maritime-card {
  margin-bottom: 4rem;
}

.hero-image {
  position: relative;
  padding: 1rem;
  background: #020617;
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: 14px;
  border: 1px solid rgba(71, 85, 105, 0.6);
  background: #020617;
}

.multi-image-hero {
  display: grid;
  gap: 1rem;
}

.multi-image-hero > img {
  width: 100%;
  max-height: 460px;
  object-fit: cover;
}

.multi-image-hero .two-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.multi-image-hero .two-grid img {
  height: 250px;
  object-fit: cover;
}

.premium-content {
  padding: 2.4rem;
  background:
    radial-gradient(circle at 8% 0%, rgba(34, 211, 238, 0.08), transparent 32%),
    linear-gradient(180deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98));
}

.iuu-content {
  background:
    radial-gradient(circle at 8% 0%, rgba(248, 113, 113, 0.1), transparent 32%),
    linear-gradient(180deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98));
}

.safer-content {
  background:
    radial-gradient(circle at 8% 0%, rgba(74, 222, 128, 0.1), transparent 32%),
    linear-gradient(180deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98));
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

  border: 1px solid rgba(148, 163, 184, 0.12);
}

.mda-header {
  border-color: rgba(34, 211, 238, 0.18);
}

.iuu-header {
  border-color: rgba(248, 113, 113, 0.18);
}

.safer-header {
  border-color: rgba(74, 222, 128, 0.18);
}

.solution-header h3 {
  margin: 0;
  font-size: clamp(1.75rem, 3vw, 2.4rem);
  color: #ffffff;
  line-height: 1.05;
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

.mobile-core-map {
  display: none;
}

@media (max-width: 900px) {
  .mobile-core-map {
    position: relative;
    display: block;

    width: 300px;
    height: 300px;

    max-width: 100%;
    margin: 0 auto;
  }

  .mobile-core-center {
    position: absolute;
    left: 50%;
    top: 50%;

    width: 120px;
    height: 120px;

    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    text-align: center;

    background: linear-gradient(135deg, #0ea5e9, #2563eb);
    border: 3px solid #22d3ee;
    box-shadow: 0 0 24px rgba(34, 211, 238, 0.35);
  }

  .mobile-core-dot {
    position: absolute;

    width: 52px;
    height: 52px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 16px;

    background: rgba(30, 41, 59, 0.95);
    border: 1px solid rgba(34, 211, 238, 0.6);

    color: #22d3ee;
  }

  /* top */
  .mobile-core-dot:nth-child(1) {
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* top-right */
  .mobile-core-dot:nth-child(2) {
    top: 55px;
    right: 25px;
  }

  /* right */
  .mobile-core-dot:nth-child(3) {
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
  }

  /* bottom-right */
  .mobile-core-dot:nth-child(4) {
    bottom: 55px;
    right: 25px;
  }

  /* bottom */
  .mobile-core-dot:nth-child(5) {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* bottom-left */
  .mobile-core-dot:nth-child(6) {
    bottom: 55px;
    left: 25px;
  }

  /* left */
  .mobile-core-dot:nth-child(7) {
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
  }

  /* top-left */
  .mobile-core-dot:nth-child(8) {
    top: 55px;
    left: 25px;
  }
  .core-center {
    display: none;
  }
  .core-feature {
    display: none;
  }
  .core-connections {
    display: none;
  }
  .core-visual {
    height: auto;
    min-height: 0;
    padding: 1.25rem 1rem;
    overflow: hidden;
  }
  .core-section h3 {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .core-detail {
    display: block;

    max-width: 100%;
    margin: 1.5rem auto 0;
    padding: 1rem 1.25rem;

    border-radius: 16px;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(34, 211, 238, 0.25);

    text-align: center;
  }

  .core-detail strong {
    color: #22d3ee;
    font-size: 1rem;
  }

  .core-detail p {
    margin-top: 0.5rem;
    color: #cbd5e1;
    line-height: 1.6;
    font-size: 0.9rem;
  }
}
</style>
