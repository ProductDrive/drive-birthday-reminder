import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  UserCredential,
} from '@angular/fire/auth';
import { User } from 'firebase/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  async signup(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const user = userCredential.user;

    // ✅ Save to Firestore `users/{uid}`
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
  return this.auth.currentUser;
}

  logout(): Promise<void> {
    return signOut(this.auth);
  }
}
