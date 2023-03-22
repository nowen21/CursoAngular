import { Component, Input } from '@angular/core';
import { StyleModel } from '../models/StyleModel';

@Component({
  selector: 'app-hero-team',
  templateUrl: './hero-team.component.html',
  styleUrls: ['./hero-team.component.css']
})
export class HeroTeamComponent {
  @Input() hero!: StyleModel;
}
