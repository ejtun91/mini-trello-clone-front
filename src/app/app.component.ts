import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { SocketService } from './shared/services/socket.service';
import { map } from 'rxjs';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterContentChecked {
  loading$ = this.loader.loading$;
  constructor(
    private authService: AuthService,
    private socketService: SocketService,
    public loader: LoadingService,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    let token = this.authService.getToken();
    token &&
      this.authService.getCurrentUser().subscribe({
        next: (currentUser) => {
          this.socketService.setupSocketConnection(currentUser);
          this.authService.setCurrentUser(currentUser);
        },
        error: (err) => {
          this.authService.setCurrentUser(null);
        },
      });
  }
}
