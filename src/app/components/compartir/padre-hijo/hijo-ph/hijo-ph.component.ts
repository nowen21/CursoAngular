import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-ph',
  templateUrl: './hijo-ph.component.html',
  styleUrls: ['./hijo-ph.component.css']
})
export class HijoPhComponent {
  @Input() item = ''; // decorate the property with @Input()
}
