import { Component } from '@angular/core';
import { MyServiceService } from '.././my-service.service'; // Wichtig für Übersetzung in jede Komponente
import { TranslateModule } from '@ngx-translate/core'; // das auch zum Übersetzen
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-impress',
  standalone: true,
  imports: [TranslateModule, HeaderComponent, FooterComponent ],
  templateUrl: './impress.component.html',
  styleUrl: './impress.component.scss'
})
export class ImpressComponent {

}
