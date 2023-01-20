import {
  CollectionReference,
  DocumentData,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Game } from 'src/models/game';
@Injectable({
  providedIn: 'root'
})
export class RingOfFirestoreService {
  private dbPath = 'games';
  fireCollection: AngularFirestoreCollection<Game>;  


  constructor(private db: AngularFirestore) {
    this.fireCollection = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Game> {
   return this.fireCollection
  }

/*   create(game:string) {
    return addDoc(this.fireCollection,game);
  } */
}
