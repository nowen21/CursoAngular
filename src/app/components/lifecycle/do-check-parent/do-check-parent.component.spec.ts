import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckeParentComponent } from './do-check-parent.component';

describe('DoCheckeParentComponent', () => {
  let component: DoCheckeParentComponent;
  let fixture: ComponentFixture<DoCheckeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoCheckeParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoCheckeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
