import { Component, Input, OnInit } from '@angular/core';
import { trade } from '../tradecontainer/trade.model';


@Component({
  selector: 'app-tradecomponent',
  templateUrl: './tradecomponent.component.html',
  styleUrls: ['./tradecomponent.component.css']
})
export class TradecomponentComponent implements OnInit {

  @Input() itemtemp:trade[]; 
  constructor() { 
   
    
  }

  ngOnInit(): void {
  }

}
