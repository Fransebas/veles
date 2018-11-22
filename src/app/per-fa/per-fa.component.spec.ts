import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerFAComponent } from './per-fa.component';

describe('PerFAComponent', () => {
  let component: PerFAComponent;
  let fixture: ComponentFixture<PerFAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerFAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
