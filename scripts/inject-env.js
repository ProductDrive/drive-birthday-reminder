const dotenv = require('dotenv');
const fs = require('fs');

const isRestore = process.argv.includes('--restore');

const envFile = 'src/environments/environment.prod.ts';

if (isRestore) {
  const placeholderContent = `export const environment = {
  production: true,
  apiUrl: 'NG_APP_API_URL_PLACEHOLDER',
  firebase: {
    projectId: 'NG_APP_FIREBASE_PROJECT_ID_PLACEHOLDER',
    appId: 'NG_APP_FIREBASE_APP_ID_PLACEHOLDER',
    storageBucket: 'NG_APP_FIREBASE_STORAGE_BUCKET_PLACEHOLDER',
    apiKey: 'NG_APP_FIREBASE_API_KEY_PLACEHOLDER',
    authDomain: 'NG_APP_FIREBASE_AUTH_DOMAIN_PLACEHOLDER',
    messagingSenderId: 'NG_APP_FIREBASE_MESSAGING_SENDER_ID_PLACEHOLDER'
  }
};
`;
  fs.writeFileSync(envFile, placeholderContent);
  console.log('Environment placeholders restored');
  process.exit(0);
}

dotenv.config();

let content = fs.readFileSync(envFile, 'utf8');

const replacements = {
  'NG_APP_API_URL_PLACEHOLDER': process.env.NG_APP_API_URL || '',
  'NG_APP_FIREBASE_PROJECT_ID_PLACEHOLDER': process.env.NG_APP_FIREBASE_PROJECT_ID || '',
  'NG_APP_FIREBASE_APP_ID_PLACEHOLDER': process.env.NG_APP_FIREBASE_APP_ID || '',
  'NG_APP_FIREBASE_STORAGE_BUCKET_PLACEHOLDER': process.env.NG_APP_FIREBASE_STORAGE_BUCKET || '',
  'NG_APP_FIREBASE_API_KEY_PLACEHOLDER': process.env.NG_APP_FIREBASE_API_KEY || '',
  'NG_APP_FIREBASE_AUTH_DOMAIN_PLACEHOLDER': process.env.NG_APP_FIREBASE_AUTH_DOMAIN || '',
  'NG_APP_FIREBASE_MESSAGING_SENDER_ID_PLACEHOLDER': process.env.NG_APP_FIREBASE_MESSAGING_SENDER_ID || ''
};

for (const [placeholder, value] of Object.entries(replacements)) {
  content = content.replace(placeholder, value);
}

fs.writeFileSync(envFile, content);
console.log('Environment variables injected');
