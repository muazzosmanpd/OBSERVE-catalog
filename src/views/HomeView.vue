<template>
  <main class="home-page">
    <!-- Hero -->
    <section
      class="hero-section"
      :style="{
        backgroundImage: `linear-gradient(rgba(15,23,42,.45), rgba(8,47,73,.45)), url(${backgroundImage})`,
      }"
    >
      <div class="hero-content">
        <div class="observe-real-logo">
          <img :src="observeLogo" alt="OBSERVE Powered by NiAT" class="observe-logo-img" />

          <svg class="orbit-svg" viewBox="0 0 200 200" preserveAspectRatio="none">
            <path
              id="observeOrbitPath"
              d="
                    M 25 120
                    C 40 80, 95 55, 145 55
                    C 175 65, 175 110, 145 145
                    C 95 175, 40 160, 25 120
                "
              fill="none"
            />

            <circle r="3.2" class="orbit-ball-svg">
              <animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto">
                <mpath href="#observeOrbitPath" />
              </animateMotion>
            </circle>
          </svg>
        </div>

        <h1>Enterprise Geospatial Intelligence Platform.</h1>
        <p>          
          OBSERVE™ is a geospatial web platform that delivers the latest high-resolution satellite and aerial imagery.
          Combined with customer and third-party data, it provides GIS-powered object identification, classification, and change detection for any location.
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="section services-section">
      <div class="section-header">
        <h2>Centralised Data Engine Ecosystem</h2>
        <p>
          OBSERVE™ handles the full pipeline—from data input, to processing and analytics, all the
          way to application development and data sharing.
        </p>
      </div>

      <div class="service-grid">
        <RouterLink
          v-for="service in services"
          :key="service.title"
          :to="service.link"
          class="service-card"
        >
          <div class="icon-box" :class="service.color">
            <component :is="service.icon" class="icon" />
          </div>

          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>

          <span class="learn-more">
            Learn more
            <ArrowRight class="arrow-icon" />
          </span>
        </RouterLink>
      </div>
    </section>

    <!-- Trusted Expertise -->
    <section class="trusted-section">

      <div>
        <h2>Trusted Expertise</h2>
        <p>
          As Brunei's leading geospatial and satellite services provider, we combine cutting-edge
          technology with over a decade of proven experience. Our OBSERVE™ platform delivers the
          insights you need to make informed decisions, monitor critical environments, and drive
          meaningful outcomes.
        </p>
      </div>
    </section>

    <section
      class="experience-section"
      :style="{
        backgroundImage: `url(${oneBruneiBackground})`,
      }">

      <div>
        <h2>OneBrunei Experience</h2>

        <p>
          OneBrunei is a nationwide geospatial information hub where the public can explore,
          discover and engage with information in a more intuitive and interactive way. It provides
          access to a wide range of datasets—from locations and infrastructure to points of
          interest—presented through a dynamic, map-based interface.
        </p>

        <RouterLink to="/coming-soon" class="experience-btn"> Explore OneBrunei </RouterLink>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="usecase-section">
      <div class="section-header">
        <h2>Explore Our Use Cases</h2>
        <p>
          Discover how OBSERVE™ delivers tailored solutions across diverse industries and sectors
        </p>
      </div>

      <div class="usecase-grid">
        <RouterLink v-for="item in useCases" :key="item.title" :to="item.link" class="usecase-card">
          <div class="usecase-icon" :class="item.bg">
            <component :is="item.icon" class="icon" :class="item.iconColor" />
          </div>
          <h3>{{ item.title }}</h3>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import oneBruneiBackground from '@/assets/Onebrunei.png'

import {
  Satellite,
  Map,
  Database,
  GraduationCap,
  ArrowRight,
  Sprout,
  Fish,
  Shield,
  Anchor,
  CloudRain,
  Building2,
} from 'lucide-vue-next'

import backgroundImage from '@/assets/45ab8286-018a-49e6-b644-5f203e8b4590.png'
import observeLogo from '@/assets/OBSERVE_logo_no_ball.png'

const services = [
  {
    icon: Satellite,
    title: 'Satellite Imagery Products',
    description:
      'High-resolution, multi-source satellite imagery supporting monitoring, spatial analysis, and mapping across diverse environments.',
    link: '/satellite-imagery',
    color: 'cyan',
  },
  {
    icon: Map,
    title: 'Geospatial Data Layers',
    description:
      'End-to-end geospatial processing services transforming raw data into meaningful, actionable insights for informed decision-making.',
    link: '/geospatial-data',
    color: 'teal',
  },
  {
    icon: Database,
    title: 'Data Processing Layers',
    description:
      'Comprehensive data services delivering reliable, up-to-date, and ready-to-use geospatial datasets from multiple sources.',
    link: '/data-processing',
    color: 'indigo',
  },
  {
    icon: GraduationCap,
    title: 'Capacity Development',
    description:
      'ArcGIS training, consultations, workshops, solution training and imagery analysis to empower your team.',
    link: '/capacity-development',
    color: 'orange',
  },
]

const useCases = [
  {
    title: 'Agriculture',
    icon: Sprout,
    link: '/use-cases/agriculture',
    bg: 'green-bg',
    iconColor: 'green-text',
  },
  {
    title: 'Aquaculture',
    icon: Fish,
    link: '/use-cases/aquaculture',
    bg: 'blue-bg',
    iconColor: 'blue-text',
  },
  {
    title: 'Defence',
    icon: Shield,
    link: '/use-cases/defence',
    bg: 'red-bg',
    iconColor: 'red-text',
  },
  {
    title: 'Maritime',
    icon: Anchor,
    link: '/use-cases/maritime',
    bg: 'cyan-bg',
    iconColor: 'cyan-text',
  },
  {
    title: 'Natural Disaster',
    icon: CloudRain,
    link: '/use-cases/natural-disaster',
    bg: 'orange-bg',
    iconColor: 'orange-text',
  },
  {
    title: 'Smart City',
    icon: Building2,
    link: '/use-cases/smart-city',
    bg: 'purple-bg',
    iconColor: 'purple-text',
  },
]
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #1e293b;
  color: #ffffff;
}

.home-page h1,
.home-page h2,
.home-page h3,
.home-page p {
  color: inherit;
}

.hero-section {
  min-height: 100svh;
  height: 100svh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  padding: 0.2rem 1rem 2rem;

  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;

  background:
    radial-gradient(circle at 50% 32%, rgba(6, 182, 212, 0.14), transparent 42%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.22), rgba(8, 47, 73, 0.35)),
    linear-gradient(90deg, rgba(2, 6, 23, 0.28), rgba(2, 6, 23, 0.08), rgba(2, 6, 23, 0.28));

  pointer-events: none;
}

.hero-section::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  height: 280px;

  background: linear-gradient(
    to bottom,
    rgba(30, 41, 59, 0) 0%,
    rgba(30, 41, 59, 0.08) 20%,
    rgba(30, 41, 59, 0.25) 45%,
    rgba(30, 41, 59, 0.55) 70%,
    rgba(30, 41, 59, 0.85) 90%,
    #1e293b 100%
  );

  pointer-events: none;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1080px;
  padding: 0;
  transform: translateY(1.5rem);
}

.hero-content h2 {
  font-size: clamp(1.15rem, 1.7vw, 1.55rem);
  margin: 0 0 0.8rem;
}

.hero-content p {
  max-width: 860px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.observe-real-logo {
  width: min(520px, 62vw);
  margin: 0 auto 2rem;
}

.observe-logo-img {
  width: 100%;
  height: auto;
  display: black;
  filter: drop-shadow(0 0 18px rgba(103, 232, 249, 0.18));
}

.orbit-svg {
  position: absolute;
  left: 19.4%;
  top: 1.1%;
  width: 15%;
  height: 52%;

  overflow: visible;
  pointer-events: none;

  transform: rotate(32deg);
  transform-origin: center;
}

#observeOrbitPath {
  opacity: 0;
}

.orbit-ball-svg {
  fill: #ffffff;
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 1))
    drop-shadow(0 0 14px rgba(103, 232, 249, 0.95)) drop-shadow(0 0 26px rgba(34, 211, 238, 0.6));
}

.section {
  max-width: 980px;
  margin: 0 auto;
  padding: 5.5rem 1rem;
}

.section-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 4rem;
}

.section-header h2,
.trusted-section h2 {
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.25rem);
  margin-bottom: 1rem;

}

.section-header p,
.trusted-section p,
.service-card p {
  color: #cbd5e1;
  line-height: 1.65;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
}

.service-card {
  background: linear-gradient(180deg, rgba(39, 46, 70, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 16px;
  min-height: 210px;
  padding: 2.25rem;
  text-decoration: none;
  color: white;
  transition: 0.25s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: rgba(34, 211, 238, 0.65);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.28),
    0 0 24px rgba(34, 211, 238, 0.12);
}

.icon-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  margin-bottom: 1.5rem;
}

.icon,
.arrow-icon {
  width: 22px;
  height: 22px;
}

.service-card h3 {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.service-card p {
  font-size: 0.9rem;
}

.learn-more {
  color: #22d3ee;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 0.9rem;
}

.service-card:hover .arrow-icon {
  transform: translateX(4px);
}

.arrow-icon {
  transition: transform 0.2s ease;
}

/* Services -> Trusted transition */
.services-section {
  position: relative;
  padding-bottom: 8rem;
  background: transparent;
  padding-bottom: 7rem;

  margin-top: -100px;
  z-index: 3;

  padding-top: 9rem;
}

.services-section::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -1px;
  width: 99vw;
  height: 220px;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, rgba(30, 41, 59, 0), #0f172a);
  pointer-events: none;
}

/* Trusted Expertise */
.trusted-section {
  position: relative;
  padding: 6rem 1rem 7rem;
  text-align: center;
  background: #0f172a;
  border: none;
  overflow: hidden;
}

.trusted-section::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 180px;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0), #0f172a);
  pointer-events: none;
  z-index: 2;
}

.trusted-section > div {
  position: relative;
  z-index: 3;
  max-width: 720px;
  margin: auto;
}

/* OneBrunei */
.experience-section {
  position: relative;
  padding: 7rem 1rem;
  text-align: center;
  overflow: hidden;
  border: none;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.experience-section::before {
  content: '';
  position: absolute;
  inset: -10px;
  background: inherit;
  filter: blur(6px);
  transform: none;
  z-index: 0;
}

.experience-section::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    #0f172a 0%,
    rgba(15, 23, 42, 0.82) 24%,
    rgba(8, 47, 73, 0.55) 50%,
    rgba(15, 23, 42, 0.82) 76%,
    #0f172a 100%
  );
  z-index: 1;
}

.experience-section > div {
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: auto;
}

.experience-section h2 {
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.25rem);
  margin-bottom: 1rem;
}

.experience-section p {
  color: #cbd5e1;
  line-height: 1.65;
  font-size: 1rem;
}
.usecase-section {
  padding: 5rem 1rem;
  background:
    linear-gradient(to bottom, #0f172a 0%, rgba(15, 23, 42, 0.92) 15%, rgba(15, 23, 42, 0.88) 100%),
    url('https://images.unsplash.com/photo-1460186136353-977e9d6085a1?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center;
  color: #ffffff;
}

.usecase-grid {
  max-width: 980px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.usecase-card {
  background: rgba(30, 41, 59, 0.88);
  border: 1px solid rgba(71, 85, 105, 0.9);
  border-radius: 14px;
  padding: 2rem;
  min-height: 125px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  transition: 0.25s ease;
  backdrop-filter: blur(8px);
}

.usecase-card:hover {
  transform: translateY(-5px);
  border-color: #22d3ee;
  box-shadow:
    0 18px 35px rgba(0, 0, 0, 0.25),
    0 0 24px rgba(34, 211, 238, 0.18);
}

.usecase-icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 auto 1rem;
}

.usecase-card h3 {
  font-size: 0.95rem;
  margin: 0;
}

.cyan {
  background: #164e63;
  color: #67e8f9;
}

.teal {
  background: #134e4a;
  color: #5eead4;
}

.indigo {
  background: #312e81;
  color: #a5b4fc;
}

.orange {
  background: #7c2d12;
  color: #fdba74;
}

.green-bg {
  background: rgba(20, 83, 45, 0.6);
}

.blue-bg {
  background: rgba(30, 64, 175, 0.6);
}

.red-bg {
  background: rgba(127, 29, 29, 0.6);
}

.cyan-bg {
  background: rgba(22, 78, 99, 0.6);
}

.orange-bg {
  background: rgba(124, 45, 18, 0.6);
}

.purple-bg {
  background: rgba(88, 28, 135, 0.6);
}

.green-text {
  color: #4ade80;
}

.blue-text {
  color: #60a5fa;
}

.red-text {
  color: #f87171;
}

.cyan-text {
  color: #22d3ee;
}

.orange-text {
  color: #fb923c;
}

.purple-text {
  color: #c084fc;
}

.experience-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
  padding: 0.9rem 1.8rem;

  border-radius: 999px;
  border: 1px solid rgba(34, 211, 238, 0.45);

  background: rgba(34, 211, 238, 0.08);
  backdrop-filter: blur(10px);

  color: #67e8f9;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.3px;

  transition: all 0.25s ease;
}

.experience-btn:hover {
  background: #22d3ee;
  color: #0f172a;

  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(34, 211, 238, 0.35);
}

.experience-btn-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.25s ease;
}

.experience-btn:hover .experience-btn-icon {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .service-grid,
  .usecase-grid {
    grid-template-columns: 1fr;
  }

  .hero-section {
    min-height: auto;
    padding: 0.15rem 1rem 2.5rem;
  }

  .hero-content {
    transform: none;
    margin-top: 1rem;
  }

  .observe-real-logo {
    width: min(390px, 74vw);
    margin-bottom: 1.2rem;
  }

  .hero-content h2 {
    font-size: 1.35rem;
    line-height: 1.25;
    margin-bottom: 1rem;
  }

  .hero-content p {
    max-width: 340px;
    margin: 0 auto;
    font-size: 0.9rem;
    line-height: 1.55;
  }

  .orbit-svg {
    display: none;
  }

  .section {
    padding: 4rem 1rem;
  }
  .orbit-svg {
    display: block;

    position: absolute;
    left: 14.7%;
    top: -5.5%;

    width: 15%;
    height: 46%;

    overflow: visible;
    pointer-events: none;

    transform: rotate(32deg);
    transform-origin: center;
  }
}

@media (min-width: 769px) and (max-height: 760px) {
  .hero-section {
    height: auto;
    min-height: 720px;
    padding: 6rem 1rem 3rem;
  }

  .hero-content {
    transform: translateY(0);
  }

  .observe-real-logo {
    width: min(500px, 62vw);
    margin-bottom: 1.6rem;
  }

  .hero-content h2 {
    font-size: 1.25rem;
  }

  .hero-content p {
    max-width: 760px;
    font-size: 0.88rem;
    line-height: 1.55;
  }
}
</style>
