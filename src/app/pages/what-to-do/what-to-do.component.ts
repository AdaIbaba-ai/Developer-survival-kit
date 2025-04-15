import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  label: string;
  emoji: string;
  weight: number;
  color: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-what-to-do',
  templateUrl: './what-to-do.component.html',
  styleUrls: ['./what-to-do.component.css'],
})
export class WhatToDoComponent implements AfterViewInit {
  @ViewChild('wheelCanvas') wheelCanvas!: ElementRef<HTMLCanvasElement>;

  tasks: Task[] = [
    { label: 'Coffee Break', emoji: '☕', weight: 8, color: '#fed7aa' },
    { label: 'Snack Attack', emoji: '🍿', weight: 8, color: '#fde68a' },
    { label: 'Cat Videos', emoji: '🐱', weight: 8, color: '#a5f3fc' },
    { label: 'Fix a Bug', emoji: '🐛', weight: 1, color: '#000000' },

    { label: 'Stretch It Out', emoji: '🧘', weight: 8, color: '#fbcfe8' },
    { label: 'Water Refill', emoji: '💧', weight: 8, color: '#c7d2fe' },
    { label: 'Office Gossip', emoji: '🙊', weight: 8, color: '#f9a8d4' },
    { label: 'Code Review', emoji: '🛠', weight: 1, color: '#000000' },

    { label: 'Mindful Meditation', emoji: '🧠', weight: 8, color: '#fde68a' },
    { label: 'Watch YouTube', emoji: '📺', weight: 8, color: '#fecaca' },
    { label: 'Check Socials', emoji: '📱', weight: 8, color: '#bbf7d0' },
    { label: 'Refactor Legacy Code', emoji: '🔧', weight: 1, color: '#000000' },
  ];

  slices: {
    startAngle: number;
    endAngle: number;
    label: string;
    emoji: string;
    color: string;
  }[] = [];

  totalWeight = 0;
  currentRotation = 0;
  isSpinning = false;
  selectedTask: Task | null = null;

  ngAfterViewInit() {
    this.setupSlices();
    this.drawWheel();
  }

  setupSlices() {
    this.totalWeight = this.tasks.reduce((sum, t) => sum + t.weight, 0);

    let startAngle = 0;
    for (const task of this.tasks) {
      const sliceAngle = 360 * (task.weight / this.totalWeight);
      const endAngle = startAngle + sliceAngle;
      this.slices.push({
        startAngle,
        endAngle,
        label: task.label,
        emoji: task.emoji,
        color: task.color,
      });
      startAngle = endAngle;
    }
  }

  drawWheel() {
    const canvas = this.wheelCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = canvas.width;
    const center = size / 2;

    ctx.clearRect(0, 0, size, size);

    this.slices.forEach((slice) => {
      const startRadians = (slice.startAngle * Math.PI) / 180;
      const endRadians = (slice.endAngle * Math.PI) / 180;

      // Draw slice
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, center, startRadians, endRadians);
      ctx.fillStyle = slice.color;
      ctx.fill();
      ctx.closePath();

      // Draw text
      const midAngle = (startRadians + endRadians) / 2;
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(midAngle);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = slice.color === '#000000' ? '#ffffff' : '#1f2937';
      ctx.font = 'bold 20px "Quicksand", sans-serif';

      const text = `${slice.emoji} ${slice.label}`;
      ctx.fillText(text, center * 0.55, 0);
      ctx.restore();
    });
  }

  spinWheel() {
    if (this.isSpinning) return;
    this.isSpinning = true;
    this.selectedTask = null;

    const randomIndex = Math.floor(Math.random() * this.slices.length);
    const chosenSlice = this.slices[randomIndex];

    const sliceMid =
      chosenSlice.startAngle +
      (chosenSlice.endAngle - chosenSlice.startAngle) / 2;

    const extraSpins = Math.floor(Math.random() * 3) + 3; // 3..5
    const finalAngle =
      this.currentRotation + 360 * extraSpins + (360 - sliceMid);

    this.currentRotation = finalAngle;

    setTimeout(() => {
      const normalized = ((this.currentRotation % 360) + 360) % 360;
      const pointerAngle = (360 - normalized) % 360;

      const winner = this.slices.find(
        (s) => pointerAngle >= s.startAngle && pointerAngle < s.endAngle
      );
      if (winner) {
        this.selectedTask =
          this.tasks.find((t) => t.label === winner.label) || null;
      }
      this.isSpinning = false;
    }, 4000);
  }
}
