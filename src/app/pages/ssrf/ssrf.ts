import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SsrfService } from '../../core/services/ssrf.service';

@Component({
  selector: 'app-ssrf',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ssrf.html'
})
export class Ssrf {

  private ssrfService = inject(SsrfService);

  url = signal('');

  loading = signal(false);

  result = signal<any>(null);

  error = signal('');

  fetchURL() {

    this.loading.set(true);

    this.error.set('');

    this.ssrfService.fetchURL(this.url()).subscribe({

      next: (response) => {
        console.log(response);
        this.result.set(response);

        this.loading.set(false);

      },

      error: (err) => {
        console.log(err);
        this.error.set(err.error.message);

        this.loading.set(false);

      }

    });

  }

}