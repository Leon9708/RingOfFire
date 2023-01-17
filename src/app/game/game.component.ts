import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],

})

export class GameComponent implements OnInit {
  
  game: Game = new Game();
  pickCardAnimation = false;
  StartAnimation = false;
  StartAnimationEnd = false;
  currentCard: string | undefined;
  Math:any = Math;
  checkTotalPlayers:boolean = false;

  constructor(public dialog: MatDialog) {   
    
  }

  ngOnInit(): void {
    this.game
  }

  takeCard(){
    this.pickCardAnimation = true
    this.currentCard = this.game.stack.pop();
   setTimeout(() => {
    this.game.playedCards.push(this.currentCard!) 
    this.pickCardAnimation = false
   }, 2000);
    this.selectPlayer()
  }

  shuffleCards(){
    this.StartAnimation = true;
    setTimeout(() => {
      this.StartAnimationEnd = true
    }, 1450
    );
  }

  selectPlayer(){
    if (this.game.players.length - 1  == this.game.currentPlayer) {
      this.game.currentPlayer = 0;
     }else{
      this.game.currentPlayer++;
     }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name:string)=> {
      console.log('The dialog was closed', name);
      if (name && name.length >= 3) {
        this.game.players.push(name)
      }
      if (this.game.players.length   >= 2 ) {
        this.checkTotalPlayers = true;
      }
    });
  } 

}

