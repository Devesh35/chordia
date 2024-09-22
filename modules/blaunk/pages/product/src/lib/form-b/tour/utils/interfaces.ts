export interface OfferData {
  id: number;
  offerCode: string;
  maxValue: string;
  flatDiscount: string;
}
export interface GuestData {
  id: number;
  guest: string;
  mrp: string;
  sp: string;
}

export interface Item {
  addOnTitle: string;
  roomType: string;
  viewType: string;
  status: string;
  freeBreakfast: boolean;
  welcomeDrink: boolean;
  acRoom: boolean;
  nonAcRoom: boolean;
}

