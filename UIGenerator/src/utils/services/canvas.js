export const drawInitialCanvas = (ctx, cellQuantity, cellSize) => {
  ctx.strokeStyle = 'black'
  for(let row = 0; row < cellQuantity; row++){
    for(let col = 0; col < cellQuantity; col++){
      ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize)
    }
  }
}