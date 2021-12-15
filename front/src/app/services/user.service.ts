import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: User = new User('lucasgoutaudier@gmail.com', '123', 'Lucas');

  constructor(private http: HttpClient) {}

  connectUser(email: string, password: string) {}

  createNewUser(email: string, password: string, name: string) {}
}
