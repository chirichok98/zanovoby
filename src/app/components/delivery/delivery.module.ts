import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { DeliveryComponent } from './delivery.component';


@NgModule({
  declarations: [DeliveryComponent],
  exports: [DeliveryComponent],
  imports: [CommonModule, MatDividerModule],
})
export class DeliveryModule { }
