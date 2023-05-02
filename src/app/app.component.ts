import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideFooter = false;
  hideNavbar = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        this.hideFooter = url === '/signup' || url === '/dashboard' || url === '/signin';
        this.hideNavbar = url === '/dashboard';
      }
    });
  }
}



