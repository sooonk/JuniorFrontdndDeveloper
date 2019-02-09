//1. Utworzyć klasę ShopCart która będzie miała listę zakupów
//2. Utworzyć potrzebne addItemToCard oraz removeItemFromCard usuwania i dodawania przedmiotów do koszyka
//3. Utworzyć metodę koszyka checkProducts która będzie sprawdzała typ produktu w koszyku oraz jego cenę i wywoływała dostępne metody tego produktu
//4. Utworzyć klasę Product która będzie miała pola: type, name, price,
//5. Utworzyć klasę Toy która będzie dziedziczyć po klasie Product, dodatkowo będzie miała pole sound oraz metodę makeSound
//6. Utworzyć klasę Phone która będzie dziedziczyć po klasie Product, dodatkowo będzie miała pole ringTone oraz metodę makeCall

class ShopCart {
    constructor() {
        this.products = [];
    }

    addItemToCart(product) {
        this.products.push(product);
    }

    removeItemFromCart(index) {
        this.products.splice(index, 1);
    }

    checkProducts() {
        this.products.forEach((product) => {

            console.log('Type: ' + product.type, 'Name: ' + product.name, 'Price: ' + product.price);

            for(var i in product) {
                console.log(product)
                if(typeof product[i] === Function){
                    product[i]();                    
                }
            }
            /*if (product.type == 'toy') {
                product.makeSound();
            };
            if (product.type == 'phone') {
                product.makeCall();
            }*/
        })
    }
}

class Product {
    constructor(type, name, price) {
        this.type = type;
        this.name = name;
        this.price = price;
    }
}

class Toy extends Product {
    constructor(type, name, price, sound) {
        super(type, name, price);
        this.sound = sound;
    }
    makeSound() {
        console.log(name + "This toy makes no sound");
    };
}

class Phone extends Product {
    constructor(type, name, price, ringTone) {
        super(type, name, price);
        this.ringTone = ringTone;
    }
    makeCall() {
        console.log(this.name + " ringtone is annoying");
    };
}

const shopCart = new ShopCart;
const iPhone = new Phone('phone', 'iPhone', '1200$', 'pikpik');
const samsung = new Phone('phone', 'Samsung S8', '1000$', 'pukpuk');
const doll = new Toy('toy', 'Barbie', '50$', 'no sound');
const car = new Toy('toy', 'Car', '10$', 'ioioio');

shopCart.addItemToCart(iPhone);
shopCart.addItemToCart(samsung);
shopCart.addItemToCart(doll);
shopCart.addItemToCart(car);

shopCart.checkProducts();
