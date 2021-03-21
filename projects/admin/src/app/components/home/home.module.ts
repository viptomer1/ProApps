import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

//import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import {NbListModule, NbUserModule,  NbCardModule} from '@nebular/theme';
import { RouterModule } from '@angular/router';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    //BrowserModule
    CommonModule
    //,AppRoutingModule,
    ,NbListModule,
    NbUserModule,
    NbCardModule,

    AngularFireModule.initializeApp(environment.firebaseConfig, 'MyFirebaseApp'),

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
