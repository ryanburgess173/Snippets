import { Component } from '@angular/core';

@Component({
  selector: 'null-safe-nav',
  imports: [],
  templateUrl: './null-safe-nav.component.html',
  styleUrl: './null-safe-nav.component.css'
})
export class NullSafeNavComponent {
  user: { profile?: { email?: string } } | undefined = undefined;
  toggle() {
    this.user = this.user ? undefined : { profile: {email: 'a@example.com'} };
  }
}
