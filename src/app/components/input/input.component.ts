import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OrderFormData } from '../../interfaces/order-form-data';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, CommonModule, MatSelectModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  @Output() formSubmit: EventEmitter<OrderFormData> = new EventEmitter<OrderFormData>();
  private productService = inject(ProductService)

  productList: Product[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      products: this.fb.array([this.createProduct()]),
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      (response) => {
        this.productList = response;
      },
      (error) => {
        console.error('Erro ao carregar produtos', error);
      }
    );
  }

  // Cria o produto que será utilizado para adição no array de produtos do form
  createProduct(): FormGroup {
    return this.fb.group({
      productId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
  }

  // Obtém o array de produtos no formulário
  get products(): FormArray {
    return this.form.get('products') as FormArray;
  }

  // Adiciona um novo produto ao array
  addProduct(): void {
    this.products.push(this.createProduct());
  }

  // Remove um produto do array pelo seu índice
  removeProduct(index: number): void {
    this.products.removeAt(index);
    this.form.setControl('products', this.products);
  }

  // Emite os dados do formulário para outro component realizar o envio
  emitFormData(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }

  resetForm(): void {
    this.form.reset({
      products: [this.createProduct()],
      notes: ''
    });
  }
}
