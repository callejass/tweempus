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
  selector: 'tweempus-my-twimps',
  templateUrl: './my-twimps.component.html',
  styleUrls: ['./my-twimps.component.css']
})
export class MyTwimpsComponent implements OnInit {

  twimpList: Twimp[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private twimpsService: TwimpService,
    private authorService: AuthorService,
    private authService: AuthenticationService
  ) {

  }

  ngOnInit() {


    // const idAuthor = this.activatedRoute.paramMap.get('id');
    const idAuthor = this.activatedRoute.parent.snapshot.params['id'];
    console.log('Id de author en my twimps component: ' + idAuthor);

    this.twimpsService.getAuthorTwimps(idAuthor).subscribe(twimps => {
      console.log(twimps);
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
