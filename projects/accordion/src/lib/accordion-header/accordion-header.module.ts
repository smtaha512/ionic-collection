import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AccordionHeaderComponent } from './accordion-header.component';

@NgModule({
  declarations: [AccordionHeaderComponent],
  exports: [AccordionHeaderComponent],
  imports: [CommonModule, IonicModule]
})
export class AccordionHeaderModule {}
