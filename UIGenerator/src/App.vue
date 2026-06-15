<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)
const data = ref([])

const types = {
  maze : 'maze',
  maze_rooms : 'maze_rooms',
  BSP : 'BSP'
}

const seed = ref(192741203612073)
const cordY = ref(null)
const cordX = ref(null)
const algorithm = ref(types.maze)

const cellQuantity = 16
const cellSize = ref(null)

const mazeCreator = () => {

} 
const mazeRoomsCreator = () => {

}
const BSPCreator = () => {
  
}

const drawInitialCanvas = () => {
  const ctx = canvas.value.getContext('2d')

  for(let row = 0; row < cellQuantity; row++){
    for(let col = 0; col < cellQuantity; col++){
      ctx.strokeRect(col * cellSize.value, row * cellSize.value, cellSize.value, cellSize.value)
    }
  }
}

onMounted(() => {  
  const {width, height} = canvas.value.getBoundingClientRect()

  canvas.value.width = width
  canvas.value.height = height

  cellSize.value = height / cellQuantity

  drawInitialCanvas()
})
</script>

<template>
  <main class="container">
    <div class="render">

        <div>
          <label for="">Seed</label>
          <input type="number">
          
          <label for="">Coordenada em X</label>
          <input type="number">

          <label for="">Coordenada em Y</label>
          <input type="number" v-model="cordY">

          <label for="">Algoritmo</label>
          <select v-model="algorithm">
            <option>Maze</option>
            <option>Maze Rooms</option>
            <option>BSP</option>
          </select>
        </div>

        <div class="submit">

          <button>Renderizar</button>

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
  background-color: rgb(65, 73, 82);
  height: 80vh;
  width: 100%;
}
.submit {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
}
</style>