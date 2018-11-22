import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationFPComponent } from './operation-fp.component';

describe('OperationFPComponent', () => {
  let component: OperationFPComponent;
  let fixture: ComponentFixture<OperationFPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationFPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationFPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
