import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ticket } from './type';
import {FormControl, Validators,FormBuilder, FormGroup, FormsModule,NgForm} from '@angular/forms';
import { ValuesService } from '../values.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TicketComponent implements OnInit {
  regiForm: FormGroup;  
  subjects:string='';  
  priority:string='';  
  desc:string=''; 

  
   items:Ticket[]=[];
   todayNumber?: Date;

  constructor(private serv:ValuesService,private route:Router,private fb: FormBuilder) {
    this.regiForm = fb.group({  
      'subjects' : ['', Validators.required],  
      'priority' : [null, Validators.required],        
      'desc' : [null, Validators.required],  
       
    });  
   }

  ngOnInit(): void {
  }
 getValue(sub:string,opt:string,des:string){
  this.todayNumber =new Date();
   this.items.push({subject:sub,options:opt,description:des});
 }
//  subjects = new FormControl('', [Validators.required]);
//  priority = new FormControl('', [Validators.required]);
//  desc = new FormControl('', [Validators.required,Validators.maxLength(100)]);
//  getErrorMessage() {
//   if (this.subjects.hasError('required')) {
//     return 'You must enter a value';
//   }
// return "";}

// inputValidate(){
//   if(this.subjects.hasError('required')|| this.priority.hasError('required') || this.desc.hasError('required')){
//     return true;}
//     return false;
//   }
   onNoClick(inde:number){
     this.items.splice(inde,1);
   }
   detailedup(selected:Ticket){
         this.serv.funcdetails(selected);
        
         this.route.navigateByUrl('/details');
   }
   onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  
}

}