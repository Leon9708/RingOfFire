import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent {
  name: string = '';
  images = ['/assets/img/star.png','/assets/img/krabs.png', '/assets/img/spongebob.png','/assets/img/sandy.png','/assets/img/gary.png', '/assets/img/plankton.png']
  chosenImage:string;
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>){
  }

  ngOnInit(){
    this.addImages()
  }

  onNoClick(){
    this.dialogRef.close();
  }
  addImages(){
    
  }

}
