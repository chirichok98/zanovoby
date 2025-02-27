import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './prices.component';

const routes: Routes = [{
  path: '',
  component: PricesComponent,
  title: "Прайс | Сникер Химчистка в Минске | Zanovo",
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricesRoutingModule { }
