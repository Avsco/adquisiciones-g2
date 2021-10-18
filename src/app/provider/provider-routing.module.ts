import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
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
    path: 'edit/:idProvider',
    component: RegisterProviderComponent,
  },
  {
    path: ':idProvider/product',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
