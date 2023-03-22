import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoAliaComponent } from './hijo-alia.component';

describe('HijoAliaComponent', () => {
  let component: HijoAliaComponent;
  let fixture: ComponentFixture<HijoAliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoAliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoAliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
