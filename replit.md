# MicroReset MVP

## Overview
MicroReset is a calming web application that provides instant emotional relief in under 90 seconds. Users select their current mood and receive a randomly-selected micro-reset exercise to help them regulate their emotions.

## Tech Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (no frameworks)
- **Fonts**: Google Fonts (Inter for UI, Lora for reset text)
- **Audio**: Web Speech API for text-to-speech
- **Hosting**: Static files served via Python HTTP server (GitHub Pages compatible)

## Project Structure
```
/
├── index.html      # Main HTML structure with all screens
├── style.css       # Complete styling with mint green color palette
├── script.js       # App logic, navigation, and timer functionality
├── resets.js       # Library of 35 micro-resets (7 moods x 5 resets)
├── audio.js        # Text-to-speech audio controller
└── replit.md       # Project documentation
```

## Color Palette
- Primary: #E8F5E9 (soft mint green)
- Secondary: #4CAF50 (forest green)
- Accent: #81C784 (medium green)
- Text: #2E7D32 (dark green)
- Background: #FAFAFA (off-white)
- Warning: #FFF9C4 (soft yellow)

## Features
1. **Splash Screen** - 1.5 second animated intro with branding
2. **Mood Selection** - 7 mood categories with emoji-based cards
3. **Reset Display** - Shows reset title, instructions, and countdown timer
4. **Text-to-Speech** - Optional audio playback of reset instructions
5. **Timer** - Countdown with visual progress bar and completion state
6. **Info Modal** - Explains what MicroReset is

## Mood Categories
- Anxious (5 resets)
- Sad (5 resets)
- Angry (5 resets)
- Tired (5 resets)
- Stuck (5 resets)
- Lonely (5 resets)
- Numb (5 resets)

## Running the App
The app is served using Python's built-in HTTP server on port 5000:
```bash
python -m http.server 5000 --bind 0.0.0.0
```

## Deployment
For GitHub Pages deployment:
1. Push all files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the main branch as the source

## Future Enhancements
- Tally form integration for email capture
- localStorage favorites system
- Shareable reset links
- Plausible Analytics for privacy-friendly tracking
- Service worker for offline capability
