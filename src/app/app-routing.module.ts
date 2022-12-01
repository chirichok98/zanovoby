import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/pages/main/main.component';

const routes: Routes = [
  { path: 'process', loadChildren: () => import('./pages/process/process.module').then(m => m.ProcessModule) },
  { path: 'prices', loadChildren: () => import('./pages/prices/prices.module').then(m => m.PricesModule) },
  { path: '', component: MainComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
