import { NgModule } from '@angular/core';
import { MateriasComponent } from './materias.component';
import { EditarMateriaComponent } from './editar-materia/editar-materia.component';
import { FormsModule } from '@angular/forms';
import { MateriasRoutingModule } from './materias-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    MateriasRoutingModule
  ],
  declarations: [
    MateriasComponent,
    EditarMateriaComponent
  ]
})
export class MateriasModule { }
