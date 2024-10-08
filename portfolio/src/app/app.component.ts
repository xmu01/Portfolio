import { Component } from '@angular/core';

import { MyServiceService } from './my-service.service'; // Wichtig für Übersetzung in jede Komponente



import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // Ich glaube,lösche ich am Ende, damit ich die Components nicht 2 mal einbinde. Ich habe schon <app-router> in app.component.html gelöscht. Falls ich es wieder einfügen möchte, in imports auch gucken..

import { HeaderComponent } from './header/header.component';
import { Section01HeroComponent } from './section01-hero/section01-hero.component';
import { Section02AboutComponent } from './section02-about/section02-about.component';
import { Section03SkillsComponent } from './section03-skills/section03-skills.component';
import { Section04PortfolioComponent } from './section04-portfolio/section04-portfolio.component';
import { Section05ContactComponent } from './section05-contact/section05-contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressComponent } from './impress/impress.component';

import { HomePageComponent } from './home-page/home-page.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
  HeaderComponent,Section01HeroComponent, Section02AboutComponent, Section03SkillsComponent, Section04PortfolioComponent, Section05ContactComponent, FooterComponent, ImpressComponent, HomePageComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  currentLang: string = 'en'; // Auch zum Übersetzen

  ngOnInit() {
    this.switchLanguage();
  }

  switchLanguage() {
    this.translationService.switchLanguage();
  }

  constructor(public translationService: MyServiceService) {

    



  }
}
