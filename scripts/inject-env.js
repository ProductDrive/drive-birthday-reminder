const dotenv = require('dotenv');
const fs = require('fs');

const isRestore = process.argv.includes('--restore');

const envFile = 'src/environment.prod.ts';
const swFile = 'public/firebase-messaging-sw.js';
const swTemplate = 'public/firebase-messaging-sw.template.js';

if (isRestore) {
  const placeholderContent = `export const environment = {
  production: true,
  apiUrl: 'NG_APP_API_URL_PLACEHOLDER',
  recaptchaSiteKey: 'NG_APP_RECAPTCHA_SITE_KEY_PLACEHOLDER',
  firebase: {
    projectId: 'NG_APP_FIREBASE_PROJECT_ID_PLACEHOLDER',
    appId: 'NG_APP_FIREBASE_APP_ID_PLACEHOLDER',
    storageBucket: 'NG_APP_FIREBASE_STORAGE_BUCKET_PLACEHOLDER',
    apiKey: 'NG_APP_FIREBASE_API_KEY_PLACEHOLDER',
    authDomain: 'NG_APP_FIREBASE_AUTH_DOMAIN_PLACEHOLDER',
    messagingSenderId: 'NG_APP_FIREBASE_MESSAGING_SENDER_ID_PLACEHOLDER',
    vapidKey: 'NG_APP_FIREBASE_VAPID_KEY_PLACEHOLDER'
  }
};
`;
  fs.writeFileSync(envFile, placeholderContent);
  console.log('Environment placeholders restored');

  if (fs.existsSync(swFile)) {
    fs.unlinkSync(swFile);
    console.log('Generated service worker removed');
  }
  process.exit(0);
}

dotenv.config();

let content = fs.readFileSync(envFile, 'utf8');

const replacements = {
  'NG_APP_API_URL_PLACEHOLDER': process.env.NG_APP_API_URL || '',
  'NG_APP_RECAPTCHA_SITE_KEY_PLACEHOLDER': process.env.NG_APP_RECAPTCHA_SITE_KEY || '',
  'NG_APP_FIREBASE_PROJECT_ID_PLACEHOLDER': process.env.NG_APP_FIREBASE_PROJECT_ID || '',
  'NG_APP_FIREBASE_APP_ID_PLACEHOLDER': process.env.NG_APP_FIREBASE_APP_ID || '',
  'NG_APP_FIREBASE_STORAGE_BUCKET_PLACEHOLDER': process.env.NG_APP_FIREBASE_STORAGE_BUCKET || '',
  'NG_APP_FIREBASE_API_KEY_PLACEHOLDER': process.env.NG_APP_FIREBASE_API_KEY || '',
  'NG_APP_FIREBASE_AUTH_DOMAIN_PLACEHOLDER': process.env.NG_APP_FIREBASE_AUTH_DOMAIN || '',
  'NG_APP_FIREBASE_MESSAGING_SENDER_ID_PLACEHOLDER': process.env.NG_APP_FIREBASE_MESSAGING_SENDER_ID || '',
  'NG_APP_FIREBASE_VAPID_KEY_PLACEHOLDER': process.env.NG_APP_FIREBASE_VAPID_KEY || ''
};

for (const [placeholder, value] of Object.entries(replacements)) {
  content = content.replace(placeholder, value);
}

fs.writeFileSync(envFile, content);
console.log('Environment variables injected');

if (fs.existsSync(swTemplate)) {
  const swVersionFile = 'public/.swversion';
  let swVersion = 1;
  if (fs.existsSync(swVersionFile)) {
    swVersion = parseInt(fs.readFileSync(swVersionFile, 'utf8').trim(), 10);
  } else {
    fs.writeFileSync(swVersionFile, '1');
  }

  let swContent = fs.readFileSync(swTemplate, 'utf8');
  const swReplacements = {
    '__FIREBASE_API_KEY__': process.env.NG_APP_FIREBASE_API_KEY || '',
    '__FIREBASE_AUTH_DOMAIN__': process.env.NG_APP_FIREBASE_AUTH_DOMAIN || '',
    '__FIREBASE_PROJECT_ID__': process.env.NG_APP_FIREBASE_PROJECT_ID || '',
    '__FIREBASE_STORAGE_BUCKET__': process.env.NG_APP_FIREBASE_STORAGE_BUCKET || '',
    '__FIREBASE_MESSAGING_SENDER_ID__': process.env.NG_APP_FIREBASE_MESSAGING_SENDER_ID || '',
    '__FIREBASE_APP_ID__': process.env.NG_APP_FIREBASE_APP_ID || '',
    '__SW_VERSION__': swVersion.toString()
  };
  for (const [placeholder, value] of Object.entries(swReplacements)) {
    swContent = swContent.replace(placeholder, value);
  }
  fs.writeFileSync(swFile, swContent);
  console.log(`Service worker generated with Firebase config (version ${swVersion})`);

  fs.writeFileSync(swVersionFile, String(swVersion + 1));
  console.log(`SW version bumped to ${swVersion + 1} for next build`);
}
