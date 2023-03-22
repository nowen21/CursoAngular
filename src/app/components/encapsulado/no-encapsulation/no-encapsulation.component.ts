import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  templateUrl: './no-encapsulation.component.html',
  styleUrls: ['./no-encapsulation.component.css'],
//   template: `
//   <h2>None</h2>
//   <div class="none-message">No encapsulation</div>
// `,
// styles: ['h2, .none-message { color: red; }'],
// None, Emulated,ShadowDom
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent {

}
