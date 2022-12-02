import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { WelcomeModule } from 'src/app/components/welcome/welcome.module';
import { PriceViewModule } from 'src/app/components/price-view/price-view.module';
import { DeliveryModule } from 'src/app/components/delivery/delivery.module';
import { LoyaltyModule } from 'src/app/components/loyalty/loyalty.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    WelcomeModule,
    PriceViewModule,
    DeliveryModule,
    LoyaltyModule,
  ]
})
export class MainModule { }
