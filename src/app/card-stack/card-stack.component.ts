import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/models/game';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.scss']
})
export class CardStackComponent implements OnInit {
@Input() game: Game;
  constructor(private gameC:GameComponent) { }

  ngOnInit(): void {
  }

  takeCard(){
    if(this.game.clicked) return;
    this.game.clicked = true;
    this.game.pickCardAnimation = true
    this.game.currentCard = this.game.stack.pop();
   setTimeout(() => {
    this.game.playedCards.push(this.game.currentCard!) 
    this.game.pickCardAnimation = false
    this.game.clicked = false 
    this.gameC.saveGame(); 
   }, 2500);
    this.gameC.selectPlayer()
    this.gameC.saveGame();
  }
}
