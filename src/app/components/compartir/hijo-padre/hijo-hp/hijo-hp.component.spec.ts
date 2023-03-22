import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoHpComponent } from './hijo-hp.component';

describe('HijoHpComponent', () => {
  let component: HijoHpComponent;
  let fixture: ComponentFixture<HijoHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoHpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
