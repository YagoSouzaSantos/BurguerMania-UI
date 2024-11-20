import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-img',
  standalone: true,
  imports: [],
  templateUrl: './container-img.component.html',
  styleUrl: './container-img.component.scss'
})
export class ContainerImgComponent {
  @Input({ required: true }) r_pathImg: string = '';
}
