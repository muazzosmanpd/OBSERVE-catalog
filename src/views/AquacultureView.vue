<template>
  <main class="aquaculture-page">
    <!-- Hero -->
    <section
      class="page-hero"
      :style="{
        backgroundImage: `linear-gradient(rgba(15,23,42,.8), rgba(6,95,135,.85)), url(${heroImage})`,
      }"
    >
      <div class="page-container hero-content">
        <div class="hero-title-row">
          <div class="hero-icon">
            <Fish />
          </div>
          <h1>Aquaculture</h1>
        </div>

        <p>
          Satellite observation supports sustainable aquaculture operations through environmental
          monitoring, water quality assessment, and site management for optimal fish and seafood
          production.
        </p>
      </div>
    </section>

    <!-- Key Applications -->
    <section class="page-container content-section">
      <div class="section-header">
        <h2>Key Applications</h2>
        <p>
          Leveraging satellite technology for comprehensive aquaculture monitoring and management
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
        <h2>Available Aquaculture Data & Applications</h2>
        <p>
          Explore the comprehensive data types we provide and their real-world applications in
          aquaculture operations
        </p>
      </div>

      <div class="data-table">
        <div class="table-header">
          <div>
            <Fish />
            <span>Data Type</span>
          </div>
          <div>
            <Activity />
            <span>Real-World Application</span>
          </div>
        </div>

        <div v-for="row in aquacultureData" :key="row.dataType" class="table-row">
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
    <!-- <section class="solution-section">
      <div class="page-container">
        <div class="section-header center">
          <h2>Aquaculture Solutions</h2>
          <p>
            Advanced platforms built on OBSERVE™ for sustainable aquaculture monitoring and
            management
          </p>
        </div> -->

    <!-- CORAL -->
    <!-- <div class="solution-card vertical-card coral-card"> -->
    <!-- <div class="solution-images hero-image multi-image-hero">
            <img :src="coralScreenshot1" alt="CORAL Platform Chlorophyll Map" />

            <div class="image-grid">
              <img :src="coralScreenshot2" alt="CORAL Red Tide Detection" />
              <img :src="coralScreenshot3" alt="CORAL Subsurface Trajectories" />
            </div>
          </div> -->

    <!-- <div class="solution-content premium-content coral-content">
            <div class="solution-header coral-header">
              <div class="solution-icon red">
                <Activity />
              </div>

              <div>
                <h3>CORAL</h3>
                <p>Coastal Observation & Red Tide Locator</p>
              </div>
            </div>

            <p class="solution-description">
              CORAL combines satellite imagery, IoT sensors, crowdsourced reports, and historical
              datasets to detect, track, and predict harmful algal blooms in real time. The solution
              provides interactive dashboards, predictive models, and automated alerts, enabling
              governments, fisheries, and coastal communities to take timely action and reduce
              health, environmental and economic impact.
            </p>

            <div class="feature-panel coral-panel">
              <h4 class="red-text">Key Features & Capabilities</h4>

              <div class="feature-list">
                <div v-for="item in coralFeatures" :key="item.title" class="feature-item red-dot">
                  <span></span>
                  <p>
                    <strong>{{ item.title }}:</strong>
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>

            <MarketChips title="Target Market" color="red" :items="coralMarkets" />
          </div>
        </div> -->

    <!-- JERNIH -->
    <!-- <div class="solution-card vertical-card jernih-card">
          <div class="solution-content premium-content jernih-content">
            <div class="solution-header jernih-header">
              <div class="solution-icon cyan">
                <Droplets />
              </div>

              <div>
                <h3>JERNIH</h3>
                <p>Jaringan EO & Remote-sensing National Integration Hydrology</p>
              </div>
            </div>

            <p class="solution-description">
              Combines Earth Observation (EO) satellite data, IoT water quality sensors and GIS
              dashboards to monitor pollution in near real-time and provide early warning for events
              such as harmful algal blooms.
            </p>

            <div class="feature-panel jernih-panel">
              <h4 class="cyan-text">Key Features & Capabilities</h4>

              <div class="jernih-feature-list">
                <div v-for="item in jernihFeatures" :key="item.title" class="jernih-feature">
                  <div class="small-icon" :class="item.color">
                    <component :is="item.icon" />
                  </div>

                  <div>
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="feature-panel jernih-panel">
              <h4 class="cyan-text">Outcomes & Benefits</h4>

              <div class="benefit-list">
                <div v-for="item in jernihBenefits" :key="item" class="benefit-item">
                  <span></span>
                  <p>{{ item }}</p>
                </div>
              </div>
            </div>

            <MarketChips title="Target Market" color="cyan" :items="jernihMarkets" />
          </div>
        </div>
      </div>
    </section> -->
  </main>
</template>

<script setup>
import { Fish, Droplets, Activity, AlertTriangle, MapPin, Waves, TrendingUp } from 'lucide-vue-next'

const heroImage =
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=80'

const applications = [
  {
    icon: Droplets,
    title: 'Water Quality Monitoring',
    description: 'Track temperature, chlorophyll, turbidity, and salinity for optimal conditions',
    color: 'blue',
  },
  {
    icon: AlertTriangle,
    title: 'Algal Bloom Detection',
    description: 'Early warning systems for harmful algal blooms and red tide events',
    color: 'red',
  },
  {
    icon: MapPin,
    title: 'Farm Site Selection',
    description: 'Identify optimal locations based on environmental and oceanographic factors',
    color: 'green',
  },
  {
    icon: Waves,
    title: 'Coastal Zone Management',
    description: 'Monitor coastal changes, erosion, and environmental impacts',
    color: 'cyan',
  },
  {
    icon: Activity,
    title: 'Disease Outbreak Warning',
    description: 'Early detection of environmental conditions leading to disease outbreaks',
    color: 'orange',
  },
  {
    icon: TrendingUp,
    title: 'Production Optimization',
    description: 'Monitor farm productivity and optimize feeding and harvesting schedules',
    color: 'teal',
  },
]

const aquacultureData = [
  {
    dataType: '<strong>Fish Farm Locations & Cage Boundaries</strong>',
    application: 'Map farm infrastructure, monitor cage placements, and manage spatial planning',
  },
  {
    dataType:
      '<strong>Water Quality Parameters</strong> <small>(temperature, salinity, pH, dissolved oxygen)</small>',
    application:
      'Monitor environmental conditions, ensure optimal growth, and prevent stress events',
  },
  {
    dataType: '<strong>Chlorophyll-a Concentration</strong>',
    application: 'Detect harmful algal blooms, track red tide events, and issue early warnings',
  },
  {
    dataType: '<strong>Oceanographic Data</strong> <small>(currents, tides, wave height)</small>',
    application:
      'Assess site suitability, predict nutrient dispersion, and plan infrastructure deployment',
  },
  {
    dataType: '<strong>Bathymetry & Seabed Topography</strong>',
    application: 'Identify suitable depths, assess seabed stability, and plan cage anchoring',
  },
  {
    dataType: '<strong>Coastal & Marine Protected Areas</strong>',
    application:
      'Ensure regulatory compliance, avoid restricted zones, and support conservation efforts',
  },
  {
    dataType: '<strong>Weather & Climate Data</strong>',
    application: 'Forecast storm events, plan harvesting operations, and protect infrastructure',
  },
  {
    dataType: '<strong>Historical Production Data</strong>',
    application:
      'Analyze productivity trends, optimize feeding schedules, and improve yield forecasting',
  },
]

const coralFeatures = [
  {
    title: 'Interactive Dashboard',
    description:
      'Real-time heatmaps showing chlorophyll-a levels, bloom risk zones, and ocean conditions',
  },
  {
    title: 'Alerts & Notifications',
    description:
      'Automated SMS, email, or mobile app push notifications to fisheries, coastal communities, and authorities',
  },
  {
    title: 'Predictive Models',
    description: '3–7 day Red Tide forecasts with bloom severity levels',
  },
  {
    title: 'Data Layers',
    description:
      'Combine satellite, sensor, historical, and crowdsourced data for spatial-temporal analysis',
  },
  {
    title: 'Trend Analysis & Reporting',
    description:
      'Historical comparisons, seasonal patterns, and risk assessments for decision-making',
  },
]

const coralMarkets = [
  'Aquaculture Farms',
  'Seafood Exporters',
  'Department of Fisheries',
  'Coastal Communities',
  'Environmental NGOs',
]

const jernihFeatures = [
  {
    icon: Activity,
    title: 'Water Quality Dashboard',
    description:
      'Live IoT readings + satellite layers and traffic light alerts (normal/warning/critical)',
    color: 'blue',
  },
  {
    icon: MapPin,
    title: 'Impact Mapping',
    description:
      'Identify communities, aquaculture farms or fisheries affected by poor water quality',
    color: 'cyan',
  },
]

const jernihBenefits = [
  'Early detection of pollution hotspots',
  "Reduce risks to Brunei's aquaculture and fisheries sector",
  'Protect public health (seafood safety)',
  'Support sustainable coastal & marine management',
]

const jernihMarkets = [
  'Department of Fisheries',
  'Aquaculture Industry',
  'Ministry of Health',
  'Environmental Protection',
  'Coastal Communities',
]
</script>

<style scoped>
.aquaculture-page {
  min-height: 100vh;
  background: #1e293b;
  color: #ffffff;
}

.aquaculture-page h1,
.aquaculture-page h2,
.aquaculture-page h3,
.aquaculture-page h4,
.aquaculture-page h5,
.aquaculture-page p {
  color: inherit;
}

.page-container {
  max-width: 980px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.solution-section .page-container {
  max-width: 980px;
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
    radial-gradient(circle at 18% 35%, rgba(59, 130, 246, 0.16), transparent 38%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.22), rgba(30, 64, 175, 0.3)),
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
  background: rgba(30, 64, 175, 0.78);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.35);
  display: grid;
  place-items: center;
  box-shadow:
    0 0 24px rgba(59, 130, 246, 0.18),
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
    0 0 18px rgba(96, 165, 250, 0.25),
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
  margin: 0;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  margin-bottom: 4rem;
}

.application-card,
.solution-card,
.data-table,
.jernih-feature {
  background: linear-gradient(180deg, rgba(39, 46, 70, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 16px;
}

.application-card {
  padding: 1.8rem;
  transition: 0.25s ease;
}

.application-card:hover,
.jernih-feature:hover,
.solution-card:hover {
  transform: translateY(-6px);
  border-color: rgba(96, 165, 250, 0.6);
  box-shadow:
    0 24px 50px rgba(0, 0, 0, 0.32),
    0 0 28px rgba(59, 130, 246, 0.14);
}

.application-icon,
.solution-icon,
.small-icon {
  display: grid;
  place-items: center;
}

.application-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  margin-bottom: 1.2rem;
}

.application-icon svg,
.solution-icon svg,
.small-icon svg {
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

.green {
  background: rgba(20, 83, 45, 0.65);
  color: #4ade80;
}

.cyan {
  background: rgba(22, 78, 99, 0.65);
  color: #22d3ee;
}

.orange {
  background: rgba(124, 45, 18, 0.6);
  color: #fb923c;
}

.teal {
  background: rgba(19, 78, 74, 0.65);
  color: #2dd4bf;
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
  background: linear-gradient(to right, #1d4ed8, #3b82f6);
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
  color: #60a5fa;
  font-size: 0.82rem;
  font-style: italic;
  padding: 1rem 1.25rem;
  border-top: 1px solid rgba(71, 85, 105, 0.75);
}

.solution-section {
  background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08), transparent 38%), #0f172a;
  border-top: 1px solid rgba(71, 85, 105, 0.8);
  padding: 5rem 0;
}

.solution-card {
  overflow: hidden;
  transition: 0.25s ease;
}

.vertical-card {
  display: flex;
  flex-direction: column;
}

.jernih-card {
  margin-top: 4rem;
}

.solution-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  flex-shrink: 0;
  box-shadow: 0 0 18px rgba(59, 130, 246, 0.18);
}

.hero-image {
  position: relative;
  padding: 1rem;
  background: #020617;
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
  overflow: hidden;
}

.hero-image::before {
  content: '';
  position: absolute;
  inset: 30% 15%;
  background: rgba(59, 130, 246, 0.15);
  filter: blur(80px);
  z-index: 0;
}

.coral-card .hero-image::before {
  background: rgba(248, 113, 113, 0.16);
}

.jernih-card .hero-image::before {
  background: rgba(34, 211, 238, 0.16);
}

.hero-image img {
  position: relative;
  z-index: 1;
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
  padding: 1rem;
  background: #020617;
}

.multi-image-hero > img {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  object-position: center;
}

.multi-image-hero .image-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: 230px;
  object-fit: cover;
}

.multi-image-hero .image-grid img {
  max-height: 220px;
  object-fit: cover;
}

.premium-content {
  padding: 2.4rem;
  background:
    radial-gradient(circle at 8% 0%, rgba(34, 211, 238, 0.08), transparent 32%),
    linear-gradient(180deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98));
}

.coral-content {
  background:
    radial-gradient(circle at 8% 0%, rgba(248, 113, 113, 0.1), transparent 32%),
    linear-gradient(180deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98));
}

.jernih-content {
  background:
    radial-gradient(circle at 8% 0%, rgba(34, 211, 238, 0.1), transparent 32%),
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

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.03),
    0 8px 24px rgba(0, 0, 0, 0.18);
}

.coral-header,
.coral-panel {
  border-color: rgba(248, 113, 113, 0.18);
}

.jernih-header,
.jernih-panel {
  border-color: rgba(34, 211, 238, 0.18);
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

.solution-description {
  max-width: 850px;
  margin: 0 auto 2rem;
  color: #e2e8f0;
  line-height: 1.75;
  text-align: center;
}

.feature-panel {
  max-width: 980px;
  margin: 0 auto 1.5rem;
  padding: 1.35rem;
  border-radius: 18px;
  background: rgba(2, 6, 23, 0.28);
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.feature-panel h4 {
  margin: 0 0 1rem;
}

.red-text {
  color: #f87171;
}

.cyan-text {
  color: #22d3ee;
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

.red-dot span:first-child {
  background: #f87171;
  box-shadow: 0 0 12px rgba(248, 113, 113, 0.55);
}

.cyan-dot span:first-child,
.benefit-item span {
  background: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.55);
}

.jernih-feature-list {
  display: grid;
  gap: 1rem;
}

.jernih-feature {
  display: flex;
  gap: 1rem;
  padding: 1.15rem;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(34, 211, 238, 0.12);
  border-radius: 14px;
  transition: 0.25s ease;
}

.small-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  flex-shrink: 0;
}

.jernih-feature h5 {
  color: #ffffff;
  margin: 0 0 0.35rem;
}

.jernih-feature p,
.benefit-item p {
  color: #cbd5e1;
  font-size: 0.86rem;
  margin: 0;
  line-height: 1.55;
}

.benefit-list {
  display: grid;
  gap: 0.65rem;
}

.benefit-item {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
}

.benefit-item span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-top: 0.45rem;
  flex-shrink: 0;
}

.market-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.chips span {
  background: rgba(30, 41, 59, 0.96);
  border: 1px solid rgba(71, 85, 105, 0.9);
  color: #cbd5e1;
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-size: 0.82rem;
  transition: 0.2s ease;
}

.chips span:hover {
  border-color: rgba(96, 165, 250, 0.55);
  color: #ffffff;
}

@media (max-width: 900px) {
  .application-grid,
  .table-header,
  .table-row,
  .feature-list,
  .multi-image-hero .image-grid {
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

  .premium-content {
    padding: 1.5rem;
  }

  .solution-header {
    margin-top: -2.25rem;
    align-items: flex-start;
  }

  .solution-description {
    text-align: left;
  }

  .table-row > div:first-child,
  .table-header > div:first-child {
    border-right: 0;
    border-bottom: 1px solid rgba(71, 85, 105, 0.75);
  }
}
</style>
