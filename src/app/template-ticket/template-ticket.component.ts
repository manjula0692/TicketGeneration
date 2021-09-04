import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-ticket',
  templateUrl: './template-ticket.component.html',
  styleUrls: ['./template-ticket.component.css']
})
export class TemplateTicketComponent implements OnInit {
  
 
  
  constructor() {
    
  }

  ngOnInit(): void {
  }
 onSubmit(myForm:NgForm){
   if(myForm.valid){
   console.log(myForm.value);
   myForm.reset();
  }
 }
}

