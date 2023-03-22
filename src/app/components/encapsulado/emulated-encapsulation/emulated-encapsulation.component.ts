import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated-encapsulation',
   templateUrl: './emulated-encapsulation.component.html',
   styleUrls: ['./emulated-encapsulation.component.css'],

//    template: `
  //  <h2>Emulated</h2>
  //  <div class="emulated-message">Emulated encapsulation</div>
  //  <app-no-encapsulation></app-no-encapsulation>
//  `,
//  styles: ['h2, .emulated-message { color: green; }'],
 encapsulation: ViewEncapsulation.Emulated,
  
  
})
export class EmulatedEncapsulationComponent {

}
