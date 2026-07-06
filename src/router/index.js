import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import Agriculture from '@/views/AgricultureView.vue'
import Aquaculture from '@/views/AquacultureView.vue'
import Maritime from '@/views/MaritimeView.vue'
import NaturalDisaster from '@/views/NaturalDisasterView.vue'
import SmartCity from '@/views/SmartCityView.vue'
import SatelliteImagery from '@/views/SatelliteImageryView.vue'
import GeospatialData from '@/views/GeospatialDataView.vue'
import DataProcessing from '@/views/DataProcessingView.vue'
import CapacityDevelopment from '@/views/CapacityDevelopmentView.vue'
import Defence from '@/views/DefenceView.vue'
import Brochure from '@/views/BrochureView.vue'
import ComingSoonView from '@/views/ComingSoonView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0,
      left: 0,
      behavior: 'instant', // or remove this line
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/use-cases/agriculture',
      name: 'agriculture',
      component: Agriculture,
    },
    {
      path: '/use-cases/aquaculture',
      name: 'aquaculture',
      component: Aquaculture,
    },
    {
      path: '/use-cases/maritime',
      name: 'maritime',
      component: Maritime,
    },
    {
      path: '/use-cases/natural-disaster',
      name: 'natural-disaster',
      component: NaturalDisaster,
    },
    {
      path: '/use-cases/smart-city',
      name: 'smart-city',
      component: SmartCity,
    },
    {
      path: '/use-cases/defence',
      name: 'defence',
      component: Defence,
    },
    {
      path: '/satellite-imagery',
      name: 'satellite-imagery',
      component: SatelliteImagery,
    },
    {
      path: '/geospatial-data',
      name: 'geospatial-data',
      component: GeospatialData,
    },
    {
      path: '/data-processing',
      name: 'data-processing',
      component: DataProcessing,
    },
    {
      path: '/capacity-development',
      name: 'capacity-development',
      component: CapacityDevelopment,
    },
    {
      path: '/brochure',
      name: 'brochure',
      component: Brochure,
    },
    {
      path: '/coming-soon',
      name: 'coming-soon',
      component: ComingSoonView,
    },
  ],
})

export default router
