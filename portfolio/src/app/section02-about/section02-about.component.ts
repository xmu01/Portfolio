import { Component } from '@angular/core';

import { MyServiceService } from '.././my-service.service'; // Wichtig für Übersetzung in jede Komponente
import { TranslateModule } from '@ngx-translate/core'; // das auch zum Übersetzen

@Component({
  selector: 'app-section02-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './section02-about.component.html',
  styleUrl: './section02-about.component.scss'
})
export class Section02AboutComponent {

}
