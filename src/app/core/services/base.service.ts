import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, body: any) {
    return this.http.post(url, body).pipe(catchError((error) => of({ error, result: null })), shareReplay(1));
  }

  put(url: string, body: any) {
    return this.http.put(url, body);
  }

  delete(url: string) {
    return this.http.delete(url);
  }
}
