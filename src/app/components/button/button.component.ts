import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true }) r_label!: string;
  @Input({ required: true }) r_style: string = 'primary';

  @Output() eventClick = new EventEmitter<void>();

  // emite um evento de clique para o componente que o chamou, este será responsável por executar uma ação
  onClick() {
    this.eventClick.emit();
  }
}
