import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewGrandChildComponent } from './after-view-grand-child.component';

describe('AfterViewGrandChildComponent', () => {
  let component: AfterViewGrandChildComponent;
  let fixture: ComponentFixture<AfterViewGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterViewGrandChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterViewGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
