import { Component,Inject,OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { InfoComponent } from '../info/info.component';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-pop-up',
  templateUrl: './bottom-pop-up.component.html',
  styleUrls: ['./bottom-pop-up.component.scss']
})
export class BottomPopUpComponent implements OnInit  {

  showAnswer: boolean = false;

  constructor(private _bottomSheetRef: MatBottomSheetRef<InfoComponent>,@Inject(MAT_BOTTOM_SHEET_DATA) public data: { question: string , answer:string}) {
  
  } 
  ngOnInit() {
;
  }

  displayAnswer(){
    this.showAnswer = true
  }

}
