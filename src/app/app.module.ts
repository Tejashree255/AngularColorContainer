import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradecontainerComponent } from './tradecontainer/tradecontainer.component';
import { Tradecontainer2Component } from './tradecontainer2/tradecontainer2.component';
import { Tradecontainer3Component } from './tradecontainer3/tradecontainer3.component';


@NgModule({
  declarations: [
    AppComponent,
    Tradecontainer3Component,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
