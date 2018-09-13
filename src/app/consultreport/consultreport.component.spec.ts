import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultreportComponent } from './consultreport.component';

describe('ConsultreportComponent', () => {
  let component: ConsultreportComponent;
  let fixture: ComponentFixture<ConsultreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
