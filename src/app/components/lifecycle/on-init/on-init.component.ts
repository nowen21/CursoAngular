import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.css']
})
export class OnInitComponent implements OnInit {
  saludo: string ='';
  ngOnInit(): void {
    console.log("%c Desde el ngOnInit", 'color:green');
    this.saludo = "Soy el método del ciclo de vida más utilizado y desde aquí se pueden inicializar variables, acceder a la DB para obtener información y todo lo que se le ocurra";

  }
}
