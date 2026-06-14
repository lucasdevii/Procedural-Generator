<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)

onMounted(() => {
  const ctx = canvas.value.getContext('2d')

})
</script>

<template>
  <main class="container">
    <div class="render">
      <button>Renderizar</button>
      <canvas
        ref="canvas"
        width="600"
        height="400"
      ></canvas>
    </div>
  </main>

</template>

<style scoped>
.render{
  
}
</style>