import { Component } from '@angular/core';
import { LoginAuthService } from './login-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRM';
  public currentstatus : any;

constructor(private authService:LoginAuthService, private router: Router){
  this.currentstatus =this.authService.getStatus()
                              .subscribe (currentstatus => {
                                this.currentstatus=currentstatus;
                              })
}

logout(){
    localStorage.removeItem('currentUser');
     this.router.navigate(['login']);
}

}
