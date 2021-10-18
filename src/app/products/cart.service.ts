import { Injectable } from '@angular/core';
import { Order, Producto, OrderProduct } from './productmodels';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private order!: Order;
  constructor() { }


  loadCart(){

  }

  initCart(){
    this.order = {
      id: Math.random()*100,
      products: [],
      precioTotal: 0,
      state: "no finalizado"
    }
  }

  addProduct(product: Producto){
    const item =  this.order.products.find(orderProduct => {
      return (orderProduct.product.id === product.id)
    });
    if (item !== undefined){
      item.cantidad++;
    }else{
      const add: OrderProduct = {
        cantidad : 1,
        product: product,
      }
      this.order.products.push(add);
    }

  }

  getOrder(): Order{
    return this.order;
  }

  removeProduct(product: Producto){
    let position = 0;
    const item =  this.order.products.find((orderProduct, index) => {
      position = index;
      return (orderProduct.product.id === product.id)
    });
    if (item !== undefined){
      item.cantidad--;

      if(item.cantidad === 0 ){
        this.order.products.splice(position, 1);
      }
    }


  }
}
