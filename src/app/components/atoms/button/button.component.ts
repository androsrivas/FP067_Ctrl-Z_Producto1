import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.css'
})
export class ButtonComponent {
  @Input() label: string = 'Ver Detalle';
  @Input() type: string = 'button';
  @Output() onClick = new EventEmitter<Event>();
}
