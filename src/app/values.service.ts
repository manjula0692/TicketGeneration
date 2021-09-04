import { Injectable } from '@angular/core';
import { Ticket } from './ticket/type';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  selectedTicket?:Ticket;

  constructor() { }
  funcdetails(val:Ticket){
    this.selectedTicket=val;
    console.log(val);
  }
}
