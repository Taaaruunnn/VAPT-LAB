import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SsrfService } from '../../core/services/ssrf.service';
import {
  LucideAngularModule,
  ShieldAlert,
  Globe,
  Server,
  Link,
  ArrowRight,
  BadgeCheck,
  Clock3,
  FileJson,
  CircleAlert,
  Lightbulb
} from 'lucide-angular';
@Component({
  selector: 'app-ssrf',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './ssrf.html'
})
export class Ssrf {
readonly ShieldAlert = ShieldAlert;
readonly FileJson = FileJson;
readonly Globe = Globe;
readonly Server = Server;
readonly Link = Link;
readonly ArrowRight = ArrowRight;
readonly BadgeCheck = BadgeCheck;
readonly Clock3 = Clock3;
readonly CircleAlert = CircleAlert;
readonly Lightbulb = Lightbulb;

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