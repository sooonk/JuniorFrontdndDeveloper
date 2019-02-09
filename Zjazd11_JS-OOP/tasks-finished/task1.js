function returnX() {
    return this.x;
}

var obj = { x: 42 }
obj.returnX = returnX;

console.log(obj.returnX());
