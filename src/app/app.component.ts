import { Component } from '@angular/core';
import { Ticket } from './ticket/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticketGeneration';
  selectedTicket?:Ticket;
  
}
