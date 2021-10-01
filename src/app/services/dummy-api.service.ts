import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API = 'https://gorest.co.in/public/v1/';

let headers = new HttpHeaders()
.set('Authorization','Bearer '+localStorage.getItem('bearerToken'))
.set('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})

export class DummyApiService {

  constructor(private http: HttpClient) { }

  getUsersList() {
    return this.http.get(API + 'users');
  }

  updateApi(user: any){
    return this.http.put(API + 'users/'+user.id, user, {headers});
  }

  getUserListById(id: number) {
    return this.http.get(API + 'users/'+id, {headers});
  }

  addApiUser(user: any){
    return this.http.post(API +'users/', user , {headers});
  }

  deleteUser(id: number){
    return this.http.delete(API + 'users/'+id, {headers});
  }
}
