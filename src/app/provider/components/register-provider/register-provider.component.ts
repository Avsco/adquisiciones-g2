import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { provider } from '../../interfaces';
import { ProviderApiService } from '../../services/provider-api.service';

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.scss'],
})
export class RegisterProviderComponent implements OnInit {
  constructor(
    private service: ProviderApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  optionalProvider!: provider | null;
  providerForm = new FormGroup({
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    const idProvider = this.route.snapshot.paramMap.get('idProvider');
    if (idProvider) {
      this.service.findProviderById(idProvider).subscribe((data) => {
        this.providerForm.get('code')?.setValue(data.code);
        this.providerForm.get('name')?.setValue(data.name);
        this.optionalProvider = data;
      });
    }
  }

  onSubmit() {
    if (this.optionalProvider) {
      this.service
        .updateProvider(this.optionalProvider.id, {
          ...this.providerForm.value,
          items: this.optionalProvider.items,
        })
        .subscribe(() => {
          this.router.navigate(['/provider']);
        });
    } else {
      this.service
        .createProvider({
          ...this.providerForm.value,
          items: [],
        })
        .subscribe(() => {
          this.router.navigate(['/provider']);
        });
    }
  }
}
