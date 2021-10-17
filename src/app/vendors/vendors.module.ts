import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterVendorComponent } from './components/register-vendor/register-vendor.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';

@NgModule({
  declarations: [
    RegisterVendorComponent,
    VendorComponent,
    ProductComponent,
    RegisterProductComponent
  ],
  imports: [CommonModule, VendorsModule],
})
export class VendorsModule {}
