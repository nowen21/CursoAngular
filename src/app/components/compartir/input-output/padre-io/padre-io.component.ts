import { Component} from '@angular/core';

@Component({
  selector: 'app-padre-io',
  templateUrl: './padre-io.component.html',
  styleUrls: ['./padre-io.component.css']
})
export class PadreIoComponent {
  currentItem = 'Television';

  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }
}
