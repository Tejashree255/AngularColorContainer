import { Component, Input, OnInit } from '@angular/core';
import { container } from './container.model';
import { trade } from './trade.model'
@Component({
  selector: 'app-tradecontainer',
  templateUrl: './tradecontainer.component.html',
  styleUrls: ['./tradecontainer.component.css']
})
export class TradecontainerComponent implements OnInit {
  @Input() contemp:container;

  nooftype: any;
  tradearr:trade[] ;
  selectedItem:trade;
  constructor() { 
    this.nooftype=3;
   
  }

  ngOnInit() {
    this.tradearr=[{
      transactiontype: "order",
      name: 'order1',parent:'null'
    },
    {
      transactiontype: "order",
      name: 'order2',parent:'order1'
    },
    {
      transactiontype: "order",
      name: 'order3',parent:'order1'
    }]
  }
 
}
