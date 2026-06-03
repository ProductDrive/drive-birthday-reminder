import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface CardTemplate {
  id?: string;
  shortName: string;
  displayName: string;
  order: number;
}

@Injectable({ providedIn: 'root' })
export class TemplateService {
  constructor(private firestore: Firestore) {}

  getTemplates(): Observable<CardTemplate[]> {
    const coll = collection(this.firestore, 'templates');
    console.log('Fetching templates from Firestore...');
    console.log('Firestore collection reference:', coll);
    const templates$ = collectionData(coll, { idField: 'id' }) as Observable<CardTemplate[]>;
    console.log('Retrieved templates:', templates$);
    return templates$;
  }
}
