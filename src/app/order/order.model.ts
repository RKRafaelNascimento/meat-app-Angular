class Order{
  constructor(
    public adress: string,
    public number: number,
    public optional: string,
    public paymentsOptions: string,
    public itemsOrder: OrderItems[] = []
  ){}
}

class OrderItems {
  constructor(
    public quantity: number,
    public menuItemId: string
  ){}
}

export {Order,OrderItems}
