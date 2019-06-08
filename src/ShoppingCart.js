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
}
