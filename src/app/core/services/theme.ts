import { Injectable, effect, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  theme = signal<Theme>(
    (localStorage.getItem('theme') as Theme) || 'dark'
  );

  constructor() {

    effect(() => {

      const currentTheme = this.theme();

      document.documentElement.classList.toggle(
        'dark',
        currentTheme === 'dark'
      );

      localStorage.setItem('theme', currentTheme);

    });

  }

  toggleTheme() {

    this.theme.update(theme =>
      theme === 'dark' ? 'light' : 'dark'
    );

  }

}