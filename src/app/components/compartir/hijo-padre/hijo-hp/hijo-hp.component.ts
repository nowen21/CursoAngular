import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-hp',
  templateUrl: './hijo-hp.component.html',
  styleUrls: ['./hijo-hp.component.css']
})
export class HijoHpComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
