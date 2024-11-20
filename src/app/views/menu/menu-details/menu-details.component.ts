import { Component, inject, LOCALE_ID } from '@angular/core';
import { DescriptionComponent } from "../../../components/description/description.component";
import { CardComponent } from '../../../components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';
import { ButtonComponent } from '../../../components/button/button.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@Component({
  selector: 'app-menu-details',
  standalone: true,
  imports: [DescriptionComponent, CardComponent, ButtonComponent, CommonModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  templateUrl: './menu-details.component.html',
  styleUrl: './menu-details.component.scss'
})
export class MenuDetailsComponent {
  private productService = inject(ProductService)
  private route          = inject(ActivatedRoute)
  private router         = inject(Router)

  product!: Product

  configButton = {
    purchase: { label: 'COMPRAR', style: 'primary' },
  };

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadProductDetails(params['id']);
    });
  }

  loadProductDetails(id: string): void {
    this.productService.getProductById(id).subscribe(
      (product) => {
         this.product = product;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onPurchaseClick() {
    this.router.navigate(['/order']);
  }
}
