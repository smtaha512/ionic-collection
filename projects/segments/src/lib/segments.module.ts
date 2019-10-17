import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SegmentsComponent } from './segments.component';

@NgModule({
  declarations: [SegmentsComponent],
  imports: [CommonModule, IonicModule],
  exports: [SegmentsComponent]
})
export class SegmentsModule {}
