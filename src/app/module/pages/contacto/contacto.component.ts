import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  mostrarMensajeEnviado: boolean = false; 
  registroForm!: FormGroup;

  constructor (private fb: FormBuilder,
    private http: HttpClient){}

ngOnInit(){
  this.registroForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl ('', [Validators.required]),
  });
}

onSubmit(formData: any): void {
  if (this.registroForm.valid) {
    const formData = this.registroForm.getRawValue();
  this.http.post('https://formsubmit.co/ajax/nataliacandeloro@gmail.com', formData).subscribe(response => {
    console.log('Respuesta de FormSubmit:', response);
    this.mostrarMensajeEnviado = true;
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }, (error) => {
    console.error('Error al enviar formulario:', error);
  });
};
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);}
    }
}
