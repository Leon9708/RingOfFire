import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game = new Game();
  pickCardAnimation = false;
  StartAnimation = false;
  StartAnimationEnd = false;
  currentCard: string | undefined;
  Math:any = Math;;

 
  constructor() {   
    
  }

  ngOnInit(): void {
    setInterval(() => {
      
    }, 3000);
  this.game
  console.log(this.game)
  }



  takeCard(){
    this.pickCardAnimation = true
    this.currentCard = this.game.stack.pop();
   setTimeout(() => {
    this.game.playedCards.push(this.currentCard!) 
    this.pickCardAnimation = false
   }, 2000);

  }

  shuffleCards(){
    this.StartAnimation = true;
    setTimeout(() => {
      this.StartAnimationEnd = true
    }, 1450
    );
  }
}
