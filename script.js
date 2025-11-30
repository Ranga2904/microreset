// MicroReset - Main Application Logic
const App = {
  currentMood: null,
  currentReset: null,
  timerInterval: null,
  timerDuration: 0,
  timerRemaining: 0,
  prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  
  screens: {
    splash: document.getElementById('splash-screen'),
    mood: document.getElementById('mood-screen'),
    reset: document.getElementById('reset-screen')
  },
  
  elements: {
    moodBtns: document.querySelectorAll('.mood-btn'),
    backBtn: document.getElementById('back-to-moods'),
    startBtn: document.getElementById('start-timer'),
    playBtn: document.getElementById('play-audio'),
    tryAnotherBtn: document.getElementById('try-another'),
    showInfoBtn: document.getElementById('show-info'),
    closeModalBtn: document.getElementById('close-modal'),
    modal: document.getElementById('info-modal'),
    resetTitle: document.getElementById('reset-title'),
    resetText: document.getElementById('reset-text'),
    timerDisplay: document.getElementById('timer-display'),
    timerBar: document.getElementById('timer-bar')
  },
  
  init() {
    AudioController.init();
    this.bindEvents();
    this.showSplash();
  },
  
  bindEvents() {
    this.elements.moodBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mood = btn.dataset.mood;
        this.selectMood(mood);
      });
    });
    
    this.elements.backBtn.addEventListener('click', () => {
      this.goToMoodScreen();
    });
    
    this.elements.startBtn.addEventListener('click', () => {
      this.toggleTimer();
    });
    
    this.elements.playBtn.addEventListener('click', () => {
      if (this.currentReset) {
        AudioController.toggle(this.currentReset.text);
      }
    });
    
    this.elements.tryAnotherBtn.addEventListener('click', () => {
      this.getNewReset();
    });
    
    this.elements.showInfoBtn.addEventListener('click', () => {
      this.showModal();
    });
    
    this.elements.closeModalBtn.addEventListener('click', () => {
      this.hideModal();
    });
    
    this.elements.modal.addEventListener('click', (e) => {
      if (e.target === this.elements.modal) {
        this.hideModal();
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideModal();
      }
    });
  },
  
  showSplash() {
    setTimeout(() => {
      this.switchScreen('mood');
    }, 1500);
  },
  
  switchScreen(screenName) {
    Object.values(this.screens).forEach(screen => {
      if (screen) {
        screen.classList.remove('active');
      }
    });
    
    setTimeout(() => {
      const targetScreen = this.screens[screenName];
      if (targetScreen) {
        targetScreen.classList.add('active');
      }
    }, 100);
  },
  
  selectMood(mood) {
    this.currentMood = mood;
    this.getNewReset();
    this.switchScreen('reset');
  },
  
  getNewReset() {
    this.stopTimer();
    AudioController.stop();
    
    const moodResets = RESETS[this.currentMood];
    if (!moodResets || moodResets.length === 0) {
      console.error('No resets found for mood:', this.currentMood);
      return;
    }
    
    let newReset;
    do {
      const randomIndex = Math.floor(Math.random() * moodResets.length);
      newReset = moodResets[randomIndex];
    } while (moodResets.length > 1 && newReset === this.currentReset);
    
    this.currentReset = newReset;
    this.displayReset();
  },
  
  displayReset() {
    const reset = this.currentReset;
    
    this.elements.resetTitle.textContent = reset.title;
    this.elements.resetText.textContent = reset.text;
    
    this.timerDuration = reset.duration;
    this.timerRemaining = reset.duration;
    this.updateTimerDisplay();
    
    this.elements.timerBar.style.width = '100%';
    this.elements.startBtn.textContent = 'Start Reset';
    this.elements.startBtn.disabled = false;
    
    const resetScreen = this.screens.reset;
    resetScreen.classList.remove('timer-running', 'timer-complete');
    
    this.elements.resetText.style.animation = 'none';
    setTimeout(() => {
      this.elements.resetText.style.animation = '';
    }, 10);
  },
  
  toggleTimer() {
    if (this.timerInterval) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  },
  
  startTimer() {
    if (this.timerRemaining <= 0) {
      this.timerRemaining = this.timerDuration;
    }
    
    this.elements.startBtn.textContent = 'Pause';
    this.screens.reset.classList.add('timer-running');
    this.screens.reset.classList.remove('timer-complete');
    
    this.timerInterval = setInterval(() => {
      this.timerRemaining--;
      this.updateTimerDisplay();
      
      const progress = (this.timerRemaining / this.timerDuration) * 100;
      this.elements.timerBar.style.width = `${progress}%`;
      
      if (this.timerRemaining <= 0) {
        this.completeTimer();
      }
    }, 1000);
  },
  
  pauseTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.elements.startBtn.textContent = 'Resume';
    this.screens.reset.classList.remove('timer-running');
  },
  
  stopTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.timerRemaining = this.timerDuration;
    this.screens.reset.classList.remove('timer-running', 'timer-complete');
  },
  
  completeTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    
    this.screens.reset.classList.remove('timer-running');
    this.screens.reset.classList.add('timer-complete');
    
    this.elements.startBtn.textContent = 'Reset Complete';
    this.elements.startBtn.disabled = true;
    
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }
  },
  
  updateTimerDisplay() {
    const minutes = Math.floor(this.timerRemaining / 60);
    const seconds = this.timerRemaining % 60;
    this.elements.timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  },
  
  goToMoodScreen() {
    this.stopTimer();
    AudioController.stop();
    this.currentReset = null;
    this.switchScreen('mood');
  },
  
  showModal() {
    this.elements.modal.classList.add('active');
  },
  
  hideModal() {
    this.elements.modal.classList.remove('active');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
