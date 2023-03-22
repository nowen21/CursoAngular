import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-hp',
  templateUrl: './padre-hp.component.html',
  styleUrls: ['./padre-hp.component.css']
})
export class PadreHpComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
