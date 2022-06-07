import { Component, OnInit } from '@angular/core';
import { trade3 } from './trade3.model'
@Component({
  selector: 'app-tradecontainer3',
  templateUrl: './tradecontainer3.component.html',
  styleUrls: ['./tradecontainer3.component.css']
})
export class Tradecontainer3Component implements OnInit {
  nooftype: any;
  trade1:trade3;
  
  constructor() {
    nooftype:1;
   }

  ngOnInit(): void {
    this.trade1={
      transactiontype: "trade",
      name: 'trade1',parent:'execution1'
    };
  }

}
