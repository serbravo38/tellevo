import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Car{
  id?:string;
  marca:string;
  modelo:string;
  year:number;
  imageUrl:string
  patente:string
}
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private collectionName= "Cars";
  constructor(private firestore:AngularFirestore) { }

  addCar(car:Car): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({...car,id})

  }

  getCar():Observable<Car[]>{
    return this.firestore.collection<Car>(this.collectionName).valueChanges();
  }
}
