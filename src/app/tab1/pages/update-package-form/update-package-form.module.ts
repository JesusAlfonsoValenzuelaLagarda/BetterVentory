import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePackageFormComponent } from './update-package-form.component';
import { IonicModule } from '@ionic/angular';
import { UpdatePackageFormPageRoutingModule } from './update-package-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdatePackageFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    UpdatePackageFormPageRoutingModule
  ]
})
export class UpdatePackageFormModule { }
