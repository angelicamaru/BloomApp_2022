import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HcdPage } from './hcd';

@NgModule({
  declarations: [
    HcdPage,
  ],
  imports: [
    IonicPageModule.forChild(HcdPage),
  ],
})
export class HcdPageModule {}
