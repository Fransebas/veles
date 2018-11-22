import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPerComponent } from './n-per.component';

describe('NPerComponent', () => {
  let component: NPerComponent;
  let fixture: ComponentFixture<NPerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
