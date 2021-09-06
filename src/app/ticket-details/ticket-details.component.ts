import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ValuesService } from '../values.service';
import { Ticket } from '../ticket/type';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class TicketDetailsComponent implements OnInit {
  items:Ticket[]=[];
  constructor(private serv:ValuesService) {
  }

  ngOnInit(): void {
    this.items=this.serv.getAllTickectsReactive();
  }

  onTabChange(){
    this.items=this.serv.getAllTickectsReactive();
  }

}
