import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr:any[]=
  [
    //1
  {
   transactiontype:'order', 
   transactions:
    [
     {
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
     }
    ]
  },
   //2
  {
     transactiontype:'execution', 
     transactions:
     [
      {
          transactiontype: "execution",
          name: 'exe1',parent:'order1'
      },
      {
          transactiontype: "execution",
          name: 'exe2',parent:'order2'
      }
    ]
   },
   //3
   {
        transactiontype:'trade', 
        transactions:
        [
           {
            transactiontype: "trade",
            name: 'trade1',parent:'execution1'
           }
        ]
   }


  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
