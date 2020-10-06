import { TestBed } from '@angular/core/testing';

import { TimepickerPresenter } from './timepicker-presenter';

describe('TimepickerPresenter', () => {
  let service: TimepickerPresenter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimepickerPresenter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
