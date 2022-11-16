import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPackageFormComponent } from './add-package-form.component';
import { IonicModule } from '@ionic/angular';
import { AddPackageFormPageRoutingModule } from './add-package-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddPackageFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    AddPackageFormPageRoutingModule
  ]
})
export class AddPackageFormModule { }
