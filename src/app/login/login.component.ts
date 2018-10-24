import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { AuthenticationService } from '../core/authentication.service';
import { AuthorService } from '../shared/author/author.service';


@Component({
  selector: 'tweempus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  usuarioNoExiste = false;
  constructor(
    private authService: AuthenticationService,
    private authorService: AuthorService,
    private fb: FormBuilder

  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      idAuthor: ['', Validators.required]
    });


  }

  login(frm: any) {
    this.usuarioNoExiste = false;
    this.authorService.getAuthor(frm.value.idAuthor).subscribe(
      author => {
        if (author != null) {
          this.authService.login(author.id);
        } else {
          this.usuarioNoExiste = true;
        }
      },
      error => this.usuarioNoExiste = true);

  }

}
