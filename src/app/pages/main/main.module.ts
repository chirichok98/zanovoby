import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { WelcomeModule } from 'src/app/components/welcome/welcome.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    WelcomeModule,
  ]
})
export class MainModule { }
