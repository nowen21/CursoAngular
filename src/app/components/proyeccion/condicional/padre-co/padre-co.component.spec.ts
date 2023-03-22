import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreCoComponent } from './padre-co.component';

describe('PadreCoComponent', () => {
  let component: PadreCoComponent;
  let fixture: ComponentFixture<PadreCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreCoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
