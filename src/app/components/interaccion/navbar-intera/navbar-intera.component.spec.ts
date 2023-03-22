import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInteraComponent } from './navbar-intera.component';

describe('NavbarInteraComponent', () => {
  let component: NavbarInteraComponent;
  let fixture: ComponentFixture<NavbarInteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarInteraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarInteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
