import { Component,inject,signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth';


@Component({
  selector: 'app-labs',
  imports: [RouterLink],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
})
export class Labs {
  authService = inject(AuthService);
  authOpen = signal(true);

webOpen = signal(true);

serverOpen = signal(false);

apiOpen = signal(false);
toggle(section: string) {

  switch (section) {

    case 'auth':

      this.authOpen.update(v => !v);

      break;

    case 'web':

      this.webOpen.update(v => !v);

      break;

    case 'server':

      this.serverOpen.update(v => !v);

      break;

    case 'api':

      this.apiOpen.update(v => !v);

      break;

  }

}
launchAttack() {

    window.open(

        'http://localhost:8080/attack.html',

        '_blank'

    );

}
}
