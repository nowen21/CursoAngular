import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-alia',
  templateUrl: './padre-alia.component.html',
  styleUrls: ['./padre-alia.component.css']
})
export class PadreAliaComponent {
  currentItem = 'Television';
  wishlist = ['Drone', 'Computer'];
  saveForLater(item: string) {
    console.warn(`Parent says: saving ${item} for later.`);
  }

  addToWishList(wish: string) {
    console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.warn(this.wishlist);
  }
}
