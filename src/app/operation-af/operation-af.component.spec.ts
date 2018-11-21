import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationAFComponent } from './operation-af.component';

describe('OperationAFComponent', () => {
  let component: OperationAFComponent;
  let fixture: ComponentFixture<OperationAFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationAFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationAFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
