import { Component } from '@angular/core';

import { MyServiceService } from '.././my-service.service'; // Wichtig für Übersetzung in jede Komponente
import { TranslateModule } from '@ngx-translate/core'; // das auch zum Übersetzen

//import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';





@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  lang: string = 'eng'; // Sprache

  ngOnInit() {
    this.switchLanguage();
  }

  switchLanguage() {
    this.translationService.switchLanguage();
  } 

constructor(public dialog: MatDialog, public translationService: MyServiceService) { } 

openDialog() {
  this.dialog.open(DialogElementsExampleDialog);
}


}


@Component({
  selector: 'dialog-elements-example-dialog',
  template: ` 
  <nav>
  <a href="#about">{{ 'ABOUT' | translate }}</a> <br> <br><br>
  <a href="#skills">{{ 'SKILLS' | translate }}</a> <br> <br><br>
  <a href="#portfolio">{{ 'PORTFOLIO' | translate }}</a> <br> <br><br>
  <a href="#">{{ 'SWITCH_LANGUAGE' | translate }}</a> <br> <br><br>
  </nav>`,
  styles: `
  
  .mdc-dialog__surface {
    background: gray;
  }

.cdk-overlay-backdrop-showing {
    background: gray;
}

.mdc-dialog__container {
    border: none;
}

  .mat-mdc-dialog-surface mdc-dialog_surface {
    background-color: transparent;
  }

  body {
    height: 100vh;
    width: 100%;
    
  }
  nav {
    
    padding-top: 10px;
    
    a {
      padding: 20px;
      color: white;
      text-decoration: none;
      font-size: 32px;
    }
  }
  
  `,
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, TranslateModule],
})
export class DialogElementsExampleDialog {}


