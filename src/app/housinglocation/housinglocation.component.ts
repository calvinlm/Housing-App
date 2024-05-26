import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule
  ],
  template: `
  <section class="listing">
  <mat-card class="example-card">
  <img mat-card-image class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
  <mat-card-content>
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </button>
  </mat-card-actions>
</mat-card>
  </section>
`,
  styleUrls: ['./housinglocation.component.css'],
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}