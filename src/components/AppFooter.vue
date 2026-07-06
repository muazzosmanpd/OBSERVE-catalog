<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-inner">
        <!-- Company Logo -->
        <div class="footer-logo">
          <img :src="niatLogo" alt="NiAT Logo" class="footer-logo-image" />
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="https://niat.com.bn/about-us/" target="_blank">About Us</a>
          <a href="https://niat.com.bn/shop/" target="_blank">Solutions</a>
          <a href="https://niat.com.bn/news-and-events/" target="_blank">News & Events</a>
          <a href="https://niat.com.bn/career/" target="_blank">Career</a>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="https://niat.com.bn/faqs/" target="_blank">FAQs</a>
          <a href="https://niat.com.bn/contact-us/" target="_blank">Contact Us</a>
          <a href="https://niat.com.bn/faqs/#" target="_blank">Terms & Conditions</a>
        </div>

        <!-- Contact Info -->
        <div class="footer-col contact">
          <h4>Contact Us</h4>

          <div class="contact-item">
            <MapPin class="contact-icon" />
            <span>
              Unit 28, 29 & 30, Block C, 1st Floor, Muhibbah Complex II, Jalan Gadong, Bandar Seri
              Begawan BE 3919, Negara Brunei Darussalam.
            </span>
          </div>

          <div class="contact-item">
            <Phone class="contact-icon" />
            <span>+673 238 4660</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">© {{ currentYear }} NiAT. All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Phone, MapPin } from 'lucide-vue-next'
import niatLogo from '@/assets/NiAT-Logo-with-Company-Name.png'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.app-footer {
  position: relative;
  background:
    radial-gradient(circle at top center, rgba(34, 211, 238, 0.08), transparent 40%), #0f172a;

  border-top: 1px solid rgba(51, 65, 85, 0.8);
  color: #cbd5e1;
  padding: 4rem 1rem 1.75rem;
  overflow: hidden;
}

.app-footer::before {
  content: '';
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.08), transparent 70%);
  pointer-events: none;
}

.footer-container {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.8fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(71, 85, 105, 0.8);
}

.footer-logo {
  display: flex;
  align-items: flex-start;
}

.footer-logo-image {
  width: 260px;
  max-width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.1))
    drop-shadow(0 0 24px rgba(34, 211, 238, 0.05));
}

.footer-col h4 {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  position: relative;
}

.footer-col h4::after {
  content: '';
  display: block;
  width: 42px;
  height: 2px;
  margin-top: 0.55rem;
  border-radius: 999px;
  background: linear-gradient(to right, #06b6d4, #67e8f9);
}

.footer-col a {
  display: block;
  color: #94a3b8;
  font-size: 0.85rem;
  margin-bottom: 0.9rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.footer-col a:hover {
  color: #67e8f9;
  transform: translateX(4px);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  color: #94a3b8;
  font-size: 0.85rem;
  line-height: 1.7;
  margin-bottom: 1.1rem;
}

.contact-icon {
  width: 18px;
  height: 18px;
  margin-top: 0.15rem;
  color: #22d3ee;
  flex-shrink: 0;
}

.footer-bottom {
  margin-top: 1.8rem;
  padding-top: 0.25rem;
  text-align: center;
  color: #64748b;
  font-size: 0.82rem;
  letter-spacing: 0.05em;
}

.footer-bottom strong {
  color: #e2e8f0;
}

@media (max-width: 1000px) {
  .footer-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .app-footer {
    padding-top: 3rem;
  }

  .footer-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-logo {
    justify-content: center;
  }

  .footer-logo-image {
    width: 220px;
  }

  .footer-col h4::after {
    margin-left: auto;
    margin-right: auto;
  }

  .contact-item {
    justify-content: center;
    text-align: left;
  }
}
</style>
