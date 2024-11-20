import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";
import { CardComponent } from "../../../components/card/card.component";
import { Router } from '@angular/router';
import { Category } from '../../../interfaces/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-menu-category',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './menu-category.component.html',
  styleUrl: './menu-category.component.scss'
})
export class MenuCategoryComponent implements OnInit {
  private router = inject(Router)
  private categoryService = inject(CategoryService)

  categories: Category[] = [];
  showAll: boolean = false;

  configButton = {
    seeFullMenu: { label: 'VER CARDÁPIO COMPLETO', style: 'primary' },
  };

  ngOnInit(): void {
    this.loadCategories();
  }

  onCategoryClick (category: Category) {
      this.router.navigate(['menu/products', category.id]);
  }

  toggleCategories(): void {
    this.showAll = !this.showAll;
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => console.error(err),
    });
  }

  get displayedCategories(): Category[] {
    return this.showAll ? this.categories : this.categories.slice(0, 3);
  }

}
