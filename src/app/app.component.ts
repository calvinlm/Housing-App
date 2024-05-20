import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HousinglocationComponent } from './housinglocation/housinglocation.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HousinglocationComponent, HomeComponent, RouterModule],
  template: `
    <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/windows-10-logo-svgrepo-com.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home-project';
}