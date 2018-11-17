import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { ROUTING } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    RootComponent
  ], 
})
export class AppModule { }
