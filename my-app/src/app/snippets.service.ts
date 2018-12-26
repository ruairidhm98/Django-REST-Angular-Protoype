import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Snippet } from './snippet';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' }) 
export class SnippetsService {

  private restUrl = "http://127.0.0.1:8000/snippets/";
  //private restUrl = "../assets/data/snippets.json";

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getSnippets(): Observable<Snippet[]>{
    return this.http.get<any>(this.restUrl)
      .pipe(
        tap(_ => this.log('fetched snippets')),
        catchError(
          this.handleError('getSnippets', [])
          )
      );
  }
  
  getSnippetNo404<Data>(id: number): Observable<Snippet> {
    const url = `${this.restUrl}/?id=${id}`;
    return this.http.get<Snippet[]>(url)
      .pipe(
        map(snippet => snippet[0]), // returns a {0|1} element array
        tap(s => {
          const outcome = s ? `fetched` : `did not find`;
          this.log(`${outcome} snippet id=${id}`);
        }),
        catchError(this.handleError<Snippet>(`getSnippet id=${id}`))
      );
  }

  /** GET snippet by id. Will 404 if id not found */
  getSnippet(id: number): Observable<Snippet> {
    const url = `${this.restUrl}/${id}`;
    return this.http.get<Snippet>(url).pipe(
      tap(_ => this.log(`fetched snippet id=${id}`)),
      catchError(this.handleError<Snippet>(`getSnippet id=${id}`))
    );
  }

  /* GET snippets whose name contains search term */
  searchSnippet(term: string): Observable<Snippet[]> {
    if (!term.trim()) {
      // if not search term, return empty snippets array.
      return of([]);
    }
    return this.http.get<Snippet[]>(`${this.restUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found snippet matching "${term}"`)),
      catchError(this.handleError<Snippet[]>('searchSnippets', []))
    );
  }
  
  //////// Save methods //////////

  /** POST: add a new snippet to the server */
  addSnippet(snippet: Snippet): Observable<Snippet> {
    return this.http.post<Snippet>(this.restUrl, snippet, httpOptions).pipe(
      tap((snippet: Snippet) => this.log(`added snippet w/ id=${snippet.id}`)),
      catchError(this.handleError<Snippet>('addSnippet'))
    );
  }

  /** DELETE: delete the snippet from the server */
  deleteSnippet(snippet: Snippet | number): Observable<Snippet> {
    const id = typeof snippet === 'number' ? snippet : snippet.id;
    const url = `${this.restUrl}/${id}`;

    return this.http.delete<Snippet>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted snippet id=${id}`)),
      catchError(this.handleError<Snippet>('deleteSnippet'))
    );
  }

  /** PUT: update the snippet on the server */
  updateSnippet(snippet: Snippet): Observable<any> {
    return this.http.put(this.restUrl, snippet, httpOptions).pipe(
      tap(_ => this.log(`updated snippet id=${snippet.id}`)),
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
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a SnippetService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SnippetService: ${message}`);
  }

}
