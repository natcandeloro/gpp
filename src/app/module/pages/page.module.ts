import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent  } from './home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SeminariosComponent } from './seminarios/seminarios.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MeditacionesComponent } from './meditaciones/meditaciones.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Asegúrate de importar esto
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormComponent } from './form/form.component';
import { ValoresComponent } from './valores/valores.component';
import { PropositosComponent } from './propositos/propositos.component';
import { ModalComponent } from './modal/modal.component'; // Solo si usas tarjetas
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HomeComponent,
    SeminariosComponent,
    TestimoniosComponent,
    GaleriaComponent,
    ContactoComponent,
    MeditacionesComponent,
    FormComponent,
    ValoresComponent,
    PropositosComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    PagesRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class PageModule { }
