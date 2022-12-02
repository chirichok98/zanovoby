import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastWorksComponent } from './past-works.component';

@NgModule({
  declarations: [PastWorksComponent],
  exports: [PastWorksComponent],
  imports: [CommonModule],
})
export class PastWorksModule { }
