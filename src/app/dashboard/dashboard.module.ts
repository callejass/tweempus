import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { SortByDatePipe } from '../shared/twimp/sort-by-date-pipe';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashBoardRoutingModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
