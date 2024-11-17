import { Component, inject } from '@angular/core';
import { MyServiceService } from '.././my-service.service'; // Wichtig für Übersetzung in jede Komponente
import { TranslateModule } from '@ngx-translate/core'; // das auch zum Übersetzen
import { FormsModule, NgForm } from '@angular/forms'; // Für die Form-Validation
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-section05-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './section05-contact.component.html',
  styleUrl: './section05-contact.component.scss'
})
export class Section05ContactComponent {

http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  /*
  onSubmit(ngForm: NgForm) {

    if (ngForm.valid && ngForm.submitted) {
    console.log(this.contactData);
    }
  }*/

  mailTest = true;

  post = {
    endPoint: 'https://muhammed-ahmed-yazea.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  // Originale Submit-Form
  /*onSubmit(contactForm: NgForm) {
    if (contactForm.valid && !this.mailTest) {
      console.log(this.contactData);
      // Hier könnte ein Service aufgerufen werden, um die Daten zu senden
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {

          contactForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } else if ( contactForm.valid  && this.mailTest) {

    contactForm.resetForm();
    console.info('send post complete');
  }
    
  } */

  //Neue Submit-Form

  onSubmit(contactForm: NgForm) {
    if (contactForm.invalid) {
      // Alle Form-Controls als 'touched' markieren, um die Fehlermeldungen zu erzwingen
      Object.keys(contactForm.controls).forEach(field => {
        const control = contactForm.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
    } else if (contactForm.valid && !this.mailTest) {
      console.log(this.contactData);
      // Hier könnte ein Service aufgerufen werden, um die Daten zu senden
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            contactForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (contactForm.valid && this.mailTest) {
      contactForm.resetForm();
      console.info('send post complete');
    }
  }

}
