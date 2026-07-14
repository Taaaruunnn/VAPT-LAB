import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private http = inject(HttpClient);

  private api = 'http://localhost:5000/api/auth';

  login(email: string, password: string) {

    return this.http.post(
      `${this.api}/login`,
      {
        email,
        password
      },
      {
        withCredentials: true
      }
    );

  }

  logout() {

    return this.http.post(
      `${this.api}/logout`,
      {},
      {
        withCredentials: true
      }
    );

  }
  me() {

  return this.http.get(
    `${this.api}/me`,
    {
      withCredentials: true
    }
  );

}

}