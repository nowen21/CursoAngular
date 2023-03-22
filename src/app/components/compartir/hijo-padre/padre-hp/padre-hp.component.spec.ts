import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHpComponent } from './padre-hp.component';

describe('PadreHpComponent', () => {
  let component: PadreHpComponent;
  let fixture: ComponentFixture<PadreHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreHpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
