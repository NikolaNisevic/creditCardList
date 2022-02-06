import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CardService} from '../../services/card.service';
import {Card} from '../../dto/card';
import {AuthService} from '../../services/auth.serivce';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css']
})
export class CreditCardListComponent implements OnInit {

  cards: Card[] = [];
  p: number = 1;
  count: number = 10;
  error: string | undefined;

  constructor(private router: Router, private cardService: CardService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getCard();
  }

  addCard() {
    this.router.navigateByUrl('/createCard');
  }

  getCard() {
    this.cardService.getCards().subscribe({
      next: data => {
        console.log('Received cards', data);
        data.forEach(value => this.cards.push(value));
      },
      error: err => {
        this.error = err.error;
        console.log(this.error);
      }
    })
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
