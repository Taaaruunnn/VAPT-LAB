import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SsrfService {

  private http = inject(HttpClient);

  private api = 'http://localhost:5000/api/ssrf';

  fetchURL(url: string): Observable<any> {

    return this.http.post(`${this.api}/fetch`, {
      url
    });

  }

}