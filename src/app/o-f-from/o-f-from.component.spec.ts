import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OFFromComponent } from './o-f-from.component';

describe('OFFromComponent', () => {
  let component: OFFromComponent;
  let fixture: ComponentFixture<OFFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OFFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OFFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
