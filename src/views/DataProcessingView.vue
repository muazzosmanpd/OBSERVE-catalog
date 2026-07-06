<template>
  <main class="data-processing-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-container hero-content">
        <div class="hero-title-row">
          <div class="hero-icon">
            <Database />
          </div>

          <h1>Data Processing Layers</h1>
        </div>

        <p>
          Comprehensive data services that deliver reliable, up-to-date, and ready-to-use geospatial
          datasets from multiple sources including in-house development. Access curated data
          products that save time and enhance your analytical capabilities.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="page-container content-section">
      <h2>Key Capabilities</h2>

      <div class="feature-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="card-icon indigo">
            <component :is="feature.icon" />
          </div>

          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>

      <!-- Data Products -->
      <div class="products-card">
        <h2>Available Data Products</h2>

        <div class="product-list">
          <div v-for="product in products" :key="product.title" class="product-item">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>

      <!-- Advantages -->
      <div class="advantage-grid">
        <div v-for="advantage in advantages" :key="advantage.title" class="advantage-card">
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Database, Layers, RefreshCw, Shield } from 'lucide-vue-next'

const features = [
  {
    icon: Layers,
    title: 'Multi-Source Integration',
    description:
      'Combine and process geospatial data from various sources including in-house development and third-party providers.',
  },
  {
    icon: RefreshCw,
    title: 'Regular Updates',
    description:
      'Maintain up-to-date datasets with regular refresh cycles ensuring you always have current information.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description:
      'Rigorous quality control processes to deliver reliable, accurate, and ready-to-use geospatial datasets.',
  },
]

const products = [
  {
    title: 'Basemaps and Terrain Data',
    description:
      'High-quality basemaps, digital elevation models, and terrain datasets for comprehensive spatial context.',
  },
  {
    title: 'Land Use and Land Cover',
    description:
      'Detailed classification datasets showing land use patterns and land cover types across your area of interest.',
  },
  {
    title: 'Infrastructure Layers',
    description:
      'Comprehensive datasets of roads, buildings, utilities, and other critical infrastructure elements.',
  },
  {
    title: 'Environmental Data',
    description:
      'Specialized datasets for environmental monitoring including vegetation indices, water bodies, and more.',
  },
]

const advantages = [
  {
    title: 'Time-Saving',
    description:
      'Skip the time-consuming data collection and processing steps. Access ready-to-use datasets that integrate seamlessly into your workflows.',
  },
  {
    title: 'Cost-Effective',
    description:
      'Reduce infrastructure and processing costs by leveraging our curated data products instead of maintaining your own data processing pipelines.',
  },
]
</script>

<style scoped>
.data-processing-page {
  min-height: 100vh;
  background: #1e293b;
  color: #ffffff;
}

.data-processing-page h1,
.data-processing-page h2,
.data-processing-page h3,
.data-processing-page p {
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
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(49, 46, 129, 0.88));
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 35%, rgba(99, 102, 241, 0.22), transparent 32%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.58), rgba(49, 46, 129, 0.35));
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
  background: rgba(49, 46, 129, 0.78);
  color: #a5b4fc;
  border: 1px solid rgba(165, 180, 252, 0.35);
  display: grid;
  place-items: center;
  box-shadow:
    0 0 24px rgba(99, 102, 241, 0.18),
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
    0 0 18px rgba(165, 180, 252, 0.25),
    0 8px 28px rgba(0, 0, 0, 0.35);
}

.hero-content p {
  color: #e2e8f0;
  font-size: clamp(1rem, 1.3vw, 1.18rem);
  max-width: 780px;
  line-height: 1.75;
  margin: 0;
}

.content-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.content-section > h2 {
  color: #ffffff;
  margin-bottom: 2.5rem;
  font-size: clamp(1.8rem, 3vw, 2.25rem);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  margin-bottom: 3.5rem;
}

.feature-card,
.products-card,
.advantage-card {
  background: linear-gradient(180deg, rgba(39, 46, 70, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 16px;
}

.feature-card {
  padding: 1.8rem;
  transition: 0.25s ease;
}

.feature-card:hover,
.advantage-card:hover {
  transform: translateY(-6px);
  border-color: rgba(165, 180, 252, 0.6);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.28),
    0 0 24px rgba(99, 102, 241, 0.12);
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  margin-bottom: 1rem;
}

.card-icon svg {
  width: 24px;
  height: 24px;
}

.indigo {
  background: #312e81;
  color: #a5b4fc;
}

.feature-card h3 {
  color: #ffffff;
  font-size: 1.15rem;
  margin: 0 0 0.8rem;
}

.feature-card p,
.product-item p,
.advantage-card p {
  color: #cbd5e1;
  line-height: 1.7;
  margin: 0;
}

.products-card {
  padding: 2.2rem;
  margin-bottom: 3rem;
}

.products-card h2 {
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.15rem);
  margin: 0 0 1.5rem;
}

.product-list {
  display: grid;
  gap: 1rem;
}

.product-item {
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  transition: 0.2s ease;
}

.product-item:hover {
  border-color: rgba(165, 180, 252, 0.4);
}

.product-item h3 {
  color: #a5b4fc;
  font-size: 1.15rem;
  margin: 0 0 0.5rem;
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.advantage-card {
  padding: 1.8rem;
  transition: 0.25s ease;
}

.advantage-card h3 {
  color: #a5b4fc;
  font-size: 1.15rem;
  margin: 0 0 1rem;
}

@media (max-width: 900px) {
  .feature-grid,
  .advantage-grid {
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

  .products-card,
  .advantage-card {
    padding: 1.6rem;
  }
}
</style>
