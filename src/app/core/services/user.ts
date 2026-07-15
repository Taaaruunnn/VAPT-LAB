import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  private api = 'http://localhost:5000/api/users';

  getUsers() {

    return this.http.get<any[]>(this.api, {

      withCredentials: true

    });

  }

  getUser(id: string) {

    return this.http.get<any>(

      `${this.api}/${id}`,

      {

        withCredentials: true

      }

    );

  }

}