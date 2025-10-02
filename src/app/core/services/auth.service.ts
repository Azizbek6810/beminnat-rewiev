import { Inject, inject, Injectable } from '@angular/core';
import { DITokens } from '../utils/di.tokens';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(DITokens.API_ENDPOINT) private endpoint: string) {}
  private $base = inject(BaseService);

  signIn(username: string, password: string) {
    return this.$base.post(`${this.endpoint}/auth/login`, {
      username: username,
      password: password,
    });
  }

  signUp(username: string, password: string, email: string) {
    return this.$base.post(`${this.endpoint}/auth/register`, {
      username: username,
      password: password,
      email: email,
    });
  }
}
