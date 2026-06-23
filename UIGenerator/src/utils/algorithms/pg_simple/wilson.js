const sameCell = (a,b) => a.x == b.x && a.y == b.y 

const setVisitedAndUnvisitedCells = (visitedCells, unvisitedCells, currentPath) => {
    for(path of currentPath){
        visitedCells.add(`${currentPath.x},${currentPath.y}`)
        unvisitedCells.remove(`${currentPath.x},${currentPath.y}`)
    }
}

/**
 * Inicializa os valores no Set das celulas ainda não visitadas com as coordenadas de todas as celulas da matrix
 * 
 * @param {Set<{x,y}>} unvisitedCells 
 * @param {Array<Cell>} matrix 
 */
const initUnvisitedCells = (unvisitedCells, matrix) => {
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix.length; col++){
            unvisitedCells.add(`${col},${row}`)
        }
    }

}

const currentPathGenerator = ({visitedCells, unvisitedCells, matrix}) => {
    const currentPath = []
    
    while(visitedCells.has(`${currentIndex.x},${currentIndex.y}`)){
        
    }
        
    return currentPath
}


const mazeGeneratorData = (matrix) => {
    const visitedCells = new Set()
    const unvisitedCells = new Set()

    initUnvisitedCells(unvisitedCells, matrix)

    while(!visitedCells.size){
        const currentPath = currentPathGenerator({visitedCells, unvisitedCells, matrix})
        
        setVisitedAndUnvisitedCells(visitedCells, unvisitedCells, currentPath)
        matrix.setInTheGrid(currentPath)
    }

}

export default mazeGeneratorData