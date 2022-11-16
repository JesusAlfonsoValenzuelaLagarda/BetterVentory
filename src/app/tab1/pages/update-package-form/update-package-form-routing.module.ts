import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePackageFormComponent } from './update-package-form.component';



const routes: Routes = [
  {
    path: '',
    component: UpdatePackageFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePackageFormPageRoutingModule {}
