import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; // Zum Übersetzen

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  currentLang: string = 'en';

  constructor(public translate: TranslateService) { 


    // Laden von Übersetzungen direkt im Code
    this.translate.setTranslation('en', {
      HELLO: 'Hello',
      ABOUT: 'About me',
      SKILLS: 'Skills',
      PORTFOLIO: 'Portfolio',
      SWITCH_LANGUAGE: 'Deutsch',

      I_AM: 'I am',
      FRONTEND_DEVELOPER: 'FRONTEND DEVELOPER',
      LETS_TALK: `Let's talk!`,
      SCROLL_DOWN: `Scroll down`,

      ABOUT_02: `About me`,
      ABOUT_02_01: `Hello, I'm Muhammed, a Frontend Developer based in Cologne. I have a background in Web Development with a focus on HTML, CSS, JavaScript, TypeScript, and Angular.`,
      ABOUT_02_02: `My passion lies in programming, which is why I specialize in Web Development. My aim is to create user-friendly websites that seamlessly blend functionality and aesthetics.`,
      ABOUT_02_03: `Think of me as the missing puzzle piece for your team. With my passion for Software Development and the ability to solve problems efficiently, I am ready to contribute to your projects and help you achieve your goals.`,
    
      SKILLS_03_01: `Skills`,
      SKILLS_03_02: `I have gained experience in building projects with various front end technologies and concepts.`,
      SKILLS_03_03: `Get in touch`,

      PORTFOLIO_04_01: `This page is a sample of my work! Scroll down to view other projects I have developed.`,
      PORTFOLIO_04_02: `Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`,
      PORTFOLIO_04_03: `Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.`,

      CONTACT_05_01: `Contact`,
      CONTACT_05_02: `Got a problem to solve?`,
      CONTACT_05_03_01: `Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.`,
      CONTACT_05_03_02: `Need a Frontend developer? `,
      CONTACT_05_03_03: `Contact me!`,

      CONTACT_05_NAME: `Your name`,
      CONTACT_05_EMAIL: `Your email`,
      CONTACT_05_MSG: `Your message`,
      CONTACT_05_POLICY: `I've read the privacy policy and agree to the processing of my data as outlined.`,
      CONTACT_05_SEND: `Send Mail`,

      IMPRINT: `Imprint`,
    });

    this.translate.setTranslation('de', {
      HELLO: 'Hallo',
      ABOUT: 'Über mich',
      SKILLS: 'Fähigkeiten',
      PORTFOLIO: 'Portfolio',
      SWITCH_LANGUAGE: 'English',

      I_AM: 'Ich bin',
      FRONTEND_DEVELOPER: 'FRONTEND ENTWICKLER',
      LETS_TALK: `Lass uns sprechen!`,
      SCROLL_DOWN: `Runterscrollen`,

      ABOUT_02: `Über mich`,
      ABOUT_02_01: `Hallo, ich bin Muhammed, ein Frontend-Entwickler aus Köln. Ich habe einen Hintergrund in der Webentwicklung mit einem Schwerpunkt auf HTML, CSS, JavaScript, TypeScript und Angular.`,
      ABOUT_02_02: `Meine Leidenschaft liegt im Programmieren, weshalb ich mich auf die Webentwicklung spezialisiert habe. Mein Ziel ist es, benutzerfreundliche Websites zu erstellen, die Funktionalität und Ästhetik nahtlos miteinander verbinden.`,
      ABOUT_02_03: `Betrachten Sie mich als das fehlende Puzzleteil für Ihr Team. Mit meiner Leidenschaft für Softwareentwicklung und der Fähigkeit, Probleme effizient zu lösen, bin ich bereit, zu Ihren Projekten beizutragen und Ihnen zu helfen, Ihre Ziele zu erreichen.`,
    
      SKILLS_03_01: `Fähigkeiten`,
      SKILLS_03_02: `Ich habe Erfahrung im Aufbau von Projekten mit verschiedenen Frontend-Technologien und -Konzepten gesammelt.`,
      SKILLS_03_03: `Kontakt aufnehmen`,

      PORTFOLIO_04_01: `Diese Seite ist ein Beispiel meiner Arbeit! Scrollen Sie nach unten, um weitere Projekte zu sehen, die ich entwickelt habe.`,
      PORTFOLIO_04_02: `Ein Sprung-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.`,
      PORTFOLIO_04_03: `Ein Taskmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.`,
    
      CONTACT_05_01: `Kontakt`,
      CONTACT_05_02: `Sie haben ein Problem zu lösen?`,
      CONTACT_05_03_01: `Kontaktieren Sie mich über dieses Formular. Ich freue mich darauf, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen. `,
      CONTACT_05_03_02: ` Brauchen Sie einen Frontend-Entwickler? `,
      CONTACT_05_03_03: ` Kontaktieren Sie mich! `,
    

      CONTACT_05_NAME: `Ihr Name`,
      CONTACT_05_EMAIL: `Ihre E-Mail Adresse`,
      CONTACT_05_MSG: `Ihre Nachricht`,
      CONTACT_05_POLICY: `Ich habe die Datenschutzrichtlinie gelesen und stimme der Verarbeitung meiner Daten gemäß den darin dargelegten Bedingungen zu.`,
      CONTACT_05_SEND: `E-Mail senden`,

      IMPRINT: `Impressum`,
    });

    // Standard- und Initialsprache setzen
    this.translate.setDefaultLang('en');
    this.translate.use(this.currentLang);
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLang);
  }
  
}
