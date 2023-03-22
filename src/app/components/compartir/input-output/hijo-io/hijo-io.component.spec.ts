import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoIoComponent } from './hijo-io.component';

describe('HijoIoComponent', () => {
  let component: HijoIoComponent;
  let fixture: ComponentFixture<HijoIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoIoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
