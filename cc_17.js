// Task 1 - Create a Customer Class
class Customers {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.purchaseHistory = []
    }
    addPurchase(amount) {
        this.purchaseHistory.push(amount)
    }
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total += amount, 0).toFixed(0)
    }
}

// Task 2 - Create a SalesRep Class
class SalesReps {
    constructor(name) {
        this.name = name
        this.clients = []
    }
    addClient(customer) {
        this.clients.push(customer)
    }
    getClientTotal(name) {
        const clientName = this.clients.find(client => client.name === name)
        if (clientName) {
            return clientName.getTotalSpent()
        }
        return null
    }
}

// Task 3 - Create a VIP Customer (extends Customer)
class VIPCustomers extends Customers {
    constructor(name, email, vipLevel) {
        super(name, email)
        this.vipLevel = vipLevel
    }
    getTotalSpent(){
        const totalSpend = this.purchaseHistory.reduce((total, amount) => total += amount, 0)
        return (totalSpend * 1.1).toFixed(0)

    }
}

// Task 4 - Build a Client Support System
function reduceArr(customers) {
    let reduceArray = customers.map(customer => parseInt(customer.getTotalSpent()))
    const totalSpentt = reduceArray.reduce((total, amount) => total + amount, 0)
    return totalSpentt
}

function filterCustomers(customers) {
    return customers.filter(customer => customer.getTotalSpent() >= 500)
}

function customerMap(customers) {
    return customers.map(customer => ({
        name: customer.name,
        total_spent: customer.getTotalSpent()
    }))
}
// Task 1 Log
const customer1 = new Customers("Jason Miller", "jmil@g.com")
customer1.addPurchase(200)
customer1.addPurchase(300)
customer1.addPurchase(400)
console.log(`Customer Name: ${customer1.name}`)
console.log(`Total Spent: $${customer1.getTotalSpent()}`)

// Task 2 Log
const salesRep1 = new SalesReps("Gus Gomez")
salesRep1.addClient(customer1)
console.log(`Client(s) of ${salesRep1.name}: ${salesRep1.clients.map(client => client.name)}`)
console.log(`Total sales for client: $${salesRep1.getClientTotal("Jason Miller")}`)

// Task 3 Log
const vip1 = new VIPCustomers("Eric Torres", "etorres@g.com", "Gold")
vip1.addPurchase(200)
vip1.addPurchase(300)
vip1.addPurchase(400)
console.log(`Total Sales for client (w/bonus): $${vip1.getTotalSpent()}`)

// Task 4 Prep
const customer2 = new Customers("Galo Rebelo", "grebelo@g.com")
const customer3 = new Customers("Mohammed Al Zaben", "malzaben@g.com")
const vip2 = new VIPCustomers("Bobby Newland", "bnewland@g.com", "Platinum")
customer2.addPurchase(100)
customer2.addPurchase(200)
customer2.addPurchase(300)
customer3.addPurchase(50)
customer3.addPurchase(75)
customer3.addPurchase(100)
vip2.addPurchase(100)
vip2.addPurchase(80)
vip2.addPurchase(60)
salesRep1.addClient(customer2)
salesRep1.addClient(customer3)
salesRep1.addClient(vip1)
salesRep1.addClient(vip2)

// Task 4 Log
const allCustomers = [customer1, customer2, customer3, vip1, vip2]
console.log(`Total revenue from all customers: $${reduceArr(allCustomers)}`)
console.log(`High spending customers:`,filterCustomers(allCustomers))
console.log(`All customers:`,customerMap(allCustomers))