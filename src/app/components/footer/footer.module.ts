import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';
import { WelcomeModule } from '../welcome/welcome.module';

@NgModule({
  imports: [
    WelcomeModule
  ],
  exports: [FooterComponent],
  declarations: [FooterComponent],
  providers: [],
})
export class FooterModule { }
