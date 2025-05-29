import { Product } from "./Product";

export class DigitalProducts extends Product{
    // downloadingEbook:number
    constructor(id:number,name:string,price:number,quantity:number,public downloadingEbook:number){
        super(id,name,price,quantity)

        // this.downloadingEbook = downloadingEbook
    }
getDownloadEbook():string{
    return `${this.name} is downloading.... $ The pakege size: ${this.downloadingEbook} MB`
}

}