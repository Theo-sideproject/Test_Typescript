// Crée une classe Employee avec des propriétés comme name, salary, et des méthodes comme work().
// Crée une sous-classe Manager qui hérite de Employee et qui ajoute une méthode supplémentaire comme manageTeam().
// Crée une interface Payable qui définit une méthode calculateBonus(). Implémente cette interface dans Manager et une autre classe Intern.
// Utilise les modificateurs de visibilité pour protéger certaines propriétés et méthodes.

interface Payable {
    calculateBonus(bonus:number);
}

class Employee {
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    protected name: string;
    protected salary :number;

    public work() {
        console.log("I'm working");
    }
}

class Manager extends Employee implements Payable{

    public calculateBonus(bonus:number) {
        this.salary += bonus;
    }

    public manageTeam() {
        console.log("I manage the team")
    }

}

let Jean:Employee = new Employee("Jean", 1400);
console.log(Jean);
// Jean.

let Patrique:Manager = new Manager("Jean",2400);
Patrique.manageTeam()
Patrique.calculateBonus(1500);
console.log(Patrique)