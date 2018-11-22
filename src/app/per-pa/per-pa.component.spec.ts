import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerPAComponent } from './per-pa.component';

describe('PerPAComponent', () => {
  let component: PerPAComponent;
  let fixture: ComponentFixture<PerPAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerPAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
