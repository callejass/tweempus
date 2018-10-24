import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { TwimpService } from '../../shared/twimp/twimp.service';
import { Twimp } from '../../shared/twimp/twimp.model';
import { Author } from '../../shared/author/author.model';
import { AuthenticationService } from '../../core/authentication.service';
import { AuthorService } from 'src/app/shared/author/author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tweempus-favorite-twimps',
  templateUrl: './favorite-twimps.component.html',
  styleUrls: ['./favorite-twimps.component.css']
})
export class FavoriteTwimpsComponent implements OnInit {

  params: any = null;
  twimpList: Twimp[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private twimpsService: TwimpService,
    private authorService: AuthorService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    const idAuthor = this.activatedRoute.parent.snapshot.params['id'];
    this.params = this.activatedRoute.parent.snapshot.params;
    console.log('Id de author en favorites component: ' + idAuthor);
    this.twimpsService.getFavoritesTwimps(idAuthor).subscribe(twimps => {
      from(twimps).subscribe(twimp => {
        this.authorService.getAuthor(twimp.author.id).subscribe(author => {
          twimp.author = author;
          twimp.favorite = true;
          this.twimpList.push(twimp);
        });
      });
    });


  }
}
