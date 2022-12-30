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
  currentCard: string | undefined;
 
  constructor() { 
  
  }

  ngOnInit(): void {
  this.game
  console.log(this.game)
  }


  takeCard(){
    this.pickCardAnimation = true
    this.currentCard = this.game.stack.pop();
   
  }

  shuffleCards(){
    
    for (let i = 0; i < this.game.stack.length; i++) {
        const card = this.game.stack[i];
      
        
    }

  }
}
