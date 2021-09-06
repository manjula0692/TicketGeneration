import { Injectable } from '@angular/core';
import { Ticket } from './ticket/type';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {


  constructor() { }
  
  addTicketReactive(ticket:Ticket){
    let storedTicketsFromStorage = localStorage.getItem('ticketsReactive');
let storedTickets = storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
storedTickets.push(ticket);
localStorage.setItem('ticketsReactive', JSON.stringify(storedTickets));
     
  }
  // addTicketTemplate(ticket:Ticket){
  //   let storedTicketsFromStorage = localStorage.getItem('ticketsTemplate');
  //   let storedTickets = storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
  //   storedTickets.push(ticket);
  //   localStorage.setItem('ticketsTemplate', JSON.stringify(storedTickets));
    
  // }
  delTicketReactive(index:number){
    let storedTicketsFromStorage = localStorage.getItem('ticketsReactive');
let storedTickets = storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
   storedTickets.splice(index,1);
   
  
   localStorage.setItem('ticketsReactive', JSON.stringify(storedTickets));
   return storedTickets;

  }
//   delTicketTemplate(index:number){
//     let storedTicketsFromStorage = localStorage.getItem('ticketsTemplate');
// let storedTickets = storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
//    storedTickets.splice(index,1);
//    localStorage.setItem('ticketsTemplate', JSON.stringify(storedTickets));

//   }
  getTicketByIndexReactive(index:number){
    let storedTicketsFromStorage = localStorage.getItem('ticketsReactive');
    let storedTickets = storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
    return storedTickets[index];



  }
  // getTicketByIndexTemplate(index:number){
  //   let storedTicketsFromStorage = localStorage.getItem('ticketsTemplate');
  //   let storedTickets = storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
  //   return storedTickets[index];

  // }
  getAllTickectsReactive(){
    let storedTicketsFromStorage = localStorage.getItem('ticketsReactive');
return storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];

  }
//   getAllTickectsTemplate(){
//     let storedTicketsFromStorage = localStorage.getItem('ticketsTemplate');
// return storedTicketsFromStorage ? JSON.parse(storedTicketsFromStorage) : [];
    
//   }
}
