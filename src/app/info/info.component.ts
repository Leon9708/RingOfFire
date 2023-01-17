import { Component, Input, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomPopUpComponent } from '../bottom-pop-up/bottom-pop-up.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  question !: string;
  answer !: string ;
  i:number=0;
  infos = [
    { Question: 'What do you call a fish with no eyes?', 
      Answer: 'A fsh.',
    },
    { Question: 'What do you call a can opener that doesnt work?', 
     Answer: 'A cant opener! ',
    }, 
    { Question: 'There are three types of people in the world:', 
    Answer: 'Those who can count and those who cant.',
    },
    { Question: 'What did the fish say when he swam into a wall?', 
    Answer: 'Dam.',
    },
    { Question: 'I like elephants.', 
    Answer: 'Everything else is irrelephant.',
    },
    { Question: 'Whats red and bad for your teeth?', 
    Answer: 'A brick.',
    },
    { Question: 'What kind of tea is hard to swallow?', 
    Answer: 'Reality.',
    },
];
  constructor(private _bottomSheet: MatBottomSheet) {}
 

  setInfos(){
    this.shuffleInfo();
    if (this.i !== this.infos.length) {
      this.question = this.infos[this.i].Question
      this.answer = this.infos[this.i].Answer
      this.i++;
    }else{
      this.i = 0;
    }
 
    this.openBottomSheet();
  }

  shuffleInfo() {
    for (let i = this.infos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.infos[i], this.infos[j]] = [this.infos[j], this.infos[i]];
    }
}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomPopUpComponent, {
      data: { question:this.question,
              answer:this.answer       },
    });
  }

}
