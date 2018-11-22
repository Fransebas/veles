import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationAPComponent } from './operation-ap.component';

describe('OperationAPComponent', () => {
  let component: OperationAPComponent;
  let fixture: ComponentFixture<OperationAPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationAPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
