import { Component, OnInit } from '@angular/core';
import { trade } from './trade.model'
@Component({
  selector: 'app-tradecontainer',
  templateUrl: './tradecontainer.component.html',
  styleUrls: ['./tradecontainer.component.css']
})
export class TradecontainerComponent implements OnInit {

  nooftype: any;
  order1:trade;
  order2:trade;
  order3:trade;
  constructor() { 
    this.nooftype=3;
    
  }

  ngOnInit() {
    this.order1={
      transactiontype: "order",
      name: 'order1',parent:'null'
    };
    this.order2={
      transactiontype: "order",
      name: 'order2',parent:'order1'
    };
    this.order3={
      transactiontype: "order",
      name: 'order3',parent:'order1'
    };
  }

}
