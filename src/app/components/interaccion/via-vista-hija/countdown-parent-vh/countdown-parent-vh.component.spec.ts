import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentVhComponent } from './countdown-parent-vh.component';

describe('CountdownParentVhComponent', () => {
  let component: CountdownParentVhComponent;
  let fixture: ComponentFixture<CountdownParentVhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownParentVhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownParentVhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
