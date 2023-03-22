import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreAliaComponent } from './padre-alia.component';

describe('PadreAliaComponent', () => {
  let component: PadreAliaComponent;
  let fixture: ComponentFixture<PadreAliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreAliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreAliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
