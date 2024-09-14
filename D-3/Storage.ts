class CustomStorage<T> {  // Renommé pour éviter les conflits
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    remove(item:T): void {
        let index = this.items.indexOf(item);
        console.log("i : ",index)
    }
}

// Créer un stockage pour des nombres
let numberStorage = new CustomStorage<number>();  // Utilisation de <number> sans problème
numberStorage.add(10);
numberStorage.add(20);
console.log(numberStorage.getAll());  // Affiche : [10, 20]

// Créer un stockage pour des chaînes de caractères
let stringStorage = new CustomStorage<string>();  // Utilisation de <string>
stringStorage.add("Hello");
stringStorage.add("World");
stringStorage.remove("Hello");
console.log(stringStorage.getAll());  // Affiche : ["Hello", "World"]
