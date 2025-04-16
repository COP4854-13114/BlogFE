import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 username:string = '';
 password:string = '';

 constructor(private authService:AuthService){

 }
 PerformLogin()
 {
    this.authService.Login(this.username,this.password).then((result) => {
      if(result)
      {
        alert('Login Successfull');
      }
      else
      {
        alert('Login Failed');
      }
    });
 }
}
