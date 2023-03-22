import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisioncontrolComponent } from './misioncontrol.component';

describe('MisioncontrolComponent', () => {
  let component: MisioncontrolComponent;
  let fixture: ComponentFixture<MisioncontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisioncontrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisioncontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
