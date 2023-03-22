import { Component, Input } from '@angular/core';

import { Heroe } from '../../models/Heroe';

@Component({
  selector: 'app-padre-hijo-child',
  templateUrl: './padre-hijo-child.component.html',
  styleUrls: ['./padre-hijo-child.component.css']
})
export class PadreHijoChildComponent {
  @Input() heroe!: Heroe;
  @Input('master') masterName = '';
}
