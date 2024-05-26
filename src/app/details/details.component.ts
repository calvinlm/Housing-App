import { Component, NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule,FormGroupDirective,NgForm,Validators, } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
    providers: [
      {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
    ],
  template: `
    <mat-card>
      <mat-card-content>
      <img class="listing-photo" [src]="housingLocation?.photo"
        alt="Exterior photo of {{housingLocation?.name}}"/>
      <mat-card-header>
        <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      </mat-card-header>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form class="example-form" [formGroup]="applyForm" (ngSubmit)="submitApplication()">
          <mat-form-field class="example-full-width">
            <mat-label for="first-name">First Name</mat-label>
            <input matInput id="first-name" type="text" formControlName="firstName">
          </mat-form-field>
          <mat-form-field class="example-full-width">
            <mat-label for="last-name">Last Name</mat-label>
            <input matInput id="last-name" type="text" formControlName="lastName">
          </mat-form-field>
          <mat-form-field class="example-full-width">
            <mat-label for="email">Email</mat-label>
            <input matInput id="email" type="email" formControlName="email">
          </mat-form-field>
          <mat-card-actions>
        <button mat-flat-button color= "primary" type="submit" class="primary" >Apply now</button>
        </mat-card-actions>
        </form>
      </section>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./details.component.css'],
})

export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication() {

    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}

