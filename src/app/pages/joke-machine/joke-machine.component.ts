import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-joke-machine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './joke-machine.component.html',
  styleUrls: ['./joke-machine.component.css'],
})
export class JokeMachineComponent {
  categories = ['Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'];
  selectedCategory = 'Programming';
  joke: string | null = null;
  favorites: string[] = [];

  constructor(private http: HttpClient) {
    this.loadFavorites();
  }

  fetchJoke() {
    const url = `https://v2.jokeapi.dev/joke/${this.selectedCategory}?type=single,twopart&blacklistFlags=nsfw,religious,sexist,explicit`;

    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res.type === 'single') {
          this.joke = res.joke;
        } else {
          this.joke = `${res.setup}\n\n${res.delivery}`;
        }
      },
      error: (err) => {
        console.error('Failed to fetch joke', err);
        this.joke = 'Oops. No joke today. The server might be sad.';
      },
    });
  }

  saveFavorite() {
    if (this.joke && !this.favorites.includes(this.joke)) {
      this.favorites.push(this.joke);
      localStorage.setItem('favoriteJokes', JSON.stringify(this.favorites));
    }
  }

  loadFavorites() {
    const saved = localStorage.getItem('favoriteJokes');
    if (saved) {
      this.favorites = JSON.parse(saved);
    }
  }

  clearFavorites() {
    this.favorites = [];
    localStorage.removeItem('favoriteJokes');
  }
}
