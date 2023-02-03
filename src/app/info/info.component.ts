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
    { Question: 'Why dont Dinosaurs talk?', 
    Answer: 'Because they are dead',
    },
    { Question: 'Whats red and bad for your teeth?', 
    Answer: 'A brick.',
    },
    { Question: 'What do you call a Fly with no wings', 
    Answer: 'A walk',
    },
    { Question: 'What kind of tea is hard to swallow?', 
    Answer: 'Reality.',
    },
    { Question: 'What is the most terrifying word in nuclear physics?', 
    Answer: '“Oops!”',
    },
    { Question: 'I dont trust stairs.', 
    Answer: 'They are always up to something.',
    },
    { Question: 'Wife: “How do I look?”', 
    Answer: 'Husband: “With your eyes.”',
    },
    { Question: 'I threw a boomerang a few years ago.', 
    Answer: 'I now live in constant fear.', 
    },  { Question: 'Why do you never see pigs hiding in trees? ', 
    Answer: 'Because they are pretty good at it. ',
    },  { Question: 'How do you get a squirrel to like you?', 
    Answer: 'Act like a nut.”',
    },
    
];

  showedAnswer: string[] = [];
  constructor(private _bottomSheet: MatBottomSheet) {}
 

  setInfos(){
    if (this.infos.length !== 0) {
      this.shuffleInfo();
      this.question = this.infos[this.i].Question
      this.answer = this.infos[this.i].Answer
      this.infos.splice(this.i,1)
      this.openBottomSheet();
    }
    else{
      alert('out of useful tipps...')
    }
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
