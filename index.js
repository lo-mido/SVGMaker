const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
const Triangle = require("./lib/Triangle");

const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter SVG Text:",
      name: "Text",
    },
    {
      type: "list",
      message: "Enter Text Color",
      name: "textColor",
      choices: ["black", "white", "red", "green", "yellow"],
    },
    {
      type: "list",
      message: "Enter Shape Color",
      name: "shapeColor",
      choices: ["black", "white", "red", "green", "yellow"],
    },
    {
      type: "list",
      message: "Enter Text Color",
      name: "textColor",
      choices: ["black", "white", "red", "green", "yellow"],
    },
  ])
  //  research how to make the text three characters via validate function
  .then((response) => {
    if (response.shape === "circle") {
      const circle = new Circle();
      circle.setColor(response.textColor);
      circle.setText(response.text);
      circle.setShapeColor(response.setShapeColor);
      fs.writeFile("./examples/logo.svg",circle.render(),(error) => {
        console.log("Generated logo.svg"); )
     );
    } else if (response.shape === "square") {
      const Square = new Square();
      square.setColor(response.textColor);
      square.setText(response.text);
      square.setShapeColor(response.setShapeColor);
    } else if (response.shape === "triangle") {
      const triangle = new Triangle();
      triangle.setColor(response.textColor);
      triangle.setText(response.text);
      triangle.setShapeColor(response.setShapeColor);
    }
 