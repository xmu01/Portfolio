import { Component } from '@angular/core';
import { MyServiceService } from '.././my-service.service'; // Wichtig für Übersetzung in jede Komponente
import { TranslateModule } from '@ngx-translate/core'; // das auch zum Übersetzen
import { FormsModule, NgForm } from '@angular/forms'; // Für die Form-Validation

@Component({
  selector: 'app-section05-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './section05-contact.component.html',
  styleUrl: './section05-contact.component.scss'
})
export class Section05ContactComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit(ngForm: NgForm) {

    if (ngForm.valid && ngForm.submitted) {
    console.log(this.contactData);
    }
  }

}
