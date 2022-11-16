import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
