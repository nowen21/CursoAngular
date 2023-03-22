import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoMetaComponent } from './hijo-meta.component';

describe('HijoMetaComponent', () => {
  let component: HijoMetaComponent;
  let fixture: ComponentFixture<HijoMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoMetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
