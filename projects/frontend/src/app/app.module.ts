import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbCardModule,
  NbCheckboxModule,
  NbLayoutModule,
  NbMenuModule,
  NbPopoverModule,
  NbSidebarModule,
  NbActionsModule,
  NbSearchModule,
  NbTabsetModule,
  NbUserModule,
  NbBadgeModule,
  NbContextMenuModule,
  NbRouteTabsetModule,
  NbProgressBarModule,
  NbAlertModule,
  NbChatModule,
  NbSpinnerModule,
  NbIconModule
} from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),  // <---------
    NbMenuModule.forRoot(),     // <---------
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbIconModule,
    BrowserAnimationsModule,
    NbUserModule,
    NbActionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
