export const environment = {
  production: true,
  apiUrl: process.env['NG_APP_API_URL'] || 'https://birthday.drivesolution.cloud',
  firebase: {
    projectId: process.env['NG_APP_FIREBASE_PROJECT_ID'] || 'afebdayrem',
    appId: process.env['NG_APP_FIREBASE_APP_ID'] || '1:531316247978:web:96f441523b5bcacd622fd3',
    storageBucket: process.env['NG_APP_FIREBASE_STORAGE_BUCKET'] || 'afebdayrem.firebasestorage.app',
    apiKey: process.env['NG_APP_FIREBASE_API_KEY'] || 'AIzaSyAw8B4NLZ-M4tIS8UnODMOtXqE6qUc-4NM',
    authDomain: process.env['NG_APP_FIREBASE_AUTH_DOMAIN'] || 'afebdayrem.firebaseapp.com',
    messagingSenderId: process.env['NG_APP_FIREBASE_MESSAGING_SENDER_ID'] || '531316247978'
  }
};
