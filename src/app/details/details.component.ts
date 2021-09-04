import { Component, OnInit,Input } from '@angular/core';
import { Ticket } from '../ticket/type';
import { ValuesService } from '../values.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   ticket?:Ticket;
  constructor(private ticky:ValuesService) { }

  ngOnInit(): void {
  
   this.ticket=this.ticky.selectedTicket;
  console.log(this.ticket);}
}
