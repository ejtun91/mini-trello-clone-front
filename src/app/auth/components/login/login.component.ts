import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  errorMessage: string | null = null;
  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private socketService: SocketService
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    this.authService.login(this.form.value).subscribe({
      next: (currentUser) => {
        this.authService.setToken(currentUser);
        this.socketService.setupSocketConnection(currentUser);
        this.authService.setCurrentUser(currentUser);
        this.errorMessage = null;
        this.router.navigateByUrl('/');
      },
      error: (error: HttpErrorResponse) => {
        console.log('err', error.error);
        this.errorMessage = error.error.emailOrPassword;
      },
    });
  }
}
