import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreComComponent } from './padre-com.component';

describe('PadreComComponent', () => {
  let component: PadreComComponent;
  let fixture: ComponentFixture<PadreComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
