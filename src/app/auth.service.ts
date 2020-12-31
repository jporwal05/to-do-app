import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = "http://localhost:8080/auth";
  NAME_KEY = "name";
  TOKEN_KEY = "token";

  constructor(private http: HttpClient, private router: Router) { }

  get firstName() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  register(user: any) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + "/register", user).subscribe(response => {
      this.authenticate(response);
    }, (err) => {
      throw err;
    });
  }

  logout() {
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(["/login"]);
  }

  login(userData: any) {
    this.http.post(this.BASE_URL + "/login", userData).subscribe(response => {
      this.authenticate(response);
    }, (err) => {
      throw err;
    });
  }

  authenticate(response) {
    let res: any = response;
    if (!res.token) {
      return;
    }
    localStorage.setItem(this.NAME_KEY, res.firstName);
    localStorage.setItem(this.TOKEN_KEY, res.token);
    this.router.navigate(["/"]);
  }
}
