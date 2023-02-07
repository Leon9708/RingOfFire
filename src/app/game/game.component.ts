import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Firestore, collectionData, collection, setDoc, doc, DocumentData, getDoc } from '@angular/fire/firestore';
import { Observable, take } from 'rxjs';
import { RingOfFirestoreService } from "../core/ring-of-firestore.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})

export class GameComponent implements OnInit {
  game: Game = new Game();
  gamesId:any;
  gameObserved$: Observable<any>;

  
  constructor(
  private route: ActivatedRoute,
  public dialog: MatDialog,
  private fireservice:RingOfFirestoreService) {
  }
  ngOnInit(): void {
    this.fireservice.getALL().valueChanges().subscribe(data =>{
    })
    this.loadGame();
  }

  loadGame() {
    this.route.params.subscribe((params) => { 
      this.gamesId = params['id'];
      this.gameObserved$ = this.fireservice.get(this.gamesId).valueChanges();
      this.gameObserved$.subscribe((game: any) => {
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCards = game.playedCards;
          this.game.stack = game.stack;
          this.game.players = game.players;
          this.game.StartAnimation = game.StartAnimation; 
          this.game.StartAnimationEnd = game.StartAnimationEnd; 
          this.game.checkTotalPlayers = game.checkTotalPlayers; 
          this.game.currentCard = game.currentCard;
          this.game.pickCardAnimation = game.pickCardAnimation; 
          this.game.clicked = game.clicked;
          this.game.chosenImages = game.chosenImages
      });
    });
  }

  saveGame(){
    return this.fireservice.update(this.gamesId, this.game);  
  }

  shuffleCards(){
    this.game.StartAnimation = true;
    setTimeout(() => {
      this.game.StartAnimationEnd = true
      this.saveGame();  
    }, 1450);
    this.saveGame();  
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

    dialogRef.afterClosed().subscribe(result => {
      const { name, chosenImage } = result;
      console.log('The dialog was closed', name, chosenImage);
      if(chosenImage){
        this.game.chosenImages.push(chosenImage)
      }
      if (name && name.length >= 3) {
        this.game.players.push(name);
      }
      if (this.game.players.length >= 2) {
        this.game.checkTotalPlayers = true;
      }
      this.saveGame();
    });
    
  } 

}

