import { Component, Input } from '@angular/core';
import { StyleModel } from '../models/StyleModel';


@Component({
  selector: 'app-hero-main',
  templateUrl: './hero-main.component.html',
  styleUrls: ['./hero-main.component.css']
})
export class HeroMainComponent {
  @Input() hero!: StyleModel;
}
