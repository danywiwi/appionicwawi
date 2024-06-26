import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserlistPageRoutingModule } from './userlist-routing.module';

import { UserlistPage } from './userlist.page';
import { FootermoduloModule } from '../footermodulo/footermodulo.module';
// import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserlistPageRoutingModule,
    FootermoduloModule
  ],
  declarations: [UserlistPage]
})
export class UserlistPageModule {}
