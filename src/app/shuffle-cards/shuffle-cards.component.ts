import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-shuffle-cards',
  templateUrl: './shuffle-cards.component.html',
  styleUrls: ['./shuffle-cards.component.scss']
})
export class ShuffleCardsComponent implements OnInit {
  @Input() game: Game; 
  Math: Math = Math
  constructor() { }



  ngOnInit(): void {
  }

}
