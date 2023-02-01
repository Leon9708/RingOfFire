import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
@Input() name!:string;
@Input() playerActive:boolean = false;
@Input() chosenImage:string;
  constructor() { }
  clickedPlayer: boolean = false;

  ngOnInit(): void {  
  }

  clickPlayer(){
    this.clickedPlayer = !this.clickedPlayer
  }
}
