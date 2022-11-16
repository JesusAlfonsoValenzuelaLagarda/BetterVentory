import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPackageFormComponent } from './add-package-form.component';



const routes: Routes = [
  {
    path: '',
    component: AddPackageFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPackageFormPageRoutingModule {}
