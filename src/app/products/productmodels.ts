export interface Producto{
  name: string,
  price: number,
  image: string,
  id: number
}

export interface Order{
  id: number,
  products: OrderProduct[],
  precioTotal: number,
  state: orderState
}

export interface OrderProduct{
  product: Producto,
  cantidad: number
}

export type orderState =  "no finalizado" | "finalizado";
