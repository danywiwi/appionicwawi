import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotfoundPageRoutingModule } from './notfound-routing.module';

import { NotfoundPage } from './notfound.page';
import { FootermoduloModule } from '../footermodulo/footermodulo.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotfoundPageRoutingModule,
    FootermoduloModule,
  ],
  declarations: [NotfoundPage]
})
export class NotfoundPageModule {}
