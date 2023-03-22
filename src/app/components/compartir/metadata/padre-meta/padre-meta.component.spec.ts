import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreMetaComponent } from './padre-meta.component';

describe('PadreMetaComponent', () => {
  let component: PadreMetaComponent;
  let fixture: ComponentFixture<PadreMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreMetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
