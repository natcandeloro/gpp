import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-abundancia',
  templateUrl: './modal-abundancia.component.html',
  styleUrl: './modal-abundancia.component.css'
})
export class ModalAbundanciaComponent {
  constructor(public dialogRef: MatDialogRef<ModalAbundanciaComponent>) {}

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
