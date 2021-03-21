import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

//import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart.component';
import {NbListModule, NbUserModule,  NbCardModule} from '@nebular/theme';
import { RouterModule } from '@angular/router';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [
    CartComponent
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
      {path: '', pathMatch: 'full', component: CartComponent}
    ])
  ],
  providers: [],
  bootstrap: [CartComponent]
})
export class CartModule { }
