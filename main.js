class Person {
    constructor(name, date, amount) {
        this.transactions = [];
        this.name = name;
        this.date = date;
        this.amount = amount;
        const initial = `Initial: ${this.amount}`;
        this.transactions = [this.transactions, initial];
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
        this.transactions = [...this.transactions, transaction];
    }

    withdrawMoney(sum, title) {
        this.amount -= sum;
        const transaction = `${title}: ${-sum}`;
        this.transactions = [...this.transactions, transaction];
    }

    getAccountHistory() {
        console.log(this.transactions);
    }
}
