import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';

  errorMsg: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService
      .createNewUser(this.email, this.password, this.name)
      .subscribe((res) => {
        if (res.emailError) {
          this.errorMsg = res.emailError;
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
