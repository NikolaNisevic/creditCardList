export class Card {
  id?: string;
  owner?: string;
  number?: number;
  cvv?: number;
  expiration?: string;

  constructor(
    id: string,
    owner: string,
    number: number,
    cvv: number,
    expiration: string
  ) {
  }
}
