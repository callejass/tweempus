import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, concat } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, map, flatMap, merge, mergeMap, concatMap, switchMap  } from 'rxjs/operators';
import { Twimp } from './twimp.model';
import { Author } from '../author/author.model';

@Injectable({
  providedIn: 'root'
})
export class TwimpService {
  private url = 'http://localhost:3000/twimps';
  private urlFavorites = 'http://localhost:3000/author-favorites';

  constructor(private httpClient: HttpClient) { }


  getTwimps(): Observable<Twimp[]> {
    const twimps: Twimp[] = [];

    return this.httpClient.get<Twimp[]>(this.url).pipe(
      map(dbTwimpList => {
        for (const i of dbTwimpList) {
          const twimp: Twimp = new Twimp(i.id,
            '/twimp/' + i.id, new Author('' + i.author), i.content, i.timestamp);
          twimps.push(twimp);
        }
        return twimps;
      }),
      catchError(this.handleError)
    );
  }

  getAuthorTwimps(idAuthor: string): Observable<Twimp[]> {
    const twimps: Twimp[] = [];
    return this.httpClient.get<Twimp[]>(this.url).pipe(
      map(dbTwimpList => {
        for (const i of dbTwimpList) {
          if ('' + i.author === idAuthor) {
            const twimp: Twimp = new Twimp(i.id,
              '/twimp/' + i.id, new Author('' + i.author), i.content, i.timestamp);
            twimps.push(twimp);
          }
        }
        return twimps;
      })
    );
  }


  getFavoritesTwimps(idAuthor: string): Observable<Twimp[]> {
    const urlFavoritos = this.urlFavorites + '/' + idAuthor;
    const twimps: Twimp[] = [];
    const ob1$: Observable<any> = this.httpClient.get<any>(urlFavoritos).pipe(
      switchMap(favoritos => {
        return this.httpClient.get<Twimp[]>(this.url).pipe(
          map(dbTwimpList => {
            dbTwimpList.forEach(element => {
              if (favoritos.twimps.indexOf(element.id) > -1) {
                const twimp: Twimp = new Twimp(element.id, '/twimp/', new Author('' + element.author), element.content, element.timestamp);
                twimps.push(twimp);
              }
            });
            return twimps;
          })
        );
      }));

    return ob1$;

  }

  isFavorite(idAuthor: string, idTwimp: string): Observable<boolean> {
    return this.httpClient.get<any>(this.urlFavorites + '/' + idAuthor).pipe(
      map(response => {
        const favoritos = response.twimps;
        return favoritos.indexOf(idTwimp) > -1 ? true : false;
      }),
      catchError(this.handleError)
    );
  }
  getFavoritesByAuthor(idAuthor: string): Observable<Twimp[]> {
    return this.httpClient.get<any>(this.urlFavorites + '/' + idAuthor).pipe(
      map(response => response.twimps),
      catchError(this.handleError)
    );
  }

  saveFavoritos(idAuthor: string, favoritos: string[]): Observable<any> {
    const url = this.urlFavorites + '/' + idAuthor;
    const favs = {
      id: idAuthor,
      twimps: favoritos
    };
    const ob1$: Observable<any> = this.httpClient.put<any>(url, favs);
    return ob1$;
  }

  checkUncheckFavorito(idAuthor: string, idTwimp: string): Observable<any> {
    const url = this.urlFavorites + '/' + idAuthor;

    const ob1$: Observable<any> = this.httpClient.get<any>(url).pipe(
      switchMap(response => {
        if (response.twimps.indexOf(idTwimp) > -1) {
          response.twimps.splice(response.twimps.indexOf(idTwimp), 1);
        } else {
          // no era favorito, lo pongo
          response.twimps.push(idTwimp);
        }
        return this.httpClient.put(url, response);
      }));

    return ob1$;


  }

  createTwimp(twimp: Twimp): Observable<any> {
    const dbTwimp: any = {
      'id': twimp.id,
      'author': twimp.author.id,
      'by': twimp.author.fullName,
      'content': twimp.content,
      'timestamp': twimp.timestamp
    };

    return this.httpClient.post(this.url, dbTwimp).pipe(
      catchError(this.handleError)
    );
  }



  handleError(error: any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg);
    return throwError(errMsg);
    // return Observable.throw(errMsg);
  }

}
