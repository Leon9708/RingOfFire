import { Component, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/models/game';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {
@Input() game: Game;
  constructor(private router: Router) { 

  }

  ngOnInit(): void {
    
  }

  backStart(){
    this.router.navigateByUrl('startscreen')
  }
  
}
