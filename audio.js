// MicroReset - Text-to-Speech Audio Module
const AudioController = {
  synth: window.speechSynthesis,
  utterance: null,
  isPlaying: false,
  
  init() {
    if (!this.isSupported()) {
      document.body.classList.add('no-speech');
      console.log('Text-to-speech not supported in this browser');
      return false;
    }
    return true;
  },
  
  isSupported() {
    return 'speechSynthesis' in window;
  },
  
  speak(text) {
    if (!this.isSupported()) return;
    
    this.stop();
    
    this.utterance = new SpeechSynthesisUtterance(text);
    this.utterance.rate = 0.85;
    this.utterance.pitch = 1;
    this.utterance.volume = 1;
    
    const voices = this.synth.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang.startsWith('en') && voice.name.includes('Natural')
    ) || voices.find(voice => 
      voice.lang.startsWith('en-US')
    ) || voices.find(voice => 
      voice.lang.startsWith('en')
    );
    
    if (preferredVoice) {
      this.utterance.voice = preferredVoice;
    }
    
    this.utterance.onstart = () => {
      this.isPlaying = true;
      this.updateButtonState();
    };
    
    this.utterance.onend = () => {
      this.isPlaying = false;
      this.updateButtonState();
    };
    
    this.utterance.onerror = (event) => {
      console.error('Speech error:', event.error);
      this.isPlaying = false;
      this.updateButtonState();
    };
    
    this.synth.speak(this.utterance);
  },
  
  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isPlaying = false;
    this.updateButtonState();
  },
  
  toggle(text) {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.speak(text);
    }
  },
  
  updateButtonState() {
    const playBtn = document.getElementById('play-audio');
    if (playBtn) {
      playBtn.textContent = this.isPlaying ? '⏹ Stop' : '🔊 Listen';
    }
  }
};

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => {
    AudioController.synth.getVoices();
  };
}
