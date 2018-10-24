import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { Author } from '../../shared/author/author.model';
import { Twimp } from '../../shared/twimp/twimp.model';
import { TwimpService } from 'src/app/shared/twimp/twimp.service';
import { Router } from '@angular/router';
@Component({
  selector: 'tweempus-create-twimp',
  templateUrl: './create-twimp.component.html',
  styleUrls: ['./create-twimp.component.css']
})
export class CreateTwimpComponent implements OnInit {

  newTwimpForm: FormGroup = null;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private twimpService: TwimpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newTwimpForm = this.fb.group({
      texto: ['', [Validators.required, Validators.maxLength(140)]]
    });
  }

  crear(form: FormGroup) {
    this.twimpService.getTwimps().subscribe(response => {
      const twimpDate: string = new Date().toLocaleDateString().replace(/\//g, '-');
      const author: Author = new Author(this.authService.getLoggedAuthorId());
      const twimp: Twimp = new Twimp(response.length.toString(), '', author, form.value.texto, twimpDate);
      this.twimpService.createTwimp(twimp).subscribe(
        response2 => this.router.navigate(['/dashboard'])
      );
    });
  }

}
