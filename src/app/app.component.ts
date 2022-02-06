import {Component} from '@angular/core';
import {AuthService} from './services/auth.serivce';
import {HttpClient} from '@angular/common/http';
import {CardService} from './services/card.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'creditCardList';

  body: string = '{"username": "nikola", "token": "LAE2xIA2avaeor768enivaR3783583VAeVaea7ioaF"}';

  constructor(private authService: AuthService,
              private httpClient: HttpClient,
              private cardService: CardService,
              private router: Router) {}

  login() {
    this.authService.loginUser();
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigateByUrl('/');
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
