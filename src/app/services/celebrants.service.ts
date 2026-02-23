import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection,query, where } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';
import { Auth,authState } from '@angular/fire/auth';

export interface Celebrant {
  id?: string;
  name: string;
  birthDay: number;
  birthMonth: number;
  pictureUrl?: string;
  message?: string;
  userId: string;
}

@Injectable({ providedIn: 'root' })
export class CelebrantsService {
    async updateCelebrant(id: string, data: Partial<Celebrant>): Promise<void> {
      const coll = collection(this.firestore, 'celebrants');
      // Firestore doc reference
      const docRef = (await import('firebase/firestore')).doc(coll, id);
      await (await import('firebase/firestore')).updateDoc(docRef, data);
    }
  constructor(private firestore: Firestore, private auth: Auth) {}

  getCelebrants(): Observable<Celebrant[]> {

    return authState(this.auth).pipe(
      switchMap((user) => {
        if (user) {
            console.log('has user',user);
          const coll = collection(this.firestore, 'celebrants');
          const userCelebrantsQuery = query(coll, where('userId', '==', user.uid));
          return collectionData(userCelebrantsQuery, { idField: 'id' }) as Observable<Celebrant[]>;
        } else {
          return of([]);
        }
      })
    )
  }
}
