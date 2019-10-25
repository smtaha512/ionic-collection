import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AccordionHeaderModule } from './accordion-header/accordion-header.module';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule, IonicModule, AccordionHeaderModule],
  exports: [AccordionComponent]
})
export class AccordionModule {}
