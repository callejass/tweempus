import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'tweempus-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  idAuthor: string = null;
  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {

  }
  checkLogin(): boolean {

    if (this.authService.isAuthenticated()) {
      this.idAuthor = this.authService.getLoggedAuthorId();
      return true;
    } else {
      return false;
    }
  }

}
