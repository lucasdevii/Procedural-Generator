import Cell from "./cell"

class Grid {
    data = []
    
    constructor(scale){
        for(let r = 0; r < scale; r++){
            const row = []
            for(let c = 0; c < scale; c++){
                row.push(new Cell())
            }
        }
    }

    /**
     * Basicamente diz para qual direção uma determinada celula vai se conectar com outra
     * @param {Number} x 
     * @param {Number} y 
     * @param {String} direction 
     * @returns {Boolean} success
     * 
     */
    connect = (x, y, direction) => {
        if(direction === 'left'){
            if(x == 0){
                return false
            }
            this.data[y][x].setData({left: true});
            this.data[y][x - 1].setData({right: true});
        }

        if(direction === 'right'){
            if(x == this.data.length - 1){
                return false
            }
            this.data[y][x].setData({right: true});
            this.data[y][x + 1].setData({left:true});
        }

        if(direction === 'top'){
            if(y == 0){
                return false
            }
            this.data[y][x].setData({top: true});
            this.data[y - 1][x].setData({bottom: true});
        }

        if(direction === 'bottom'){
            if(y == this.data.length - 1){
                return false
            }
            this.data[y][x].setData({bottom: true});
            this.data[y + 1][x].setData({top: true});
        }
        return true
    }

    getData(){
        return this.data
    }

    setData(data){
        this.data = data
    }

    getRandomIndex(){
        const scale = this.data.length

        const randomX = Math.floor(Math.random() * scale)
        const randomY = Math.floor(Math.random() * scale)
        
        const index = {x: randomX, y: randomY}
        
        return index
    }

    /**
     * 
     * @param {Array<{x, y}>} path 
     */
    setInTheGrid(path){
        for(let i = 0; i < path.length - 1; i++){
            const currentIndex = path[i]
            const nextIndex = path[i+1]

            const dx = currentIndex.x - nextIndex.x // +1 = esquerda, -1 = direita, 0 = nada
            const dy = currentIndex.y - nextIndex.y // +1 = topo, -1 = baixo, 0 = nada
            
            if(dx == 1) this.connect(currentIndex.x, currentIndex.y, 'left')
            else if(dx == -1) this.connect(currentIndex.x, currentIndex.y, 'right')
            
            if(dy == 1) this.connect(currentIndex.x, currentIndex.y, 'top')
            else if(dy == -1) this.connect(currentIndex.x, currentIndex.y, 'bottom')
        }
    }
}

export default Grid