export interface OfferData {
  id: number;
  offerCode: string;
  quantity: string;
  offerDiscount: string;
}

export interface Item {
  addOnTitle: string;
  mrp: string;
  sellingPrice: string;
  weightUnits: string;
  availability: string;
}

export interface RowData {
  id: number;
  quantity: string;
  price: string;
  priceDollar: string;
}