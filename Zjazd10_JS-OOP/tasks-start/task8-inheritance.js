console.log("Task 8 - inheritance");

function Shape(color) {
    color = color || "red";
  
    this.element = document.createElement("div");
    this.element.style.backgroundColor = color;
  }
  
  Shape.prototype.append = function(container) {
    container = container || document.body;
    container.appendChild(this.element);
  };
  
  function Square(color) {
    Shape.call(this, color);
  
    this.element.style.width = "100px";
    this.element.style.height = "100px";
  }
  
  Square.prototype = Object.create(Shape.prototype);
  Square.prototype.constructor = Square;
  
  function Circle(color) {
    Shape.call(this, color); //pola dziedziczymy wywołując metodę konstruktora (za pomocą call) - nie chcemy wtedy używać prototypów.
  
    this.element.style.width = "100px";
    this.element.style.height = "100px";
  
    this.element.style.borderRadius = "50px";
  }
  
  Circle.prototype = Object.create(Shape.prototype); //metody dziedziczymy poprzez skopiowanie prototypu
  Circle.prototype.constructor = Circle;
  
  var mySquare1 = new Square();
  var mySquare2 = new Square("green");
  
  var myCircle1 = new Circle("blue");
  var myCircle2 = new Circle();
  
  mySquare1.append();
  mySquare2.append();
  
  myCircle1.append();
  myCircle2.append();
  
  console.log(mySquare1);
  console.log(myCircle2);
  