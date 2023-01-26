  import {
    CollectionReference,
    DocumentData,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
  } from '@firebase/firestore';
  import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
  import { Injectable } from '@angular/core';
  import { Game } from 'src/models/game';
  @Injectable({
    providedIn: 'root'
  })
  export class RingOfFirestoreService {
 
    private dbPath = 'games';
    fireCollection: AngularFirestoreCollection<any>;  


    constructor(private db: AngularFirestore) {
      this.fireCollection = db.collection(this.dbPath);
    }
    getALL(){
      return this.fireCollection
    }

    get(id: string) {
      return this.fireCollection.doc(id);
    }

    create(game: Game): any {
      return this.fireCollection.add({...game.toJson()});
    } 

    delete(id: string): Promise<any> {
      return this.fireCollection.doc(id).delete();
    }
    update(id: string, game: Game) {
      return this.fireCollection.doc(id).update(game.toJson());
  }
}
