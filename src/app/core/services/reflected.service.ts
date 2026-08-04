import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReflectedService {

  private http = inject(HttpClient);

  private api = 'http://localhost:5000/api/reflected';

  search(query: string) {

    return this.http.get<any>(
      `${this.api}/search?q=${encodeURIComponent(query)}`
    );

  }

}