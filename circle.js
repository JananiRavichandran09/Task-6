// Guvi Day-6-Task
// Question: 2

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle() {
        return this.radius
    }
    set radiusCircle(radius) {
        this.radius = radius;
    }
    get colourCircle(){
        return this.colour
    }
    set colourCircle(colour){
        this.colour = colour;
    }
     get toString(){
        return `"Circle[radius=${this.radius},colour=${this.colour}]"`
    }
    get areaCircle(){
        return Math.PI*this.radius*this.radius;
    }
}
let  value1 = new Circle();

console.log(value1.radiusCircle);
value1.radiusCircle=2.2
console.log(value1.radiusCircle);
console.log(value1.colourCircle);
value1.colourCircle="Green";
console.log(value1.colourCircle);
console.log(value1.toString);
console.log(value1.areaCircle);