import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoComComponent } from './hijo-com.component';

describe('HijoComComponent', () => {
  let component: HijoComComponent;
  let fixture: ComponentFixture<HijoComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
