import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  addUser(user: User) {
    let users = [];
    if(localStorage.getItem('Users')) {
        users = JSON.parse(localStorage.getItem('Users') || '{}');
        console.log(users);
        users = [user, ...users]
    }
    else {
      users = [user];
    }
    localStorage.setItem('Users',JSON.stringify(users))
  }

  loginUser(user: any){
    let UserArray = [];
    if(localStorage.getItem('Users')){
      UserArray = JSON.parse(localStorage.getItem('Users') || '{}');
    }
    return UserArray.find((p: any) => p.email === user.email && p.password === user.password);
  }
}
