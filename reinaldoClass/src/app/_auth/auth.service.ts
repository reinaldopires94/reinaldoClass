import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { UserTokenModel } from '../_share/model/user-token-model';
import { BehaviorSubject, tap } from 'rxjs';
import { IAuthApiToken } from '../_share/Interfaces/iAuthRestApi';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private WEB_KEY: string = `AIzaSyDUGrx7p2gLqHA6JY9PeLvo8WrTurK_th0`;
 private LOGIN_END_POINT: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.WEB_KEY}`
  private tokenExpirationTimer: any;
  isUserLogin: BehaviorSubject<UserTokenModel | any> = new BehaviorSubject<UserTokenModel | any>(null); /**Salvando o Token no model */
  constructor(private http: HttpClient, private router: Router) { }


  signInUser(email: string, password: string) {
    return this.http.post<IAuthApiToken>(this.LOGIN_END_POINT,
      {email: email, password: password, returnSecureToken: true}).pipe(tap(res => {
        this.handleAuthentication(res.email, res.localId, res.idToken, +res.refreshToken);
      }))

  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    /**Criando o token de expiração  ,e mutiplicar por 1000, pois getTime é Segundos e ExpereIN é em milisegundo*/
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const localUserToken = new UserTokenModel(email, userId, token, expirationDate);
    this.isUserLogin.next(localUserToken);
    this.autoLogout(expiresIn * 1000); //tranformando em Milisegundo
    localStorage.setItem('userData', JSON.stringify(localUserToken)); //Quardaremos em LocalStorage um String com todos os Dados.
  }


  autoLogin() {
    const localUserStorage: { email: string; id: string; _token: string; _tokenExpirationDate: string; } = JSON.parse(localStorage.getItem('userData') as string);
    if (!localUserStorage) {
      return;
    }
    const localUserLogin = new UserTokenModel(localUserStorage.email, localUserStorage.id, localUserStorage._token, new Date(localUserStorage._tokenExpirationDate));
    if (localUserLogin.token) {
      this.isUserLogin.next(localUserLogin);
      /**
       * aqui precisamos calcular o tempo restante do TOKEN
       */
      const expirationDuration = new Date(localUserStorage._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }

  }

  autoLogout(expirationDate: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, expirationDate);
  }

  logOut() {
    this.isUserLogin.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/auth']);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

}
