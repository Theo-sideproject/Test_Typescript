type Product = {
    name: string;
    price: number;
    quantity: number;
    category: string;
    isAvailable: boolean;
};

let products: Product[] = [
    {
        name: "Pikachu",
        price: 35,
        quantity: 10,
        category: "Plush",
        isAvailable: true
    },
    {
        name: "Bulbasaur",
        price: 500,
        quantity: 20,
        category: "Plush",
        isAvailable: false
    },
    {
        name: "Squirtle",
        price: 300,
        quantity: 15,
        category: "Plush",
        isAvailable: true
    },
    {
        name: "Charmander",
        price: 100,
        quantity: 5,
        category: "Plush",
        isAvailable: false
    }
];

function showProducts(products: Product[]) {
    products.forEach((value:Product,key:number) => {
        console.log(`value ${key} :`, value.name , ` (stock : ${value.quantity}) and is a ${value.category}`);
    })
}

function showProductsWithCategory(products: Product[],gategory:string) {
    products.forEach((value:Product,key:number) => {
        if (value.category.toLowerCase() === gategory.toLowerCase()) {
            console.log(`value ${key} :`, value.name , ` (stock : ${value.quantity}) and is a ${value.category}`);
        }
        else {
            console.log(value.category," : ",gategory)
        }
    })
}

function addProduct(products: Product[],newProduct: Product) {
    products.push(newProduct);
}

const newProduct:Product = {
    name: "Ombreon",
    price: 199.99,
    quantity:1,
    category: "Pokemon",
    isAvailable: true
}

function modifyProduct(products:Product[],nameProduct:string, quantity:number) {
    products.forEach((value:Product,key:number) => {
        if (value.name === nameProduct) {
            value.quantity = quantity;
        }
    })
}

addProduct(products, newProduct);
showProducts(products);
modifyProduct(products,"Pikachu", 999)
showProducts(products);
// showProductsWithCategory(products,"plush");