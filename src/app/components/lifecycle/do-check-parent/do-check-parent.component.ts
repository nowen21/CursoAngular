import { Component,ViewChild } from '@angular/core';
import { DoCheckChildComponent } from '../do-check-child/do-check-child.component';

import { Hero } from '../models/hero';

@Component({
  selector: 'app-do-checke-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrls: ['./do-check-parent.component.css']
})
export class DoCheckeParentComponent {
  hero!: Hero;
  power = '';
  title = 'DoCheck';
  @ViewChild(DoCheckChildComponent) childView!: DoCheckChildComponent;

  constructor() {
    this.reset();
  }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
