import { Component } from '@angular/core';

import { MyServiceService } from '.././my-service.service'; // Wichtig für Übersetzung in jede Komponente
import { TranslateModule } from '@ngx-translate/core'; // das auch zum Übersetzen

@Component({
  selector: 'app-section03-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './section03-skills.component.html',
  styleUrl: './section03-skills.component.scss'
})
export class Section03SkillsComponent {

}
