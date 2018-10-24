import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Author } from './author.model';
import { ParseError } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {


  private url = 'http://localhost:3000/authors';

  constructor(private httpClient: HttpClient) {


  }

  getAuthor(id: string): Observable<Author> {

    let author: Author = null;
    return this.httpClient.get<Author>(this.url + '/' + id).pipe(
      map(dbAuthor => {
        author = new Author(dbAuthor.id);
        author.fullName = dbAuthor.fullName;
        author.image = dbAuthor.image;
        // la composición de la url no debería ir aquí
        author.url = '/profile/' + author.id;
        return author;
      }),
      catchError(this.handleError)
    );

  }

  updateAuthor(id: string, fullName: string, image: string) {
    const author: any = {
      id: id,
      fullName: fullName,
      image: image
    };
    return this.httpClient.put(this.url + '/' + id, author).pipe(
      catchError(this.handleError)
    );
  }
  createAuthor(id: string, fullName: string, image: string) {

    const author: any = {
      id: id,
      fullName: fullName,
      image: image
    };
    return this.httpClient.post(this.url, author).pipe(
      catchError(this.handleError)
    );
  }

  createFavorites(id: string) {
    const urlfavoritos = 'http://localhost:3000/author-favorites';
    const favoritos: any = {
      id: id,
      twimps: []
    };

    return this.httpClient.post(urlfavoritos, favoritos).pipe(
      catchError(this.handleError)
    );
  }





  handleError(error: any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

