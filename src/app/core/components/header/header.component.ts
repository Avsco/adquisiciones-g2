import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private service: RoutesService) {}

  routes = () => this.service.routes;

  ngOnInit(): void {}
}
