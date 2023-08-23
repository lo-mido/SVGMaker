const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
const Triangle = require("./lib/Triangle");

const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "list",
      message: "Choose Shape",
      name: "shape",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "list",
      message: "Choose Shape Color",
      name: "shapeColor",
      choices: ["black", "white", "red", "green", "yellow"],
    },
    {
      type: "input",
      message: "Enter Text (1-3 characters)",
      name: "text",
      validate: (textValue) =>
        textValue.length <= 3 ||
        "Your text must be 1-3 characters, please retry."
    },
    {
      type: "list",
      message: "Choose Text Color",
      name: "textColor",
      choices: ["black", "white", "red", "green", "yellow"],
    },
  ])
  //  research how to make the text three characters via validate function
  .then((response) => {
    console.log(response)
    if (response.shape === "Circle") {
      const circle = new Circle();
      circle.setColor(response.textColor);
      circle.setText(response.text);
      circle.setShapeColor(response.shapeColor);
      fs.writeFile("./examples/logo.svg", circle.render(), (error) => {
        console.log("Generated logo.svg");
      });
    } else if (response.shape === "Square") {
      const square = new Square();
      square.setColor(response.textColor);
      square.setText(response.text);
      square.setShapeColor(response.shapeColor);
      fs.writeFile("./examples/logo.svg", square.render(), (error) => {
        console.log("Generated logo.svg");
      });
    } else if (response.shape === "Triangle") {
      const triangle = new Triangle();
      triangle.setColor(response.textColor);
      triangle.setText(response.text);
      triangle.setShapeColor(response.shapeColor);
      fs.writeFile("./examples/logo.svg", triangle.render(), (error) => {
        console.log("Generated logo.svg");
      });
    }
  });
