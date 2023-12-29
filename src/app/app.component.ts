import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.jpg" alt="logo"
      width="100" aria-hidden="true">
      <h1>Homes</h1>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'home';
}
