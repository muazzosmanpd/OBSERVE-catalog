<template>
  <AppNavbar v-if="showLayout" />

  <RouterView />

  <AppFooter v-if="showLayout" />
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

const route = useRoute()

const fullscreenPages = ['/coming-soon']

const showLayout = computed(() => !fullscreenPages.includes(route.path))
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #1e293b;
  color: #ffffff;
  font-family: Inter, Arial, sans-serif;
}

a {
  text-decoration: none;
}
</style>
