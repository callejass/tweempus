import { Component, OnInit, Input } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Twimp } from '../../twimp/twimp.model';
import { TwimpService } from '../twimp.service';
import { AuthenticationService } from '../../../core/authentication.service';
@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css']
})
export class TwimpCardComponent implements OnInit {

  @Input() twimp: Twimp;
  constructor(
    private twimpService: TwimpService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {


  }

  clickFavorito() {
    const idAuthorLogado = this.authService.getLoggedAuthorId();
    this.twimpService.checkUncheckFavorito(idAuthorLogado, this.twimp.id).subscribe(response => {
      console.log(response);
      this.twimp.favorite = !this.twimp.favorite;
    });

    // this.twimpService.getFavoritesByAuthor('1').subscribe(twimps => {
    //   if (twimps.indexOf(this.twimp.id) > -1) {
    //     // era favorito, lo quito
    //     this.twimp.favorite = false;
    //     twimps.splice(twimps.indexOf(this.twimp.id), 1);

    //   } else {
    //     // no era favorito, lo pongo
    //     twimps.push(this.twimp.id);
    //     this.twimp.favorite = true;
    //   }
    //   this.twimpService.saveFavoritos('1', twimps).subscribe(favs => {
    //     console.log(favs);
    //   });

    // });



    // if (this.twimp.favorite) {
    //   // tendría que llamar a desmarcarlo
    // } else {



    //   // this.twimpService.marcarComoFavorito(idAuthor, this.twimp.id).subscribe(response => {
    //   //   console.log(response);
    //   //   this.twimp.favorite = true;
    //   // });
    // }

  }

}
