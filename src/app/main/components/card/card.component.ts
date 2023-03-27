import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/beers.models';
import { BeerSericeService } from 'src/app/services/beer-serice.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  public randomBeer: Beer[] = [] ;

  public test: any;

  constructor(private _beerService: BeerSericeService) {}

  ngOnInit(): void {
    this.getRandomBeer();
  }

  getRandomBeer(){
    this._beerService
      .getRandomBeer()
      .subscribe({
        next: (res) => {
          this.randomBeer = res;
        },
        error: () => {
          console.log('API ERROR: not possible to connect api');
        }
      })
  }
}
