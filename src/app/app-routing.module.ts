import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [{
  path:"details/:type/:ticketIndex",
  component:DetailsComponent
},
 {
   path:"",
  component:TicketDetailsComponent,
   pathMatch:"full"
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
