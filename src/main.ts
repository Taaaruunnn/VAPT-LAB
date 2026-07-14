import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
const savedTheme = localStorage.getItem('theme') ?? 'dark';

if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
}
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
