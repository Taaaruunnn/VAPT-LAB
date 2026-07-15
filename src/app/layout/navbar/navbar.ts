import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthApiService } from '../../core/services/auth-api';
import { AuthService } from '../../core/services/auth';
import { ThemeService } from '../../core/services/theme';

import {
  LucideAngularModule,
  Shield,
  Search,
  Moon,
  Sun,
  Bell,
  User,
  ChevronDown,
} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './navbar.html',
})
export class Navbar {

  private router = inject(Router);
  private authApi = inject(AuthApiService);
  authService = inject(AuthService);

  themeService = inject(ThemeService);

  dropdownOpen = signal(false);
  notificationsOpen = signal(false);

  readonly Shield = Shield;
  readonly Search = Search;
  readonly Moon = Moon;
  readonly Sun = Sun;
  readonly Bell = Bell;
  readonly User = User;
  readonly ChevronDown = ChevronDown;

  toggleDropdown() {
    this.dropdownOpen.update(value => !value);
  }

  closeDropdown() {
    this.dropdownOpen.set(false);
  }

  toggleNotifications() {
    this.notificationsOpen.update(value => !value);
  }

  logout() {

    this.authApi.logout().subscribe({

      next: () => {

        this.authService.logout();

        this.router.navigate(['/login']);

      },

      error: () => {

        alert('Logout failed');

      }

    });

  }

  @HostListener('document:click')
  onDocumentClick() {

    this.closeDropdown();

    this.notificationsOpen.set(false);

  }

}