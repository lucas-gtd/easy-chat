import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convo } from '../models/convo';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ConvoService {
  allConvo: Convo[] = [];

  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  initConvos(email: string): Observable<any> {
    return this.http
      .post(
        'http://localhost:8080/api/convos/',
        {
          email: email,
        },
        this.optionRequete
      )
      .pipe();
  }

  initUsersInfos(id: number): Observable<any> {
    return this.http
      .get('http://localhost:8080/api/users/' + id, this.optionRequete)
      .pipe();
  }

  initConvoUsersInfos(currentUser: User): any {
    let users: User[] = [];
    this.initConvos(currentUser.email).subscribe((res) => {
      res.forEach((convo) => {
        convo.id_users.forEach((idUser) => {
          this.initUsersInfos(idUser.id_user).subscribe((userRes) =>
            users.push(new User(userRes.email, userRes.password, userRes.name))
          );
        });
        return users;
      });
    });
  }
}
