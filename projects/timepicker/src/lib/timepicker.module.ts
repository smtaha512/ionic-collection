import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { TimepickerComponent } from './timepicker.component';
import { TimepickerTitleModule } from './timepicker-title/timepicker-title.module';

@NgModule({
  declarations: [TimepickerComponent],
  entryComponents: [TimepickerComponent],
  imports: [CommonModule, IonicModule, TimepickerTitleModule],
  exports: [TimepickerComponent],
})
export class TimepickerModule {}
