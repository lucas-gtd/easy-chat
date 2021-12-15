export class User {
  email: string;
  password: string;
  name: string;
  constructor(email: string, passwoprd: string, name: string) {
    this.email = email;
    this.password = passwoprd;
    this.name = name;
  }
}
