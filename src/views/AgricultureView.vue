<template>
  <main class="agriculture-page">
    <!-- Hero -->
    <section
      class="page-hero"
      :style="{
        backgroundImage: `linear-gradient(rgba(15,23,42,.8), rgba(22,101,52,.85)), url(${heroImage})`,
      }"
    >
      <div class="page-container hero-content">
        <div class="hero-title-row">
          <div class="hero-icon">
            <Sprout />
          </div>
          <h1>Agriculture</h1>
        </div>

        <p>
          Satellite observation revolutionizes precision agriculture by providing detailed insights
          into crop health, soil conditions, and resource optimization for sustainable farming
          practices.
        </p>
      </div>
    </section>

    <!-- Key Applications -->
    <section class="page-container content-section">
      <div class="section-header">
        <h2>Key Applications</h2>
        <p>
          Leveraging satellite technology and geospatial analysis for modern agricultural management
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
        <h2>Available Agricultural Data & Applications</h2>
        <p>
          Explore the comprehensive data types we provide and their real-world applications in
          agricultural operations
        </p>
      </div>

      <div class="data-table">
        <div class="table-header">
          <div>
            <MapIcon />
            <span>Data Type</span>
          </div>
          <div>
            <Activity />
            <span>Real-World Application</span>
          </div>
        </div>

        <div v-for="row in agricultureData" :key="row.dataType" class="table-row">
          <div class="data-type" v-html="row.dataType"></div>
          <div>{{ row.application }}</div>
        </div>

        <div class="table-footer">
          * For data not listed here, please contact our team to discuss availability and custom
          solutions.
        </div>
      </div>
    </section>

    <!-- Agriculture Solutions -->
    <section class="solution-section">
      <div class="page-container">
        <div class="section-header center">
          <h2>Agriculture Solutions</h2>
          <p>
            Advanced platforms built on OBSERVE™ for sustainable agricultural monitoring and
            management
          </p>
        </div>

        <div class="leaf-card">
          <div class="leaf-title">
            <div class="leaf-icon">
              <Sprout />
            </div>
            <h3>LEAF</h3>
          </div>

          <p class="leaf-subtitle">Land Experience for Agri Fields</p>

          <p class="leaf-description">
            An ArcGIS-powered agricultural solution that enables crop monitoring and land
            suitability analysis through satellite imagery, spatial analytics and IoT integration —
            helping clients make data-driven farming decisions with less manual work.
          </p>

          <h4>Outcomes & Benefits</h4>

          <div class="outcome-list">
            <div v-for="item in outcomes" :key="item.title" class="outcome-card">
              <h5>
                <component :is="item.icon" />
                {{ item.title }}
              </h5>

              <p>
                <strong class="outcome-label">Outcome:</strong>
                {{ item.outcome }}
              </p>

              <p>
                <strong class="benefit-label">Benefit:</strong>
                {{ item.benefit }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Sprout, Activity, TrendingUp, Droplets, Bug, Map as MapIcon } from 'lucide-vue-next'

const heroImage =
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80'

const applications = [
  {
    icon: TrendingUp,
    title: 'Crop Health Monitoring',
    description: 'NDVI analysis and multispectral imaging for real-time crop health assessment',
    color: 'green',
  },
  {
    icon: Droplets,
    title: 'Irrigation Management',
    description: 'Water use efficiency optimization through soil moisture monitoring',
    color: 'blue',
  },
  {
    icon: Activity,
    title: 'Yield Prediction',
    description: 'Forecasting and harvest planning using historical and real-time data',
    color: 'amber',
  },
  {
    icon: Bug,
    title: 'Pest & Disease Detection',
    description: 'Early identification of agricultural threats for timely intervention',
    color: 'red',
  },
  {
    icon: MapIcon,
    title: 'Land Use Analysis',
    description: 'Soil composition mapping and land suitability assessment',
    color: 'orange',
  },
  {
    icon: TrendingUp,
    title: 'Field Monitoring',
    description: 'Continuous surveillance of agricultural areas for optimal management',
    color: 'teal',
  },
]

const agricultureData = [
  {
    dataType: '<strong>Land Parcels & Field Boundaries</strong>',
    application: 'Define farm boundaries, calculate field area, and manage crop zones',
  },
  {
    dataType: '<strong>Crop Type & Vegetation Indices</strong> <small>(NDVI, EVI, SAVI)</small>',
    application: 'Monitor crop health, identify stress areas, and optimize fertilizer application',
  },
  {
    dataType: '<strong>Soil Data</strong> <small>(pH, moisture, organic content, texture)</small>',
    application: 'Assess soil quality, plan crop rotation, and optimize irrigation strategies',
  },
  {
    dataType:
      '<strong>Weather & Climate Data</strong> <small>(rainfall, temperature, humidity)</small>',
    application: 'Forecast crop yields, schedule irrigation, and plan planting/harvest timing',
  },
  {
    dataType: '<strong>Irrigation Systems & Water Sources</strong>',
    application:
      'Map irrigation infrastructure, monitor water distribution, and track water usage efficiency',
  },
  {
    dataType: '<strong>DEM / Topography / Slope</strong>',
    application: 'Analyze drainage patterns, identify erosion risk zones, and plan terracing',
  },
  {
    dataType: '<strong>Historical Yield Data</strong>',
    application: 'Predict future yields, benchmark performance, and identify productivity trends',
  },
  {
    dataType: '<strong>Pest & Disease Incidence Maps</strong>',
    application: 'Track outbreak patterns, plan targeted interventions, and reduce crop losses',
  },
]

const outcomes = [
  {
    icon: TrendingUp,
    title: 'Data-Driven Agricultural Decision Making',
    outcome:
      'Real-time, spatially accurate insights into crop conditions, soil moisture, and land suitability.',
    benefit:
      'Government agencies, researchers, and private companies can make evidence-based planting, irrigation, and land-use decisions instead of relying on manual field inspections.',
  },
  {
    icon: MapIcon,
    title: 'Optimised Land Use and Resource Management',
    outcome:
      'Identification of the most suitable agricultural areas through weighted terrain, soil, and environmental analysis.',
    benefit:
      'Supports sustainable land planning, reduces cultivation in erosion-prone or low-yield areas, and maximizes productivity per hectare.',
  },
  {
    icon: Activity,
    title: 'Integrated Monitoring and Automation',
    outcome:
      'End-to-end automation using Sentinel-2 satellite data, IoT weather feeds, and Survey123 field validation, visualized in a single ArcGIS dashboard.',
    benefit:
      'Delivers operational efficiency, automated reports, and early-warning alerts for drought or crop stress — saving time and labor costs.',
  },
]

const targetMarkets = [
  'Department of Agriculture',
  'Agricultural Research Institutes',
  'Commercial Farms',
  'Agribusiness Companies',
  'Land Development Planners',
]
</script>

<style scoped>
.agriculture-page {
  min-height: 100vh;
  background: #1e293b;
  color: #ffffff;
}

.agriculture-page h1,
.agriculture-page h2,
.agriculture-page h3,
.agriculture-page h4,
.agriculture-page h5,
.agriculture-page p {
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
    radial-gradient(circle at 18% 35%, rgba(34, 197, 94, 0.16), transparent 38%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.22), rgba(20, 83, 45, 0.3)),
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
  background: rgba(20, 83, 45, 0.78);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.35);
  display: grid;
  place-items: center;
  box-shadow:
    0 0 24px rgba(34, 197, 94, 0.18),
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
    0 0 18px rgba(74, 222, 128, 0.25),
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
.leaf-card,
.data-table,
.outcome-card {
  background: linear-gradient(180deg, rgba(39, 46, 70, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 16px;
}

.application-card {
  padding: 1.8rem;
  transition: 0.25s ease;
}

.application-card:hover,
.outcome-card:hover {
  transform: translateY(-6px);
  border-color: rgba(74, 222, 128, 0.6);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.28),
    0 0 24px rgba(34, 197, 94, 0.12);
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

.green {
  background: rgba(20, 83, 45, 0.65);
  color: #4ade80;
}

.blue {
  background: rgba(30, 64, 175, 0.55);
  color: #60a5fa;
}

.amber {
  background: rgba(120, 53, 15, 0.6);
  color: #f59e0b;
}

.red {
  background: rgba(127, 29, 29, 0.6);
  color: #f87171;
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
  background: linear-gradient(to right, #15803d, #22c55e);
  color: #ffffff;
  font-weight: 700;
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

.table-header > div,
.table-row > div {
  padding: 1rem 1.25rem;
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
  color: #4ade80;
  font-size: 0.82rem;
  font-style: italic;
  padding: 1rem 1.25rem;
  border-top: 1px solid rgba(71, 85, 105, 0.75);
}

.solution-section {
  background: radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.08), transparent 38%), #0f172a;
  border-top: 1px solid rgba(71, 85, 105, 0.8);
  padding: 5rem 0;
}

.leaf-card {
  padding: 2.4rem;
}

.leaf-title {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.leaf-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(20, 83, 45, 0.65);
  color: #4ade80;
  display: grid;
  place-items: center;
  box-shadow: 0 0 18px rgba(34, 197, 94, 0.18);
}

.leaf-title h3 {
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.15rem);
  margin: 0;
}

.leaf-subtitle {
  color: #94a3b8;
  margin: 1rem 0 0.75rem;
}

.leaf-description {
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.leaf-card h4 {
  color: #4ade80;
  margin-bottom: 1rem;
}

.outcome-list {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}

.outcome-card {
  padding: 1.25rem;
  transition: 0.25s ease;
}

.outcome-card h5 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  margin: 0 0 0.75rem;
}

.outcome-card svg {
  width: 18px;
  height: 18px;
  color: #4ade80;
}

.outcome-card p {
  color: #cbd5e1;
  font-size: 0.86rem;
  line-height: 1.6;
  margin: 0 0 0.5rem;
}

.outcome-label {
  color: #67e8f9;
}

.benefit-label {
  color: #fcd34d;
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

.chips {
  display: flex;
  flex-wrap: wrap;
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
  border-color: rgba(74, 222, 128, 0.55);
  color: #ffffff;
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

  .leaf-card {
    padding: 1.7rem;
  }

  .table-row > div:first-child,
  .table-header > div:first-child {
    border-right: 0;
    border-bottom: 1px solid rgba(71, 85, 105, 0.75);
  }
}
</style>
