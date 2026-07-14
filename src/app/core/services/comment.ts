import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private http = inject(HttpClient);

  private api = 'http://localhost:5000/api/comments';

  getComments() {

    return this.http.get<any[]>(this.api);

  }

  addComment(comment: any) {

    return this.http.post(this.api, comment);

  }
  deleteComment(id: string) {

  return this.http.delete(

    `${this.api}/${id}`

  );

}

}