import { Component, OnInit,Input, ViewEncapsulation } from '@angular/core';
import { Ticket } from '../ticket/type';
import { ValuesService } from '../values.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  
})
export class DetailsComponent implements OnInit {
   ticketReactive?:Ticket;
   ticketTemplate?:Ticket;colorvalue?:string;
  constructor(private ticky:ValuesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // if(this.route.snapshot.params.type==="reactive")
    {
      const ticketIndex=this.route.snapshot.params.ticketIndex;
      this.ticketReactive=this.ticky.getTicketByIndexReactive(ticketIndex);
      let priority=this.ticketReactive?.priority;
      this.colorvalue=priority==="High"?'red':priority==="Medium"?'green':'blue';
    }
    // else if(this.route.snapshot.params.type==="template"){
    //   const ticketIndex=this.route.snapshot.params.ticketIndex;
    //   this.ticketTemplate=this.ticky.getTicketByIndexTemplate(ticketIndex);
    //   console.log(this.ticketTemplate);
    //   let priority=this.ticketTemplate?.priority;
    //   this.colorvalue=priority==="High"?'red':priority==="Medium"?'green':'blue';

    // }
  
   
}
}
