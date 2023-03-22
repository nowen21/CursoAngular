import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHijoChildComponent } from './padre-hijo-child.component';

describe('PadreHijoChildComponent', () => {
  let component: PadreHijoChildComponent;
  let fixture: ComponentFixture<PadreHijoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreHijoChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreHijoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
