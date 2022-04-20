import { delay, dematerialize, materialize, Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { User } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signIn(user: User): Observable<HttpResponse<any>> {
    if(user.email === 'admin@jeanmedeiros.com.br' && user.password === 'admin') {
      localStorage.setItem('accessToken',btoa('signed in'))
      const success = new HttpResponse<any>({status: 201});
      return of(success).pipe(delay(1000));
    }

    return throwError(() => new HttpErrorResponse({status: 401})).pipe(materialize(),delay(1000),dematerialize());
  }

  signOut(): void {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }
}
