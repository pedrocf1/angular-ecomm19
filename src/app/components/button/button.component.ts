import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="text-blac w-full px-5 py-2 rounded-lg shadow-md hover" (click)="btnClicked.emit()">
      {{label()}}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input('');
  btnClicked = output();
}
