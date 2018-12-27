import { Snippet } from '../../snippets/snippet';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class SnippetsService {

  private restUrl = 'http://127.0.0.1:8000/snippets/';

  constructor(private http: HttpClient) { }

  getSnippets(): Observable<Snippet[]> {
    return this.http.get<any>(this.restUrl)
      .pipe(
        tap(_ => alert('fetched snippets')),
        catchError(
          this.handleError('getSnippets', [])
          )
      );
  }

  getSnippetNo404<Data>(id: number, token: string): Observable<Snippet> {
    const url = `${this.restUrl}?id=${id}`;
    const headers = {
      'headers':
      {
        'content-type': 'application/json',
        'Authorization': 'Basic ' + token
      }
    }; 
    return this.http.get<Snippet[]>(url, headers)
      .pipe(
        map(snippet => snippet[0]), // returns a {0|1} element array
        tap(s => {
          const outcome = s ? `fetched` : `did not find`;
          alert(`${outcome} snippet id=${id}`);
        }),
        catchError(this.handleError<Snippet>(`getSnippet id=${id}`))
      );
  }

  /** GET snippet by id. Will 404 if id not found */
  getSnippet(id: number, token: string): Observable<Snippet> {
    const url = `${this.restUrl}${id}`;
    const headers = {
      'headers':
      {
        'content-type': 'application/json',
        'Authorization': 'Basic ' + token
      }
    }; 
    return this.http.get<Snippet>(url, headers).pipe(
      tap(_ => console.log(`fetched snippet id=${id}`)),
      catchError(this.handleError<Snippet>(`getSnippet id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new snippet to the server */
  addSnippet(snippet: Snippet, token: string): Observable<Snippet> {
    const headers = {'headers':
      {
        'content-type': 'application/json',
        'Authorization': 'Basic ' + token
      }
    };
    console.log(snippet, token);
    const request = this.http.post<any>(this.restUrl, snippet, headers);
    return request.pipe(
      tap((s: Snippet) => alert(`added snippet w/ id=${s.id}`)),
      catchError(this.handleError<Snippet>('addSnippet')));
  }

  /** DELETE: delete the snippet from the server */
  deleteSnippet(id: number, token: string): Observable<Snippet> {
    const url = `${this.restUrl}${id}/`;
    const headers = { 'headers':
      {
        'content-type': 'application/json',
        'Authorization': 'Basic ' + token
      }
    };    
    console.log(url);
    return this.http.delete<Snippet>(url, headers).pipe(
      tap(_ => alert(`deleted snippet id=${id}`)),
      catchError(this.handleError<Snippet>('deleteSnippet'))
    );
  }

  /** PUT: update the snippet on the server */
  updateSnippet(snippet: Snippet, id: number, token: string): Observable<any> {
    const headers = { 'headers':
      {
        'content-type': 'application/json',
        'Authorization': 'Basic ' + token
      }
    };
    console.log(id);
    const url = `${this.restUrl}${id}/`;
    return this.http.put<Snippet>(url, snippet, headers).pipe(
      tap(_ => alert(`updated snippet id=${snippet.id}`)),
      catchError(this.handleError<any>('updateSnippet'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead
      if (error.status === 404) {
        alert('There has been an error: 404');
      }

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
