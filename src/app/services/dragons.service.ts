import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DragonBody } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  constructor(
    private http: HttpClient
  ) { }

  getDragons(): Observable<any> {
    return this.http.get(`${environment.apiURL}/dragon`);
  }

  getDragonById(id: string): Observable<any> {
    return this.http.get(`${environment.apiURL}/dragon/${id}`);
  }

  setDragon(dragon: DragonBody): Observable<any> {
    return this.http.post(`${environment.apiURL}/dragon`,dragon);
  }

  updateDragon(dragon: DragonBody,id: string): Observable<any> {
    return this.http.put(`${environment.apiURL}/dragon/${id}`,dragon);
  }

  deleteDragon(id: string): Observable<any> {
    return this.http.delete(`${environment.apiURL}/dragon/${id}`);
  }
}
