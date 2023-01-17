import { Component,OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-bottom-pop-up',
  templateUrl: './bottom-pop-up.component.html',
  styleUrls: ['./bottom-pop-up.component.scss']
})
export class BottomPopUpComponent {
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
question: string | undefined;
answer: string | undefined;
i:number=0;

/*   constructor(private _bottomSheetRef: MatBottomSheetRef<InfoComponent>) {

  } */

  ngOnChanges(){
    if (this.i !== this.infos.length) {
      this.question = this.infos[this.i].Question
      this.answer = this.infos[this.i].Answer
      this.i++;
    }else{
      this.i = 0;
    }
  }

  displayInfo(){

  }


}
