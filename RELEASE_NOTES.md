# Release Notes - Drive Birthday Reminder

## Version 1.0.0 (Initial Release)

### Overview
Drive Birthday Reminder is a web application that helps users manage birthdays of friends and family, send automated reminders, and share invite links for others to submit their birthdays.

---

## Features

### Authentication
- User registration and login
- Secure authentication via Firebase
- Persistent sessions

### Celebrant Management
- View all celebrants in a responsive card grid
- Add new celebrants via shareable invite links
- Edit existing celebrant details
- Celebrants sorted by birthday (month and day)

### Birthday Submission Form
- Public form for friends/family to submit their birthdays
- Fields: Full name, birth day, birth month, picture link
- Success confirmation after submission
- Option to submit another birthday

### Share & Invite
- Generate unique invite links per user
- Copy invite link to clipboard
- Share link by pasting in any platform

### Birthday Wishes
- Send personalized birthday messages via WhatsApp
- Custom message support

---

## Technical Improvements

### Accessibility (WCAG 2.1 AA Compliant)
- **Enhanced color contrast**: All colors meet WCAG AA contrast ratios (4.5:1 for text, 3:1 for UI elements)
- **Color-blind friendly palette**: Replaced pink/purple scheme with accessible blue tones
- **Focus indicators**: Improved keyboard navigation with visible focus rings (3px instead of 2px)
- **Icon support**: Added icons to all action buttons for non-color identification
- **Screen reader support**: Added ARIA labels and roles for dynamic content
- **Input improvements**: Thicker borders (2px) and improved focus states

### UI/UX Enhancements
- Modern card-based design with rounded corners
- Smooth hover and transition animations
- Responsive grid layout (mobile, tablet, desktop)
- Consistent blue-themed secondary buttons
- Well-centered icons in action buttons
