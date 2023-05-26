import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, exhaustMap, take } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.isUserLogin.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
             return next.handle(req);
        }
        /**Clonando o request , pois original não pode ser SETADO, é IMUTÁVEL */
        const modifiedRequest = req.clone(
          {
            params: new HttpParams().set('auth', user.token)
          }
        );
        return next.handle(modifiedRequest);

      })

     )

    }



}
