module.exports = class ShoppingCart{
    constructor() {
        this.items = []
    }
    getItems() {
        return this.items
    }
    addItem(itemName, quantity, price) {
        this.items.push(
            {
                name: itemName,
                quantity: quantity,
                pricePerUnit: price
            }
        )
    }
    clear() {
        this.items = []
    }
    total() {
        function priceAdder(runingTotal, nextItem) {

            console.log('rt =', runingTotal)
            console.log('ni =', nextItem)

            const itemPrise = nextItem.pricePerUnit
            const itemCount = nextItem.quantity

            console.log('ip =', itemPrise)
            console.log('ic =', itemCount)

            const additCost = itemCount * itemPrise

            console.log('ac =', additCost)

            return runingTotal + additCost
        }
        const total = this.items.reduce(priceAdder, 0)
        console.log('t =', total)
        return total
    }
}
