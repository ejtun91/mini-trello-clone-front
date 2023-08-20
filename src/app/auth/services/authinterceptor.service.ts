import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loader: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.show();
    const token = localStorage.getItem('token');
    req = req.clone({
      setHeaders: {
        Authorization: token ?? '',
      },
    });
    return next.handle(req).pipe(
      finalize(() => {
        this.loader.hide();
      })
    );
  }
}
