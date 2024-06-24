import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulariosenfermeraPage } from './formulariosenfermera.page';

const routes: Routes = [
  {
    path: '',
    component: FormulariosenfermeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulariosenfermeraPageRoutingModule {}
