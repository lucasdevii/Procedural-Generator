const getAllCellCoordinates = (scale) = (scale) => {
    const cells = []
    for(let row = 0; row < scale; row++){
        for(let col = 0; col < scale; col++){
            cells.push({row, col})
        }
    }
    return cells
}

const createMaze = (ctx, matrix) => {     
    const unvisitedCells = getAllCellCoordinates(matrix.length);
    const visitedCells = [];
    
    while(unvisitedCells.length > 0){
        let findVisitedCell = false
        const arrivalIndex = matrix.getRandomIndex()
        const exitIndex = matrix.getRandomIndex()
        while(!findVisitedCell){
            const percent = Math.random()

            if(percent < 0.25){
                
            }else if(percent < 0.50){

            }else if(percent < 0.75){

            }else{

            }
        }
    }     
    const randomPosition = matrix.getRandomIndex()
    

    return 
}

export default createMaze