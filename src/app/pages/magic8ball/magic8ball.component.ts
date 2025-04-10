import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-magic8ball',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './magic8ball.component.html',
  styleUrls: ['./magic8ball.component.css'],
})
export class Magic8ballComponent {
  answers: string[] = [
    'Have you tried turning it off and on again?',
    'StackOverflow holds your destiny.',
    'Rubber duck debugging will save you.',
    'Yes, but it’s a terrible idea.',
    'The code compiles... for now.',
    'Check the semicolon.',
    'You will find the bug in 3 hours.',
    'Clear the cache and believe.',
    'Blame it on the intern.',
    'Your IDE is lying to you.',
    'Try caffeine and pray.',
    "You're just one semicolon away from greatness.",
    'Blame the framework.',
    "It's not a bug, it's an undocumented prophecy.",
    'Your next commit message will be a cry for help.',
    'Trust no semicolon.',
    'Ask again after a snack break.',
    'The sprint is an illusion. Time is a loop.',
    'Reboot reality. Then retry.',
  ];

  currentAnswer = '';

  shakeBall() {
    const index = Math.floor(Math.random() * this.answers.length);
    this.currentAnswer = this.answers[index];
  }

  copyAnswer() {
    if (this.currentAnswer) {
      navigator.clipboard.writeText(this.currentAnswer);
      alert('Copied advice to clipboard!');
    }
  }
}
