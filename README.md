# Birthday Reminder

A simple Angular app to manage birthday reminders. Never forget a birthday again!

## Features

- **Add Celebrants** - Store names and birthdays for friends and family
- **Custom Notifications** - Choose how you want to be notified (email, WhatsApp)
- **Flexible Timing** - Get reminded on the birthday itself, the day before, or a week before
- **User Authentication** - Secure access via Firebase Authentication
- **Cloud Storage** - Data synced to Firebase Firestore

## Tech Stack

- Angular 20
- Firebase (Auth + Firestore)
- Angular Material
- SCSS

## Prerequisites

- Node.js 18+
- npm 9+
- Firebase project

## Setup

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   
   Create a `.env` file in the project root:
   ```
   NG_APP_API_URL=http://localhost:3000
   NG_APP_FIREBASE_PROJECT_ID=your-project-id
   NG_APP_FIREBASE_APP_ID=your-app-id
   NG_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NG_APP_FIREBASE_API_KEY=your-api-key
   NG_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NG_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
  Set up Firebase**
 ```

4. **   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable **Authentication** (Google or Email/Password provider)
   - Enable **Firestore Database**
   - Create a `celebrants` collection in Firestore

5. **Run the app**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200`

## Project Structure

```
src/app/
├── auth/                  # Authentication component
├── birthday-form/         # Add new celebrant form
├── celebrants.component/  # Main celebrants list & edit modal
├── services/
│   ├── auth.service.ts    # Firebase auth
│   ├── celebrants.service.ts  # Firestore CRUD
│   └── notification.service.ts # Notification API
└── app.component.ts       # Root component
```

## Building for Production

```bash
npm run build
```

Production files will be in the `dist/` directory.

## License

MIT
