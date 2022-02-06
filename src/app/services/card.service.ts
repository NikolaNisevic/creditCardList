import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, EMPTY, Observable, retry} from 'rxjs';
import {Card} from '../dto/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private authBaseUri: string = 'https://credit-card-list.application.riecken.io';

  constructor(private httpClient: HttpClient) {
  }


  getCards(): Observable<Card[]> {
    console.log('GET credit cards');
    return this.httpClient.get<Card[]>(this.authBaseUri + '/credit-cards').pipe(
      retry(3),
      catchError(() => {
        return EMPTY;
      })
    );
  }

  createCard(newCard: Card): Observable<Card> {
    console.log('POST credit card', newCard);
    return this.httpClient.post<Card>(this.authBaseUri + '/credit-cards', newCard);
  }
}
