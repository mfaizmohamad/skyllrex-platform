<template>
  <TresPerspectiveCamera :position="[500, 200, 300]" :look-at="[0, 0, 0]" />

  <TresAmbientLight :intensity="1.5" />
  <TresDirectionalLight :position="[10, 10, 10]" :intensity="2" />

  <TresGroup v-if="modelLoaded">
    <primitive :object="model" />
  </TresGroup>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLoop } from '@tresjs/core'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import islandModel from '../assets/model/island.glb'

const modelLoaded = ref(false)

let model = null

onMounted(() => {
  const loader = new GLTFLoader()
  loader.load(
    islandModel,
    (gltf) => {
      model = gltf.scene
      modelLoaded.value = true
      console.log('Model loaded')
    },
    undefined,
    (error) => {
      console.error('Error loading GLB:', error)
    }
  )
})

const { onBeforeRender } = useLoop()
onBeforeRender(() => {
  if (model) {
    model.rotation.y += 0.005
  }
})
</script>