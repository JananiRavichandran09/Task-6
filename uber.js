// Guvi Day-6-Task
// Question: 4

class UberPrice{
    constructor(kilometer,price=100) {
        this.kilometer = kilometer,
        this.price = price 
    }
    get priceValue() {
        return this.kilometer * this.price;
    }
    
}

const uber1 = new UberPrice(5);
const uber2 = new UberPrice(5, 200);

console.log(uber1.priceValue);
console.log(uber2.priceValue);