<template>
  <main class="smart-page">
    <section
      class="page-hero"
      :style="{
        backgroundImage: `linear-gradient(rgba(15,23,42,.8), rgba(30,58,138,.85)), url(${heroImage})`,
      }"
    >
      <div class="page-container hero-content">
        <div class="hero-title-row">
          <div class="hero-icon"><Building2 /></div>
          <h1>Smart City Infrastructure</h1>
        </div>

        <p>
          Satellite observation and IoT integration provide urban planners and city managers with
          critical insights for sustainable development, infrastructure planning, and quality of
          life improvements through real-time monitoring and predictive analytics.
        </p>
      </div>
    </section>

    <section class="page-container content-section">
      <div class="section-header">
        <h2>Smart City Applications</h2>
        <p>
          Leveraging geospatial intelligence and IoT sensors for comprehensive urban infrastructure
          management
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

      <div class="section-header">
        <h2>Available Smart City Data & Applications</h2>
        <p>
          Explore the comprehensive data types we provide and their real-world applications in smart
          city operations
        </p>
      </div>

      <div class="data-table">
        <div class="table-header">
          <div><Building2 /> <span>Data Type</span></div>
          <div><Activity /> <span>Real-World Application</span></div>
        </div>

        <div v-for="row in smartCityData" :key="row.dataType" class="table-row">
          <div class="data-type" v-html="row.dataType"></div>
          <div>{{ row.application }}</div>
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
          <h2>Smart City Solutions</h2>
          <p>
            Innovative platforms built on OBSERVE™ delivering intelligent infrastructure management
          </p>
        </div>

        <div class="solution-card vertical-card">
          <div class="solution-image hero-image">
            <img :src="matagridGif" alt="MataGrid" />
          </div>

          <div class="solution-content premium-content">
            <div class="solution-header">
              <div class="solution-icon amber">
                <Sun />
              </div>

              <div>
                <h3>MataGrid</h3>
                <p>Solar Panel Suitability Assessment Platform</p>
              </div>
            </div>

            <p class="solution-description">
              A dynamic application that utilizes spatial data and tools to assess the suitability
              of individual building rooftops to install solar panel systems.
            </p>

            <div class="feature-panel">
              <h4 class="amber-text">Key Features</h4>

              <div class="feature-list">
                <div
                  v-for="item in matagridFeatures"
                  :key="item.title"
                  class="feature-item amber-dot"
                >
                  <span></span>
                  <p>
                    <strong>{{ item.title }}:</strong>
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>

            <MarketChips :items="matagridMarkets" />
          </div>
        </div>

        <div class="solution-card vertical-card">
          <div class="solution-image hero-image">
            <img :src="pipewiseScreenshot" alt="PIPEWISE" />
          </div>

          <div class="solution-content premium-content pipewise-content">
            <div class="solution-header pipewise-header">
              <div class="solution-icon blue">
                <Droplet />
              </div>

              <div>
                <h3>PIPEWISE</h3>
                <p>Pipeline Intelligence & Early Warning System</p>
              </div>
            </div>

            <p class="solution-description">
              An integrated smart infrastructure monitoring platform that integrates GIS
              intelligence with AI-powered IoT sensors to enable early pipeline leak detection and
              predictive maintenance.
            </p>

            <div class="feature-panel pipewise-panel">
              <h4 class="cyan-text">Core Functionalities</h4>

              <div class="feature-list">
                <div
                  v-for="item in pipewiseFeatures"
                  :key="item.title"
                  class="feature-item cyan-dot"
                >
                  <span></span>
                  <p>
                    <strong>{{ item.title }}:</strong>
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>

            <MarketChips :items="pipewiseMarkets" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import {
  Building2,
  Wifi,
  Droplet,
  Map as MapIcon,
  TrendingUp,
  Activity,
  Sun,
} from 'lucide-vue-next'

import pipewiseScreenshot from '@/assets/PIPEWISE_Artwork-1.png'
import matagridGif from '@/assets/Screen_Recording_2026-05-24_at_9.54.41_PM.gif'

const heroImage =
  'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?auto=format&fit=crop&w=1600&q=80'

const applications = [
  {
    icon: Building2,
    title: 'Urban Growth Monitoring',
    description: 'Track city expansion and development patterns for effective urban planning',
    color: 'blue',
  },
  {
    icon: Activity,
    title: 'Traffic Flow Analysis',
    description:
      'Optimize transportation networks and reduce congestion through real-time monitoring',
    color: 'green',
  },
  {
    icon: Droplet,
    title: 'Infrastructure Monitoring',
    description: 'Monitor critical infrastructure including water, gas, and utility pipelines',
    color: 'purple',
  },
  {
    icon: TrendingUp,
    title: 'Heat Island Mapping',
    description: 'Identify and mitigate urban heat islands for improved climate resilience',
    color: 'orange',
  },
  {
    icon: Wifi,
    title: 'Air Quality Monitoring',
    description: 'Track pollution levels and environmental conditions for public health',
    color: 'cyan',
  },
  {
    icon: MapIcon,
    title: 'Green Space Management',
    description: 'Optimize parks and green spaces for urban sustainability and wellbeing',
    color: 'teal',
  },
]

const smartCityData = [
  {
    dataType: '<strong>Building Footprints & 3D Models</strong>',
    application: 'Map urban density, assess solar potential, and plan infrastructure development',
  },
  {
    dataType: '<strong>Road Networks & Transportation Infrastructure</strong>',
    application: 'Optimize traffic flow, plan new routes, and monitor road conditions',
  },
  {
    dataType:
      '<strong>Utility Infrastructure</strong> <small>(water, gas, electricity pipelines)</small>',
    application: 'Monitor pipeline integrity, detect leaks, and optimize maintenance schedules',
  },
  {
    dataType: '<strong>Land Use & Zoning</strong>',
    application: 'Track urban growth, enforce zoning regulations, and guide development planning',
  },
  {
    dataType: '<strong>Green Spaces & Parks</strong>',
    application: 'Monitor vegetation health, optimize park maintenance, and plan green corridors',
  },
  {
    dataType: '<strong>Urban Heat Island Mapping</strong>',
    application: 'Identify hot spots, plan cooling strategies, and improve climate resilience',
  },
  {
    dataType: '<strong>Air Quality & Environmental Sensors</strong>',
    application: 'Track pollution levels, identify emission sources, and protect public health',
  },
  {
    dataType: '<strong>Population Density & Demographics</strong>',
    application: 'Assess service demands, plan resource allocation, and optimize public transit',
  },
  {
    dataType: '<strong>IoT Sensor Networks</strong>',
    application: 'Integrate real-time data streams for smart city monitoring and automation',
  },
]

const matagridFeatures = [
  {
    title: 'Estimate solar power potential',
    description: 'Calculate energy generation capacity for each rooftop',
  },
  {
    title: 'Determine suitability of building rooftop',
    description: 'Analyze orientation, shading, and structural factors',
  },
  {
    title: 'View a list of solar panel distributors',
    description: 'Connect with verified suppliers and installers',
  },
]

const matagridMarkets = [
  'Homeowners',
  'Property Developers',
  'Energy Companies',
  'Urban Planners',
  'Sustainability Consultants',
]

const pipewiseFeatures = [
  {
    title: 'Real-Time Monitoring',
    description:
      'Monitor pipeline conditions, automated notifications and escalation warnings continuously',
  },
  {
    title: 'Leak Detection',
    description: 'Detect abnormal pressure / flow anomalies',
  },
  {
    title: 'GIS Visualisation',
    description: 'Map pipelines and incident locations',
  },
  {
    title: 'Asset Intelligence',
    description: 'Centralised infrastructure monitoring',
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast high-risk infrastructure zones',
  },
]

const pipewiseMarkets = [
  'Public Works Department',
  'Smart Nation Office',
  'Water Utilities Department',
  'Oil & Gas Operators',
  'Utility Operators',
  'Industrial Infrastructure Owners',
]
</script>

<style scoped>
.smart-page {
  min-height: 100vh;
  background: #1e293b;
  color: #ffffff;
}

.smart-page h1,
.smart-page h2,
.smart-page h3,
.smart-page h4,
.smart-page p {
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
    radial-gradient(circle at 18% 35%, rgba(168, 85, 247, 0.16), transparent 38%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.22), rgba(88, 28, 135, 0.3)),
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
  background: rgba(88, 28, 135, 0.78);
  color: #c084fc;
  border: 1px solid rgba(192, 132, 252, 0.35);
  display: grid;
  place-items: center;
  box-shadow:
    0 0 24px rgba(168, 85, 247, 0.18),
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
    0 0 18px rgba(192, 132, 252, 0.25),
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
  border-color: rgba(192, 132, 252, 0.55);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.28),
    0 0 24px rgba(168, 85, 247, 0.12);
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

.green {
  background: rgba(20, 83, 45, 0.65);
  color: #4ade80;
}

.purple {
  background: rgba(88, 28, 135, 0.65);
  color: #c084fc;
}

.orange {
  background: rgba(124, 45, 18, 0.6);
  color: #fb923c;
}

.cyan {
  background: rgba(22, 78, 99, 0.65);
  color: #22d3ee;
}

.teal {
  background: rgba(19, 78, 74, 0.65);
  color: #2dd4bf;
}

.amber {
  background: rgba(120, 53, 15, 0.6);
  color: #f59e0b;
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
  background: linear-gradient(to right, #7e22ce, #a855f7);
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
  color: #c084fc;
  font-size: 0.82rem;
  font-style: italic;
  padding: 1rem 1.25rem;
  border-top: 1px solid rgba(71, 85, 105, 0.75);
}

.solution-section {
  background: radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.08), transparent 38%), #0f172a;
  border-top: 1px solid rgba(71, 85, 105, 0.8);
  padding: 5rem 0;
}

.solution-card {
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 4rem;
  transition: 0.25s ease;
}

.vertical-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.vertical-card .solution-image {
  width: 100%;
  padding: 1rem;
}

.vertical-card .solution-content {
  width: 100%;
  padding: 2.4rem;
}

.vertical-card .solution-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.solution-content {
  padding: 2.4rem;
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
  box-shadow: 0 0 18px rgba(168, 85, 247, 0.18);
}

.solution-icon svg {
  width: 24px;
  height: 24px;
}

.solution-subtitle {
  color: #94a3b8;
  margin: 1rem 0 0.75rem;
}

.solution-description {
  color: #cbd5e1;
  line-height: 1.7;
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
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 12px;
  border: 1px solid rgba(71, 85, 105, 0.8);
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

.feature-item span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-top: 0.6rem;
  flex-shrink: 0;
}

.feature-item p {
  color: #cbd5e1;
  font-size: 0.88rem;
  line-height: 1.6;
  margin: 0;
}

.feature-item strong {
  color: #ffffff;
}

.amber-dot span {
  background: #f59e0b;
}

.cyan-dot span {
  background: #22d3ee;
}

.amber-text {
  color: #f59e0b;
}

.cyan-text {
  color: #22d3ee;
}

.vertical-card {
  overflow: hidden;
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

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 24px rgba(168, 85, 247, 0.08);

  background: #020617;
}

.image-overlay {
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1rem 1.25rem;

  border-radius: 16px;

  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.08);
}

.premium-content {
  background:
    radial-gradient(circle at 8% 0%, rgba(245, 158, 11, 0.1), transparent 32%),
    linear-gradient(180deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98));
}

.solution-header {
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1.15rem 1.25rem;
  margin-bottom: 1.5rem;

  border-radius: 18px;
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(245, 158, 11, 0.16);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 18px 34px rgba(0, 0, 0, 0.14);
}

.solution-header h3 {
  margin: 0;
  font-size: clamp(1.65rem, 3vw, 2.25rem);
  color: #ffffff;
  letter-spacing: -0.03em;
}

.solution-header p {
  margin: 0.25rem 0 0;
  color: #cbd5e1;
  font-size: 0.98rem;
}

.solution-description {
  max-width: 900px;
  margin: 0 0 1.8rem;
  color: #e2e8f0;
  line-height: 1.75;
  font-size: 1rem;
}

.feature-panel {
  padding: 1.25rem;
  border-radius: 18px;

  background: rgba(2, 6, 23, 0.22);
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.feature-panel h4 {
  margin: 0 0 1rem;
}

.feature-list {
  display: grid;
  gap: 0.85rem;
}

.feature-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.feature-item span {
  width: 7px;
  height: 7px;
  margin-top: 0.55rem;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(245, 158, 11, 0.55);
}

.feature-item p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.65;
}

.feature-item strong {
  color: #ffffff;
}

.amber-dot span {
  background: #f59e0b;
}
.hero-image {
  position: relative;
}

.image-overlay h3 {
  margin: 0;
  font-size: 2rem;
  color: white;
}

.image-overlay p {
  margin: 0.25rem 0 0;
  color: #cbd5e1;
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

  .hero-content {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }

  .solution-content {
    padding: 1.7rem;
  }

  .table-row > div:first-child,
  .table-header > div:first-child {
    border-right: 0;
    border-bottom: 1px solid rgba(71, 85, 105, 0.75);
  }
}
</style>
