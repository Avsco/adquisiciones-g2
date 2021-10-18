import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { item, provider } from '../../interfaces';
import { ItemsApiService } from '../../services/items-api.service';
import { ProviderApiService } from '../../services/provider-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(
    private serviceItem: ItemsApiService,
    private serviceProvider: ProviderApiService,
    private route: ActivatedRoute
  ) {}
  provider!: provider;
  items!: item[];
  productForm = new FormGroup({
    itemCode: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
  });

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const idProvider = this.route.snapshot.paramMap.get('idProvider');
    this.serviceItem.getItemsAvailable(idProvider).subscribe((data) => {
      this.items = data;
    });
    this.serviceProvider.findProviderById(idProvider).subscribe((data) => {
      this.provider = data;
    });
  }

  changeItem(e: any) {
    if (this.itemCode) {
      this.itemCode.setValue(e.target.value, {
        onlySelf: true,
      });
    }
  }

  get itemCode() {
    return this.productForm.get('itemCode');
  }

  get providerItems() {
    return this.provider.items;
  }

  onSubmit() {
    const { items, ...dataProvider } = this.provider;

    const a = this.items.find((item) => this.itemCode?.value == item.itemCode);
    if (!a) return;
    a.providerItemCode = this.provider.code;
    a.price = this.productForm.get('price')?.value || 0;
    items?.push(a);

    this.serviceProvider
      .updateProvider(this.provider.id, {
        ...dataProvider,
        items,
      })
      .subscribe(() => {
        this.getData();
      });
  }

  updateItem(itemCode: string) {}

  deleteItem(itemCode: string) {
    const { items, ...dataProvider } = this.provider;
    this.serviceProvider
      .updateProvider(this.provider.id, {
        ...dataProvider,
        items: this.provider.items?.filter((item) => item.itemCode != itemCode),
      })
      .subscribe(() => {
        this.getData();
      });
  }
}
