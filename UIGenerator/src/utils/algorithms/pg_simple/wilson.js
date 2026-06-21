import Grid from "../../services/grid"

const getAllCellCoordinates = (scale) => {
    const cells = new Set()
    for(let row = 0; row < scale; row++){
        for(let col = 0; col < scale; col++){
            cells.add(`${row},${col}`) // "(Posição em X),(Posição em Y)"
        }
    }
    return cells
}

const sameCell = (a,b) => a.x === b.x && a.y === b.y

/**
 * Remove as celulas do topo, até chegar na celula do path atual encostada 
 * 
 * @param {Array<{x: col, y: row}>} currentPath 
 * @param {{x: col, y: row}} next 
 */
const removeCellsOfTop = (currentPath, next) => {
    while (currentPath.length > 0 && currentPath[currentPath.length - 1] !== next) {
        currentPath.pop()
    }
}

/**
 * Move uma célula do conjunto de não visitadas para o conjunto de visitadas.
 *
 * @param {Object} params
 * @param {Set<string>} params.visitedCells
 * @param {Set<string>} params.unvisitedCells
 * @param {Array<{x: number, y: number}> || {x: number, y: number}} params.currentPath
 */
const setVisitedAndUnvisitedCells = ({visitedCells, unvisitedCells, currentPath}) => {
    if(Array.isArray(currentPath)){
        unvisitedCells.delete(`${currentPath.x},${currentPath.y}`)
        visitedCells.add(`${currentPath.x},${currentPath.y}`)
        return
    }
    
    for(let i = 0; i < currentPath.length; i++){
        unvisitedCells.delete(`${currentPath[i].x},${currentPath[i].y}`)
        visitedCells.add(`${currentPath[i].x},${currentPath[i].y}`)
    }

}

/**
 * Cria um labirinto utilizando o algoritmo Wilson.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Grid} matrix
 */
const createMaze = (ctx, matrix) => {     
    const unvisitedCells = getAllCellCoordinates(matrix.getData().length);
    const visitedCells = new Set();

    const initTargetIndex = matrix.getRandomIndex()   //{x: col, y: row}
    setVisitedAndUnvisitedCells({visitedCells, unvisitedCells, currentPath: initTargetIndex})

    //O loop que continua enquanto tiver celulas ainda sem conexões
    while(unvisitedCells.size > 0){
        const currentPath = [];  //Array<{x: col, y: row}>

        const initIndex = matrix.getRandomIndex()   //{x: col, y: row}

        let currentIndex = initIndex

        //Loop que cria os novos caminhos
        while(!visitedCells.has(`${currentIndex.x},${currentIndex.y}`)){
            const neighbors = matrix.getValidNeighbors(currentIndex.x,currentIndex.y)  //Array<{x: col, y: row}>
            const indexOfNext = Math.floor(Math.random() * neighbors.length)
            //Selecion um vizinho aleatorio a partir de seu index, no array neighbors
            const next = neighbors[indexOfNext]   //{x: col, y: row}
            
            //Se tiver, remove todas as celulas já andadas a partir desse ponto de contato, pois não pode haver pontos de conexão em um mesmo path
            if(sameCell(next, currentIndex)){
                removeCellsOfTop(currentPath, next)
                continue
            }
            else if(visitedCells.has(`${next.x},${next.y}`)){
                currentIndex = next
                continue
            }
            currentPath.push(currentIndex)
            currentIndex = next
        }

        matrix.setInTheGrid(currentPath)
        setVisitedAndUnvisitedCells({visitedCells, unvisitedCells, currentPath})
    }     

    return matrix
}

export default createMaze