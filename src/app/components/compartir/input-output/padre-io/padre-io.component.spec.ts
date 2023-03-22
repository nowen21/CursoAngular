import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreIoComponent } from './padre-io.component';

describe('PadreIoComponent', () => {
  let component: PadreIoComponent;
  let fixture: ComponentFixture<PadreIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreIoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
