import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceCountComponent } from './reference-count.component';

describe('ReferenceCountComponent', () => {
  let component: ReferenceCountComponent;
  let fixture: ComponentFixture<ReferenceCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
