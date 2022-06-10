import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradecontainerComponent } from './tradecontainer/tradecontainer.component';

import { TradecomponentComponent } from './tradecomponent/tradecomponent.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
   TradecontainerComponent, TradecomponentComponent, HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
