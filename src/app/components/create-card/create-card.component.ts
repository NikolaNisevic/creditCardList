import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Card} from '../../dto/card';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  model: Card = {};
  card: Card = {};
  error: string | undefined;

  constructor(private router: Router, private cardService: CardService) {
  }

  ngOnInit(): void {
  }

  isNumberKey(event: any) {
    let charCode = (event.which) ? event.which : event.keyCode
    return !(charCode > 31 && (charCode < 48 || charCode > 57));

  }

  onSubmit() {
    this.card.owner = this.model.owner;
    // @ts-ignore
    this.card.number = parseInt(this.model.number);
    // @ts-ignore
    this.card.cvv = parseInt(this.model.cvv);
    this.card.expiration = this.model.expiration;
    this.cardService.createCard(this.card).subscribe({
      next: value => {
        console.log('Created', value);
      },
      error: err => {
        this.error = err.error;
        console.log(this.error);
      }
    });
  }
}
