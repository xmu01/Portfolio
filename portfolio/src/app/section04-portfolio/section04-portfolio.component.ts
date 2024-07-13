import { Component } from '@angular/core';
import { MyServiceService } from '.././my-service.service'; // Wichtig für Übersetzung in jede Komponente
import { TranslateModule } from '@ngx-translate/core'; // das auch zum Übersetzen


@Component({
  selector: 'app-section04-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './section04-portfolio.component.html',
  styleUrl: './section04-portfolio.component.scss'
})
export class Section04PortfolioComponent {

}
