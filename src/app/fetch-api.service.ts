import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { DataPoint } from 'src/datapoint';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {
  private apiUrl = ' https://1bpuomwyz7.execute-api.us-east-1.amazonaws.com/dev';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'api-key': 'q3WKqZFmM73YpLnX0dfKJ1POpxFnQTte7iHBXLlT'})
  };

  constructor(private http: HttpClient) {
  }

  getData(): Observable<JSON> {
    return this.http.get<JSON>(this.apiUrl).pipe(
      catchError(this.handleError<JSON>('getData', JSON)));
  }

  sendData(data: DataPoint): Observable<JSON> {
    return this.http.post<JSON>(this.apiUrl, JSON.stringify(data), this.httpOptions).pipe(
      catchError(this.handleError<JSON>('sendData', JSON))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO: log error in logging infrastructure
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      //app continues with empty result after error
      return of(result as T);
    }
  }

}