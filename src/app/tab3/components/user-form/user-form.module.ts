import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { IonicModule } from '@ionic/angular';
import { UserFormPageRoutingModule } from './user-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    UserFormPageRoutingModule
  ]
})
export class UserFormModule { }
