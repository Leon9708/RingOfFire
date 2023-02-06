import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent {
  name: string = '';
  images = ['/ringooffire/assets/img/star.png','/ringooffire/assets/img/krabs.png', '/ringooffire/assets/img/spongebob.png','/ringooffire/assets/img/sandy.png','/ringooffire/assets/img/gary.png', '/ringooffire/assets/img/plankton.png']
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
