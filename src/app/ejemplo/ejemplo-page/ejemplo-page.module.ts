import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemploPagePageRoutingModule } from './ejemplo-page-routing.module';

import { EjemploPagePage } from './ejemplo-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemploPagePageRoutingModule
  ],
  declarations: [EjemploPagePage]
})
export class EjemploPagePageModule {}
