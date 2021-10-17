import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { RegisterVendorComponent } from './components/register-vendor/register-vendor.component';
import { VendorComponent } from './components/vendor/vendor.component';

const routes: Routes = [
  {
    path: '',
    component: VendorComponent,
  },
  {
    path: 'create',
    component: RegisterVendorComponent,
  },
  {
    path: 'edit/:id',
    component: RegisterVendorComponent,
  },
  {
    path: ':id/product',
    component: RegisterProductComponent,
  },
  {
    path: ':id/product/create',
    component: RegisterProductComponent,
  },
  {
    path: ':id/product/:id/edit',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsRoutingModule {}
