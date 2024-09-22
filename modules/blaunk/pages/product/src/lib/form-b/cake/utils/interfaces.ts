export interface Highlight {
  labels: string[];
  values: string[];
}

export interface Field {
  addOnTitle: string;
  mrp: string;
  sellingPrice: string;
  weightUnits: string;
  availability: string;
}

export interface RowData {
  id: number;
  weight: string;
  mrp: string;
  sp: string;
}
export interface OfferData {
  id: number;
  offerCode: string;
  maxValue: string;
  offerDiscount: string;
}
