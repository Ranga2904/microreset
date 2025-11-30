// MicroReset Library - All 35 Resets
const RESETS = {
  anxious: [
    {
      id: "anx-1",
      title: "The 4-7-8 Breath",
      duration: 60,
      text: "Place one hand on your chest. Breathe in through your nose for 4 counts. Hold for 7. Exhale slowly through your mouth for 8. Repeat 3 times. Feel your hand rise and fall."
    },
    {
      id: "anx-2",
      title: "The 5-4-3-2-1 Ground",
      duration: 75,
      text: "Name 5 things you can see. 4 things you can touch. 3 things you can hear. 2 things you can smell. 1 thing you can taste. Say them out loud or in your head."
    },
    {
      id: "anx-3",
      title: "The Hand Clench",
      duration: 60,
      text: "Make tight fists with both hands. Squeeze as hard as you can. Count to 10. Release slowly. Notice the difference. Repeat twice."
    },
    {
      id: "anx-4",
      title: "The Cold Splash",
      duration: 45,
      text: "Go to a sink. Splash cold water on your face 3 times. Pat dry. Feel the temperature shift. That's your nervous system resetting."
    },
    {
      id: "anx-5",
      title: "The Hum",
      duration: 60,
      text: "Close your mouth. Hum any note for as long as your exhale lasts. Feel the vibration in your chest and head. Do this 4 times. Focus only on the buzz."
    }
  ],
  
  sad: [
    {
      id: "sad-1",
      title: "The Permission Cry",
      duration: 90,
      text: "Set a timer for 90 seconds. Let yourself cry, sob, or sit in sadness without fixing it. When the timer ends, take one deep breath and say: 'I felt that. And I'm still here.'"
    },
    {
      id: "sad-2",
      title: "The Tiny Joy Hunt",
      duration: 60,
      text: "Find one tiny thing that isn't terrible right now. The warmth of your mug. The softness of your sleeve. A bird outside. Say it out loud: 'Right now, [this] is okay.'"
    },
    {
      id: "sad-3",
      title: "The Playlist Skip",
      duration: 75,
      text: "Open your music app. Play a song you loved when you were 13. Don't analyze. Just listen for 75 seconds. Let it hit you however it hits you."
    },
    {
      id: "sad-4",
      title: "The Sun Sit",
      duration: 90,
      text: "Find a window or go outside. Sit in direct sunlight for 90 seconds. Close your eyes. Feel the warmth on your skin. Don't think. Just absorb."
    },
    {
      id: "sad-5",
      title: "The Voice Memo",
      duration: 60,
      text: "Open voice memos. Record yourself saying one true thing about how you feel right now. Don't listen back. Just let it exist outside your head."
    }
  ],
  
  angry: [
    {
      id: "ang-1",
      title: "The Ice Cube Grip",
      duration: 60,
      text: "Hold an ice cube in your hand. Squeeze it. Feel the cold, the sting, the melt. Focus only on the sensation. When it's too much, let it go. Breathe."
    },
    {
      id: "ang-2",
      title: "The Rage Letter (Unsent)",
      duration: 90,
      text: "Open your notes app. Write one raw, uncensored sentence about what's making you furious. Don't edit. Don't send. Just let it exist. Then close the app."
    },
    {
      id: "ang-3",
      title: "The Pillow Punch",
      duration: 45,
      text: "Find a pillow or couch cushion. Hit it 10 times as hard as you can. Use your fists, your palms, whatever. Count each hit. Then stop. Shake out your arms."
    },
    {
      id: "ang-4",
      title: "The Loud Exhale",
      duration: 60,
      text: "Stand up. Take a huge breath in. Exhale through your mouth as loudly as possible. Make noise. Sound stupid. Do it 5 times. Louder each time."
    },
    {
      id: "ang-5",
      title: "The Rip",
      duration: 45,
      text: "Find a piece of scrap paper. Rip it into tiny pieces. Go slow or go fast. Focus on the sound and the tear. When it's confetti, throw it away. Done."
    }
  ],
  
  tired: [
    {
      id: "tir-1",
      title: "The 10-Breath Lie-Down",
      duration: 75,
      text: "Lie flat on the floor, couch, or bed. Close your eyes. Count 10 slow breaths. Don't try to relax. Just count. If you lose track, start over. That's it."
    },
    {
      id: "tir-2",
      title: "The Face Massage",
      duration: 60,
      text: "Use your fingertips. Press circles into your temples for 15 seconds. Then your jaw. Then your forehead. Firm pressure. Slow circles. No rush."
    },
    {
      id: "tir-3",
      title: "The Caffeine Pause",
      duration: 90,
      text: "Make or grab any drink. Hold it with both hands. Feel the temperature. Take one sip. Hold it in your mouth for 3 seconds. Swallow slowly. Repeat 4 times."
    },
    {
      id: "tir-4",
      title: "The Legs-Up",
      duration: 90,
      text: "Lie on your back. Put your legs up against a wall or on a chair. Let gravity do the work. Close your eyes. Stay for 90 seconds. Don't move."
    },
    {
      id: "tir-5",
      title: "The Stretch & Yawn",
      duration: 45,
      text: "Stand up. Reach your arms overhead as high as possible. Fake yawn 3 times. Real or fake doesn't matter. Stretch and yawn at the same time. Then drop your arms."
    }
  ],
  
  stuck: [
    {
      id: "stu-1",
      title: "The 2-Minute Ugly Start",
      duration: 90,
      text: "Do the thing badly for 2 minutes. Messy email. Ugly first draft. Terrible first rep. No quality. Just motion. Timer starts now."
    },
    {
      id: "stu-2",
      title: "The Coin Flip",
      duration: 30,
      text: "Find a coin. Assign each choice to heads or tails. Flip it. Whatever it lands on, notice how you feel. Relieved? Disappointed? That's your answer."
    },
    {
      id: "stu-3",
      title: "The 5-Item List",
      duration: 60,
      text: "Open your notes. Write exactly 5 things you could do right now. No order. No judging. Just 5 options. Pick one. Do it for 2 minutes after this timer."
    },
    {
      id: "stu-4",
      title: "The Body Shake",
      duration: 45,
      text: "Stand up. Shake your whole body like a wet dog. Arms, legs, head, everything. Look ridiculous. Do it for 30 seconds. Then stop and take one breath."
    },
    {
      id: "stu-5",
      title: "The Question Flip",
      duration: 60,
      text: "Instead of 'What should I do?' ask 'What would feel slightly less heavy right now?' Answer that. Even if it's weird. Even if it's small. Do that thing."
    }
  ],
  
  lonely: [
    {
      id: "lon-1",
      title: "The Self-Text",
      duration: 60,
      text: "Open your messages. Send yourself one kind sentence as if a friend sent it to you. Read it out loud. Example: 'Hey, I see you. You're doing your best.'"
    },
    {
      id: "lon-2",
      title: "The Comfort Object",
      duration: 75,
      text: "Find something soft. A blanket, hoodie, pillow, pet. Hold it or wrap yourself in it. Close your eyes. Feel the texture. Stay for 75 seconds."
    },
    {
      id: "lon-3",
      title: "The Old Photo Scroll",
      duration: 90,
      text: "Open your phone's photo library. Scroll back 1 year. Find one photo that made you smile. Look at it for 30 seconds. Remember you were there. You existed."
    },
    {
      id: "lon-4",
      title: "The Voicemail Listen",
      duration: 60,
      text: "If you have an old voicemail from someone you love, listen to it. If not, imagine their voice saying your name. Hear it clearly. Let it land."
    },
    {
      id: "lon-5",
      title: "The Window Watch",
      duration: 90,
      text: "Go to a window. Watch people, cars, trees, or clouds for 90 seconds. You're alone, but the world is still moving. You're part of it. Even from here."
    }
  ],
  
  numb: [
    {
      id: "num-1",
      title: "The Temperature Shock",
      duration: 60,
      text: "Run your hands under cold water for 30 seconds. Then hot water for 30 seconds. Focus only on the temperature change. Notice the difference. That's feeling."
    },
    {
      id: "num-2",
      title: "The Loud Music",
      duration: 90,
      text: "Put on headphones. Play a song with a beat. Turn it up loud. Don't think. Just feel the bass in your chest. Let it shake something loose."
    },
    {
      id: "num-3",
      title: "The Ice Face",
      duration: 45,
      text: "Fill a bowl with ice water. Dunk your face in for 10 seconds. Come up. Breathe. Do it again. This is called the dive reflex. It wakes you up."
    },
    {
      id: "num-4",
      title: "The Scream in the Car",
      duration: 60,
      text: "If you're near a car, get in. Close the windows. Scream as loud as you can for 5 seconds. Do it 3 times. It doesn't have to mean anything. Just make noise."
    },
    {
      id: "num-5",
      title: "The Spicy Bite",
      duration: 45,
      text: "Find something spicy. Hot sauce, pepper, ginger, wasabi. Take a small bite. Let it burn. Focus on the heat spreading. That's your body talking back to you."
    }
  ]
};
