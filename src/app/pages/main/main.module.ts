import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { WelcomeModule } from 'src/app/components/welcome/welcome.module';
import { PriceViewModule } from 'src/app/components/price-view/price-view.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    WelcomeModule,
    PriceViewModule,
  ]
})
export class MainModule { }
