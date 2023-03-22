import { Component, Input } from '@angular/core';
import { StyleModel } from '../models/StyleModel';

@Component({
  selector: 'app-hero-controls',
  templateUrl: './hero-controls.component.html',
  styleUrls: ['./hero-controls.component.css']
})
export class HeroControlsComponent {
  @Input() hero!: StyleModel;

  activate() {
    this.hero.active = true;
  }
}
