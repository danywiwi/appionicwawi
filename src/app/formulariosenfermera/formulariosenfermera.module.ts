import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormulariosenfermeraPageRoutingModule } from './formulariosenfermera-routing.module';

import { FormulariosenfermeraPage } from './formulariosenfermera.page';
import { FootermoduloModule } from '../footermodulo/footermodulo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulariosenfermeraPageRoutingModule,
    FootermoduloModule
  ],
  declarations: [FormulariosenfermeraPage]
})
export class FormulariosenfermeraPageModule {}
