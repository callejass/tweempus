import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'tweempus-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthenticationService) { }

  logOut() {
    this.authService.logout();
  }

  logado(): boolean {

    return this.authService.isAuthenticated();
  }

}
