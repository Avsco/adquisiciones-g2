export interface item {
  id?: number;
  name: string;
  category: string;
  providerItemCode?: string;
  itemCode: string;
  price: number;
  measureUnit: {
    code: string;
    name: string;
  };
}
