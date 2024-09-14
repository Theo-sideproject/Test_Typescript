interface User {
    name: string;
    age: number;
    isActive: boolean;
}

let partialUser: Partial<User> = { name: "Alice" }; // "age" et "isActive" peuvent être omis.
let pickedUser: Pick<User, "name" | "age"> = { name: "Charlie", age: 40 };
let user: User = {name:"Theo",age:21, isActive: true}

console.log("partialUser : ",partialUser.age)
console.log("pickedUser : ",pickedUser)
console.log("user : ",user)