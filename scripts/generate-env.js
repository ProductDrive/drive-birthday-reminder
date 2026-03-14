const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

function generateEnvFile(envFile, outputFile) {
  const result = dotenv.config({ path: envFile, override: true });
  
  if (result.error) {
    console.error(`Error loading ${envFile}:`, result.error.message);
    process.exit(1);
  }

  const isProduction = outputFile.includes('prod');
  const apiUrl = process.env.NG_APP_API_URL || process.env.API_URL || (isProduction ? 'https://birthday.drivesolution.cloud' : 'http://localhost:5002');
  
  const content = `export const environment = {
  production: ${isProduction},
  apiUrl: process.env['NG_APP_API_URL'] || '${apiUrl}',
  firebase: {
    projectId: process.env['NG_APP_FIREBASE_PROJECT_ID'] || 'afebdayrem',
    appId: process.env['NG_APP_FIREBASE_APP_ID'] || '1:531316247978:web:96f441523b5bcacd622fd3',
    storageBucket: process.env['NG_APP_FIREBASE_STORAGE_BUCKET'] || 'afebdayrem.firebasestorage.app',
    apiKey: process.env['NG_APP_FIREBASE_API_KEY'] || 'AIzaSyAw8B4NLZ-M4tIS8UnODMOtXqE6qUc-4NM',
    authDomain: process.env['NG_APP_FIREBASE_AUTH_DOMAIN'] || 'afebdayrem.firebaseapp.com',
    messagingSenderId: process.env['NG_APP_FIREBASE_MESSAGING_SENDER_ID'] || '531316247978'
  }
};
`;

  fs.writeFileSync(outputFile, content);
  console.log(`Generated ${outputFile}`);
}

generateEnvFile('.env', 'src/environments/environment.ts');
generateEnvFile('.env.prod', 'src/environments/environment.prod.ts');
