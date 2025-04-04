import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meme-battle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meme-battle.component.html',
  styleUrls: ['./meme-battle.component.css'],
})
export class MemeBattleComponent {
  memes = [
    'meme1.jpg',
    'meme2.jpg',
    'meme3.jpg',
    'meme4.jpg',
    'meme5.jpg',
    'meme6.jpg',
    'meme7.jpg',
    'meme8.jpg',
    'meme9.jpg',
    'meme10.jpg',
    'meme11.jpg',
    'meme12.jpg',
    'meme13.jpg',
  ];
  round = 0;
  currentChampion = 0;
  nextChallenger = 1;
  usedMemes: Set<number> = new Set(); //  track which memes we've already shown
  showChampion = false;

  constructor() {
    this.usedMemes.add(this.currentChampion);
    this.usedMemes.add(this.nextChallenger);
  }

  vote(winner: number) {
    this.round++;

    // If it's the last round, show the final champ
    if (this.usedMemes.size >= this.memes.length) {
      this.currentChampion = winner;
      this.showChampion = true;
      return;
    }

    // The winner becomes the new champ
    this.currentChampion = winner;

    // Find a new unused challenger
    let newChallenger: number;
    const available = this.memes
      .map((_, i) => i)
      .filter((i) => !this.usedMemes.has(i) && i !== this.currentChampion);

    if (available.length === 0) {
      this.showChampion = true;
      return;
    }

    newChallenger = available[Math.floor(Math.random() * available.length)];
    this.nextChallenger = newChallenger;
    this.usedMemes.add(newChallenger);
  }
}
