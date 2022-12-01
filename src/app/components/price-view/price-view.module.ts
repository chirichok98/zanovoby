import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { PriceViewComponent } from './price-view.component';


@NgModule({
  declarations: [PriceViewComponent],
  exports: [PriceViewComponent],
  imports: [CommonModule, MatTabsModule, MatIconModule],
})
export class PriceViewModule { }
