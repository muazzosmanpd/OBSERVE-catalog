<template>
  <main class="geospatial-page">
    <!-- Hero -->
    <section
      class="page-hero"
      :style="{
        backgroundImage: `linear-gradient(rgba(15,23,42,.75), rgba(8,47,73,.75)), url(${backgroundImage})`,
      }"
    >
      <div class="page-container hero-content">
        <div class="hero-title-row">
          <div class="hero-icon">
            <Map />
          </div>

          <h1>Geospatial Data Layers</h1>
        </div>

        <p>
          End-to-end geospatial processing services that transform raw data into meaningful,
          actionable insights. Enable your organization to understand patterns, monitor changes, and
          support informed decision-making across various operational scenarios.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="page-container content-section">
      <h2>Key Capabilities</h2>

      <div class="feature-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="card-icon teal">
            <component :is="feature.icon" />
          </div>

          <h3>{{ feature.title }}</h3>

          <p>
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- What We Deliver -->
      <div class="deliver-card">
        <h2>What We Deliver</h2>

        <div class="deliver-grid">
          <div>
            <h3>Data Processing</h3>
            <p>
              Comprehensive end-to-end processing of geospatial data from acquisition to final
              deliverable, ensuring quality and accuracy at every step.
            </p>
          </div>

          <div>
            <h3>Spatial Analysis</h3>
            <p>
              Advanced analytical techniques to extract meaningful insights from complex spatial
              datasets and support evidence-based decision-making.
            </p>
          </div>

          <div>
            <h3>Custom Mapping</h3>
            <p>
              Tailored mapping solutions designed to meet your specific operational requirements and
              visualization needs.
            </p>
          </div>

          <div>
            <h3>Integration Services</h3>
            <p>
              Seamless integration of geospatial data layers into your existing systems and
              workflows for maximum efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Map, TrendingUp, MapPin, BarChart3 } from 'lucide-vue-next'

import backgroundImage from '@/assets/Geospatial_data_layer_background.jpg'

const features = [
  {
    icon: TrendingUp,
    title: 'Pattern Recognition',
    description:
      'Advanced analysis to identify spatial patterns and trends across your data for deeper insights.',
  },
  {
    icon: MapPin,
    title: 'Change Monitoring',
    description:
      'Track and monitor changes over time with precision geospatial analysis and reporting.',
  },
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    description:
      'Transform raw geospatial data into meaningful, decision-ready information for your organization.',
  },
]

const dataTypes = [
  'Administrative Boundary (National, District, Mukim, Region, etc.)',
  'Ports & Jetties',
  'Waterways & Waterbodies',
  'AIS / ADS-B',
  'Hydrographic data (Water level, salinity, temperature, current, tidal, etc.)',
  'DEM / Bathymetry / Contour',
  'Demographic Data*',
  'Major POIs (industrial area, treatment plants, landfill, etc.)',
]
</script>

<style scoped>
.geospatial-page {
  min-height: 100vh;
  background: #1e293b;
  color: #ffffff;
}

.geospatial-page h1,
.geospatial-page h2,
.geospatial-page h3,
.geospatial-page p {
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
    radial-gradient(circle at 18% 35%, rgba(20, 184, 166, 0.16), transparent 38%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.22), rgba(8, 47, 73, 0.38)),
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
  background: rgba(19, 78, 74, 0.78);
  color: #5eead4;
  border: 1px solid rgba(94, 234, 212, 0.35);
  display: grid;
  place-items: center;
  box-shadow:
    0 0 24px rgba(20, 184, 166, 0.18),
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
    0 0 18px rgba(94, 234, 212, 0.25),
    0 8px 28px rgba(0, 0, 0, 0.35);
}

.hero-content p {
  color: #e2e8f0;
  font-size: clamp(1rem, 1.3vw, 1.18rem);
  max-width: 780px;
  line-height: 1.75;
  margin: 0;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
}

.content-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.content-section > h2,
.data-section h2 {
  color: #ffffff;
  margin-bottom: 2.4rem;
  font-size: clamp(1.8rem, 3vw, 2.25rem);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  margin-bottom: 3.5rem;
}

.feature-card,
.deliver-card {
  background: linear-gradient(180deg, rgba(39, 46, 70, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 16px;
  color: #ffffff;
}

.feature-card {
  padding: 1.8rem;
  transition: 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  border-color: rgba(94, 234, 212, 0.65);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.28),
    0 0 24px rgba(20, 184, 166, 0.12);
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  margin-bottom: 1.2rem;
}

.card-icon svg {
  width: 24px;
  height: 24px;
}

.teal {
  background: #134e4a;
  color: #5eead4;
}

.feature-card h3 {
  color: #ffffff;
  margin: 0 0 0.8rem;
  font-size: 1.15rem;
}

.feature-card p {
  color: #cbd5e1;
  line-height: 1.65;
  margin: 0;
}

.deliver-card {
  padding: 2.4rem 2.5rem;
  margin-bottom: 4rem;
}

.deliver-card h2 {
  color: #ffffff;
  margin: 0 0 2rem;
  font-size: clamp(1.8rem, 3vw, 2.15rem);
}

.deliver-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.deliver-grid h3 {
  color: #5eead4;
  margin: 0 0 0.75rem;
}

.deliver-grid p {
  color: #cbd5e1;
  line-height: 1.7;
  margin: 0;
}

.data-table {
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(71, 85, 105, 0.9);
  background: #0f172a;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);
}

.table-header {
  height: 32px;
  background: linear-gradient(to right, #06b6d4, #14b8a6);
}

.table-row {
  background: rgba(15, 23, 42, 0.96);
  padding: 1rem 1.25rem;
  color: #cbd5e1;
  border-top: 1px solid rgba(71, 85, 105, 0.75);
  transition: 0.2s ease;
}

.table-row:hover {
  background: rgba(30, 41, 59, 0.98);
  color: #ffffff;
}

.table-footer {
  background: #020617;
  padding: 1rem 1.25rem;
  color: #5eead4;
  font-style: italic;
  font-size: 0.85rem;
  border-top: 1px solid rgba(71, 85, 105, 0.75);
}

@media (max-width: 900px) {
  .feature-grid,
  .deliver-grid {
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

  .deliver-card {
    padding: 1.8rem;
  }
}
</style>
