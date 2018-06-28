import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  user: any = {};
  constructor(private userService: UserService, private router: Router) { }
  login() {
    // this.userService.find(this.user)
    // .subscribe( data => {
    //   console.log(data);
    //   this.router.navigate(['checkout']);
    // });
    this.router.navigate(['checkout']);
  }
}
