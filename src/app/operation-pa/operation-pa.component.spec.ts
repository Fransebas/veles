import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationPAComponent } from './operation-pa.component';

describe('OperationPAComponent', () => {
  let component: OperationPAComponent;
  let fixture: ComponentFixture<OperationPAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationPAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
