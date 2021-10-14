import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoAddComponent } from './components/empleado-add/empleado-add.component';
import { EmpleadoEditComponent } from './components/empleado-edit/empleado-edit.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'empleado-list', component: EmpleadoListComponent },
  { path: 'empleado-add', component: EmpleadoAddComponent },
  { path: 'empleado-edit/:id', component: EmpleadoEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
