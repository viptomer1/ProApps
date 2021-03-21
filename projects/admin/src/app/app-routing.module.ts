import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeModule } from './components/home/home.module';
// import { HomeComponent } from './components/home/home.component';
// import { NgxLoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'login'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
