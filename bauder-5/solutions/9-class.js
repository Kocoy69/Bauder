// BEGIN
export class Cart {

    constructor() {
        this.items = [];
    }

    addItem(item, count) {
        this.items.push({ item: item, count: count });
        return this;
    }

    getItems() {
        return this.items;
    }

    getCost() {
        return this.items.reduce((prev, el) => prev + el.item.price * el.count, 0);
    }

    getCount() {
        return this.items.reduce((prev, el) => prev + el.count, 0);
    }
}
export default Cart;
// END