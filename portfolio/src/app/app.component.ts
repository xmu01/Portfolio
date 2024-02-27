import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header/header.component';
import { Section01HeroComponent } from './section01-hero/section01-hero/section01-hero.component';
import { Section02AboutComponent } from './section02-about/section02-about/section02-about.component';
import { Section03SkillsComponent } from './section03-skills/section03-skills/section03-skills.component';
import { Section04PortfolioComponent } from './section04-portfolio/section04-portfolio/section04-portfolio.component';
import { Section05ContactComponent } from './section05-contact/section05-contact/section05-contact.component';
import { FooterComponent } from './footer/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
  HeaderComponent,Section01HeroComponent, Section02AboutComponent, Section03SkillsComponent, Section04PortfolioComponent, Section05ContactComponent, FooterComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
