import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerrageComponent } from './merrage.component';

describe('MerrageComponent', () => {
  let component: MerrageComponent;
  let fixture: ComponentFixture<MerrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
