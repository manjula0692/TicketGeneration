import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ticket } from './type';
import { Validators,FormBuilder, FormGroup,NgForm} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private serv:ValuesService,private route:Router,private fb: FormBuilder,public snackBar: MatSnackBar) {
    this.regiForm = fb.group({  
      'subjects' : ['', Validators.required],  
      'priority' : [null, Validators.required],        
      'desc' : [null, Validators.required],  
       
    });  
   }

  ngOnInit(): void {
    
    this.items=this.serv.getAllTickectsReactive();
  }
//  getValue(sub:string,opt:string,des:string){
//   this.todayNumber =new Date();
//    this.items.push({subject:sub,options:opt,description:des});
//  }


   onNoClick(inde:number){
     this.items.splice(inde,1);
    this.serv.delTicketReactive(inde);
   }
   detailedup(ticketIndex:number){
        
         this.route.navigateByUrl(`/details/reactive/${ticketIndex}`);
   }
   onFormSubmit(form:NgForm) 
   
  { 
     let tickDetails={...form.value,date:new Date()}

     this.serv.addTicketReactive(tickDetails);
    console.log(form);
      this.items.push();
  
}
onDesInput(){
  console.log(this.regiForm.get(this.desc)?.value)
  if(this.regiForm.get(this.desc)?.value.length=="100"){
    this.openSnackBar("Reached 100limit","done");
  }
}
openSnackBar(message:any,action:any) {
  this.snackBar.open(message,action,{verticalPosition:'top',horizontalPosition:'end'});
  console.log(message);

}
}