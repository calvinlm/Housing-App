import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousinglocationComponent],
  template: `
    <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
  <app-housinglocation *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housinglocation>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;
    });
    }

  filteredLocationList: HousingLocation[] = [];
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
