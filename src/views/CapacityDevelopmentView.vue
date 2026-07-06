<template>
  <main class="capacity-page">
    <!-- Hero -->
    <section
      class="page-hero"
      :style="{
        backgroundImage: `linear-gradient(rgba(15,23,42,.8), rgba(124,45,18,.85)), url(${heroImage})`,
      }"
    >
      <div class="page-container hero-content">
        <div class="hero-title-row">
          <div class="hero-icon">
            <GraduationCap />
          </div>

          <h1>Capacity Development</h1>
        </div>

        <p>
          Empower your team with expert-led training and capacity development programs. From
          understanding GIS fundamentals to advanced imagery analysis, we provide the knowledge and
          skills your organization needs to excel in geospatial technology.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="page-container content-section">
      <h2>Training Services</h2>

      <div class="service-grid">
        <div v-for="service in services" :key="service.title" class="service-card">
          <div class="card-icon orange">
            <component :is="service.icon"/>
          </div>

          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>

      <!-- Training Programs -->
      <div class="program-card">
        <h2>Our Training Programs</h2>

        <div class="program-grid">
          <div v-for="program in programs" :key="program.title">
            <h3>{{ program.title }}</h3>

            <ul>
              <li v-for="item in program.items" :key="item">
                <span>•</span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="observe-slider">
        <button type="button" class="observe-slider-btn prev" @click="prevCapacitySlide">‹</button>

        <div class="observe-slider-media">
          <img
            :src="capacitySlides[activeCapacitySlide].image"
            :alt="capacitySlides[activeCapacitySlide].title"
          />
        </div>

        <div class="observe-slider-content">
          <h3>{{ capacitySlides[activeCapacitySlide].title }}</h3>
          <p>{{ capacitySlides[activeCapacitySlide].description }}</p>
        </div>

        <button type="button" class="observe-slider-btn next" @click="nextCapacitySlide">›</button>
      </div>

      <div class="observe-slider-dots">
        <button
          v-for="(slide, index) in capacitySlides"
          :key="slide.title"
          type="button"
          :class="{ active: activeCapacitySlide === index }"
          @click="activeCapacitySlide = index"
        ></button>
      </div>
      <!-- Benefits -->
      <div class="benefit-grid">
        <div v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, nextTick } from 'vue'

import { GraduationCap, Users, BookOpen, Lightbulb } from 'lucide-vue-next'
import heroImage from '@/assets/capacity/IMG_7007.jpg'
import training1 from '@/assets/capacity/1.jpeg'
import training2 from '@/assets/capacity/2.jpeg'
import training3 from '@/assets/capacity/3.jpeg'

const activeCapacitySlide = ref(0)

const capacitySlides = [
  {
    title: 'GIS Training & Technical Workshop',
    description:
      'Hands-on training sessions designed to strengthen geospatial knowledge, GIS workflows and practical technical skills.',
    image: training1,
  },
  {
    title: 'Satellite Imagery Analysis',
    description:
      'Capacity building focused on interpreting satellite imagery, remote sensing outputs and spatial intelligence products.',
    image: training2,
  },
  {
    title: 'Collaborative Learning Sessions',
    description:
      'Interactive workshops that support organizational adoption of geospatial systems and OBSERVE™ solutions.',
    image: training3,
  },
]

const nextCapacitySlide = () => {
  activeCapacitySlide.value = (activeCapacitySlide.value + 1) % capacitySlides.length
}

const prevCapacitySlide = () => {
  activeCapacitySlide.value =
    (activeCapacitySlide.value - 1 + capacitySlides.length) % capacitySlides.length
}

const services = [
  {
    icon: BookOpen,
    title: 'GIS Training',
    description:
      'Comprehensive training programs covering the full GIS-integrated platform, from fundamentals to advanced techniques.',
  },
  {
    icon: Users,
    title: 'Workshops & Consultations',
    description:
      "Interactive workshops and expert consultations tailored to your organization's specific needs and challenges.",
  },
  {
    icon: Lightbulb,
    title: 'Solution Training',
    description:
      'Hands-on training for implementing and optimizing geospatial solutions within your organization.',
  },
]

const programs = [
  {
    title: 'GIS-integrated Platform Training',
    items: [
      "Fundamentals and advanced techniques for today's GIS platforms",
      'Online geospatial web mapping',
      'Spatial analysis and geoprocessing',
      'Custom application development',
    ],
  },
  {
    title: 'Imagery Analysis',
    items: [
      'Satellite image interpretation',
      'Remote sensing techniques',
      'Change detection and monitoring',
      'Classification and feature extraction',
    ],
  },
]

const benefits = [
  {
    title: 'Expert Instructors',
    description:
      'Learn from experienced professionals with over a decade of hands-on expertise in geospatial technology and real-world project implementation.',
  },
  {
    title: 'Tailored Content',
    description:
      "Training programs customized to your organization's specific use cases, skill levels, and operational requirements for maximum relevance and impact.",
  },
  {
    title: 'Hands-On Learning',
    description:
      'Practical, interactive sessions with real-world examples and exercises to ensure participants can immediately apply their new skills.',
  },
  {
    title: 'Ongoing Support',
    description:
      'Continued consultation and support after training to help your team overcome challenges and optimize their use of geospatial technology.',
  },
]
</script>

<style scoped>
.capacity-page {
  min-height: 100vh;
  background: #1e293b;
  color: #ffffff;
}

.capacity-page h1,
.capacity-page h2,
.capacity-page h3,
.capacity-page p {
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
    radial-gradient(circle at 18% 35%, rgba(251, 146, 60, 0.16), transparent 38%),
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
  background: rgba(124, 45, 18, 0.78);
  color: #fdba74;
  border: 1px solid rgba(253, 186, 116, 0.35);
  display: grid;
  place-items: center;
  box-shadow:
    0 0 24px rgba(251, 146, 60, 0.18),
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
    0 0 18px rgba(253, 186, 116, 0.25),
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

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  margin-bottom: 3.5rem;
}

.service-card,
.program-card,
.benefit-card {
  background: linear-gradient(180deg, rgba(39, 46, 70, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 16px;
}

.service-card {
  padding: 1.8rem;
  transition: 0.25s ease;
}

.service-card:hover,
.benefit-card:hover {
  transform: translateY(-6px);
  border-color: rgba(253, 186, 116, 0.6);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.28),
    0 0 24px rgba(251, 146, 60, 0.12);
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

.orange {
  background: #7c2d12;
  color: #fdba74;
}

.service-card h3 {
  color: #ffffff;
  font-size: 1.15rem;
  margin: 0 0 0.8rem;
}

.service-card p,
.benefit-card p {
  color: #cbd5e1;
  line-height: 1.7;
  margin: 0;
}

.program-card {
  padding: 2.2rem;
  margin-bottom: 3rem;
}

.program-card h2 {
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.15rem);
  margin: 0 0 1.6rem;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.program-grid h3,
.benefit-card h3 {
  color: #fdba74;
  font-size: 1.15rem;
  margin: 0 0 1rem;
}

.program-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.program-grid li {
  color: #cbd5e1;
  margin-bottom: 0.75rem;
  line-height: 1.65;
}

.program-grid li span {
  color: #fb923c;
  margin-right: 0.45rem;
  font-weight: 700;
}

.benefit-grid {
  display: grid;
  padding-top: 2rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.benefit-card {
  padding: 1.8rem;
  transition: 0.25s ease;
}
.capacity-showcase-card {
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 28px;
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(251, 146, 60, 0.22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.28);
}

.showcase-header {
  max-width: 760px;
  margin-bottom: 1.5rem;
}

.showcase-header span {
  color: #fb923c;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
}

.showcase-header h2 {
  margin: 0.35rem 0;
  color: white;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
}

.showcase-header p {
  color: #cbd5e1;
  line-height: 1.7;
}

.observe-slider {
  position: relative;
  overflow: hidden;
  border-radius: 18px;

  background: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(251, 146, 60, 0.28);

  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.28);
}

.observe-slider-media {
  width: 100%;
  aspect-ratio: 16 / 7.5;
  overflow: hidden;
  background: #020617;
}

.observe-slider-media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.observe-slider-content {
  padding: 2rem 2.5rem 2.5rem;
}

.observe-slider-content h3 {
  margin: 0 0 1rem;
  color: #fb923c;
  font-size: clamp(1.4rem, 3vw, 2rem);
}

.observe-slider-content p {
  margin: 0;
  color: #e5e7eb;
  font-size: 1.05rem;
  line-height: 1.7;
}

.observe-slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;

  width: 44px;
  height: 44px;

  border-radius: 999px;
  border: 1px solid rgba(251, 146, 60, 0.45);

  background: rgba(15, 23, 42, 0.9);
  color: #fb923c;

  font-size: 1.8rem;
  cursor: pointer;
}

.observe-slider-btn.prev {
  left: 1rem;
}

.observe-slider-btn.next {
  right: 1rem;
}

.observe-slider-dots {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
}

.observe-slider-dots button {
  width: 10px;
  height: 10px;
  border: 0;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.45);
  cursor: pointer;
}

.observe-slider-dots button.active {
  width: 34px;
  background: #fb923c;
  box-shadow: 0 0 18px rgba(251, 146, 60, 0.45);
}

@media (max-width: 900px) {
  .service-grid,
  .program-grid,
  .benefit-grid {
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

  .program-card,
  .benefit-card {
    padding: 1.6rem;
  }
}

@media (max-width: 768px) {
  .capacity-showcase-card {
    margin-top: 2rem;
  }

  .observe-slider-media {
    aspect-ratio: 4 / 3;
  }

  .observe-slider-content {
    padding: 1.25rem;
  }

  .observe-slider-btn {
    width: 38px;
    height: 38px;
    font-size: 1.5rem;
  }
}
</style>
