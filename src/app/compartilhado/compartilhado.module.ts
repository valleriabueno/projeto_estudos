import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AbbvPipe } from './pipes/abbv/abbv.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { IncPipe } from './pipes/inc/inc.pipe';
import { ObfsEmailPipe } from './pipes/obfs-email/obfs-email.pipe';



@NgModule({
  declarations: [
    FilterPipe,
    IncPipe,
    ObfsEmailPipe,
    AbbvPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    IncPipe,
    ObfsEmailPipe,
    AbbvPipe,
  ]
})
export class CompartilhadoModule { }
