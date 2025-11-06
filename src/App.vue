<template>
  <Header />
  <Home />
  <TresCanvas>
    <FirstExperience />
  </TresCanvas>
</template>
<script setup>
import Header from './components/Header.vue'
import Home from './pages/Home.vue'
import { TresCanvas } from '@tresjs/core'
import FirstExperience from './components/FIrstExperience.vue'
</script>

<style scoped></style>
