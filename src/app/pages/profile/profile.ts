import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserService } from '../../core/services/user';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html'
})
export class Profile implements OnInit {

  private route = inject(ActivatedRoute);

  private userService = inject(UserService);

  user = signal<any>(null);
ngOnInit() {

  console.log('Profile component loaded');

  const id = this.route.snapshot.paramMap.get('id');

  console.log('Route ID:', id);

  if (!id) {
    console.log('No ID found');
    return;
  }

  this.userService.getUser(id).subscribe({

    next: (data) => {
      console.log('User received:', data);
      this.user.set(data);
    },

    error: (err) => {
      console.error(err);
    }

  });

}

}