class Shape{
    constructor(text,textColor,shapeColor){

    
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
}
render (){
    return Error("Child must create its own render function")
}
module.exports=shape