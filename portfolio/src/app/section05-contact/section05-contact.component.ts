import { Component } from '@angular/core';
import { MyServiceService } from '.././my-service.service'; // Wichtig für Übersetzung in jede Komponente
import { TranslateModule } from '@ngx-translate/core'; // das auch zum Übersetzen

@Component({
  selector: 'app-section05-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './section05-contact.component.html',
  styleUrl: './section05-contact.component.scss'
})
export class Section05ContactComponent {

}
