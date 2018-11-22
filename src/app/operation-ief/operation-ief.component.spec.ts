import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationIEFComponent } from './operation-ief.component';

describe('OperationIEFComponent', () => {
  let component: OperationIEFComponent;
  let fixture: ComponentFixture<OperationIEFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationIEFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationIEFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
