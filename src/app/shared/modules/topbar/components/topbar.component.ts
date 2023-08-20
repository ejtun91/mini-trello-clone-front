import { Component } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from '../../../../auth/types/currentUser.interface';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  user$: Observable<CurrentUserInterface> | undefined;
  constructor(private authService: AuthService, private router: Router) {
    this.user$ = this.authService.getCurrentUser();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
