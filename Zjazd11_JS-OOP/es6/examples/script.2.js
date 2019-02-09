class Punkt {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static odleglosc(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Punkt(5, 5);
const p2 = new Punkt(10, 10);

p1.odleglosc()
console.log(Punkt.odleglosc(p1, p2));