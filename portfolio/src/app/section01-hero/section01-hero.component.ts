import { Component } from '@angular/core';

import { MyServiceService } from '.././my-service.service'; // Wichtig für Übersetzung in jede Komponente
import { TranslateModule } from '@ngx-translate/core'; // das auch zum Übersetzen


@Component({
  selector: 'app-section01-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './section01-hero.component.html',
  styleUrl: './section01-hero.component.scss'
})
export class Section01HeroComponent {

}
