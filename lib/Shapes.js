class Shape{
    constructor(){

    
    this.text=""
    this.textColor=""
    this.shapeColor=""
}
setColor(textColor){
    this.textColor=textColor


}
setText(text){
    this.text=text

}
setShapecolor(shapeColor){
    this.shapeColor=shapeColor
}

render(){
    return new Error("Child must create its own render function"); 
}

}    
module.exports=shape