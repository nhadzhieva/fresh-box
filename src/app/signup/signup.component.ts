import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  hide = true;
  user: any = {};
  constructor(private userService: UserService, private router: Router) { }
  signup() {
    this.userService.create(this.user)
    .subscribe( data => {
      console.log(data);
      this.router.navigate(['login']);
    });
  }
}
