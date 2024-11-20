import { Component, inject } from '@angular/core';
import { ContainerImgComponent } from "../../components/container-img/container-img.component";
import { ButtonComponent } from "../../components/button/button.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerImgComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private router = inject(Router)

  configButton = {
    placeOrder: { label: 'Fazer pedido', style: 'primary' },
    accessMenu: { label: 'Acessar cardápio', style: 'secondary' }
  };

  onPlaceOrderClick() {
    this.router.navigate(['order']);
  }

  onAccessMenuClick() {
    this.router.navigate(['menu/categories']);
  }
}
