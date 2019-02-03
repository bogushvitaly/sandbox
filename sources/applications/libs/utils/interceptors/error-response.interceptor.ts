import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DbContextService } from '../services/db-context.service';

@Injectable()
export class ErrResponseInterceptor implements HttpInterceptor {
  constructor(public toasts: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            console.log(`Error: ${err.status} is detected.`);
            const req = request.clone();
            if (err.status === 0 && (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE')) {
              this.toasts.info(
                'Network connection is not available. This operation will be retried when network is available.'
              );
              return new Observable(() => {});
            }
          }
        }
      )
    );
  }
}
