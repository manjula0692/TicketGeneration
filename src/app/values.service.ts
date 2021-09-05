import { Injectable } from '@angular/core';
import { Ticket } from './ticket/type';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  selectedTicket?:Ticket;

  constructor() { }
  // funcdetails(val:Ticket){
  //   this.selectedTicket=val;
  //   console.log(val);
  // }
  addTicketReactive(ticket:Ticket){
    let storedTicketsFromStorage = localStorage.getItem('ticketsReactive');
let storedTickets = storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
storedTickets.push(ticket);
localStorage.setItem('ticketsReactive', JSON.stringify(storedTickets));
     
  }
  addTicketTemplate(ticket:Ticket){
    let storedTicketsFromStorage = localStorage.getItem('ticketsTemplate');
    let storedTickets = storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
    storedTickets.push(ticket);
    localStorage.setItem('ticketsTemplate', JSON.stringify(storedTickets));
    
  }
  delTicketReactive(index:number){
    let storedTicketsFromStorage = localStorage.getItem('ticketsReactive');
let storedTickets = storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
   storedTickets.splice(index,1);
   localStorage.setItem('ticketsReactive', JSON.stringify(storedTickets));

  }
  delTicketTemplate(index:number){
    let storedTicketsFromStorage = localStorage.getItem('ticketsTemplate');
let storedTickets = storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
   storedTickets.splice(index,1);
   localStorage.setItem('ticketsTemplate', JSON.stringify(storedTickets));

  }
  getTicketByIndexReactive(index:number){



  }
  getTicketByIndexTemplate(index:number){

  }
  getAllTickectsReactive(){
    let storedTicketsFromStorage = localStorage.getItem('ticketsReactive');
return storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];

  }
  getAllTickectsTemplate(){
    let storedTicketsFromStorage = localStorage.getItem('ticketsTemplate');
return storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
    
  }
}
