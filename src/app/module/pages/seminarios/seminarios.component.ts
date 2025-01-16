import { Component } from '@angular/core';
  import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-seminarios',
  templateUrl: './seminarios.component.html',
  styleUrl: './seminarios.component.css'
})
export class SeminariosComponent {

  constructor(public dialog: MatDialog) {}

  abrirModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró');
      if (result) {
        console.log('El usuario hizo clic en Aceptar');
      }
    });
  }

}
