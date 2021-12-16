import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  email: string = '';
  password: string = '';

  errorMsg: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.connectUser(this.email, this.password).subscribe((res) => {
      if (res.errorMsg) {
        this.errorMsg = res.errorMsg;
      } else {
        this.userService.currentUser = new User(
          res.user.email,
          res.user.password,
          res.user.name
        );
        this.router.navigate(['/convos']);
      }
    });
  }

  ngOnInit(): void {}
}
