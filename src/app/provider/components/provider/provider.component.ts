import { Component, OnInit } from '@angular/core';
import { provider } from '../../interfaces';
import { ProviderApiService } from '../../services/provider-api.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
})
export class ProviderComponent implements OnInit {
  providers!: provider[];
  constructor(private servicerProvider: ProviderApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.servicerProvider.getProviders().subscribe((data) => {
      this.providers = data;
    });
  }

  deleteProvider(id: number | undefined) {
    this.servicerProvider.deleteProvider(id).subscribe(() => {
      this.fetchData();
    });
  }
}
