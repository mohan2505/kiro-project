# HelpWave - Design Document

## Overview
HelpWave is a simple, single-page web application designed to help women quickly attract attention in unsafe situations through visual and audio alerts.

## User Interface Design

### Layout
- Clean, minimal interface
- Large, prominent "HELP" button centered on screen
- Emergency message display area
- Stop button (appears after activation)

### Visual Design
- Primary color: Red (#dc2626) for urgency
- Button size: Large and easy to tap (200x200px minimum)
- High contrast for visibility
- Responsive design for mobile and desktop

### Interaction Flow
1. User sees large "HELP" button
2. User clicks/taps button
3. Screen flashes red (visual alert)
4. Loud alert sound plays continuously
5. Emergency message appears
6. "STOP" button appears to deactivate

## Technical Design

### Components
- Main button (trigger)
- Flash overlay (visual alert)
- Audio element (sound alert)
- Message display
- Stop button

### States
- Idle: Ready to activate
- Active: Alert in progress
- Stopped: Alert deactivated

## Accessibility
- Large touch targets
- High contrast colors
- Simple, clear messaging
- Works without internet connection
