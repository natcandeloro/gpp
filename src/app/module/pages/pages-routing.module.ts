import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SeminariosComponent } from './seminarios/seminarios.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MeditacionesComponent } from './meditaciones/meditaciones.component';
import { FormComponent } from './form/form.component';
import { ValoresComponent } from './valores/valores.component';
import { PropositosComponent } from './propositos/propositos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: SeminariosComponent },
      { path: 'quienesSomos', component: HomeComponent },
      { path: 'testimonios', component: TestimoniosComponent },
      { path: 'galeria', component: GaleriaComponent },
      { path: 'contacto', component: ContactoComponent},
      { path: 'meditaciones', component: MeditacionesComponent},
      { path: 'valores', component: ValoresComponent},
      { path: 'proposito', component: PropositosComponent},
      { path: 'form', component: FormComponent},
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
