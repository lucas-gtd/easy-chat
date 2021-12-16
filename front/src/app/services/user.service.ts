import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: User;

  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  connectUser(email: string, password: string) {}

  createNewUser(
    email: string,
    password: string,
    name: string
  ): Observable<any> {
    return this.http
      .post(
        'http://localhost:8080/api/users/create',
        {
          email: email,
          password: password,
          name: name,
        },
        this.optionRequete
      )
      .pipe();
  }
}
