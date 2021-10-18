import { Component, OnInit , Input} from '@angular/core';
import { Producto } from '../productmodels';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products!: Producto[];
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
    this.cartService.initCart();
  }

  getProducts(){
    this.productService.getProduct().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  addProduct(product: Producto){
    this.cartService.addProduct(product);
  }
}
