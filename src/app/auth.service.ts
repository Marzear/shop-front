import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  register(user) {
    return this.httpClient.post('http://localhost:8000/api/register', user);
  }

  login(user) {
    console.log(user);
    return this.httpClient.post('http://localhost:8000/api/login', user);
  }

  user_info() {
    const tokenParse = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenParse}`
    });
    console.log(headers);
    return this.httpClient.get('http://localhost:8000/api/user', {
      headers: headers
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogin() {
    const token = localStorage.getItem('token');
    return localStorage.getItem('token');
  }

  contact(user) {
    return this.httpClient.post('http://localhost:8000/api/sendemail', user);
  }
}