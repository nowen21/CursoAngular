import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CountdownTimerVhComponent } from '../countdown-timer-vh/countdown-timer-vh.component';

@Component({
  selector: 'app-countdown-parent-vh',
  templateUrl: './countdown-parent-vh.component.html',
  styleUrls: ['./countdown-parent-vh.component.css']
})
export class CountdownParentVhComponent implements AfterViewInit {

  @ViewChild(CountdownTimerVhComponent)
  private timerComponent!: CountdownTimerVhComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerVhComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

}
