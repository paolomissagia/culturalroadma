import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuidesService {
  private url = 'https://culturalroadmap-backend.onrender.com/';

  constructor(private httpClient: HttpClient) {}

  getGuides(category: string, level: string): Observable<any> {
    return this.httpClient.get(this.url + category + '/' + level);
  }
}
