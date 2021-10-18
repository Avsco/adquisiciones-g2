import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterProviderComponent } from './components/register-provider/register-provider.component';
import { ProviderComponent } from './components/provider/provider.component';
import { ProductComponent } from './components/product/product.component';
import { ProviderRoutingModule } from './provider-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterProviderComponent,
    ProviderComponent,
    ProductComponent,
  ],
  imports: [CommonModule, ProviderRoutingModule, ReactiveFormsModule],
})
export class ProviderModule {}
