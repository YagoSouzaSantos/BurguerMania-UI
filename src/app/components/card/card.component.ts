import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Category } from '../../interfaces/category';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) r_item!: Category | Product;
  @Input({ required: true }) r_allowHover: boolean = false;
}
