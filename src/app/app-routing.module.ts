import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TradecontainerComponent } from './tradecontainer/tradecontainer.component';
//import { Tradecontainer2Component } from './tradecontainer2/tradecontainer2.component';
//import { Tradecontainer3Component } from './tradecontainer3/tradecontainer3.component';
//import {AppRoutingModule,routingComponent} from './app-routing.module'
const routes: Routes = [
{path:'home',component: HomeComponent},
{path: 'about',component: AboutComponent},
{path: 'trade1',component: TradecontainerComponent},
//{path: 'trade2',component: Tradecontainer2Component},
//{path: 'trade3',component: Tradecontainer3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent, AboutComponent,
  TradecontainerComponent]
