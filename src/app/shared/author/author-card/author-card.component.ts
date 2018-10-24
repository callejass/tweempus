import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../author.model';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tweempus-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {

  @Input()
  author: Author = null;
  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  checkAuthor(): boolean {

    const logedUser = this.authService.getLoggedAuthorId();
    const idAuthor = this.route.snapshot.params['id'];
    return logedUser === idAuthor;
  }
}
