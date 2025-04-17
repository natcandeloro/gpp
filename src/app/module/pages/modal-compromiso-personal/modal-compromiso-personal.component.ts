import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-compromiso-personal',
  templateUrl: './modal-compromiso-personal.component.html',
  styleUrl: './modal-compromiso-personal.component.css'
})
export class ModalCompromisoPersonalComponent {
  constructor(public dialogRef: MatDialogRef<ModalCompromisoPersonalComponent>) {}

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
