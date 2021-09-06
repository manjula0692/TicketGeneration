import { Component, OnInit,  ViewEncapsulation } from '@angular/core';
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
  
 
   
   items:Ticket[]=[];
   todayNumber?: Date;

  constructor(private serv:ValuesService,private route:Router,private fb: FormBuilder,public snackBar: MatSnackBar) {
    this.regiForm = fb.group({  
      'subject' : ['', Validators.required],  
      'priority' : [null, Validators.required],        
      'description' : [null, Validators.required],  
       
    });  
   }

  ngOnInit(): void {
    
    this.items=this.serv.getAllTickectsReactive();
  }
   onNoClick(inde:number){
    // this.items.splice(-(inde+1),1);
    this.items=this.serv.delTicketReactive(-(inde+1));
    // this.items=this.serv.getAllTickectsReactive();
   }
   detailedup(ticketIndex:number){
        
         this.route.navigateByUrl(`/details/reactive/${ticketIndex}`);
   }
   onFormSubmit() 
   
  { 
     let tickDetails={...this.regiForm.value,date:new Date()}

     this.serv.addTicketReactive(tickDetails);
      this.items.push(this.regiForm.value);
      console.log(this.items);
  
}
onDesInput(val:string){
  if(val.length==100){
    this.openSnackBar("Reached word limit.","Ok");
  }
}
openSnackBar(message:any,action:any) {
  this.snackBar.open(message,action,{verticalPosition:'top',horizontalPosition:'end',panelClass:'bluesnackbar'
});
}
}