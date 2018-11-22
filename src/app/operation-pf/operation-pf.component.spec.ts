import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationPFComponent } from './operation-pf.component';

describe('OperationPFComponent', () => {
  let component: OperationPFComponent;
  let fixture: ComponentFixture<OperationPFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationPFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
