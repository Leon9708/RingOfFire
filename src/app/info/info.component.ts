import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomPopUpComponent } from '../bottom-pop-up/bottom-pop-up.component';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  constructor(private _bottomSheet: MatBottomSheet) {}
 
  openBottomSheet(): void {
    this._bottomSheet.open(BottomPopUpComponent);
  }

}
