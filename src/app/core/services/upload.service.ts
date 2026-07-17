import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private http = inject(HttpClient);

  private api = 'http://localhost:5000/api/uploads';

  upload(file: File): Observable<any> {

    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(this.api, formData, {
      withCredentials: true
    });

  }

  getUploads(): Observable<any> {

    return this.http.get(this.api, {
      withCredentials: true
    });

  }

  deleteUpload(id: string): Observable<any> {

    return this.http.delete(`${this.api}/${id}`, {
      withCredentials: true
    });

  }

}