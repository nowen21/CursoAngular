import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckChildComponent } from './do-check-child.component';

describe('DoCheckChildComponent', () => {
  let component: DoCheckChildComponent;
  let fixture: ComponentFixture<DoCheckChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoCheckChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoCheckChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
