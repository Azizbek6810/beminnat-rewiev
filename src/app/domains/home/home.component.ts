import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { environment } from '../../../environments/environment';
import { DITokens } from '../../core/utils/di.tokens';

@Component({
  selector: 'app-home',
  template: `<p>home works!</p>`,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthService, { provide: DITokens.API_ENDPOINT, useValue: 'https://dummyjson.com' }],
})
export class HomeComponent {
  constructor($auth: AuthService) {
    console.log(environment.production, 'production');
    $auth.signIn('test', '123456').subscribe(console.log);
  }
}
