import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';
import { CardComponent } from '../../../components/card/card.component';
import { Category } from '../../../interfaces/category';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from '../../../services/product.service';
import { Product } from './../../../interfaces/product';


@Component({
  selector: 'app-menu-products',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './menu-products.component.html',
  styleUrl: './menu-products.component.scss'
})
export class MenuProductsComponent implements OnInit{
  private categoryService = inject(CategoryService)
  private productService = inject(ProductService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  configButton = {
    seeFullMenu: { label: 'VER CARDÁPIO COMPLETO', style: 'primary' },
  };

  categoryId: string = ''
  products: Product[] = []
  category!: Category
  showAll: boolean = false

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id') || '';
      this.loadCategory();
    });
  }

  loadCategory(): void {
    this.categoryService.getCategoryById(this.categoryId).subscribe(
      (category) => {
        this.category = category;
        this.loadProductsByCategory();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadProductsByCategory(): void {
    this.productService.getProductsByCategory(this.categoryId).subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onProductClick (product: Product) {
      this.router.navigate(['menu/details', product.id]);
  }

  toggleProducts(): void {
    this.showAll = !this.showAll;
  }

  get displayedProducts(): Product[] {
    return this.showAll ? this.products : this.products.slice(0, 3);
  }
}
