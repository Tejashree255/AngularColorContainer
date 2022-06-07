import { Component, OnInit } from '@angular/core';
import { trade2 } from './trade2.model'
@Component({
  selector: 'app-tradecontainer2',
  templateUrl: './tradecontainer2.component.html',
  styleUrls: ['./tradecontainer2.component.css']
})
export class Tradecontainer2Component implements OnInit {
  nooftype: any;
  exearr:trade2[];
  constructor() { 
    nooftype:2;
  }

  ngOnInit(): void {
    this.exearr=[{

      transactiontype: "execution",
      name: 'exe1',parent:'order1'
    },
    {
      transactiontype: "execution",
      name: 'exe2',parent:'order2'
    }]
    
    
  }

}
