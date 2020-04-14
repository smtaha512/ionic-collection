import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerTitleComponent } from './timepicker-title.component';

describe('TimepickerTitleComponent', () => {
  let component: TimepickerTitleComponent;
  let fixture: ComponentFixture<TimepickerTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimepickerTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
