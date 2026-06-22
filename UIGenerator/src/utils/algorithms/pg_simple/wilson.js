const sameCell = (a,b) => a.x == b.x && a.y == b.y 

const addInfosInSetList = () => {
    
}

const currentPathGenerator = ({visitedCells, unvisitedCells, matrix}) => {
    const currentPath = []
    
    const currentIndex = null

    while(visitedCells.has(`${currentIndex.x},${currentIndex.y}`)){
        
    }
        
    return currentPath
}


const mazeGeneratorData = (matrix) => {
    const visitedCells = new Set()
    const unvisitedCells = new Set()


    while(!visitedCells.size){
        const currentPath = currentPathGenerator({visitedCells, unvisitedCells, matrix})
    }
}

export default mazeGeneratorData