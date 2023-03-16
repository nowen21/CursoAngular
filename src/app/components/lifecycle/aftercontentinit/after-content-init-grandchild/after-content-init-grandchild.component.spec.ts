import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentInitGrandchildComponent } from './after-content-init-grandchild.component';

describe('AfterContentInitGrandchildComponent', () => {
  let component: AfterContentInitGrandchildComponent;
  let fixture: ComponentFixture<AfterContentInitGrandchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterContentInitGrandchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterContentInitGrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
