import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoMrComponent } from './hijo-mr.component';

describe('HijoMrComponent', () => {
  let component: HijoMrComponent;
  let fixture: ComponentFixture<HijoMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoMrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
