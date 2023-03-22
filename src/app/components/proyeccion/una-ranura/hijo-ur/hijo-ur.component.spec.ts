import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoUrComponent } from './hijo-ur.component';

describe('HijoUrComponent', () => {
  let component: HijoUrComponent;
  let fixture: ComponentFixture<HijoUrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoUrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoUrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
