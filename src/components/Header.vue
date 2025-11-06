<template>
  <VRow
    justify='space-between'
    align='center'
    class='ml-2 mt-2 mr-2'
  >
    <VCol cols='auto'>
      <VIcon icon="mdi-rabbit" class='float-animation'/>
    </VCol>
    <VCol cols='auto'>
      <VIcon
        icon="mdi-theme-light-dark"
        @click="toggleTheme"
        class="cursor-pointer float-animation"
        title="Toggle theme"
      />
    </VCol>
  </VRow>

  <h1 class='text-secondary text-center'>{{ title }}</h1>
</template>
<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const title = ''

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'myCustomDarkTheme'
}
</script>
<style scoped>
</style>

