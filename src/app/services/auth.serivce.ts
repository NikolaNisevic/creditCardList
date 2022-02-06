import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authBaseUri: string = 'https://credit-card-list.application.riecken.io/login';

  body: string = '{"username": "nikola", "token": "LAE2xIA2avaeor768enivaR3783583VAeVaea7ioaF"}';
  response?: string[];
  token?: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  loginUser() {
    this.http.post(this.authBaseUri, JSON.parse(this.body)).subscribe({
      next: value => {
        this.response = JSON.stringify(value).split(":");
        this.token = this.response[1].substring(1, this.response[1].length-2);
        this.setToken(this.token);
        this.router.navigateByUrl('/list');
      }
    });
  }

  isLoggedIn() {
    return !!this.getToken();
  }


  logoutUser() {
    localStorage.removeItem('accessToken');
  }

  getToken() {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return null;
    }
    return token;
  }


  private setToken(value: string) {
    localStorage.setItem('accessToken', value);
  }

}
