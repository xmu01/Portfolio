import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Section01HeroComponent } from './section01-hero/section01-hero.component';
import { Section02AboutComponent } from './section02-about/section02-about.component';
import { Section03SkillsComponent } from './section03-skills/section03-skills.component';
import { Section04PortfolioComponent } from './section04-portfolio/section04-portfolio.component';
import { Section05ContactComponent } from './section05-contact/section05-contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressComponent } from './impress/impress.component';
import { HomePageComponent } from './home-page/home-page.component';



export const routes: Routes = [
    
    { path: '', component: HomePageComponent },
    
    
    { path: 'impress', component: ImpressComponent }, 

];
