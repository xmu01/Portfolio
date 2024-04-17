import { Component } from '@angular/core';
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
  imports: [MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

constructor(public dialog: MatDialog) { }

openDialog() {
  this.dialog.open(DialogElementsExampleDialog);
}


}


@Component({
  selector: 'dialog-elements-example-dialog',
  template: ` 
  <nav>
  <a href="#">About me</a> <br>
  <a href="#">Skills</a> <br>
  <a href="#">Portfolio</a> <br>
  </nav>`,
  styles: `
  body {
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,1);
  }
  nav {
    background-color: transparent;
    background: rgba(0,0,0,1);
    a {
      background-color: transparent;
      color: white;
      text-decoration: none;
      font-size: 32px;
    }
  }
  
  `,
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,],
})
export class DialogElementsExampleDialog {}

/*openMenu = () => {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '800px';
  dialogConfig.height = '100vh';
  dialogConfig.backdropClass = 'popupBackdropClass';
  this.dialog.open(UserFormComponent, dialogConfig);
}*/ 
