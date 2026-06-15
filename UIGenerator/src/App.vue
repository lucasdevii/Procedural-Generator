<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)
const data = ref([])

const types = {
  maze : 'Maze',
  maze_rooms : 'Maze_rooms',
  BSP : 'BSP'
}

const seed = ref(192741203612073)
const cordY = ref(0)
const cordX = ref(0)
const algorithm = ref(types.maze)

const cellQuantity = ref(16)
const cellSize = ref(null)

const inicializationData = () => {
  for(let row = 0; row < cellQuantity.value; row++){
    const row = []

    for(let col = 0; col < cellQuantity.value; col++){
      row.push({})
    }

    data.value.push(row)
  }
}

const noise = () => {
  const value = Math.sin(
    seed.value * 423341.122 +
    cordX.value * 981276.34 +
    cordY.value * 5123 * 2.23
  )
  console.log(value)
  return value
}
const connect = (a, b, direction) => {
  switch(direction){
    case 'left': 
      a.left = false;
      b.right = false;
    break
    case 'right': 
      a.right = false;
      b.left = false;
    break
    case 'top': 
      a.top = false;
      b.bottom = false;
    break
    case 'bottom': 
      a.bottom = false;
      b.top = false;
    break
    default:
      console.log("INPUT INVÁLIDO.")
    break
  }
}

const mazeCreator = () => {

} 
const mazeRoomsCreator = () => {

}
const BSPCreator = () => {
  
}

const drawInitialCanvas = (ctx) => {
  ctx.strokeStyle = 'black'
  for(let row = 0; row < cellQuantity.value; row++){
    for(let col = 0; col < cellQuantity.value; col++){
      ctx.strokeRect(col * cellSize.value, row * cellSize.value, cellSize.value, cellSize.value)
    }
  }
}

onMounted(() => {  
  const {width, height} = canvas.value.getBoundingClientRect()

  canvas.value.width = width
  canvas.value.height = height

  cellSize.value = height / cellQuantity.value
  
  const ctx = canvas.value.getContext('2d')

  inicializationData()
  drawInitialCanvas(ctx)
})

</script>

<template>
  <main class="container">
    <div class="render">

        <div>
          <label for="">Seed</label>
          <input type="number" v-model="seed">
          
          <label for="">Coordenada em X</label>
          <input type="number" v-model="cordX">

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