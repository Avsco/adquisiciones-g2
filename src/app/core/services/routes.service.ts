import { Injectable } from '@angular/core';

interface route {
  name: string;
  route: string;
}

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  routes: route[] = [
    {
      name: 'Home',
      route: '',
    },
    {
      name: 'Provedores',
      route: 'provider',
    },
  ];
  constructor() {}
}
