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

    connect = (a, b, direction) => {
        if(direction === 'left'){
            a.left = true;
            b.right = true;
        }

        if(direction === 'right'){
            a.right = true;
            b.left = true;
        }

        if(direction === 'top'){
            a.top = true;
            b.bottom = true;
        }

        if(direction === 'bottom'){
            a.bottom = true;
            b.top = true;
        }
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
}

export default Grid