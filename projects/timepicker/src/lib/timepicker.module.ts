import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { TimepickerComponent } from './timepicker.component';
import { TimepickerTitleModule } from './timepicker-title/timepicker-title.module';
import { FormsModule } from '@angular/forms';
import { TimeToTitlePipe } from './pipes/time-to-title.pipe';

@NgModule({
  declarations: [TimepickerComponent, TimeToTitlePipe],
  entryComponents: [TimepickerComponent],
  imports: [CommonModule, FormsModule, IonicModule, TimepickerTitleModule],
  exports: [TimepickerComponent],
})
export class TimepickerModule {}
