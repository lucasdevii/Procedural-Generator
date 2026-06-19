<script setup>
import { ref, onMounted } from 'vue'
import wilsonMazeCreate from './utils/algorithms/pg_simple/wilson'
import { drawInitialCanvas } from './utils/services/canvas'
import Grid from './utils/services/grid'

const canvas = ref(null)
const grid = ref([])

const types = {
  Wilson : 'Wilson',
  maze_rooms : 'Maze_rooms',
  BSP : 'BSP'
}

// const seed = ref(192741203612073)
// const cordY = ref(0)
// const cordX = ref(0)
const algorithm = ref(types.Wilson)

const cellQuantity = ref(16)
const cellSize = ref(null)

const useAlgorithm = () => {
  if(algorithm.value === types.Wilson){
    wilsonMazeCreate()
  }
}

onMounted(() => {  
  const  { width, height } = canvas.value.getBoundingClientRect()

  canvas.value.width = width
  canvas.value.height = height

  cellSize.value = height / cellQuantity.value
  
  const ctx = canvas.value.getContext('2d')

  const grid = new Grid(cellQuantity.value)
  drawInitialCanvas(ctx, cellQuantity.value, cellSize.value)
})

</script>

<template>
  <main class="container">
    <div class="render">

        <div>
          <!-- <label for="">Seed</label>
          <input type="number" v-model="seed">
          
          <label for="">Coordenada em X</label>
          <input type="number" v-model="cordX">

          <label for="">Coordenada em Y</label>
          <input type="number" v-model="cordY"> -->

          <label for="">Algoritmo</label>
          <select v-model="algorithm">
            <option>Wilson</option>
            <option>Maze Rooms</option>
            <option>BSP</option>
          </select>
        </div>

        <div class="submit">

          <button @click="useAlgorithm">Renderizar</button>

        </div>

      <div style="display: flex; justify-content: center;">
        <canvas
          ref="canvas"
        >
        </canvas>

      </div>
    </div>
  </main>

</template>

<style scoped>
canvas {
  border: 1px solid black;
  background-color: rgb(108, 118, 129);
  height: 80vh;
  aspect-ratio: 1/1;
}
.submit {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
}
</style>