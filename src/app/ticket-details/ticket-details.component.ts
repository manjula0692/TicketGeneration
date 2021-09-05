import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class TicketDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
