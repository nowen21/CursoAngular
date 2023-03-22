import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerVlComponent } from './countdown-timer-vl.component';

describe('CountdownTimerVlComponent', () => {
  let component: CountdownTimerVlComponent;
  let fixture: ComponentFixture<CountdownTimerVlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerVlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownTimerVlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
