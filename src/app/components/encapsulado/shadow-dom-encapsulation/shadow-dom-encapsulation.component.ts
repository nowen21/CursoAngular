import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  templateUrl: './shadow-dom-encapsulation.component.html',
  styleUrls: ['./shadow-dom-encapsulation.component.css'],

  //   template: `
    // <h2>ShadowDom</h2>
    // <div class="shadow-message">Shadow DOM encapsulation</div>
    // <app-emulated-encapsulation></app-emulated-encapsulation>
    // <app-no-encapsulation></app-no-encapsulation>
  // `,
  // styles: ['h2, .shadow-message { color: blue; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent {

}
