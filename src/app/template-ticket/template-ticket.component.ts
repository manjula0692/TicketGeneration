import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Ticket } from '../ticket/type';
import { ValuesService } from '../values.service';

@Component({
  selector: 'app-template-ticket',
  templateUrl: './template-ticket.component.html',
  styleUrls: ['./template-ticket.component.css'],
  
})
export class TemplateTicketComponent implements OnInit {
  
  items:Ticket[]=[];
  todayNumber?: Date;
  
  constructor(private serv:ValuesService,private route:Router) {
    
  }

  ngOnInit(): void {
    this.items=this.serv.getAllTickectsReactive();
  }
  onNoClick(inde:number){
    this.items=this.serv.delTicketReactive(-(inde+1));
    // this.items=this.serv.getAllTickectsReactive();
   }
   detailedup(ticketIndex:number){
        
         this.route.navigateByUrl(`/details/template/${ticketIndex}`);
   }
   onSubmit(myForm:NgForm) {
     let tickDetails={...myForm.value,date:new Date()};

     this.serv.addTicketReactive(tickDetails);
      this.items.push(myForm.value);
      console.log(this.items);
      // myForm.reset();
  
}
}

