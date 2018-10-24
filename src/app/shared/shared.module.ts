import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';
import { AuthorCardComponent } from './author/author-card/author-card.component';
import { AuthorService } from './author/author.service';
import { TwimpService } from './twimp/twimp.service';
import { HttpClientModule } from '@angular/common/http';
import { SortByDatePipe } from './twimp/sort-by-date-pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [TwimpCardComponent, TwimpListComponent, AuthorCardComponent, SortByDatePipe],
  providers: [AuthorService, TwimpService],
  exports: [TwimpCardComponent, TwimpListComponent, AuthorCardComponent, RouterModule, SortByDatePipe]
})
export class SharedModule { }
