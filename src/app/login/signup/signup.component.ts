import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from '../../shared/author/author.service';
import { AuthenticationService } from '../../core/authentication.service';


@Component({
  selector: 'tweempus-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUserForm: FormGroup;
  usuarioYaExiste = false;
  constructor(
    private authorService: AuthorService,
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {

    this.newUserForm = this.fb.group(
      {
        idAuthor: ['', [Validators.required, this.checkNick]],
        image: [''],
        fullName: ['', [Validators.required, Validators.minLength(5)]]
      }

    );
  }

  signUp(frm: FormGroup) {
    this.usuarioYaExiste = false;
    this.authorService.getAuthor(frm.value.idAuthor).subscribe(
      author => this.usuarioYaExiste = true,
      error => {
        // l usuario no existe, lo puedo crear
        this.authorService.createAuthor(frm.value.idAuthor, frm.value.fullName, frm.value.image).subscribe(
          response => {
            console.log(response);
            console.log('Usuario creado bien');
            this.authorService.createFavorites(frm.value.idAuthor).subscribe(
              responsecreacionfavoritos => {
                console.log('Se han creado los favoritos');
                this.authService.login(frm.value.idAuthor);
              },
              errorcreacionfavoritos => alert(errorcreacionfavoritos)
            );

          },
          errorencreacion => {console.log(error); alert(errorencreacion); }
        );
      }
    );
  }

  checkNick(fc: FormControl): {[invalidNick: string]: boolean} {
    const nick = fc.value;
    const regex = new RegExp('^[a-zA-Z0-9]*$') ;
    if (regex.test(nick)) {
      return null;
    } else {
      return {invalidNick: true };
    }
  }



}
