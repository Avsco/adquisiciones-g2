import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Order, OrderProduct, Producto } from '../productmodels';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  orderProduct!: OrderProduct;
  order!: Order;
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.initCart();
    this.loadOrder();
  }

  loadOrder(){
    this.order = this.cartService.getOrder();

  }

  addProduct(product: Producto){
    this.cartService.addProduct(product);
  }

  removeProduct(product: Producto){
    this.cartService.removeProduct(product);
  }
}
