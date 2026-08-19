
import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
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
  selectedTemplate?: string;
  policiesAccepted?: boolean;
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
    // NOTE: The Firestore user profile is intentionally NOT created here.
    // It is created only after the email is verified (see createUserProfileIfMissing),
    // so unverified bot accounts leave no data footprint.
    return userCredential.user;
  }

  async sendVerificationEmail(): Promise<void> {
    const user = this.auth.currentUser;
    if (!user) throw new Error('No signed-in user');
    await sendEmailVerification(user);
  }

  async reloadUser(): Promise<void> {
    await this.auth.currentUser?.reload();
  }

  get isEmailVerified(): boolean {
    return !!this.auth.currentUser?.emailVerified;
  }

  async createUserProfileIfMissing(uid: string): Promise<UserProfile | null> {
    const existing = await this.getUserProfile(uid);
    if (existing) return existing;

    const profile = {
      userId: uid,
      email: this.auth.currentUser?.email || '',
      createdAt: new Date().toISOString(),
    };
    await this.updateUserProfile(uid, profile);
    return this.getUserProfile(uid);
  }

  sendPasswordResetEmail(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email);
  }


  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }


  getcurrentUser(): User | null {
    return this.userSubject.value;
  }

  async getIdToken(): Promise<string | null> {
    const user = this.auth.currentUser;
    if (!user) return null;
    return user.getIdToken();
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

  async acceptPolicies(userId: string): Promise<void> {
    await this.updateUserProfile(userId, { policiesAccepted: true });
  }
}
