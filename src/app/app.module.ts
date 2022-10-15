import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewContactListComponent } from './view-contact-list/view-contact-list.component';

const appRoutes:Routes=[
  {
    path:"",component:ViewContactListComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
