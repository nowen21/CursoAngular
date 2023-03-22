import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-meta',
  templateUrl: './padre-meta.component.html',
  styleUrls: ['./padre-meta.component.css']
})
export class PadreMetaComponent {
  lastChanceItem = 'Beanbag';
  buyClearanceItem(item: string) {
    console.warn(`Parent says: buying ${item}.`);
  }
}
