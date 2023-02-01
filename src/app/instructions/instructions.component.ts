import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent {

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: 'Thumb on the TABLE!!! last one drinks.' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: ' the quizmaster can questions during the game (as long as he is the quizmaster and until the next person has drawn a 10) to the round or to certain persons, each person who answers him must begin his sentence with "You are the quizmaster", if the answering person forgets this he must drink one.' },
    { title: 'Never have I ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];
  title:string = "";
  description:string = "";
  @Input() card: string | undefined;

  ngOnInit(): void {
  }
  ngOnChanges():void{
    if (this.card) {
      let cardNumber = +this.card.split('_')[1]
      this.title = this.cardAction[cardNumber -1].title
      this.description = this.cardAction[cardNumber -1].description
    }
  }


}
