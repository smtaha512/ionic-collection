import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { TimepickerComponent } from './timepicker.component';

@NgModule({
  declarations: [TimepickerComponent],
  entryComponents: [TimepickerComponent],
  imports: [IonicModule],
  exports: [TimepickerComponent],
})
export class TimepickerModule {}
