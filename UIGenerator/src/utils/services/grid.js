import Cell from "./cell"

class Grid {
    data = []
    
    constructor(scale){
        for(let r = 0; r < scale; r++){
            const row = []
            for(let c = 0; c < scale; c++){
                new Cell()
            }
        }
    }

    /**
     * Basicamente diz para qual direção uma determinada celula vai se conectar com outra
     * @param {Cell} a 
     * @param {Cell} b 
     * @param {String} direction 
     * @returns {Boolean} success
     * 
     */
    connect = (x, y, direction) => {
        if(direction === 'left'){
            if(x == 0){
                return false
            }
            this.data[y][x].left = true;
            this.data[y][x - 1].right = true;
        }

        if(direction === 'right'){
            if(x == this.data.length - 1){
                return false
            }
            this.data[y][x].right = true;
            this.data[y][x + 1].left = true;
        }

        if(direction === 'top'){
            if(y == 0){
                return false
            }
            this.data[y][x].top = true;
            this.data[y - 1][x].bottom = true;
        }

        if(direction === 'bottom'){
            if(y == this.data.length - 1){
                return false
            }
            this.data[y][x].bottom = true;
            this.data[y + 1][x].top = true;
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
        const scale = this.data[y][x].length

        const randomX = Math.floor(Math.random() * scale)
        const randomY = Math.floor(Math.random() * scale)
        
        const index = {x: randomX, y: randomY}
        
        return index
    }
}

export default Grid