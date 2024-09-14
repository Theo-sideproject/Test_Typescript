interface Product {
    name:string,
    price,
    quantity: number,
    category:string
}
let test:Product  = {name:"test",price: 30,quantity:10,category:"Ttest"}
let test2:Product  = {name:"Mario",price: 50,quantity:100,category:"figurine"}

let products:Product[] = []

function showProduct(products:Product | Product[]) {
    if (Array.isArray(products)) {
        console.log(`${products.length >1?"Les produits sont":"Le produit est"} : `);
        products.forEach((product:Product) => {
            console.log(product)
        })
    }else {
        console.log("le produit est : ",products);
    }
}

products.push(test);
// products.push(test2);

showProduct(products)
showProduct(test2)
