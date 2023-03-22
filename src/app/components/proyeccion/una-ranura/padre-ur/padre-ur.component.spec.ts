import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreUrComponent } from './padre-ur.component';

describe('PadreUrComponent', () => {
  let component: PadreUrComponent;
  let fixture: ComponentFixture<PadreUrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreUrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreUrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
