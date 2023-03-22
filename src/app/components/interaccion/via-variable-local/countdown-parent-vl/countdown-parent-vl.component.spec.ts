import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentVlComponent } from './countdown-parent-vl.component';

describe('CountdownParentVlComponent', () => {
  let component: CountdownParentVlComponent;
  let fixture: ComponentFixture<CountdownParentVlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownParentVlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownParentVlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
