<template>
  <main class="brochure-page">
    <div class="print-toolbar">
      <RouterLink to="/" class="back-link">Back to Catalogue</RouterLink>

      <button type="button" class="print-btn" :disabled="isDownloading" @click="downloadPdf">
        {{ isDownloading ? 'Generating PDF...' : 'Download PDF' }}
      </button>
    </div>
    <div class="brochure-document-wrapper">
      <div ref="brochureRef" class="brochure-document">
        <!-- Cover -->
        <section class="cover-page page">
          <div class="cover-pattern"></div>

          <img :src="observeLogo" alt="OBSERVE" class="cover-logo" />

          <h1>OBSERVE™ Catalogue</h1>
          <p>Geospatial and Satellite Services Excellence in Brunei</p>

          <div class="cover-divider"></div>

          <div class="cover-footer">
            <strong>Powered by NiAT</strong>
            <span>Network Integrity Assurance Technologies Sdn Bhd</span>
          </div>
        </section>

        <!-- Contents -->
        <section class="brochure-section page">
          <div class="section-kicker">Contents</div>
          <h2>Catalogue Contents</h2>

          <div class="contents-list">
            <div v-for="item in contents" :key="item.no" class="contents-item">
              <span>{{ item.no }}</span>
              <strong>{{ item.title }}</strong>
            </div>
          </div>
        </section>

        <!-- Overview -->
        <section class="brochure-section page">
          <div class="section-kicker">01 / Overview</div>
          <h2>About OBSERVE™</h2>

          <p>
            OBSERVE™ is a geospatial web-based application that allows users to access and explore
            high-resolution satellite and aerial earth imagery. The platform can be configured to
            identify, classify and detect objects and changes on specified locations on earth.
          </p>

          <div class="highlight-box">
            <h3>Centralised Data Engine Ecosystem</h3>
            <p>
              From data input, processing and analytics, to application development and data
              sharing.
            </p>
          </div>
        </section>

        <!-- Satellite -->
        <section class="brochure-section page">
          <div class="section-kicker">02 / Satellite Imagery</div>
          <h2>Satellite Imagery & Remote Sensing</h2>

          <p>
            High-resolution, multi-source satellite imagery to support monitoring, spatial analysis,
            and mapping across diverse environments.
          </p>

          <div class="card-grid">
            <div v-for="item in satelliteItems" :key="item.title" class="brochure-card">
              <span class="card-dot"></span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </section>

        <!-- Geospatial Data -->
        <section class="brochure-section page">
          <div class="section-kicker">03 / Geospatial Data</div>
          <h2>Geospatial Data Layers</h2>

          <p>
            End-to-end geospatial processing services that transform raw data into meaningful,
            actionable insights and support informed decision-making.
          </p>

          <div class="card-grid">
            <div v-for="item in geospatialItems" :key="item.title" class="brochure-card">
              <span class="card-dot"></span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </section>

        <!-- Data Processing -->
        <section class="brochure-section page">
          <div class="section-kicker">04 / Data Processing</div>
          <h2>Data Processing Layers</h2>

          <p>
            Reliable data processing services that prepare, standardize and transform multiple data
            sources into ready-to-use geospatial information.
          </p>

          <div class="card-grid">
            <div v-for="item in processingItems" :key="item.title" class="brochure-card">
              <span class="card-dot"></span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </section>

        <!-- Capacity Development -->
        <section class="brochure-section page">
          <div class="section-kicker">05 / Capacity Development</div>
          <h2>Capacity Development</h2>

          <p>
            Expert-led training, consultations, workshops and solution-based learning programmes to
            empower teams in GIS, imagery analysis and geospatial technology.
          </p>

          <div class="card-grid">
            <div v-for="item in capacityItems" :key="item.title" class="brochure-card">
              <span class="card-dot"></span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </section>

        <!-- Use Cases -->
        <section class="brochure-section page">
          <div class="section-kicker">06 / Use Cases</div>
          <h2>Use Cases</h2>

          <div class="card-grid">
            <div v-for="useCase in useCases" :key="useCase.title" class="brochure-card">
              <span class="card-dot"></span>
              <h3>{{ useCase.title }}</h3>
              <p>{{ useCase.description }}</p>
            </div>
          </div>
        </section>

        <!-- Solutions Page 1 -->
        <section class="brochure-section page">
          <div class="section-kicker">07 / Solutions</div>
          <h2>OBSERVE™ Solutions</h2>

          <div class="solution-list compact">
            <div
              v-for="solution in solutions.slice(0, 6)"
              :key="solution.name"
              class="solution-item"
            >
              <div>
                <h3>{{ solution.name }}</h3>
                <strong>{{ solution.fullName }}</strong>
              </div>

              <p>{{ solution.description }}</p>
            </div>
          </div>
        </section>

        <!-- Solutions Page 2 -->
        <section class="brochure-section page">
          <div class="section-kicker">07 / Solutions</div>
          <h2>OBSERVE™ Solutions</h2>

          <div class="solution-list compact">
            <div v-for="solution in solutions.slice(6)" :key="solution.name" class="solution-item">
              <div>
                <h3>{{ solution.name }}</h3>
                <strong>{{ solution.fullName }}</strong>
              </div>

              <p>{{ solution.description }}</p>
            </div>
          </div>
        </section>

        <!-- Contact -->
        <section class="contact-section page">
          <img :src="niatLogo" alt="NiAT" class="niat-logo" />

          <h2>Contact Us</h2>

          <p>
            Unit 28, 29 & 30, Block C, 1st Floor, Muhibbah Complex II, Jalan Gadong, Bandar Seri
            Begawan BE 3919, Brunei Darussalam.
          </p>

          <p><strong>Phone:</strong> +673 238 4660</p>
          <p><strong>Website:</strong> niat.com.bn</p>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import observeLogo from '@/assets/OBSERVE_logo_b_w.png'
import niatLogo from '@/assets/NiAT-light.png'

const brochureRef = ref(null)
const isDownloading = ref(false)

const downloadPdf = async () => {
  if (!brochureRef.value) return

  isDownloading.value = true

  try {
    await nextTick()

    if (document.fonts?.ready) {
      await document.fonts.ready
    }

    brochureRef.value.classList.add('pdf-export')

    const pdf = new jsPDF('p', 'mm', 'a4', true)
    const pages = brochureRef.value.querySelectorAll('.page')

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], {
        scale: 2.5,
        useCORS: true,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
      })

      const imgData = canvas.toDataURL('image/jpeg', 0.92)

      if (i > 0) {
        pdf.addPage('a4', 'portrait')
      }

      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'MEDIUM')
    }

    pdf.save('OBSERVE-Catalogue.pdf')
  } finally {
    brochureRef.value?.classList.remove('pdf-export')
    isDownloading.value = false
  }
}
const contents = [
  { no: '01', title: 'Overview' },
  { no: '02', title: 'Satellite Imagery & Remote Sensing' },
  { no: '03', title: 'Geospatial Data Layers' },
  { no: '04', title: 'Data Processing Layers' },
  { no: '05', title: 'Capacity Development' },
  { no: '06', title: 'Use Cases' },
  { no: '07', title: 'OBSERVE™ Solutions' },
  { no: '08', title: 'Contact Us' },
]

const satelliteItems = [
  {
    title: 'High-Resolution Imagery',
    description: 'Access multi-source satellite imagery with exceptional detail and clarity.',
  },
  {
    title: 'Optical & Radar Data',
    description: 'Support for optical, thermal, SAR, multispectral and hyperspectral data.',
  },
  {
    title: 'Change Detection',
    description: 'Monitor temporal changes across urban, agricultural and natural landscapes.',
  },
  {
    title: 'Multi-Environment Coverage',
    description: 'Support monitoring and mapping across diverse environments.',
  },
]

const geospatialItems = [
  {
    title: 'Pattern Recognition',
    description: 'Identify spatial patterns and trends across geospatial datasets.',
  },
  {
    title: 'Change Monitoring',
    description: 'Track and monitor changes over time with geospatial analysis.',
  },
  {
    title: 'Actionable Insights',
    description: 'Transform raw geospatial data into decision-ready information.',
  },
  {
    title: 'Custom Mapping',
    description: 'Tailored mapping solutions for operational and analytical needs.',
  },
]

const processingItems = [
  {
    title: 'Data Standardization',
    description: 'Prepare and standardize geospatial datasets for operational readiness.',
  },
  {
    title: 'Quality Control',
    description: 'Improve data accuracy, completeness and reliability.',
  },
  {
    title: 'Multi-Source Integration',
    description: 'Integrate datasets from satellite imagery, feature layers and external sources.',
  },
  {
    title: 'Ready-to-Use Products',
    description: 'Deliver clean, structured and usable geospatial data products.',
  },
]

const capacityItems = [
  {
    title: 'GIS Training',
    description: 'Hands-on training for GIS fundamentals, workflows and applied geospatial use.',
  },
  {
    title: 'Imagery Analysis',
    description: 'Capacity building for satellite imagery interpretation and analysis.',
  },
  {
    title: 'Workshops',
    description: 'Expert-led technical workshops for organizations and project teams.',
  },
  {
    title: 'Solution Training',
    description: 'Training tailored to OBSERVE™ solutions and client-specific workflows.',
  },
]

const useCases = [
  {
    title: 'Agriculture',
    description: 'Crop health, irrigation, yield prediction and land suitability analysis.',
  },
  {
    title: 'Aquaculture',
    description: 'Water quality monitoring, algal bloom detection and coastal monitoring.',
  },
  {
    title: 'Defence',
    description: 'Border surveillance, threat detection and tactical intelligence.',
  },
  {
    title: 'Maritime',
    description: 'Maritime domain awareness, vessel intelligence and IUU monitoring.',
  },
  {
    title: 'Natural Disaster Management',
    description: 'Flood mapping, wildfire detection and emergency coordination.',
  },
  {
    title: 'Smart City Infrastructure',
    description: 'Urban growth, infrastructure, heat island and air quality monitoring.',
  },
]

const solutions = [
  {
    name: 'LEAF',
    fullName: 'Land Experience for Agri Fields',
    description: 'Agricultural monitoring and land suitability solution.',
    market: 'Agriculture departments, farms and planners.',
  },
  {
    name: 'CORAL',
    fullName: 'Coastal Observation & Red Tide Locator',
    description: 'Harmful algal bloom detection and coastal monitoring.',
    market: 'Aquaculture farms, fisheries and coastal communities.',
  },
  {
    name: 'JERNIH',
    fullName: 'Jaringan EO & Remote-sensing National Integration Hydrology',
    description: 'Water quality monitoring using EO, IoT and GIS dashboards.',
    market: 'Fisheries, health agencies and environmental protection.',
  },
  {
    name: 'MDA',
    fullName: 'Maritime Domain Awareness',
    description: 'Near real-time maritime visibility and intelligence platform.',
    market: 'Maritime authorities, ports, navy and fisheries.',
  },
  {
    name: 'MDA-IUU',
    fullName: 'MDA-IUU Monitoring Platform',
    description:
      'Detects and monitors Illegal, Unreported and Unregulated fishing activities through vessel tracking, geospatial analytics and maritime intelligence.',
    market: 'Fisheries departments, maritime authorities, coast guards and enforcement agencies.',
  },

  {
    name: 'SAFER',
    fullName: 'Spatial Analytics for Environmental Risk',
    description: 'Environmental risk monitoring for air, land and marine events.',
    market: 'Maritime, oil and gas, logistics and transport.',
  },
  {
    name: 'BRAVE',
    fullName: 'Brunei Response & Action for Vital Emergencies',
    description: 'Emergency management platform with GIS live mapping and dispatch support.',
    market: 'Fire and Rescue, disaster management and emergency services.',
  },
  {
    name: 'FALCON',
    fullName: 'Field Analytics & Live Command Operation Network',
    description:
      'Integrated geospatial intelligence and command operations platform supporting live asset tracking, ISR integration, terrain analysis and command coordination.',
    market: 'Defence organizations, military operations centres and security agencies.',
  },
  {
    name: 'MataGrid',
    fullName: 'Solar Panel Suitability Assessment Platform',
    description: 'Solar panel suitability assessment using spatial and solar data.',
    market: 'Homeowners, developers and energy companies.',
  },
  {
    name: 'PIPEWISE',
    fullName: 'Pipeline Intelligence & Early Warning System',
    description: 'Pipeline monitoring, leak detection and predictive maintenance.',
    market: 'Utilities, public works, oil and gas.',
  },
]
</script>

<style scoped>
:root {
  --observe-green: #3aab48;
  --observe-blue: #286ba6;
  --observe-dark: #0f172a;
}

.brochure-page {
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(40, 107, 166, 0.14), transparent 32%), #e5e7eb;
  color: #0f172a;
  font-family: Inter, Arial, sans-serif;
}

.print-toolbar {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: linear-gradient(90deg, #0f172a 0%, #16324a 50%, #1d4f2d 100%);

  border-bottom: 1px solid rgba(58, 171, 72, 0.25);

  padding: 0.85rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 6px 24px rgba(15, 23, 42, 0.35);
}

.back-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}

.back-link:hover {
  color: #3aab48;
}

.print-btn {
  background: linear-gradient(135deg, #3aab48, #286ba6);
  color: white;
  border: 0;
  border-radius: 999px;
  padding: 0.75rem 1.25rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(40, 107, 166, 0.28);
}

.print-btn:disabled {
  opacity: 0.7;
  cursor: wait;
}

.brochure-document {
  width: 210mm;
  margin: 2rem auto;
  display: grid;
  gap: 2rem;
}

.page {
  width: 210mm;
  height: 297mm;
  overflow: hidden;
  background: #ffffff;
  box-shadow:
    0 24px 70px rgba(15, 23, 42, 0.18),
    0 0 0 1px rgba(148, 163, 184, 0.25);
}

.cover-page {
  position: relative;
  overflow: hidden;

  background:
    radial-gradient(circle at 80% 20%, rgba(58, 171, 72, 0.35), transparent 35%),
    linear-gradient(145deg, #020617 0%, #0f172a 35%, #1d4f2d 65%, #3aab48 100%);

  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  text-align: center;
  padding: 34mm 24mm;
}

.cover-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(2, 6, 23, 0.35), rgba(2, 6, 23, 0.55));
  z-index: 0;
}

.cover-pattern,
.cover-logo,
.cover-page h1,
.cover-page p,
.cover-divider,
.cover-footer {
  position: relative;
  z-index: 1;
}

.cover-pattern {
  position: absolute;
  inset: 18mm;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 28px;
}

.cover-logo {
  width: 95mm;
  max-width: 100%;
  position: relative;
  z-index: 1;
}

.cover-page h1 {
  position: relative;
  z-index: 1;
  font-size: 30pt;
  margin: 0.5rem 0 0;
  letter-spacing: -0.04em;
}

.cover-page p {
  position: relative;
  z-index: 1;
  font-size: 13pt;
  color: #dbeafe;
}

.cover-divider {
  position: relative;
  z-index: 1;
  width: 70px;
  height: 4px;
  background: linear-gradient(90deg, #3aab48, #286ba6);
  border-radius: 999px;
  margin: 1rem 0;
}

.cover-footer {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 0.35rem;
  color: #e5e7eb;
}

.brochure-section,
.contact-section {
  padding: 24mm;
}

.section-kicker {
  color: #286ba6;
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
}

.brochure-section h2,
.contact-section h2 {
  font-size: 24pt;
  margin: 0 0 1rem;
  color: var(--observe-dark);

  letter-spacing: -0.04em;
}

.brochure-section h2::after,
.contact-section h2::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #3aab48, #286ba6, transparent);
  margin-top: 0.65rem;
}

.brochure-section p,
.brochure-section li,
.contact-section p {
  color: #334155;
  font-size: 10.5pt;
  line-height: 1.7;
}

.contents-list {
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
}

.contents-item {
  display: grid;
  grid-template-columns: 48px 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border: 1px solid rgba(40, 107, 166, 0.18);
  border-radius: 16px;
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}

.contents-item span {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  background: linear-gradient(135deg, #3aab48, #286ba6);
  color: #ffffff;
  display: grid;
  place-items: center;
  font-weight: 800;
}

.contents-item strong {
  color: var(--observe-dark);
  font-size: 1rem;
}

.highlight-box {
  margin-top: 1.5rem;
  background: linear-gradient(135deg, rgba(58, 171, 72, 0.08), rgba(40, 107, 166, 0.08));
  border: 1px solid rgba(40, 107, 166, 0.18);
  border-left: 6px solid var(--observe-green);
  border-radius: 16px;
  padding: 1.4rem;
}

.highlight-box h3 {
  color: var(--observe-dark);
  margin-top: 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.brochure-card {
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(40, 107, 166, 0.18);
  border-radius: 18px;
  padding: 1.35rem;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
}

.card-dot {
  width: 34px;
  height: 5px;
  background: linear-gradient(90deg, #3aab48, #286ba6);
  border-radius: 999px;
  display: block;
  margin-bottom: 1rem;
}

.brochure-card h3,
.solution-item h3 {
  margin: 0 0 0.5rem;
  color: var(--observe-dark);
}

.solution-list {
  display: grid;
  gap: 0.85rem;
}

.solution-item {
  border: 1px solid rgba(40, 107, 166, 0.18);
  border-radius: 16px;
  padding: 1.1rem 1.25rem;
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}

.solution-item strong {
  color: var(--observe-blue);
  font-size: 0.9rem;
}

.solution-item small {
  color: #64748b;
  font-style: italic;
}

.contact-section {
  text-align: center;
  background: radial-gradient(circle at top, rgba(58, 171, 72, 0.1), transparent 32%), #ffffff;
}

.niat-logo {
  width: 62mm;
  margin-bottom: 1.5rem;
}

.solution-list.compact {
  gap: 0.75rem;
}

.solution-list.compact .solution-item {
  padding: 0.95rem 1.15rem;
}

.solution-list.compact .solution-item h3 {
  font-size: 1.15rem;
}

.solution-list.compact .solution-item p {
  margin: 0.45rem 0;
  line-height: 1.45;
}

.solution-list.compact .solution-item small {
  font-size: 0.8rem;
}
.pdf-export {
  transform: none !important;
  margin: 0 !important;
  gap: 0 !important;
}

.pdf-export .page {
  box-shadow: none !important;
}

@media print {
  .print-toolbar {
    display: none;
  }

  .brochure-page {
    background: white;
  }

  .brochure-document {
    margin: 0;
    box-shadow: none;
  }
}

@media (max-width: 900px) {
  .brochure-document,
  .page {
    width: 100%;
    min-height: auto;
  }

  .brochure-document {
    margin: 0;
    box-shadow: none;
  }

  .page {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }
}
@media screen and (min-width: 901px) {
  .brochure-document-wrapper {
    height: calc(100% * 0.85);
  }
}
</style>
