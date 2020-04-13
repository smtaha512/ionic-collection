import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { TimepickerModule } from '../../projects/timepicker/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), TimepickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
