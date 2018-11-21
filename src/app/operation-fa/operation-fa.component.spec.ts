import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationFAComponent } from './operation-fa.component';

describe('OperationFAComponent', () => {
  let component: OperationFAComponent;
  let fixture: ComponentFixture<OperationFAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationFAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
