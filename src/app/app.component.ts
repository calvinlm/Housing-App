import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HousingLocationComponent } from './housinglocation/housinglocation.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HousingLocationComponent, HomeComponent, RouterModule, MatCardModule],
  template: `
  <main>
    <mat-card>
    <mat-card-content>
      <a [routerLink]="['/']">
          <img class="brand-logo" src="/assets/Home.png" alt="logo" aria-hidden="true">
      </a>
      </mat-card-content>
    </mat-card>
    
  </main>
  <section class="content">
      <router-outlet></router-outlet>
    </section>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home-project';
}

