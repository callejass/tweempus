import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../shared/author/author.service';
import { Author } from '../shared/author/author.model';
import { AuthenticationService } from '../core/authentication.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'tweempus-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  params: any = null;
  author: Author = null;
  constructor(
    private authorService: AuthorService,
    private authService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    // leo los datos del autor
    //let idAuthor = this.authService.getLoggedAuthorId();
    const idAuthor = this.activatedRoute.snapshot.params['id'];
    this.params = this.activatedRoute.snapshot.params;
    // this.activatedRoute.params.pipe(switchMap((params: Params) => {
    //   idAuthor = params.get('id');
    // }));


    if (idAuthor != null) {
      console.log('Id de author en profile component: ' + idAuthor);
      this.authorService.getAuthor(idAuthor).subscribe(
        author => {
          console.log(author);
          this.author = author;
        }
      );
    }
  }

}
