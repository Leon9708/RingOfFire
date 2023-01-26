import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Firestore, collectionData, collection, setDoc, doc, DocumentData, getDoc } from '@angular/fire/firestore';
import { Observable, take } from 'rxjs';
import { RingOfFirestoreService } from "../core/ring-of-firestore.service";
import { ActivatedRoute } from '@angular/router';
import { MathService } from '../core/math.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [MathService]
})

export class GameComponent implements OnInit {
  game: Game = new Game();
  gamesId:any;
  gameObserved$: Observable<any>;
  
  constructor(
  private math: MathService,
  private route: ActivatedRoute,
  public dialog: MatDialog,
  private fireservice:RingOfFirestoreService) {
  }
  ngOnInit(): void {
    this.fireservice.getALL().valueChanges().subscribe(data =>{
      console.log('data',data)
    })
    this.loadGame();
  }

  loadGame() {
    this.route.params.subscribe((params) => { 
      this.gamesId = params['id'];
      this.gameObserved$ = this.fireservice.get(this.gamesId).valueChanges();
      console.log('the id', this.gamesId )
      this.gameObserved$.subscribe((game: any) => {
          console.log(game);
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCards = game.playedCards;
          this.game.stack = game.stack;
          this.game.players = game.players;
          this.game.StartAnimation = game.StartAnimation; 
          this.game.StartAnimationEnd = game.StartAnimationEnd; 
          this.game.checkTotalPlayers = game.checkTotalPlayers; 
          this.game.currentCard = game.currentCard;
          this.game.pickCardAnimation = game.pickCardAnimation; 
          this.game.Math = game.Math;
      });
    });
  }

  saveGame(){
    return this.fireservice.update(this.gamesId, this.game);  
  }
  

  
/*   deleteTutorial(): void {
    if (this.game.id) {
      this.fireservice.delete(this.game.id)
        .then(() => {
          console.log('delete successfully!');});
    }
  } */

  takeCard(){
    this.game.pickCardAnimation = true
    this.game.currentCard = this.game.stack.pop();
   setTimeout(() => {
    this.game.playedCards.push(this.game.currentCard!) 
    this.game.pickCardAnimation = false
   }, 2000);
    this.selectPlayer()
    this.saveGame();
  }

  shuffleCards(){
    this.game.StartAnimation = true;
    setTimeout(() => {
      this.game.StartAnimationEnd = true
    }, 1450);
  }


  selectPlayer(){
    if (this.game.players.length - 1  == this.game.currentPlayer) {
      this.game.currentPlayer = 0;
     }else{
      this.game.currentPlayer++;
     }
     this.saveGame();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name:string)=> {
      console.log('The dialog was closed', name);
      if (name && name.length >= 3) {
        this.game.players.push(name)
      }
      if (this.game.players.length   >= 2 ) {
        this.game.checkTotalPlayers = true;
      }
      this.saveGame();
    });
  } 

}

