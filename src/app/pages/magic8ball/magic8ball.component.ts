import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-magic8ball',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './magic8ball.component.html',
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
    'Turn it off and on again. Seriously.',
    'StackOverflow is your spirit guide.',
    "You're doing great. The code? Not so much.",
    'That bug is a feature now.',
    "You're just one semicolon away from greatness.",
    'Ask your rubber duck, it knows.',
    'Blame the framework.',
    "It worked yesterday, didn't it?",
    'Try caffeine and pray.',
    'Maybe… just maybe… it’s a typo.',
    'Turn it off and on again. Spiritually.',
    'You shall find wisdom on page 9 of StackOverflow.',
    'Your rubber duck knows the answer. Ask it.',
    "It's not a bug, it's an undocumented prophecy.",
    'Clear cache. Clean soul.',
    'Your next commit message will be a cry for help.',
    'Beware the legacy code you inherit.',
    'Trust no semicolon.',
    'The error lies between the keyboard and chair.',
    'Try coffee, then try again.',
    'Ask again after a snack break.',
    'The sprint is an illusion. Time is a loop.',
    'Reboot reality. Then retry.',
  ];
  copyAnswer() {
    if (this.currentAnswer) {
      navigator.clipboard.writeText(this.currentAnswer);
      alert('Copied advice to clipboard!');
    }
  }

  currentAnswer = '';

  shakeBall() {
    const index = Math.floor(Math.random() * this.answers.length);
    this.currentAnswer = this.answers[index];
  }
}
