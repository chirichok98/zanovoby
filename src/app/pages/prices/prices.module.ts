import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './prices.component';
import { PriceViewModule } from 'src/app/components/price-view/price-view.module';


@NgModule({
  declarations: [
    PricesComponent
  ],
  imports: [
    CommonModule,
    PricesRoutingModule,
    PriceViewModule,
  ]
})
export class PricesModule { }
