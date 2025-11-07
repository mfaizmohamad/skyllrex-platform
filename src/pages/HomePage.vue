<template>
  <VCardTitle class="text-center">Home</VCardTitle>
  <VCol class="card-size">
    <TresCanvas :clear-color="currentBackgroundColor" :renderer="{ alpha: false }">
      <FirstExperience />
    </TresCanvas>
  </VCol>
</template>

<script setup>
import { TresCanvas } from '@tresjs/core'
import FirstExperience from '../components/FIrstExperience.vue'
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const currentBackgroundColor = computed(() => {
  return theme.current.value.colors.background
})
</script>

<style scoped>
.card-size {
  height: 600px;
}
</style>