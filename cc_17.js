// Task 1 - Create a Customer Class
class Customer {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.purchaseHistory = []
    }
    addPurchase(amount) {
        this.purchaseHistory.push(amount)
    }
    getTotalSpent() {
        totalSpend = this.purchaseHistory.reduce((total, amount) => total += amount, 0)
        console.log(totalSpend)
    }
}

class SalesRep {
    constructor(name) {
        this.name = name
        this.clients = []
    }
    addClient(customer) {
        this.clients.push(customer)
    }
    getClientTotal(name) {
        clientName = this.clients.find(name)
        getTotalSpent(clientName)
    }
}

class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email)
        this.vipLevel = vipLevel
    }
    getTotalSpent(){
        totalSpend = this.purchaseHistory.reduce((total, amount) => total += amount, 0) * 1.1

    }

}