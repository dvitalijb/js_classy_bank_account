class Person {
    constructor(name, date, amount) {
        this.transactions = [];
        this.name = name;
        this.date = date;
        this.amount = amount;
        this.transactions = [this.transactions, `Initial: ${this.amount}`];
    }

    getInfo() {
        const today = new Date();
        const birthDate = new Date(this.date);
        this.age = today.getFullYear() - birthDate.getFullYear();
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
