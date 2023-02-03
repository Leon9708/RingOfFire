import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RingOfFirestoreService } from "../core/ring-of-firestore.service";
import { Game } from 'src/models/game';
@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute, private fireservice:RingOfFirestoreService) { }

  ngOnInit(): void {
  }


async enterGame(){
      let game = new Game();
      const gameInfo = await this.fireservice.create(game);
      this.router.navigateByUrl('/game/'+ gameInfo.id)
  }
}
  