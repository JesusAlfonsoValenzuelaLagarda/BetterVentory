import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/components/login.module').then( m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/pages/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'mainPage',
    loadChildren: () => import('./main-page/pages/main-page.module').then( m => m.MainPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user-form',
    loadChildren: () => import('./tab3/components/user-form/user-form.module').then( m => m.UserFormModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
