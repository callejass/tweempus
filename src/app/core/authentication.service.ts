import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

import { AuthorService } from '../shared/author/author.service';
import { Author } from '../shared/author/author.model';
import { Token } from './token-model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'http://localhost:3000/authenticated';
  private token: Token = null;
  private STORAGEKEY = 'tweempus.auth';
  constructor(
    private httpClient: HttpClient,
    private authorService: AuthorService,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  isAuthenticated(): boolean {
    if (this.token == null) {
      // intento leerlo del storage
      const t = this.storage.get(this.STORAGEKEY);
      if (t != null) {
        this.token = new Token(t._key, t._idAuthor);
      }
    }
    return this.token != null;
  }

  getLoggedAuthorId(): string {
    return this.token != null ? this.token.idAuthor : null;
  }


  login(idAuthor: string): void {
    this.authorService.getAuthor(idAuthor).subscribe(author => {
      const tokenGenerated = this.generateToken();
      this.saveSession(tokenGenerated, author.id).subscribe(response => {
        this.token = new Token(response['id'], response['author']);
        this.storage.set(this.STORAGEKEY, this.token);
        this.router.navigate(['/dashboard']);
      });
    });
  }

  logout(): void {
    this.deleteSession().subscribe(response => {
      this.token = null;
      this.storage.remove(this.STORAGEKEY);
      this.router.navigate(['/login']);
    });
  }

  generateToken(): string {
    const date: number = new Date().getTime();
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    text += date;

    return text;
  }

  saveSession(tokenGenerated: string, idAuthor: string): Observable<Object> {
    const session: Object = { 'id': tokenGenerated, 'author': idAuthor };

    return this.httpClient.post(this.url, session).pipe(
      catchError(this.handleError)
    );
  }

  deleteSession(): Observable<Object> {

    return this.httpClient.delete(this.url + '/' + this.token.key).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
