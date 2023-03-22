import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHijoParentComponent } from './padre-hijo-parent.component';

describe('PadreHijoParentComponent', () => {
  let component: PadreHijoParentComponent;
  let fixture: ComponentFixture<PadreHijoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreHijoParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreHijoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
