const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

function generateEnvFile(envFile, outputFile) {
  const result = dotenv.config({ path: envFile, override: true });
  
  if (result.error) {
    console.error(`Error loading ${envFile}:`, result.error.message);
    process.exit(1);
  }

  const content = `export const environment = {
  production: ${outputFile.includes('prod')},
  apiUrl: '${process.env.API_URL || ''}',
  firebase: ${JSON.stringify({
    projectId: "afebdayrem",
    appId: "1:531316247978:web:96f441523b5bcacd622fd3",
    storageBucket: "afebdayrem.firebasestorage.app",
    apiKey: "AIzaSyAw8B4NLZ-M4tIS8UnODMOtXqE6qUc-4NM",
    authDomain: "afebdayrem.firebaseapp.com",
    messagingSenderId: "531316247978"
  })}
};
`;

  fs.writeFileSync(outputFile, content);
  console.log(`Generated ${outputFile}`);
}

generateEnvFile('.env', 'src/environments/environment.ts');
generateEnvFile('.env.prod', 'src/environments/environment.prod.ts');
