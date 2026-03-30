
import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  UserCredential,
  onAuthStateChanged
} from '@angular/fire/auth';
import { User } from 'firebase/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';


export interface UserProfile {
  userId: string;
  email: string;
  whatsappNumber?: string;
  whatsappOptIn?: boolean;
  createdAt: string;
}


@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth, private firestore: Firestore) {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    });
  }


  async signup(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const user = userCredential.user;
    await setDoc(doc(this.firestore, 'users', user.uid), {
      userId: user.uid,
      email: user.email,
      createdAt: new Date().toISOString()
    });
    return user;
  }


  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }


  getcurrentUser(): User | null {
    return this.userSubject.value;
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  async getUserProfile(userId: string): Promise<UserProfile | null> {
    const docRef = doc(this.firestore, 'users', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as UserProfile;
    }
    return null;
  }

  async updateUserProfile(userId: string, data: Partial<UserProfile>): Promise<void> {
    const docRef = doc(this.firestore, 'users', userId);
    await setDoc(docRef, { userId, ...data }, { merge: true });
  }
}
