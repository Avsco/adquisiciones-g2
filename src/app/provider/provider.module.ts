import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterProviderComponent } from './components/register-provider/register-provider.component';
import { ProviderComponent } from './components/provider/provider.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { ProviderRoutingModule } from './provider-routing.module';

@NgModule({
  declarations: [
    RegisterProviderComponent,
    ProviderComponent,
    ProductComponent,
    RegisterProductComponent,
  ],
  imports: [CommonModule, ProviderRoutingModule],
})
export class PoviderModule {}
