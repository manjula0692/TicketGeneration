import { Component, OnInit,Input } from '@angular/core';
import { Ticket } from '../ticket/type';
import { ValuesService } from '../values.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   ticket?:Ticket;
  constructor(private ticky:ValuesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params.type==="reactive"){
      const ticketIndex=this.route.snapshot.params.ticketIndex;
      
    }
  
   this.ticket=this.ticky.selectedTicket;
  console.log(this.ticket);}
}
