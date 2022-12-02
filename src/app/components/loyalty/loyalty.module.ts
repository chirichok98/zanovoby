import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { LoyaltyComponent } from './loyalty.component';


@NgModule({
  declarations: [LoyaltyComponent],
  exports: [LoyaltyComponent],
  imports: [CommonModule, MatDividerModule],
})
export class LoyaltyModule { }
