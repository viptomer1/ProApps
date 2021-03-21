import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

//import { AppRoutingModule } from './app-routing.module';
import { NgxLoginComponent } from './login.component';
import {NbListModule,NbCheckboxModule, NbUserModule,NbCardBodyComponent,NbButtonComponent, NbDialogModule, NbCardModule,NbInputModule, NbAlertModule} from '@nebular/theme';
//import {NbAuthModule} from '@nebular/auth';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NgxLoginComponent
  ],
  imports: [
    //BrowserModule
    CommonModule
    //,AppRoutingModule,
    ,NbListModule,
    NbUserModule,
    NbCardModule,
    //NbDialogModule,
    NbCheckboxModule,
    NbInputModule,
    NbAlertModule,
    
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: NgxLoginComponent}
    ])
  ],
  providers: [],
 // bootstrap: [HomeComponent]
})
export class LoginModule { }
