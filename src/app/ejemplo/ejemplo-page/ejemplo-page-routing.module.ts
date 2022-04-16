import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemploPagePage } from './ejemplo-page.page';

const routes: Routes = [
  {
    path: '',
    component: EjemploPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemploPagePageRoutingModule {}
