import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
 <app-layout>
    <div breadcrumbs>
        <div class="container">

            <div class="d-flex justify-content-between align-items-center">
                <h2>Html y Css en l&iacute;nea</h2>
                <ol>
                    <li>
                        <a routerLink="/homexxxx">Home</a>
                    </li>
                    <li>
                        Curso Angular
                    </li>
                    <li>
                    Html y Css en l&iacute;nea
                    </li>
                </ol>
            </div>

        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-6 ddiv">
                Esto es un ejemplo de html y css en l&iacute;
                </div>
            </div>
        </div>            
    </div>
</app-layout>`,
  styles: [".ddiv{background-color:red}"]
})
export class InlineComponent {

}
