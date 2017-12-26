import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PruebasListPage } from './pruebas-list';

@NgModule({
  declarations: [
    PruebasListPage,
  ],
  imports: [
    IonicPageModule.forChild(PruebasListPage),
  ],
})
export class PruebasListPageModule {}
