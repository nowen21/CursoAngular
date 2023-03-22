import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-meta',
  templateUrl: './hijo-meta.component.html',
  styleUrls: ['./hijo-meta.component.css'],
  inputs: ['clearanceItem'],
  outputs: ['buyEvent']
})
export class HijoMetaComponent {

  buyEvent = new EventEmitter<string>();
  clearanceItem = '';

  buyIt() {
    console.warn('Child says: emitting buyEvent with', this.clearanceItem);
    this.buyEvent.emit(this.clearanceItem);
  }
}
