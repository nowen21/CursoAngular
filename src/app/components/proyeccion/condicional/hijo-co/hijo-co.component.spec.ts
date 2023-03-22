import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoCoComponent } from './hijo-co.component';

describe('HijoCoComponent', () => {
  let component: HijoCoComponent;
  let fixture: ComponentFixture<HijoCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoCoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
