import { Component } from '@angular/core';
  import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalCompromisoPersonalComponent } from '../modal-compromiso-personal/modal-compromiso-personal.component';
import { ModalAbundanciaComponent } from '../modal-abundancia/modal-abundancia.component';

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

  abrirModalCompromiso(): void {
    const dialogRef = this.dialog.open(ModalCompromisoPersonalComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró');
      if (result) {
        console.log('El usuario hizo clic en Aceptar');
      }
    });
  }

  abrirModalAbundancia(): void {
    const dialogRef = this.dialog.open(ModalAbundanciaComponent, {
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
