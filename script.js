// State management
let isAlertActive = false;
let audioContext = null;
let oscillator = null;
let gainNode = null;

// DOM elements
const helpBtn = document.getElementById('help-btn');
const stopBtn = document.getElementById('stop-btn');
const message = document.getElementById('message');
const flashOverlay = document.getElementById('flash-overlay');

// Initialize audio context on user interaction
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Create and play alert sound
function playAlertSound() {
    initAudio();
    
    // Create oscillator for siren sound
    oscillator = audioContext.createOscillator();
    gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Siren effect: alternating frequencies
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    
    // Create siren pattern
    let time = audioContext.currentTime;
    for (let i = 0; i < 100; i++) {
        oscillator.frequency.setValueAtTime(800, time + i * 0.5);
        oscillator.frequency.setValueAtTime(400, time + i * 0.5 + 0.25);
    }
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    
    oscillator.start();
}

// Stop alert sound
function stopAlertSound() {
    if (oscillator) {
        oscillator.stop();
        oscillator = null;
    }
    if (gainNode) {
        gainNode = null;
    }
}

// Activate alert
function activateAlert() {
    if (isAlertActive) return;
    
    isAlertActive = true;
    
    // Visual effects
    flashOverlay.classList.add('flashing');
    helpBtn.classList.add('active');
    message.classList.remove('hidden');
    stopBtn.classList.remove('hidden');
    
    // Audio alert
    playAlertSound();
    
    // Change button text
    helpBtn.textContent = 'ALERT ACTIVE';
    helpBtn.disabled = true;
}

// Deactivate alert
function deactivateAlert() {
    if (!isAlertActive) return;
    
    isAlertActive = false;
    
    // Stop visual effects
    flashOverlay.classList.remove('flashing');
    helpBtn.classList.remove('active');
    message.classList.add('hidden');
    stopBtn.classList.add('hidden');
    
    // Stop audio
    stopAlertSound();
    
    // Reset button
    helpBtn.textContent = 'HELP!';
    helpBtn.disabled = false;
}

// Event listeners
helpBtn.addEventListener('click', activateAlert);
stopBtn.addEventListener('click', deactivateAlert);

// Keyboard shortcut: Space or Enter to activate, Escape to stop
document.addEventListener('keydown', (e) => {
    if ((e.code === 'Space' || e.code === 'Enter') && !isAlertActive) {
        e.preventDefault();
        activateAlert();
    } else if (e.code === 'Escape' && isAlertActive) {
        e.preventDefault();
        deactivateAlert();
    }
});
