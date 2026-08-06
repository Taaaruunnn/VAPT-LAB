import { Component,HostListener,inject,signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth';
import { Walkthrough } from '../../core/models/walkthrough';


@Component({
  selector: 'app-labs',
  imports: [RouterLink],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
})
export class Labs {
  
  walkthrough = signal<Walkthrough | null>(null);
  popupOpen = signal(false);
  authService = inject(AuthService);
  authOpen = signal(true);

webOpen = signal(true);

serverOpen = signal(false);

apiOpen = signal(false);
weakLoginGuide: Walkthrough = {

  title: 'Weak Login',

  description:
    `This lab demonstrates insecure authentication caused by weak usernames and
     predictable passwords, and the absence of common security controls such
     as account lockout, rate limiting, and password complexity enforcement.
     The objective is to understand how attackers exploit weak login systems
     to gain unauthorized access.`,

  objective:
    '• Learn how weak authentication works.',

  steps: [

    '1. Open the Login page.',

    '2. Enter one of the provided demo credentials.',

    '3. Observe that the application authenticates the user without enforcing password complexity.',

    '4. Log out and attempt multiple incorrect passwords.',

    '5. Notice that the application does not temporarily lock the account.',

    '6. Continue making login attempts.',

    '7. Observe that there is no rate limiting, CAPTCHA or delay between failed attempts.',

    '8. Successfully authenticate using valid credentials.',

    '9. Think about how an attacker could automate this process using a brute-force tool.',

    '10. Try NoSQL injection.'

  ]

};
reflectedGuide: Walkthrough = {

  title: 'Reflected Cross-Site Scripting (XSS)',

  description: `
This lab demonstrates Reflected Cross-Site Scripting (Reflected XSS),

Unlike Stored XSS, the malicious payload is not saved in the database.
Instead,Reflected XSS is commonly found in search pages, error messages,
login forms, and other locations where user input is displayed directly
to the browser.

In this lab, the application's search feature intentionally reflects
user input without proper sanitization, allowing JavaScript supplied by
an attacker to execute in the victim's browser.
`,

  objective:
    `• Understand how Reflected XSS works.
• Learn the difference between Stored and Reflected XSS.
• Observe how untrusted input becomes executable JavaScript.
• Understand why input validation and output encoding are essential.
• Learn how attackers deliver XSS payloads through links and URLs.`,

  steps: [

    '1. Open the application dashboard.',

    '2. Click the Walkthrough button if you need these instructions again.',

    '3. Locate the global search bar in the navigation bar.',

    '4. Copy the following payload: <img src=x onerror=alert("Reflected XSS")>',

    '5. Paste the payload into the search bar and press Enter to submit the search request.',

    '6. Observe that the application reflects your input back into the page.',

    '7. If the application is intentionally vulnerable, the browser executes the injected JavaScript.',

    '8. Refresh the page to restore the normal search interface.',

    '9. Compare this behaviour with the Stored XSS lab and notice that nothing is stored permanently.',

    '10. Think about how an attacker could hide this payload inside a phishing URL and trick a victim into opening it.',

    "11. Consider what information could be stolen if arbitrary JavaScript executes inside another user's browser.",

    '12. Identify which secure coding practice would have prevented this vulnerability.'

  ]

};
ssrfGuide: Walkthrough = {

  title: 'SSRF',

  description:
    'Force the backend server to request arbitrary URLs.',

  objective:
    'Learn how SSRF exposes internal resources.',

  payload:
    'http://localhost:5000/api/internal/secret',

  steps: [

    'Open SSRF Lab.',

    'Paste the URL.',

    'Click Fetch.',

    'Observe the server response.'

  ]

};
openWalkthrough(data: Walkthrough) {

  this.walkthrough.set(data);

}
closeWalkthrough() {

  this.walkthrough.set(null);

}
@HostListener('document:click')
onDocumentClick() {
   this.closePopup();
  this.closeWalkthrough();

}
openPopup() {
  this.popupOpen.set(true);
}
closePopup() {
  this.popupOpen.set(false);
}

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
