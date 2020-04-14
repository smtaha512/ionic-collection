import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { TimepickerTitleComponent } from './timepicker-title.component';

@NgModule({
  declarations: [TimepickerTitleComponent],
  exports: [TimepickerTitleComponent],
  imports: [CommonModule, IonicModule],
})
export class TimepickerTitleModule {}
