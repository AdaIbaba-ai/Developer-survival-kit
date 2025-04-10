import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alibi-generator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alibi-generator.component.html',
  styleUrls: ['./alibi-generator.component.css'],
})
export class AlibiGeneratorComponent {
  excuses: string[] = [
    'My cat walked on the keyboard and deployed to production.',
    'I got trapped in a merge conflict.',
    'I thought today was Sunday.',
    'I was debugging an existential crisis.',
    'The Wi-Fi was allergic to my code.',
    "I accidentally replaced 'main' with 'meme'.",
    'Git refused to commit emotionally.',
    'The meeting invite got lost in the blockchain.',
    'I was waiting for AI to do it.',
    'I deleted system32. Again.',
    'My cat deleted the production database.',
    'The code ran away from me.',
    'I was debugging my childhood trauma.',
    'A bug bribed me to ignore it.',
    'My coffee machine crashed my Wi-Fi.',
    'The meeting invite got sent to /dev/null.',
    'I was on a call with Elon. NDA stuff.',
    'I accidentally deployed the memes.',
    "My IDE joined a union. It's on strike.",
    'I was trapped in an infinite loop of procrastination.',
  ];

  copyExcuse() {
    if (this.excuse) {
      navigator.clipboard.writeText(this.excuse);
      alert('Copied excuse to clipboard!');
    }
  }

  excuse = '';

  generateExcuse() {
    const index = Math.floor(Math.random() * this.excuses.length);
    this.excuse = this.excuses[index];
  }
}
