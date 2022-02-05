import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticasteComponent } from './multicaste.component';

describe('MulticasteComponent', () => {
  let component: MulticasteComponent;
  let fixture: ComponentFixture<MulticasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
