<template>
  <header class="app-navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <RouterLink to="/" class="brand" @click="closeMobileMenu">
        <img :src="observeLogo" alt="OBSERVE" class="observe-logo" />
      </RouterLink>

      <button class="mobile-toggle" type="button" @click="toggleMobileMenu">
        <span v-if="!showMobileMenu">☰</span>
        <span v-else>×</span>
      </button>

      <nav class="nav-links" :class="{ open: showMobileMenu }">
        <button type="button" class="mobile-close" @click="closeMobileMenu">×</button>
        <RouterLink to="/" class="nav-link" @click="closeMobileMenu">Home</RouterLink>
        <RouterLink to="/satellite-imagery" class="nav-link" @click="closeMobileMenu">
          Satellite Imagery
        </RouterLink>
        <RouterLink to="/geospatial-data" class="nav-link" @click="closeMobileMenu">
          Geospatial Data
        </RouterLink>
        <RouterLink to="/data-processing" class="nav-link" @click="closeMobileMenu">
          Data Processing
        </RouterLink>
        <RouterLink to="/capacity-development" class="nav-link" @click="closeMobileMenu">
          Capacity Development
        </RouterLink>

        <div class="dropdown">
          <button
            type="button"
            class="nav-link dropdown-btn"
            :class="{ active: isUseCaseActive }"
            @click.stop="toggleDropdown"
          >
            Use Cases
            <span class="dropdown-arrow">▾</span>
          </button>

          <div v-if="showUseCases" class="dropdown-menu">
            <RouterLink to="/use-cases/agriculture" @click="closeMobileMenu"
              >Agriculture</RouterLink
            >
            <RouterLink to="/use-cases/aquaculture" @click="closeMobileMenu"
              >Aquaculture</RouterLink
            >
            <RouterLink to="/use-cases/defence" @click="closeMobileMenu">Defence</RouterLink>
            <RouterLink to="/use-cases/maritime" @click="closeMobileMenu">Maritime</RouterLink>
            <RouterLink to="/use-cases/natural-disaster" @click="closeMobileMenu">
              Natural Disaster
            </RouterLink>
            <RouterLink to="/use-cases/smart-city" @click="closeMobileMenu">Smart City</RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import observeLogo from '@/assets/OBSERVE_logo.png'

const route = useRoute()

const showUseCases = ref(false)
const showMobileMenu = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const isUseCaseActive = computed(() => route.path.startsWith('/use-cases'))

const toggleDropdown = () => {
  showUseCases.value = !showUseCases.value
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  showUseCases.value = false
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
  showUseCases.value = false
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-navbar {
  height: 72px;
  background: transparent;
  border-bottom: 1px solid transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: none;
  box-shadow: none;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    backdrop-filter 0.25s ease;
}

.app-navbar.scrolled {
  background: rgba(15, 23, 42, 0.92);
  border-bottom-color: rgba(51, 65, 85, 0.8);
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
}

.nav-inner {
  max-width: 1440px;
  height: 72px;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 260px 1fr 260px;
  align-items: center;
}

.brand {
  height: 72px;
  justify-self: start;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.45rem;
}

.observe-logo {
  height: 92px;
  width: auto;
  display: block;
  filter: drop-shadow(0 0 14px rgba(34, 211, 238, 0.16));
}

.nav-links {
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
}

.mobile-toggle {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(71, 85, 105, 0.9);
  border-radius: 12px;
  background: rgba(30, 41, 59, 0.8);
  color: #e5e7eb;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
}

.nav-link {
  color: #cbd5e1;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.7rem 0.9rem;
  border-radius: 999px;
  text-decoration: none;
  transition: 0.2s ease;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: inherit;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.router-link-active,
.nav-link.active {
  background: rgba(6, 182, 212, 0.14);
  border-color: rgba(34, 211, 238, 0.35);
  color: #67e8f9;
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.12);
}

.dropdown {
  position: relative;
}

.dropdown-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.dropdown-arrow {
  font-size: 0.72rem;
  margin-left: 0.15rem;
  transition: transform 0.2s ease;
}

.dropdown-btn.active .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.75rem);
  right: 0;
  width: 210px;
  background: rgba(15, 23, 42, 0.96);
  border: 1px solid rgba(71, 85, 105, 0.85);
  border-radius: 16px;
  padding: 0.55rem;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.38);
  z-index: 2000;
  backdrop-filter: blur(14px);
}

.dropdown-menu a {
  display: block;
  padding: 0.72rem 0.85rem;
  color: #cbd5e1;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: 0.2s ease;
}

.dropdown-menu a:hover,
.dropdown-menu a.router-link-active {
  background: rgba(6, 182, 212, 0.12);
  color: #67e8f9;
}

.mobile-close {
  display: none;
}
@media (max-width: 1200px) {
  .nav-inner {
    grid-template-columns: 220px 1fr 120px;
    padding: 0 2rem;
  }

  .observe-logo {
    height: 82px;
  }

  .nav-link {
    font-size: 0.74rem;
    padding: 0.65rem 0.75rem;
  }
}
@media (max-width: 900px) {
  .app-navbar {
    height: 68px;
    background: rgba(15, 23, 42, 0.96);
    border-bottom: 1px solid rgba(51, 65, 85, 0.8);
    backdrop-filter: blur(16px);
  }

  .nav-inner {
    height: 68px;
    min-height: 68px;
    max-width: 100%;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    height: 68px;
    display: flex;
    align-items: center;
  }

  .observe-logo {
    height: 50px;
    width: auto;
  }

  .mobile-toggle {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    margin-left: auto;

    border: 1px solid rgba(148, 163, 184, 0.45);
    border-radius: 14px;

    background: rgba(30, 41, 59, 0.88);
    color: #e5e7eb;

    font-size: 1.8rem;
    line-height: 1;
    cursor: pointer;

    position: relative;
    z-index: 5000;
  }

  .nav-links {
    position: fixed;
    top: 0.75rem;
    left: 0.75rem;
    right: 0.75rem;

    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0.3rem;

    max-height: calc(100dvh - 1.5rem);
    overflow-y: auto;

    padding: 5.25rem 1rem 1rem;

    border-radius: 20px;
    border: 1px solid rgba(71, 85, 105, 0.9);

    background:
      radial-gradient(circle at 10% 0%, rgba(34, 211, 238, 0.12), transparent 38%),
      rgba(15, 23, 42, 0.98);

    box-shadow: 0 24px 55px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(18px);

    z-index: 4000;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 78px;
    right: 0.75rem;

    left: auto;

    width: 260px;
    max-width: calc(100vw - 1.5rem);

    display: none;
    flex-direction: column;

    padding: 1rem;

    border-radius: 20px;

    background:
      radial-gradient(circle at 10% 0%, rgba(34, 211, 238, 0.12), transparent 38%),
      rgba(15, 23, 42, 0.98);

    border: 1px solid rgba(71, 85, 105, 0.9);

    box-shadow: 0 24px 55px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(18px);

    z-index: 4000;
  }
  .dropdown {
    width: 100%;
  }

  .dropdown-btn {
    justify-content: space-between;
  }

  .dropdown-menu {
    position: static;
    width: 100%;

    margin-top: 0.35rem;
    padding: 0.45rem;

    background: rgba(2, 6, 23, 0.45);
    border: 1px solid rgba(71, 85, 105, 0.45);
    border-radius: 14px;

    box-shadow: none;
  }

  .dropdown-menu a {
    font-size: 0.9rem;
    padding: 0.75rem 0.9rem;
  }

  .mobile-close {
    display: none !important;
    place-items: center;

    position: absolute;
    top: 1rem;
    right: 1rem;

    width: 42px;
    height: 42px;

    background: rgba(30, 41, 59, 0.95);
    border: 1px solid rgba(148, 163, 184, 0.45);
    border-radius: 14px;

    color: #e5e7eb;
    font-size: 1.8rem;
    line-height: 1;

    cursor: pointer;
    z-index: 5000;
  }
}
</style>
