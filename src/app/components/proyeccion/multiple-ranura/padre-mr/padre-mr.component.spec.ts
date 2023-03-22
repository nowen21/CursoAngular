import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreMrComponent } from './padre-mr.component';

describe('PadreMrComponent', () => {
  let component: PadreMrComponent;
  let fixture: ComponentFixture<PadreMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreMrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
