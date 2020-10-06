import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { TimePickerPopoverOptions } from '../timepicker.interface';
import { TimepickerComponent } from './timepicker.component';

@Injectable({
  providedIn: 'root',
})
export class TimepickerPresenter {
  constructor(private readonly popoverController: PopoverController) {}

  present(options?: TimePickerPopoverOptions) {
    return this.popoverController.create({ ...options, component: TimepickerComponent }).then((p) => p.present());
  }
}
