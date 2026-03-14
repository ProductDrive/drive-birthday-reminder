const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

function generateEnvFile(envFile, outputFile) {
  try {
    const result = dotenv.config({ path: envFile, override: true });
    if (result.error && result.error.code !== 'ENOENT') {
      console.error(`Error loading ${envFile}:`, result.error.message);
      process.exit(1);
    }
  } catch (e) {
    if (e.code !== 'ENOENT') {
      console.error(`Error loading ${envFile}:`, e.message);
      process.exit(1);
    }
  }

  const isProduction = outputFile.includes('prod');
  const apiUrl = process.env.NG_APP_API_URL || process.env.API_URL || (isProduction ? 'https://birthday.drivesolution.cloud' : 'http://localhost:5002');
  
  const content = `export const environment = {
  production: ${isProduction},
  apiUrl: process.env['NG_APP_API_URL'] || '${apiUrl}',
  firebase: {
    projectId: process.env['NG_APP_FIREBASE_PROJECT_ID']',
    appId: process.env['NG_APP_FIREBASE_APP_ID'],
    storageBucket: process.env['NG_APP_FIREBASE_STORAGE_BUCKET'],
    apiKey: process.env['NG_APP_FIREBASE_API_KEY'],
    authDomain: process.env['NG_APP_FIREBASE_AUTH_DOMAIN'],
    messagingSenderId: process.env['NG_APP_FIREBASE_MESSAGING_SENDER_ID']'
  }
};
`;

  fs.writeFileSync(outputFile, content);
  console.log(`Generated ${outputFile}`);
}

generateEnvFile('.env', 'src/environments/environment.ts');
generateEnvFile('.env.prod', 'src/environments/environment.prod.ts');
