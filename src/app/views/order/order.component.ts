import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from "../../components/button/button.component";
import { InputComponent } from "../../components/input/input.component";
import { OrderFormData } from '../../interfaces/order-form-data';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [InputComponent, ButtonComponent, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  @ViewChild(InputComponent) inputComponent!: InputComponent;
  #orderService = inject(OrderService)
  #router = inject(Router)
  #snackbarService = inject(SnackbarService);

  formData: OrderFormData | null = null;

  configButton = {
    finish: { label: 'FINALIZAR', style: 'primary' },
  };

  // Chama o método emitFormData do componente filho para enviar formulário
  onSubmit(): void {
    if (this.inputComponent) {
      this.inputComponent.emitFormData();
    }
  }

  // Método para receber os dados do formulário e realizar envio
  onFormSubmit(data: OrderFormData): void {
    this.formData = data;

    this.#orderService.createOrder(this.formData).subscribe(
      (response) => {
        this.#snackbarService.showSuccess('Pedido realizado com sucesso!');
        this.inputComponent.resetForm();
        this.#router.navigate(['']);
      },
      (error) => {
        let errorMessage: string;
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        } else {
          errorMessage = 'Ocorreu um erro ao criar o pedido.';
        }
        this.#snackbarService.showError(errorMessage);
      }
    );
  }
}
