import { Component, signal, computed, inject } from '@angular/core';
import { DashboardCard } from '../../core/models/dashboard-card';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { AuthService } from '../../core/services/auth';
@Component({
  selector: 'app-dashboard',
  imports:[StatCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
authService = inject(AuthService);
  cards = signal<DashboardCard[]>([

    {
      id: 1,
      title: 'Users',
      value: 250,
    },
    

    {
      id: 2,
      title: 'Scans',
      value: 18,
    },

    {
      id: 3,
      title: 'Alerts',
      value: 7,
    },

    {
      id: 4,
      title: 'Sessions',
      value: 42,
    },
    {
      id: 5,
      title: 'Vulnerabilities',
      value: 12,
    },

  ]);
  total = computed(() => {

  return this.cards().reduce((sum, card) => {

    return sum + card.value;

  }, 0);

});
  increaseUsers() {

  this.cards.update((currentCards) => {

    return currentCards.map((card) => {

      if (card.title === 'Users') {

        return {

          ...card,

          value: card.value + 1,

        };

      }

      return card;

    });

  });
  

}
decreaseUsers() {

  this.cards.update((currentCards) => {

    return currentCards.map((card) => {

      if (card.title === 'Users') {

        return {

          ...card,

          value: card.value - 1,

        };

      }

      return card;

    });

  });
  

}

}