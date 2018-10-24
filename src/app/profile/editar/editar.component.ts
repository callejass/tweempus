import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from '../../shared/author/author.service';
import { AuthenticationService } from '../../core/authentication.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'tweempus-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  editUserForm: FormGroup;
  usuarioYaExiste = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private authService: AuthenticationService,

  ) {

  }

  ngOnInit() {

    this.editUserForm = this.fb.group(
      {
        idAuthor: [''],
        image: [''],
        fullName: ['', [Validators.required, Validators.minLength(5)]]
      }
    );
    const idAuthor = this.route.parent.snapshot.params['id'];
    this.authorService.getAuthor(idAuthor).subscribe(author => {
      this.editUserForm.setValue({
        idAuthor: author.id,
        fullName: author.fullName,
        image: author.image
      });
    });
    // this.editUserForm.setValue('idAuthor', idAuthor);
  }

  update(frm: FormGroup) {
    this.authorService.updateAuthor(frm.value.idAuthor, frm.value.fullName, frm.value.image).subscribe(
      response => {
        console.log(response);
        console.log('Usuario modificado correctamente bien');
      },
      error => { console.log(error); alert(error); }
    );
  }

}
