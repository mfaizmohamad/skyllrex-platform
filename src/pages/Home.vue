<template>
  <VCardTitle class='text-center'>Home</VCardTitle>

  <VImg
    :width="300"
    aspect-ratio="16/9"
    cover
    class="mx-auto mb-6 float-animation"
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
  ></VImg>

  <VImg
    :width="300"
    aspect-ratio="16/9"
    cover
    class="mx-auto mb-6 float-animation"
    :src="Miko"
  ></VImg>
</template>
<script  setup>
import Miko from '../assets/image/miko.png'
</script>
