import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    FeaturesComponent,
    PartnersComponent,
    TestimonialsComponent
  ],
  template: `
    <app-hero-section></app-hero-section>
    <app-features></app-features>
    <app-partners></app-partners>
    <app-testimonials></app-testimonials>
  `
})
export class HomeComponent {}