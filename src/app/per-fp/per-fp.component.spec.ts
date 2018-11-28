import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerFPComponent } from './per-fp.component';

describe('PerFPComponent', () => {
  let component: PerFPComponent;
  let fixture: ComponentFixture<PerFPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerFPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerFPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
