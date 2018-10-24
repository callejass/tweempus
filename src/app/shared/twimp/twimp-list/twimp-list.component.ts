import { Component, Input } from '@angular/core';
import { Twimp } from '../../twimp/twimp.model';
import { Author } from '../../author/author.model';
import { TwimpService} from '../twimp.service';
@Component({
  selector: 'tweempus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrls: ['./twimp-list.component.css']
})
export class TwimpListComponent  {

  @Input()
  twimps: Array<Twimp> = [];
  authors: Author[] = [];
  constructor(private twimpService: TwimpService) { }


}
