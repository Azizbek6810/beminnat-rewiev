import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [RouterOutlet],
})
export class App {
  protected readonly title = signal('beminnat-rewiev');

  constructor(private $auth: AuthService) {
    $auth.signIn('Azizbek98', '88661024').subscribe(console.log);
  }
}
