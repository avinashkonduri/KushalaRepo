import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'kushala-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.authService.loginUser(loginForm.value);
    if(token) {
      localStorage.setItem('userName', token.email);
      alert('Login Successfull');
    }
    else {
      alert('User id or Password is wrong');
    }
  }
}
