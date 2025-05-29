
   export class Product{
        id:number;
        name:string;
        price:number;
        quantity:number;

        constructor(id:number,name:string,price:number,quantity:number){
            this.id = id;
            this.name= name;
            this.price = price;
            this.quantity = quantity
        }

        getProductDetails():string{
            return `Product name ${this.name} & price: $${this.price}, available quantity: ${this.quantity} picies`
        }

        getProductStockValue():number{
            return this.price * this.quantity
        }
    }
