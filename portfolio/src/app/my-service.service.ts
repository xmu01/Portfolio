import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; // Zum Übersetzen

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  currentLang: string = 'en';

  constructor(private translate: TranslateService) { 


    // Laden von Übersetzungen direkt im Code
    this.translate.setTranslation('en', {
      HELLO: 'Hello',
      SWITCH_LANGUAGE: 'Switch to German'
    });

    this.translate.setTranslation('de', {
      HELLO: 'Hallo',
      SWITCH_LANGUAGE: 'Wechseln zu Englisch'
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
