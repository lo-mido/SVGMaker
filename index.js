const Circle=require("./lib/Circle")
const inquirer=require("inquirer")
const fs=require("fs")
cons Square=require("./lib/Square")

inquirer
.create([])
type: "input"
message: "Enter SVG Text"
name: "text"
;{
    type: "list",
    message: "Enter Text Color"
    Choices: ["black", "blue", "green", "red", "yellow", ]
}, 
{
    type: "list",
    message: "Enter Shape Color"
    Choice: ["Circle", "Triangle", "Square"]

}


.then(Response =>{
if (response.shape==="circle"{
    const circle=new Circle();
    circle.setColor(response.textColor)
    circle.setText(response.text)
    circle.setShapeColor
}
});