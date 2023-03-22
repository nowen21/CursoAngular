import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrePhComponent } from './padre-ph.component';

describe('PadrePhComponent', () => {
  let component: PadrePhComponent;
  let fixture: ComponentFixture<PadrePhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrePhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadrePhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
