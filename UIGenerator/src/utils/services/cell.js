class Cell {
    data = { right: false, left: false, top: false, bottom: false }

    setData({right = false, left = false, top = false, bottom = false}){
        this.data = {right, left, top, bottom}
    }

    getData(){
        return this.data
    }
}

export default Cell