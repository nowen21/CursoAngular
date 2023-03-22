import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerVhComponent } from './countdown-timer-vh.component';

describe('CountdownTimerVhComponent', () => {
  let component: CountdownTimerVhComponent;
  let fixture: ComponentFixture<CountdownTimerVhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerVhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownTimerVhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
