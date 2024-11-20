import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from "../../components/button/button.component";
import { InputComponent } from "../../components/input/input.component";
import { OrderFormData } from '../../interfaces/order-form-data';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [InputComponent, ButtonComponent, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  @ViewChild(InputComponent) inputComponent!: InputComponent;

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
  // Será substiuido quando a API estiver pronta, apenas para testes
  onFormSubmit(data: OrderFormData): void {
    this.formData = data;
    console.log('Pedido:', this.formData);
  }
}
