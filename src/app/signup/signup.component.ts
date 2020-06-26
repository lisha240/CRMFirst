import{Component, OnInit}from '@angular/core';

import {UserService} from '../service/user.service';
import {LoginAuthService}from '../login-auth.service';
import {Router}from "@angular/router";

@Component({
selector: 'app-signup',
templateUrl: './signup.component.html',
styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public user: any = { };
errorMessage: string;


constructor(private router: Router, private userService: UserService, private authService:LoginAuthService) {
    this.authService.isLoggedIn();
   }

  ngOnInit(): void {
  }

  saveUser(user: any, userForm: any){
    user.enabled = true;
    this.userService.saveUser(user).
subscribe(
        data => {
          if (data.status === 200) {
            alert('User Created successfully.');
          } else {
            alert('There is an error creating... please try again !!!');
          }
          this.router.navigate(['login']);
        });

  }

}
