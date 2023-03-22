import { Component } from '@angular/core';
import { HEROES } from '../../models/Heroe';


@Component({
  selector: 'app-padre-hijo-parent',
  templateUrl: './padre-hijo-parent.component.html',
  styleUrls: ['./padre-hijo-parent.component.css']
})
export class PadreHijoParentComponent {
  heroes = HEROES;
  master = 'Master';
}
