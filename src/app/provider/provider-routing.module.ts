import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { RegisterProviderComponent } from './components/register-provider/register-provider.component';
import { ProviderComponent } from './components/provider/provider.component';

const routes: Routes = [
  {
    path: '',
    component: ProviderComponent,
  },
  {
    path: 'create',
    component: RegisterProviderComponent,
  },
  {
    path: 'edit/:id',
    component: RegisterProviderComponent,
  },
  {
    path: ':id/product',
    component: ProductComponent,
  },
  {
    path: ':id/product/create',
    component: RegisterProductComponent,
  },
  {
    path: ':id/product/:id/edit',
    component: RegisterProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
