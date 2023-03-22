import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPhComponent } from './hijo-ph.component';

describe('HijoPhComponent', () => {
  let component: HijoPhComponent;
  let fixture: ComponentFixture<HijoPhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoPhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
