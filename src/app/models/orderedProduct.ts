export class OrderedProduct {
  constructor(
    public _id: string,
    public brandName: string,
    public name: string,
    public type: string,
    public size: string,
    public color: string,
    public price: number,
    public amount: number,
    public imgUrl: string,
    public description: string,
    public newProd: boolean,
    public forSale: boolean
  ) {}
}
