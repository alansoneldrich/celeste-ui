import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8000'; // FastAPI backend URL

  constructor(private http: HttpClient) {}

  interact(user: string, message: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/interact`, { user, message });
  }

  getStatus(): Observable<any> {
    return this.http.get(`${this.baseUrl}/status`);
  }

  getMemory(): Observable<any> {
    return this.http.get(`${this.baseUrl}/memory`);
  }

  updateConfig(config: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/config`, config);
  }
}
