import { Component } from '@angular/core';
import { Section01HeroComponent } from '../section01-hero/section01-hero.component';
import { Section02AboutComponent } from '../section02-about/section02-about.component';
import { Section03SkillsComponent } from '../section03-skills/section03-skills.component';
import { Section04PortfolioComponent } from '../section04-portfolio/section04-portfolio.component';
import { Section05ContactComponent } from '../section05-contact/section05-contact.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Section01HeroComponent, Section02AboutComponent, Section03SkillsComponent, Section04PortfolioComponent, Section05ContactComponent, ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
