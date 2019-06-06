class Person {
    constructor(name, date, amount) {
        this.name = name;
        this.date = new Date (date.split('.').reverse());
        this.amount = amount;
        this.transactions = [];
        this.transactions.push(`Initial: ${this.amount}`);
    }

    getInfo() {
        this.age =  Math.floor((Date.now()-Date.parse(this.date))/(60*60*24*366*1000));
        console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`);
    }

    addMoney(sum, title) {
        this.amount += sum;
        const transaction = `${title}: ${sum}`;
        this.transactions.push(transaction);
    }

    withdrawMoney(sum, title) {
        this.amount -= sum;
        const transaction = `${title}: ${-sum}`;
        this.transactions.push(transaction);
    }

    getAccountHistory() {
        console.log(this.transactions);
    }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo()); // print `Name: Dmytro, Age: 24, Amount: 1000$`
console.log(dmytro.addMoney(2000, 'salary'));
console.log(dmytro.withdrawMoney(500, 'new phone'));
console.log(dmytro.getInfo()); // Name: Dmytro, Age: 24, Amount: 2500$
console.log(dmytro.withdrawMoney(500, 'apartment rent'));
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

console.log(pavel.getInfo()); // // Name: Pavel, Age: 28, Amount: 400$
