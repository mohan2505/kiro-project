# HelpWave - Requirements Document

## Functional Requirements

### FR1: Help Button
- Display a large, prominent "HELP" button
- Button must be easily clickable/tappable
- Button should be visually distinct and urgent

### FR2: Visual Alert
- Flash the screen with red color when activated
- Flash should be noticeable and attention-grabbing
- Flash should continue until stopped

### FR3: Audio Alert
- Play a loud alert sound when activated
- Sound should loop continuously
- Sound should be audible from a distance

### FR4: Emergency Message
- Display clear emergency message when activated
- Message should indicate help is needed
- Message should be visible and readable

### FR5: Stop Functionality
- Provide a way to stop the alert
- Stop button should be clearly visible
- Stopping should cease all alerts (visual and audio)

## Non-Functional Requirements

### NFR1: Performance
- App must load quickly (< 2 seconds)
- Button response must be immediate
- No lag in alert activation

### NFR2: Compatibility
- Work on modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive on mobile and desktop devices
- Work offline (no internet required after initial load)

### NFR3: Usability
- Simple, intuitive interface
- No learning curve required
- Accessible in stressful situations

### NFR4: Reliability
- Must work consistently
- No dependencies on external services
- Fail-safe design

## Technical Requirements

### TR1: Technology Stack
- HTML5 for structure
- CSS3 for styling
- Vanilla JavaScript for functionality

### TR2: Assets
- Self-contained (no external dependencies)
- Audio file embedded or generated
- Minimal file size

### TR3: Browser APIs
- Web Audio API for sound generation
- DOM manipulation for visual effects
