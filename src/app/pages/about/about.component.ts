import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeroComponent } from './components/about-hero/about-hero.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import {TeamComponent} from "./components/team/team.component"
import {ValuesComponent} from "./components/values/values.component"



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    AboutHeroComponent,
    TimelineComponent,
    TeamComponent,
    ValuesComponent,
  ],
  template: `
    <div class="about-page">
      <app-about-hero></app-about-hero>
      <app-timeline></app-timeline>
      <app-values></app-values>
      <app-team></app-team>
    </div>
  `,
  styles: [`
    .about-page {
      background: linear-gradient(180deg, #0a0f1c 0%, #0d1326 100%);
      min-height: 100vh;
    }
  `]
})
export class AboutComponent {}