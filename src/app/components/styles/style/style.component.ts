import { Component, HostBinding } from '@angular/core';
import { StyleModel } from '../models/StyleModel';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styles: ['h1 { font-weight: normal; }']
  //styleUrls: ['./style.component.css']
})
export class StyleComponent {
  hero = new StyleModel(
    'Human Torch',
    ['Mister Fantastic', 'Invisible Woman', 'Thing']
  );

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }
}
